import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Download, LogOut, Search, RefreshCw } from "lucide-react";

export const Route = createFileRoute("/admin/leads")({
  head: () => ({
    meta: [
      { title: "Admin — Leads" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminLeadsPage,
});

type Lead = {
  id: string;
  name: string;
  email: string;
  business: string | null;
  message: string | null;
  phone: string | null;
  source_page: string | null;
  user_agent: string | null;
  notified: boolean;
  created_at: string;
};

type RangeKey = "30" | "90" | "all";

function AdminLeadsPage() {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [range, setRange] = useState<RangeKey>("30");
  const [search, setSearch] = useState("");

  // Auth + role check
  useEffect(() => {
    let active = true;
    (async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      if (!sessionData.session) {
        navigate({ to: "/auth" });
        return;
      }
      const { data: roles, error } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", sessionData.session.user.id)
        .eq("role", "admin")
        .maybeSingle();
      if (!active) return;
      if (error || !roles) {
        toast.error("Admin access required");
        await supabase.auth.signOut();
        navigate({ to: "/auth" });
        return;
      }
      setAuthorized(true);
      setChecking(false);
    })();
    return () => {
      active = false;
    };
  }, [navigate]);

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    try {
      let query = supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(1000);
      if (range !== "all") {
        const days = parseInt(range, 10);
        const since = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();
        query = query.gte("created_at", since);
      }
      const { data, error } = await query;
      if (error) throw error;
      setLeads((data ?? []) as Lead[]);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to load leads");
    } finally {
      setLoading(false);
    }
  }, [range]);

  useEffect(() => {
    if (authorized) fetchLeads();
  }, [authorized, fetchLeads]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return leads;
    return leads.filter(
      (l) =>
        l.name.toLowerCase().includes(q) ||
        l.email.toLowerCase().includes(q) ||
        (l.business ?? "").toLowerCase().includes(q) ||
        (l.message ?? "").toLowerCase().includes(q) ||
        (l.phone ?? "").toLowerCase().includes(q),
    );
  }, [leads, search]);

  const handleExport = () => {
    if (filtered.length === 0) {
      toast.info("No leads to export");
      return;
    }
    const headers = [
      "created_at",
      "name",
      "email",
      "phone",
      "business",
      "message",
      "source_page",
      "notified",
    ];
    const escape = (v: unknown) => {
      const s = v == null ? "" : String(v);
      return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
    };
    const rows = filtered.map((l) =>
      [
        l.created_at,
        l.name,
        l.email,
        l.phone,
        l.business,
        l.message,
        l.source_page,
        l.notified,
      ]
        .map(escape)
        .join(","),
    );
    const csv = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads-${range}d-${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success(`Exported ${filtered.length} leads`);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate({ to: "/auth" });
  };

  if (checking) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-sm text-muted-foreground">Verifying access...</p>
      </div>
    );
  }

  if (!authorized) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl font-bold text-foreground">Leads</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {loading ? "Loading..." : `${filtered.length} of ${leads.length} shown`}
          </p>
        </div>
        <Button variant="ghost" size="sm" onClick={handleSignOut}>
          <LogOut className="mr-1" /> Sign out
        </Button>
      </div>

      {/* Controls */}
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <div className="flex rounded-md border border-border/50 bg-surface-2/40 p-1">
          {(["30", "90", "all"] as RangeKey[]).map((r) => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                range === r
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {r === "all" ? "All time" : `Last ${r} days`}
            </button>
          ))}
        </div>

        <div className="relative flex-1 min-w-[200px] max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search name, email, business..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>

        <Button variant="outline" size="sm" onClick={fetchLeads} disabled={loading}>
          <RefreshCw className={loading ? "animate-spin" : ""} /> Refresh
        </Button>
        <Button size="sm" onClick={handleExport} disabled={filtered.length === 0}>
          <Download /> Export CSV
        </Button>
      </div>

      {/* Table */}
      <div className="mt-6 rounded-lg border border-border/40 bg-surface-2/30 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Business</TableHead>
              <TableHead>Message</TableHead>
              <TableHead>Source</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.length === 0 && !loading && (
              <TableRow>
                <TableCell colSpan={8} className="text-center text-sm text-muted-foreground py-10">
                  No leads found.
                </TableCell>
              </TableRow>
            )}
            {filtered.map((lead) => (
              <TableRow key={lead.id}>
                <TableCell className="text-xs whitespace-nowrap text-muted-foreground">
                  {new Date(lead.created_at).toLocaleString()}
                </TableCell>
                <TableCell className="font-medium">{lead.name}</TableCell>
                <TableCell>
                  <a href={`mailto:${lead.email}`} className="text-primary hover:underline">
                    {lead.email}
                  </a>
                </TableCell>
                <TableCell>{lead.phone ?? "—"}</TableCell>
                <TableCell>{lead.business ?? "—"}</TableCell>
                <TableCell className="max-w-xs truncate" title={lead.message ?? ""}>
                  {lead.message ?? "—"}
                </TableCell>
                <TableCell className="text-xs text-muted-foreground">
                  {lead.source_page ?? "—"}
                </TableCell>
                <TableCell>
                  <Badge variant={lead.notified ? "default" : "secondary"}>
                    {lead.notified ? "Notified" : "New"}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
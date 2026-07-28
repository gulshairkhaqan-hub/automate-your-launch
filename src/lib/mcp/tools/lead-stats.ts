import { createClient } from "@supabase/supabase-js";
import { defineTool, type ToolContext } from "@lovable.dev/mcp-js";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";

export default defineTool({
  name: "lead_stats",
  title: "Lead stats",
  description:
    "Summarize captured leads: total count and count in the last N days. Admin-only via RLS.",
  inputSchema: {
    days: z
      .number()
      .int()
      .min(1)
      .max(365)
      .optional()
      .describe("Window size in days for the recent count (default 30)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ days }, ctx: ToolContext) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }
    const window = days ?? 30;
    const since = new Date(Date.now() - window * 86400_000).toISOString();
    const supabase = createClient<Database>(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_PUBLISHABLE_KEY!,
      {
        global: { headers: { Authorization: `Bearer ${ctx.getToken()}` } },
        auth: { persistSession: false, autoRefreshToken: false },
      },
    );
    const [{ count: total, error: e1 }, { count: recent, error: e2 }] = await Promise.all([
      supabase.from("leads").select("id", { head: true, count: "exact" }),
      supabase.from("leads").select("id", { head: true, count: "exact" }).gte("created_at", since),
    ]);
    const err = e1 ?? e2;
    if (err) {
      return { content: [{ type: "text", text: err.message }], isError: true };
    }
    const summary = { total: total ?? 0, recent: recent ?? 0, windowDays: window };
    return {
      content: [{ type: "text", text: JSON.stringify(summary, null, 2) }],
      structuredContent: summary,
    };
  },
});
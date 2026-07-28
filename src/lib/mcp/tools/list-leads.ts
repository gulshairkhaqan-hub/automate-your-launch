import { createClient } from "@supabase/supabase-js";
import { defineTool, type ToolContext } from "@lovable.dev/mcp-js";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";

export default defineTool({
  name: "list_leads",
  title: "List leads",
  description:
    "List captured leads from the Automation Studio contact form. Only accessible to admin users; RLS enforces access.",
  inputSchema: {
    limit: z
      .number()
      .int()
      .min(1)
      .max(200)
      .optional()
      .describe("Maximum number of leads to return (default 50)."),
    days: z
      .number()
      .int()
      .min(1)
      .max(365)
      .optional()
      .describe("Return leads created in the last N days."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ limit, days }, ctx: ToolContext) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }
    const supabase = createClient<Database>(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_PUBLISHABLE_KEY!,
      {
        global: { headers: { Authorization: `Bearer ${ctx.getToken()}` } },
        auth: { persistSession: false, autoRefreshToken: false },
      },
    );
    let q = supabase
      .from("leads")
      .select("id, name, email, phone, business, message, source_page, created_at")
      .order("created_at", { ascending: false })
      .limit(limit ?? 50);
    if (days) {
      const since = new Date(Date.now() - days * 86400_000).toISOString();
      q = q.gte("created_at", since);
    }
    const { data, error } = await q;
    if (error) {
      return { content: [{ type: "text", text: error.message }], isError: true };
    }
    return {
      content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      structuredContent: { leads: data ?? [], count: data?.length ?? 0 },
    };
  },
});
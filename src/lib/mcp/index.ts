import { auth, defineMcp } from "@lovable.dev/mcp-js";
import listLeadsTool from "./tools/list-leads";
import leadStatsTool from "./tools/lead-stats";
import whoamiTool from "./tools/whoami";

// The OAuth issuer must be the direct Supabase host, never the .lovable.cloud
// proxy — mcp-js validates issuer against the discovery document.
const projectRef = import.meta.env.VITE_SUPABASE_PROJECT_ID ?? "project-ref-unset";

export default defineMcp({
  name: "automation-studio-mcp",
  title: "Automation Studio",
  version: "0.1.0",
  instructions:
    "Tools for the Automation Studio agency site. Use `whoami` to check the signed-in user, `list_leads` to browse captured leads, and `lead_stats` for a quick summary. Lead tools require an admin account (Row Level Security enforced).",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [whoamiTool, listLeadsTool, leadStatsTool],
});
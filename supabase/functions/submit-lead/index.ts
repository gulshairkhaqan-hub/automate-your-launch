import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface LeadPayload {
  name?: string;
  email?: string;
  business?: string;
  message?: string;
  phone?: string;
  source_page?: string;
}

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

function clean(v: unknown, max: number): string | null {
  if (typeof v !== "string") return null;
  const t = v.trim();
  if (!t) return null;
  return t.slice(0, max);
}

async function postWebhookWithRetry(url: string, body: unknown): Promise<{ ok: boolean; error?: string }> {
  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.ok) return { ok: true };
      if (attempt === 2) return { ok: false, error: `HTTP ${res.status}` };
    } catch (e) {
      if (attempt === 2) return { ok: false, error: (e as Error).message };
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  return { ok: false, error: "unknown" };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const raw = (await req.json()) as LeadPayload;

    const name = clean(raw.name, 200);
    const email = clean(raw.email, 320);
    const business = clean(raw.business, 100);
    const message = clean(raw.message, 5000);
    const phone = clean(raw.phone, 50);
    const sourcePage = clean(raw.source_page, 500);
    const userAgent = req.headers.get("user-agent")?.slice(0, 500) ?? null;

    if (!name || !email) {
      return new Response(JSON.stringify({ error: "Name and email are required." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!EMAIL_RE.test(email)) {
      return new Response(JSON.stringify({ error: "Please enter a valid email address." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const admin = createClient(supabaseUrl, serviceKey);

    const { data: inserted, error: insertError } = await admin
      .from("leads")
      .insert({
        name,
        email,
        business,
        message,
        phone,
        source_page: sourcePage,
        user_agent: userAgent,
      })
      .select("id, created_at")
      .single();

    if (insertError) {
      console.error("[submit-lead] DB insert failed", insertError);
      return new Response(
        JSON.stringify({ error: "Could not save your message. Please try again." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const leadId = inserted!.id;
    const createdAt = inserted!.created_at;
    console.log(`[submit-lead] Saved lead ${leadId} from ${email}`);

    // Optional notification webhook (e.g. n8n / Zapier / Make).
    const webhookUrl = Deno.env.get("LEAD_NOTIFICATION_WEBHOOK_URL");
    let notified = false;
    let notificationError: string | undefined;

    if (webhookUrl) {
      const result = await postWebhookWithRetry(webhookUrl, {
        event: "new_lead",
        lead_id: leadId,
        name,
        email,
        business,
        phone,
        message,
        source_page: sourcePage,
        user_agent: userAgent,
        created_at: createdAt,
      });
      notified = result.ok;
      notificationError = result.error;
      if (notified) {
        await admin.from("leads").update({ notified: true }).eq("id", leadId);
        console.log(`[submit-lead] Notified webhook for lead ${leadId}`);
      } else {
        console.error(`[submit-lead] Webhook failed for lead ${leadId}:`, notificationError);
      }
    } else {
      console.log("[submit-lead] No LEAD_NOTIFICATION_WEBHOOK_URL secret set — skipping notification");
    }

    return new Response(
      JSON.stringify({
        success: true,
        lead_id: leadId,
        notified,
        notification_error: notificationError ?? null,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (e) {
    console.error("[submit-lead] Unexpected error", e);
    return new Response(
      JSON.stringify({ error: "Something went wrong. Please try again." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
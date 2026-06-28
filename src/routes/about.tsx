import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { GlowCard, getGradient } from "../components/GlowCard";
import { WhatsAppLink, MailtoLink, WhatsAppIcon } from "../components/ContactActions";
import { OWNER_EMAIL, WHATSAPP_DISPLAY } from "@/lib/contact";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the Founder — Automation Studio" },
      { name: "description", content: "Meet Gulshair Khaqan — founder of Automation Studio. Independent AI automation engineer building custom workflows for coaches, agencies, and modern businesses." },
      { property: "og:title", content: "About the Founder — Automation Studio" },
      { property: "og:description", content: "The story, mission, and stack behind Automation Studio." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: "🎯", title: "Outcomes over hours", desc: "We measure success in time saved, leads captured, and revenue unlocked — not invoices billed." },
  { icon: "🛠️", title: "Custom-built, no templates", desc: "Every workflow is engineered for your stack, your team, and your goals. Nothing pre-baked." },
  { icon: "🤝", title: "Honest, no fluff", desc: "Real timelines, transparent pricing, no inflated promises. We say what we can deliver — and deliver it." },
];

const stack = [
  "n8n", "Make", "Zapier", "OpenAI", "Claude", "Supabase",
  "Airtable", "Notion", "HubSpot", "GoHighLevel", "Twilio", "Stripe",
];

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative section-padding charcoal-gradient bg-noise overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionHeading
            label="About"
            title="Built by an engineer who hates busywork."
            description="Automation Studio is an independent AI automation practice — focused on shipping workflows that quietly run your operations while you sleep."
          />
        </div>
      </section>

      {/* Founder */}
      <section className="section-padding" aria-label="Founder">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-stretch">
            {/* Portrait / Identity card */}
            <div className="lg:col-span-2">
              <GlowCard gradient={getGradient(0)} innerClassName="h-full">
                <div className="w-full h-full p-8 flex flex-col items-center text-center">
                  <div className="relative w-32 h-32 rounded-full gold-gradient flex items-center justify-center shadow-lg shadow-cyan/30 mb-5">
                    <span className="font-heading text-4xl font-bold text-gold-foreground">GK</span>
                    <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#00ff88] border-2 border-[#0a0a0f] shadow-[0_0_10px_#00ff88]" aria-hidden />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white tracking-tight">Gulshair Khaqan</h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-cyan">Founder & Lead Engineer</p>
                  <p className="mt-4 text-sm text-gray-400 leading-[1.7]">
                    Independent AI &amp; automation engineer. Designs and ships custom workflows for coaches, agencies, real estate teams, and e-commerce brands.
                  </p>
                  <div className="mt-6 flex flex-col gap-2 w-full">
                    <MailtoLink className="btn-press inline-flex items-center justify-center gap-2 rounded-md border border-border bg-surface-2/50 px-5 py-2.5 text-sm font-medium text-foreground hover:border-cyan/40">
                      ✉ {OWNER_EMAIL}
                    </MailtoLink>
                    <WhatsAppLink className="btn-press inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366]/10 border border-[#25D366]/30 px-5 py-2.5 text-sm font-medium text-[#25D366] hover:bg-[#25D366]/15">
                      <WhatsAppIcon className="w-4 h-4" /> {WHATSAPP_DISPLAY}
                    </WhatsAppLink>
                  </div>
                </div>
              </GlowCard>
            </div>

            {/* Story */}
            <div className="lg:col-span-3 space-y-5">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: "easeOut" as const }}
              >
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan mb-3">// the story</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  Most businesses don't need more people. They need better systems.
                </h2>
              </motion.div>

              <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-[1.8]">
                <p>
                  I started Automation Studio after watching small teams burn out doing work a workflow could handle in seconds — chasing leads through inboxes, copy-pasting between tools, replying to the same five questions all day long.
                </p>
                <p>
                  My approach is simple: spend a week understanding how your business actually runs, then engineer custom AI workflows that quietly take the busywork off your plate. No bloated retainers, no templates, no "we'll figure it out later."
                </p>
                <p>
                  If you're a coach drowning in DMs, an agency losing leads after-hours, or a real-estate team buried in follow-ups — there's a system for that. Let's build it.
                </p>
              </div>

              <div className="pt-3">
                <Link
                  to="/contact"
                  className="btn-press neon-cta inline-flex items-center justify-center rounded-md px-7 py-3.5 text-sm font-semibold tracking-tight"
                >
                  Book a free audit →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-surface-1/40 border-y border-border/40" aria-label="What we believe">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            label="What we believe"
            title="Principles, not pitches."
            description="Three rules guide every project we take on."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <GlowCard key={i} gradient={getGradient(i)} delay={i * 0.1} innerClassName="h-full">
                <div className="w-full h-full p-7">
                  <div className="w-11 h-11 rounded-lg bg-[#1A1A1C] border border-white/10 flex items-center justify-center text-xl mb-5">
                    {v.icon}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white mb-3 tracking-tight">{v.title}</h3>
                  <p className="text-gray-400 text-[14px] leading-[1.7]">{v.desc}</p>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="section-padding" aria-label="Tools we work with">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            label="Stack"
            title="Tools we build with."
            description="We're tool-agnostic — we pick whatever fits your team best. Here's what we use most."
          />
          <div className="flex flex-wrap justify-center gap-3">
            {stack.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, ease: "easeOut" as const }}
                className="inline-flex items-center rounded-full border border-border/60 bg-surface-2/50 px-4 py-2 font-mono text-xs uppercase tracking-wider text-muted-foreground hover:border-cyan/40 hover:text-cyan transition-colors"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden charcoal-gradient bg-noise" aria-label="Call to action">
        <div className="absolute inset-0 bg-grid opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground leading-[1.05] tracking-tight">
            Let's see what's <span className="gold-text-gradient">automatable</span>.
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
            30-minute audit. No pitch deck. Just a clear map of where automation can move the needle for your business.
          </p>
          <div className="mt-9">
            <Link
              to="/contact"
              className="btn-press neon-cta inline-flex items-center justify-center rounded-md px-8 py-4 text-sm font-semibold tracking-tight"
            >
              Book Free Automation Audit →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

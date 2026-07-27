import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { GlowCard, getGradient } from "../components/GlowCard";
import { WhatsAppLink, MailtoLink, WhatsAppIcon } from "../components/ContactActions";
import { OWNER_EMAIL, WHATSAPP_DISPLAY } from "@/lib/contact";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Automation Studio" },
      {
        name: "description",
        content:
          "Meet the founder behind Automation Studio. A premium, engineering-led AI automation partner focused on measurable outcomes and reliable systems.",
      },
      { property: "og:title", content: "About — Automation Studio" },
      {
        property: "og:description",
        content:
          "Our philosophy, standards, and delivery approach for high-performance automation systems.",
      },
    ],
  }),
  component: AboutPage,
});

const principles = [
  {
    icon: "🎯",
    title: "Outcome-first architecture",
    desc: "Every workflow starts with a business outcome and a measurable success condition, not tool hype.",
  },
  {
    icon: "🛠️",
    title: "Engineering quality",
    desc: "We design for reliability, observability, and maintainability so your systems keep performing under growth pressure.",
  },
  {
    icon: "🤝",
    title: "Straightforward partnership",
    desc: "Clear scope, honest recommendations, and practical communication throughout the project lifecycle.",
  },
];

const stack = [
  "n8n",
  "Make",
  "Zapier",
  "OpenAI",
  "Claude",
  "Supabase",
  "Airtable",
  "Notion",
  "HubSpot",
  "GoHighLevel",
  "Twilio",
  "Stripe",
];

function AboutPage() {
  return (
    <>
      <section className="relative section-padding charcoal-gradient bg-noise overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionHeading
            label="About"
            title="A founder-led automation practice built for serious operators."
            description="Automation Studio helps service businesses turn fragmented workflows into structured systems that improve speed, consistency, and margin."
          />
        </div>
      </section>

      <section className="section-padding" aria-label="Founder">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-stretch">
            <div className="lg:col-span-2">
              <GlowCard gradient={getGradient(0)} innerClassName="h-full">
                <div className="w-full h-full p-8 flex flex-col items-center text-center">
                  <div className="relative w-32 h-32 rounded-full gold-gradient flex items-center justify-center shadow-lg shadow-cyan/30 mb-5">
                    <span className="font-heading text-4xl font-bold text-gold-foreground">GK</span>
                    <span
                      className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#00ff88] border-2 border-[#0a0a0f] shadow-[0_0_10px_#00ff88]"
                      aria-hidden
                    />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white tracking-tight">
                    Gulshair Khaqan
                  </h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-cyan">
                    Founder & Lead Automation Engineer
                  </p>
                  <p className="mt-4 text-sm text-gray-400 leading-[1.7]">
                    I work directly with founders and operators to design and deploy AI automation
                    systems that improve conversion, operations, and delivery quality.
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

            <div className="lg:col-span-3 space-y-5">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: "easeOut" as const }}
              >
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan mb-3">
                  // philosophy
                </p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  Premium systems are built at the intersection of business strategy and technical
                  depth.
                </h2>
              </motion.div>

              <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-[1.8]">
                <p>
                  Most companies don't have a talent problem — they have a systems problem. Great
                  teams lose momentum when lead handling, delivery workflows, and reporting depend
                  on manual effort.
                </p>
                <p>
                  Automation Studio exists to solve that with rigorous execution: clear scoping,
                  robust architecture, and practical deployment that your team can trust.
                </p>
                <p>
                  If you're building a serious service business and want automation done properly,
                  we'll likely be a strong fit.
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

      <section
        className="section-padding bg-surface-1/40 border-y border-border/40"
        aria-label="Principles"
      >
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            label="How we work"
            title="Principles that protect quality."
            description="The standards we apply to every client engagement."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {principles.map((v, i) => (
              <GlowCard key={i} gradient={getGradient(i)} delay={i * 0.1} innerClassName="h-full">
                <div className="w-full h-full p-7">
                  <div className="w-11 h-11 rounded-lg bg-[#1A1A1C] border border-white/10 flex items-center justify-center text-xl mb-5">
                    {v.icon}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white mb-3 tracking-tight">
                    {v.title}
                  </h3>
                  <p className="text-gray-400 text-[14px] leading-[1.7]">{v.desc}</p>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" aria-label="Operating model">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            label="Operating model"
            title="What to expect when working together"
            description="A simple, high-accountability collaboration structure designed for fast implementation."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                step: "01",
                title: "Scope",
                desc: "Define business goals, constraints, and success metrics before touching implementation.",
              },
              {
                step: "02",
                title: "Ship",
                desc: "Build in weekly milestones with transparent updates, testing, and measurable progress.",
              },
              {
                step: "03",
                title: "Scale",
                desc: "Hand over documentation and continue optimization based on live performance data.",
              },
            ].map((item, i) => (
              <GlowCard key={item.step} gradient={getGradient(i + 2)} delay={i * 0.1}>
                <div className="p-6">
                  <p className="font-mono text-3xl gold-text-gradient">{item.step}</p>
                  <h3 className="mt-3 font-heading text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" aria-label="Tools we work with">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            label="Stack"
            title="Tools we build with"
            description="Tool-agnostic by default. We select technology based on reliability, fit, and long-term maintainability."
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

      <section
        className="relative py-20 md:py-28 overflow-hidden charcoal-gradient bg-noise"
        aria-label="Call to action"
      >
        <div className="absolute inset-0 bg-grid opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground leading-[1.05] tracking-tight">
            Let's design your automation system
            <span className="gold-text-gradient"> the right way.</span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
            Book a free audit and get a direct, outcome-focused recommendation tailored to your
            business.
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

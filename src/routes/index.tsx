import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { LeadCaptureForm } from "../components/LeadCaptureForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Automation Studio — Automate Your Business. Scale Without Burnout." },
      { name: "description", content: "We build AI-powered workflows that save time, reduce costs, and increase revenue. Book a free automation audit today." },
      { property: "og:title", content: "Automation Studio — Automate Your Business. Scale Without Burnout." },
      { property: "og:description", content: "AI-powered automation for coaches, agencies, real estate teams, and modern businesses." },
    ],
  }),
  component: HomePage,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: "easeOut" as const },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const services = [
  { icon: "⚡", title: "Lead Capture & Follow-Up", description: "Automated forms, instant responses, and smart follow-up sequences that never let a lead slip away.", size: "lg" },
  { icon: "🔄", title: "Workflow Automation", description: "Connect your tools and eliminate repetitive tasks. From onboarding to invoicing — fully automated.", size: "sm" },
  { icon: "🤖", title: "AI Chatbots", description: "24/7 intelligent chatbots that qualify leads, answer questions, and book appointments while you sleep.", size: "sm" },
  { icon: "📊", title: "CRM Integration", description: "Unified customer data across all platforms. Every interaction tracked, every deal managed.", size: "sm" },
  { icon: "📧", title: "Email & SMS Sequences", description: "Personalized nurture campaigns on autopilot that turn cold leads into paying customers.", size: "sm" },
  { icon: "🎯", title: "Custom Dashboards", description: "Real-time KPI dashboards pulling from all your tools so you make data-driven decisions.", size: "lg" },
];

const kpis = [
  { value: "500+", label: "Workflows Automated" },
  { value: "2.4M", label: "Leads Captured" },
  { value: "98%", label: "Client Retention" },
  { value: "37x", label: "Average ROI" },
];

const testimonials = [
  { name: "Sarah Chen", role: "Real Estate Team Lead", company: "Pacific Realty", quote: "We went from losing 40% of leads to capturing 98%. Automation Studio transformed our entire follow-up process.", metric: "+145% closings" },
  { name: "Marcus Williams", role: "Founder", company: "Bloom Naturals", quote: "Our customer support runs itself now. Response time went from 4 hours to under 2 minutes. Game-changer.", metric: "12x faster" },
  { name: "Jessica Park", role: "Business Coach", company: "Park Coaching Co.", quote: "I freed up 20 hours a week and doubled my client base. The ROI is insane — best investment I've made.", metric: "20 hrs saved/wk" },
  { name: "David Ortega", role: "Operations Director", company: "ScaleUp Agency", quote: "Client onboarding went from 3 days to 3 hours. Our team can finally focus on strategy instead of admin.", metric: "24x onboarding" },
];

const logos = ["TechFlow", "ScaleUp", "GrowthHQ", "NextLevel", "ProSync", "AutoBase", "RevOps", "FlowState"];

function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden hero-atmos bg-noise">
        <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" aria-hidden />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:py-36 w-full">
          <motion.div {...stagger} initial="initial" animate="animate" className="max-w-3xl">
            <motion.div {...fadeUp} className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/5 px-4 py-1.5 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan shadow-[0_0_8px_var(--accent-cyan)] animate-pulse" />
              <span className="font-mono text-xs font-medium text-cyan tracking-wider uppercase">AI Automation Engineering</span>
            </motion.div>

            <motion.h1 {...fadeUp} className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.02] tracking-tight">
              Automate your business.{" "}
              <span className="gold-text-gradient">Scale without burnout.</span>
            </motion.h1>

            <motion.p {...fadeUp} className="mt-7 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              We engineer AI-powered workflows that save time, reduce costs, and unlock measurable revenue — built for teams that refuse to babysit busywork.
            </motion.p>

            <motion.div {...fadeUp} className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="btn-press inline-flex items-center justify-center rounded-md gold-gradient px-7 py-3.5 text-sm font-semibold text-gold-foreground tracking-tight shadow-lg shadow-cyan/30 hover:shadow-cyan/50"
              >
                Book Free Automation Audit
              </Link>
              <Link
                to="/case-studies"
                className="btn-press inline-flex items-center justify-center rounded-md border border-border bg-surface-2/40 backdrop-blur-sm px-7 py-3.5 text-sm font-semibold text-foreground hover:border-cyan/40 hover:bg-surface-2/60"
              >
                See Case Studies →
              </Link>
            </motion.div>

            {/* Compact trust row */}
            <motion.div {...fadeUp} className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
              {kpis.map((k) => (
                <div key={k.label}>
                  <p className="font-heading text-2xl md:text-3xl font-bold gold-text-gradient">{k.value}</p>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground/80 mt-1">{k.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Client Logos ─────────────────────────────────── */}
      <section className="border-y border-border/40 bg-surface-1/40 py-10" aria-label="Trusted clients">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground/70 mb-8">
            // trusted by 200+ forward-thinking teams
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 md:gap-x-14">
            {logos.map((logo) => (
              <span key={logo} className="text-base font-semibold text-muted-foreground/40 tracking-wider select-none hover:text-muted-foreground transition-colors">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pain Points ──────────────────────────────────── */}
      <section className="section-padding" aria-label="Common business problems">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            label="The Problem"
            title="Sound familiar?"
            description="Most businesses leave money on the table because of these common bottlenecks."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: "Missed Leads", desc: "Slow follow-up means prospects go to your competitors. Every minute counts — and you're losing hours.", icon: "🚫" },
              { title: "Manual Operations", desc: "Your team spends hours on tasks that should take seconds. Time is your most valuable asset.", icon: "⏰" },
              { title: "No Systems", desc: "Without automation, scaling means hiring. And hiring means more complexity, not less.", icon: "🔧" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, ease: "easeOut" as const }}
                className="card-hover glass-card rounded-xl p-7"
              >
                <div className="w-11 h-11 rounded-lg bg-surface-3 border border-border/60 flex items-center justify-center text-xl">
                  {item.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mt-5">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Snapshot — Bento ────────────────────── */}
      <section className="section-padding bg-surface-1/40 border-y border-border/40" aria-label="Our services">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            label="What We Do"
            title="Automation, end-to-end."
            description="Custom-built systems tailored to your stack, your goals, and your team."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, ease: "easeOut" as const }}
                className={`card-hover glass-card rounded-xl p-7 ${service.size === "lg" ? "md:col-span-2" : ""}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg gold-gradient flex items-center justify-center text-xl shrink-0 shadow-md shadow-cyan/20">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground">{service.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-cyan hover:text-cyan-light transition-colors group"
            >
              View all services & pricing <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────── */}
      <section className="section-padding" aria-label="Our process">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            label="Process"
            title="3 steps to automation."
            description="A simple, proven path to transform your operations."
          />

          {/* Code/terminal showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="max-w-3xl mx-auto mb-14 glass-card rounded-xl overflow-hidden"
          >
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/40 bg-surface-3/60">
              <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-cyan/70" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">automation.workflow.ts</span>
            </div>
            <pre className="font-mono text-[13px] leading-relaxed p-5 overflow-x-auto text-muted-foreground">
<span className="text-cyan">$</span> <span className="text-foreground">audit</span> <span className="text-violet">--free</span>{"\n"}
<span className="text-muted-foreground/60">› analyzing workflows ...........</span> <span className="text-cyan">✓</span>{"\n"}
<span className="text-muted-foreground/60">› identifying bottlenecks .......</span> <span className="text-cyan">✓</span>{"\n"}
<span className="text-muted-foreground/60">› mapping ROI opportunities .....</span> <span className="text-cyan">✓</span>{"\n"}
{"\n"}
<span className="text-cyan">$</span> <span className="text-foreground">build</span> <span className="text-violet">--custom</span>{"\n"}
<span className="text-muted-foreground/60">› deploying automation system to production</span>{"\n"}
<span className="text-foreground">→ ready in 2 weeks. zero templates. all yours.</span>
            </pre>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { step: "01", title: "Free Audit", desc: "We analyze your workflows, identify bottlenecks, and map the biggest automation opportunities — free." },
              { step: "02", title: "Custom Build", desc: "We design and build your system — tailored to your tools, team, and goals. No templates." },
              { step: "03", title: "Launch & Scale", desc: "Go live with full support. We monitor results, optimize, and scale as your business grows." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, ease: "easeOut" as const }}
                className="relative"
              >
                {i < 2 && (
                  <div className="hidden md:block absolute top-7 left-[60%] w-[80%] h-px bg-gradient-to-r from-cyan/40 to-transparent" />
                )}
                <div className="text-center">
                  <span className="font-mono text-5xl md:text-6xl font-bold gold-text-gradient relative z-10">{item.step}</span>
                  <h3 className="font-heading text-xl font-bold text-foreground mt-4">{item.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KPI Strip ────────────────────────────────────── */}
      <section className="relative py-16 md:py-20 overflow-hidden border-y border-cyan/20" aria-label="Key results">
        <div className="absolute inset-0 gold-gradient opacity-95" aria-hidden />
        <div className="absolute inset-0 bg-grid opacity-20" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {kpis.map((kpi, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, ease: "easeOut" as const }}
                className="text-center"
              >
                <p className="font-heading text-4xl md:text-5xl font-bold text-gold-foreground tracking-tight">{kpi.value}</p>
                <p className="font-mono text-xs uppercase tracking-wider text-gold-foreground/75 mt-2">{kpi.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────── */}
      <section className="section-padding" aria-label="Client testimonials">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            label="Results"
            title="What clients are saying."
            description="Real outcomes from real businesses — not hypotheticals."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, ease: "easeOut" as const }}
                className="card-hover glass-card rounded-xl p-7"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-4 h-4 text-cyan" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-cyan border border-cyan/30 rounded-full px-2.5 py-0.5">{t.metric}</span>
                </div>
                <p className="text-base text-foreground/85 leading-relaxed">"{t.quote}"</p>
                <div className="mt-6 pt-4 border-t border-border/40 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center text-sm font-semibold text-gold-foreground">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}, {t.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lead Capture CTA ─────────────────────────────── */}
      <section className="section-padding bg-surface-1/40 border-y border-border/40" aria-label="Book your free audit">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading
            label="Get Started"
            title="Book your free audit."
            description="Discover how much time and money you could save. No commitment, no pressure — just clarity."
          />
          <div className="glass-card rounded-xl p-8 md:p-10">
            <LeadCaptureForm />
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────── */}
      <section className="relative py-20 md:py-28 overflow-hidden charcoal-gradient bg-noise" aria-label="Call to action">
        <div className="absolute inset-0 bg-grid opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground leading-[1.05] tracking-tight">
              Stop losing leads.{" "}
              <span className="gold-text-gradient">Start scaling.</span>
            </h2>
            <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
              Join 200+ businesses that automated their way to growth. Your free audit is one click away.
            </p>
            <div className="mt-9">
              <Link
                to="/contact"
                className="btn-press inline-flex items-center justify-center rounded-md gold-gradient px-8 py-4 text-sm font-semibold text-gold-foreground tracking-tight shadow-lg shadow-cyan/30 hover:shadow-cyan/50"
              >
                Book Free Automation Audit →
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 font-mono text-xs text-muted-foreground/70">
              <span>✓ Free strategy audit</span>
              <span>✓ No lock-in contracts</span>
              <span>✓ ROI guarantee</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

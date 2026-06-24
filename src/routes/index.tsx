import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { LeadCaptureForm } from "../components/LeadCaptureForm";
import { Hero3D } from "../components/Hero3D";
import { Particles } from "../components/Particles";
import { CountUp } from "../components/CountUp";
import { TerminalTypewriter } from "../components/TerminalTypewriter";
import { GlowCard, getGradient } from "../components/GlowCard";

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

const stats = [
  { end: 2, suffix: "wk", label: "Avg. Build Time" },
  { end: 24, suffix: "/7", label: "Automated Coverage" },
  { end: 100, suffix: "%", label: "Custom-Built" },
  { end: 0, suffix: "", label: "Templates Used" },
];

function HomePage() {
  return (
    <>
      <Particles />
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden hero-atmos bg-noise">
        <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
        <Hero3D />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" aria-hidden />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:py-36 w-full">
          <motion.div {...stagger} initial="initial" animate="animate" className="max-w-3xl">
            <motion.div {...fadeUp} className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/5 px-4 py-1.5 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan shadow-[0_0_8px_var(--accent-cyan)] animate-pulse" />
              <span className="font-mono text-xs font-medium text-cyan tracking-wider uppercase">AI Automation Engineering</span>
            </motion.div>

            <motion.h1 {...fadeUp} className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.02] tracking-tight neon-glow">
              Automate your business.{" "}
              <span className="gold-text-gradient">Scale without burnout.</span>
            </motion.h1>

            <motion.p {...fadeUp} className="mt-7 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              We engineer AI-powered workflows that save time, reduce costs, and unlock measurable revenue — built for teams that refuse to babysit busywork.
            </motion.p>

            <motion.div {...fadeUp} className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="btn-press neon-cta inline-flex items-center justify-center rounded-md px-7 py-3.5 text-sm font-semibold tracking-tight"
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

            {/* Honest disclaimer */}
            <motion.div {...fadeUp} className="mt-12 max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground/80">
                Results vary — book a free audit to see what's possible.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Honest banner (replaces fake client logos) ───── */}
      <section className="border-y border-border/40 bg-surface-1/40 py-10" aria-label="About our work">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan mb-3">
            // currently onboarding first clients
          </p>
          <p className="text-base text-muted-foreground">
            Case studies coming soon — currently onboarding first clients.
          </p>
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
              <GlowCard
                key={i}
                gradient={getGradient(i)}
                delay={i * 0.1}
                innerClassName="h-full"
              >
                <div className="w-full h-full p-7 flex flex-col justify-between">
                  <div>
                    <div className="w-11 h-11 rounded-lg bg-[#1A1A1C] border border-white/10 flex items-center justify-center text-xl mb-5">
                      {item.icon}
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white mb-3 tracking-tight">{item.title}</h3>
                    <p className="text-gray-400 text-[14px] leading-[1.6] font-normal selection:bg-white/20">{item.desc}</p>
                  </div>
                </div>
              </GlowCard>
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
              <GlowCard
                key={i}
                gradient={getGradient(i + 3)}
                delay={i * 0.1}
                className={service.size === "lg" ? "md:col-span-2" : ""}
                innerClassName="h-full"
              >
                <div className="w-full h-full p-7 flex flex-col justify-between">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-11 h-11 rounded-lg bg-[#1A1A1C] border border-white/10 flex items-center justify-center text-xl shrink-0 animate-float"
                      style={{ animationDelay: `${i * 0.25}s` }}
                    >
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-white tracking-tight">{service.title}</h3>
                      <p className="mt-2 text-gray-400 text-[14px] leading-[1.6] font-normal selection:bg-white/20">{service.description}</p>
                    </div>
                  </div>
                </div>
              </GlowCard>
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
          <GlowCard
            gradient={getGradient(1)}
            delay={0.1}
            className="max-w-3xl mx-auto mb-14"
            innerClassName="overflow-hidden"
          >
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10 bg-[#1A1A1C]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF3D77]/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFB1CE]/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF9D3C]/70" />
              <span className="ml-3 font-mono text-xs text-gray-500">automation.workflow.ts</span>
            </div>
            <TerminalTypewriter />
          </GlowCard>

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
            {stats.map((kpi, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, ease: "easeOut" as const }}
                className="relative text-center px-4 py-5 rounded-2xl pulse-ring"
                style={{ animationDelay: `${i * 0.3}s` }}
              >
                <p className="font-heading text-4xl md:text-5xl font-bold text-gold-foreground tracking-tight">
                  <CountUp end={kpi.end} suffix={kpi.suffix} />
                </p>
                <p className="font-mono text-xs uppercase tracking-wider text-gold-foreground/75 mt-2">{kpi.label}</p>
              </motion.div>
            ))}
          </div>
          <p className="mt-8 text-center font-mono text-[11px] uppercase tracking-wider text-gold-foreground/80">
            Results vary — book a free audit to see what's possible.
          </p>
        </div>
      </section>

      {/* ── Testimonials → Coming Soon ───────────────────── */}
      <section className="section-padding" aria-label="Client testimonials">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            label="Results"
            title="Case studies coming soon."
            description="Currently onboarding first clients. Want to be one of them?"
          />
          <GlowCard
            gradient={getGradient(2)}
            delay={0.1}
            className="max-w-2xl mx-auto"
          >
            <div className="w-full h-full p-10 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#1A1A1C] border border-white/10 mb-5">
                <span className="text-2xl">🚀</span>
              </div>
              <p className="text-base md:text-lg text-white/85 leading-relaxed">
                Case studies coming soon — currently onboarding first clients.
              </p>
              <p className="mt-3 text-sm text-gray-400">
                Results vary. Book a free audit to see what's possible for your business.
              </p>
              <Link
                to="/contact"
                className="btn-press neon-cta mt-7 inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold"
              >
                Become a founding client →
              </Link>
            </div>
          </GlowCard>
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
          <GlowCard
            gradient={getGradient(0)}
            delay={0.1}
          >
            <div className="w-full h-full p-8 md:p-10">
              <LeadCaptureForm />
            </div>
          </GlowCard>
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
              Results vary — book a free audit to see what's possible for your business.
            </p>
            <div className="mt-9">
              <Link
                to="/contact"
                className="btn-press neon-cta inline-flex items-center justify-center rounded-md px-8 py-4 text-sm font-semibold tracking-tight"
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

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
      { title: "Automation Studio — Premium AI Systems for Service Businesses" },
      {
        name: "description",
        content:
          "We design and deploy premium AI automation systems for service businesses that want faster response times, cleaner operations, and measurable growth.",
      },
      {
        property: "og:title",
        content: "Automation Studio — Premium AI Systems for Service Businesses",
      },
      {
        property: "og:description",
        content:
          "End-to-end AI automation strategy, build, and optimization for founders who want real outcomes — not template funnels.",
      },
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

const coreSystems = [
  {
    icon: "🎯",
    title: "Acquisition Engine",
    description:
      "Capture, qualify, and route every lead with instant follow-up across web, inbox, and messaging channels.",
    size: "lg",
  },
  {
    icon: "⚙️",
    title: "Operations Engine",
    description:
      "Replace repetitive back-office tasks with reliable automations that keep your team focused on high-value work.",
    size: "sm",
  },
  {
    icon: "🧠",
    title: "Client Experience Engine",
    description:
      "Automate onboarding, communication, and delivery checkpoints so every client gets a consistent premium experience.",
    size: "sm",
  },
  {
    icon: "📈",
    title: "Decision Engine",
    description:
      "Live dashboards and executive reporting that surface bottlenecks, margins, and growth opportunities in real time.",
    size: "lg",
  },
];

const operatingMetrics = [
  { end: 14, suffix: " days", label: "to roadmap + architecture" },
  { end: 72, suffix: " hrs", label: "to first live automation" },
  { end: 1, suffix: " owner", label: "single strategic point of contact" },
  { end: 100, suffix: "%", label: "custom build (no templates)" },
];

function HomePage() {
  return (
    <>
      <Particles />

      <section className="relative min-h-[92vh] flex items-center overflow-hidden hero-atmos bg-noise">
        <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
        <Hero3D />
        <div
          className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background"
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:py-36 w-full">
          <motion.div {...stagger} initial="initial" animate="animate" className="max-w-4xl">
            <motion.div
              {...fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/5 px-4 py-1.5 mb-7"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan shadow-[0_0_8px_var(--accent-cyan)] animate-pulse" />
              <span className="font-mono text-xs font-medium text-cyan tracking-wider uppercase">
                Premium AI Automation Partner
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp}
              className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.02] tracking-tight neon-glow"
            >
              Build an automation system that runs your company
              <span className="gold-text-gradient"> with precision.</span>
            </motion.h1>

            <motion.p
              {...fadeUp}
              className="mt-7 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl"
            >
              We architect, ship, and optimize end-to-end AI workflows for founders who are serious
              about speed, consistency, and profitable scale.
            </motion.p>

            <motion.div {...fadeUp} className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="btn-press neon-cta inline-flex items-center justify-center rounded-md px-7 py-3.5 text-sm font-semibold tracking-tight"
              >
                Book Executive Automation Audit
              </Link>
              <Link
                to="/services"
                className="btn-press inline-flex items-center justify-center rounded-md border border-border bg-surface-2/40 backdrop-blur-sm px-7 py-3.5 text-sm font-semibold text-foreground hover:border-cyan/40 hover:bg-surface-2/60"
              >
                Explore delivery model →
              </Link>
            </motion.div>

            <motion.div
              {...fadeUp}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground/80"
            >
              <span>Founder-led execution</span>
              <span>Weekly implementation reports</span>
              <span>Security-conscious integrations</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section
        className="border-y border-border/40 bg-surface-1/40 py-10"
        aria-label="Credibility highlights"
      >
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              title: "Offer clarity",
              desc: "We focus on conversion, operations, and reporting systems that directly move revenue and efficiency.",
            },
            {
              title: "Senior execution",
              desc: "No handoff maze. Strategy and build stay aligned from first audit to final rollout.",
            },
            {
              title: "Delivery discipline",
              desc: "Every engagement ships with scope, milestones, and implementation documentation your team can actually use.",
            },
          ].map((item, i) => (
            <GlowCard
              key={item.title}
              gradient={getGradient(i + 1)}
              noAnimation
              borderWidth={1}
              glowBlur={28}
              glowOpacity={0.32}
            >
              <div className="p-5">
                <p className="font-heading text-lg font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            </GlowCard>
          ))}
        </div>
      </section>

      <section className="section-padding" aria-label="Common business problems">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            label="Revenue leaks we fix"
            title="If growth feels heavy, your systems are the bottleneck."
            description="Most teams do great work but lose momentum because key workflows are manual, disconnected, or slow."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: "Slow lead response",
                desc: "Prospects wait too long for replies, so high-intent demand bleeds to faster competitors.",
                icon: "⏱️",
              },
              {
                title: "Operational drag",
                desc: "Founders and operators get trapped in status updates, follow-ups, and repetitive admin loops.",
                icon: "🧱",
              },
              {
                title: "Blind decision-making",
                desc: "Data is scattered, reporting is delayed, and strategic decisions rely on guesswork.",
                icon: "🕳️",
              },
            ].map((item, i) => (
              <GlowCard key={i} gradient={getGradient(i)} delay={i * 0.1} innerClassName="h-full">
                <div className="w-full h-full p-7 flex flex-col justify-between">
                  <div>
                    <div className="w-11 h-11 rounded-lg bg-[#1A1A1C] border border-white/10 flex items-center justify-center text-xl mb-5">
                      {item.icon}
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white mb-3 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-[14px] leading-[1.6] font-normal selection:bg-white/20">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section-padding bg-surface-1/40 border-y border-border/40"
        aria-label="Core systems"
      >
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            label="Core systems"
            title="Four systems. One integrated growth engine."
            description="We intentionally keep the offer architecture sharp so every engagement maps to a measurable business outcome."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {coreSystems.map((service, i) => (
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
                      <h3 className="font-heading text-lg font-bold text-white tracking-tight">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-gray-400 text-[14px] leading-[1.6] font-normal selection:bg-white/20">
                        {service.description}
                      </p>
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
              See detailed deliverables{" "}
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding" aria-label="Our process">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            label="Execution framework"
            title="A disciplined process from strategy to scale."
            description="No random experimentation. Every build follows a clear architecture and launch sequence."
          />

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
              {
                step: "01",
                title: "Diagnostic",
                desc: "Audit your acquisition, delivery, and operations to identify the highest-leverage automation opportunities.",
              },
              {
                step: "02",
                title: "Build",
                desc: "Design and implement your custom system architecture with robust handoffs, safeguards, and observability.",
              },
              {
                step: "03",
                title: "Optimize",
                desc: "Review performance weekly, iterate quickly, and compound the gains with targeted improvements.",
              },
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
                  <span className="font-mono text-5xl md:text-6xl font-bold gold-text-gradient relative z-10">
                    {item.step}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-foreground mt-4">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative py-16 md:py-20 overflow-hidden border-y border-cyan/20"
        aria-label="Engagement standards"
      >
        <div className="absolute inset-0 gold-gradient opacity-95" aria-hidden />
        <div className="absolute inset-0 bg-grid opacity-20" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {operatingMetrics.map((kpi, i) => (
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
                <p className="font-mono text-xs uppercase tracking-wider text-gold-foreground/75 mt-2">
                  {kpi.label}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="mt-8 text-center font-mono text-[11px] uppercase tracking-wider text-gold-foreground/80">
            Built for speed, clarity, and long-term maintainability.
          </p>
        </div>
      </section>

      <section className="section-padding" aria-label="Strategic CTA">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            label="Who this is for"
            title="Best fit for founder-led teams that value quality over hacks."
            description="If you care about premium delivery, reliable systems, and measurable business outcomes, we'll likely work well together."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              "Service businesses with high lead velocity and slow follow-up.",
              "Agencies and consultancies needing cleaner operations and delivery workflows.",
              "Operators who want a long-term automation foundation, not one-off scripts.",
            ].map((point, i) => (
              <GlowCard key={point} gradient={getGradient(i + 2)} delay={i * 0.1}>
                <div className="p-7">
                  <p className="text-sm text-white/85 leading-relaxed">{point}</p>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section-padding bg-surface-1/40 border-y border-border/40"
        aria-label="Book your audit"
      >
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading
            label="Start here"
            title="Book your executive automation audit."
            description="We'll map your highest-impact automation opportunities and give you a clear build plan with no guesswork."
          />
          <GlowCard gradient={getGradient(0)} delay={0.1}>
            <div className="w-full h-full p-8 md:p-10">
              <LeadCaptureForm />
            </div>
          </GlowCard>
        </div>
      </section>

      <section
        className="relative py-20 md:py-28 overflow-hidden charcoal-gradient bg-noise"
        aria-label="Final call to action"
      >
        <div className="absolute inset-0 bg-grid opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground leading-[1.05] tracking-tight">
              Upgrade from scattered workflows to
              <span className="gold-text-gradient"> a real operating system.</span>
            </h2>
            <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Strategy, implementation, and optimization in one partner — so you can scale with
              confidence.
            </p>
            <div className="mt-9">
              <Link
                to="/contact"
                className="btn-press neon-cta inline-flex items-center justify-center rounded-md px-8 py-4 text-sm font-semibold tracking-tight"
              >
                Book Free Audit →
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 font-mono text-xs text-muted-foreground/70">
              <span>✓ Clear scope + milestones</span>
              <span>✓ Secure, documented systems</span>
              <span>✓ Built to scale with your team</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

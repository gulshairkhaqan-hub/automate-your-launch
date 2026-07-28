import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SectionHeading } from "../components/SectionHeading";
import { GlowCard, getGradient } from "../components/GlowCard";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Automation Studio" },
      {
        name: "description",
        content:
          "Outcome-led case studies showing how service businesses improved lead response, operational speed, and client experience with custom automation systems.",
      },
      { property: "og:title", content: "Case Studies — Automation Studio" },
      {
        property: "og:description",
        content:
          "Before/after transformation stories with implementation focus, measurable outcomes, and practical delivery details.",
      },
    ],
  }),
  component: CaseStudiesPage,
});

const industries = ["All", "Agency", "Coaching", "E-Commerce", "Local Business"] as const;

const caseStudies = [
  {
    industry: "Agency",
    title: "From fragmented ops to a unified delivery system in 28 days",
    clientProfile: "7-person growth agency (B2B services)",
    before: [
      "Lead handoff lived across Slack, email, and spreadsheets",
      "Onboarding required manual coordination across 4 team members",
      "Weekly reporting consumed 8+ team hours",
      "No single source of truth for delivery status",
    ],
    after: [
      "Automated lead routing by service line and urgency",
      "Client onboarding sequence reduced to a guided 45-minute workflow",
      "Executive-ready reporting generated automatically each week",
      "Central operating dashboard with real-time status tracking",
    ],
    kpis: [
      { value: "-68%", label: "ops admin time", before: "baseline" },
      { value: "45m", label: "onboarding cycle", before: "3.5 hrs" },
      { value: "<5m", label: "lead routing", before: "45m+" },
      { value: "+22%", label: "delivery margin", before: "baseline" },
    ],
    quote:
      "Our operations finally feel deliberate. We now run weekly delivery with confidence instead of firefighting.",
    quoteBy: "Operations Lead, Agency Client",
    services: ["Acquisition Systems", "Operations Systems", "Executive Intelligence"],
  },
  {
    industry: "Coaching",
    title: "A coaching business scaled enrollment without scaling chaos",
    clientProfile: "Founder-led coaching program with group + 1:1 offers",
    before: [
      "Leads slipped through direct messages and email replies",
      "Discovery-call booking and reminders were handled manually",
      "Client onboarding relied on repetitive copy/paste tasks",
      "No visibility into conversion by traffic source",
    ],
    after: [
      "Automated lead intake and qualification workflow",
      "Self-serve booking, reminders, and no-show prevention sequences",
      "Structured onboarding with automated access and welcome steps",
      "Source-level conversion dashboard for weekly optimization",
    ],
    kpis: [
      { value: "+39%", label: "show rate", before: "baseline" },
      { value: "-12h", label: "founder hours/week", before: "0" },
      { value: "2.1x", label: "lead response speed", before: "baseline" },
      { value: "+31%", label: "qualified calls", before: "baseline" },
    ],
    quote:
      "The system gave me back strategic time while improving every key conversion stage in the funnel.",
    quoteBy: "Founder, Coaching Brand",
    services: ["Acquisition Systems", "Client Experience Systems"],
  },
  {
    industry: "E-Commerce",
    title: "Support and retention automation improved repeat revenue quality",
    clientProfile: "DTC brand with high support volume and seasonal campaigns",
    before: [
      "Support queue was reactive and inconsistent",
      "Post-purchase communication lacked segmentation",
      "Team had limited insight into retention bottlenecks",
      "Manual reporting delayed campaign decisions",
    ],
    after: [
      "AI-assisted first-response workflows for common support intents",
      "Automated lifecycle messaging by customer behavior",
      "Retention dashboards tied to campaign and cohort performance",
      "Faster decision loops for offer and campaign optimization",
    ],
    kpis: [
      { value: "-54%", label: "manual ticket load", before: "baseline" },
      { value: "3.4x", label: "faster first response", before: "baseline" },
      { value: "+18%", label: "repeat purchase rate", before: "baseline" },
      { value: "weekly", label: "exec insights", before: "monthly" },
    ],
    quote:
      "We moved from chasing support tickets to managing customer experience strategically with clean visibility.",
    quoteBy: "Head of Growth, E-Commerce Brand",
    services: ["Client Experience Systems", "Executive Intelligence"],
  },
  {
    industry: "Local Business",
    title: "A local services team modernized lead handling and booking flow",
    clientProfile: "Multi-location local business with inbound phone + web leads",
    before: [
      "Inquiries after hours had no structured follow-up",
      "Booking confirmations and reminders were inconsistent",
      "Team lacked a reliable way to track lead source quality",
      "Front desk workload blocked higher-value customer interactions",
    ],
    after: [
      "Always-on capture and response flow for inbound inquiries",
      "Automated booking confirmations, reminders, and reschedules",
      "Lead-source reporting to improve marketing spend quality",
      "Reduced front-desk admin load through workflow automation",
    ],
    kpis: [
      { value: "+44%", label: "booked consults", before: "baseline" },
      { value: "-61%", label: "manual reminder work", before: "baseline" },
      { value: "<2m", label: "initial response", before: "15m+" },
      { value: "+27%", label: "lead-to-booking", before: "baseline" },
    ],
    quote:
      "The business feels modern now. We respond faster, book cleaner, and spend less time on repetitive admin.",
    quoteBy: "Owner, Local Services Business",
    services: ["Acquisition Systems", "Operations Systems"],
  },
];

function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filtered =
    activeFilter === "All" ? caseStudies : caseStudies.filter((s) => s.industry === activeFilter);

  return (
    <>
      <section className="relative section-padding charcoal-gradient bg-noise overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionHeading
            label="Case studies"
            title="Proof built around outcomes, not hype."
            description="Representative client transformations showing the operational and commercial impact of premium automation execution."
          />
          <p className="font-mono text-xs text-muted-foreground/75 max-w-3xl">
            Notes: some client details are anonymized for confidentiality. Metrics are shared from
            real engagement reporting snapshots.
          </p>
        </div>
      </section>

      <section className="bg-surface-1/60 backdrop-blur-md py-5 border-y border-border/40 sticky top-16 md:top-20 z-30">
        <div className="mx-auto max-w-7xl px-6">
          <div
            className="flex flex-wrap items-center gap-2"
            role="tablist"
            aria-label="Filter by industry"
          >
            {industries.map((industry, i) => (
              <button
                key={industry}
                role="tab"
                aria-selected={activeFilter === industry}
                onClick={() => setActiveFilter(industry)}
                className={`btn-press px-4 py-2 rounded-md text-sm font-medium border transition-all ${
                  activeFilter === industry
                    ? "text-white border-white/30 shadow-md"
                    : "bg-[#1A1A1C]/60 border-white/10 text-gray-400 hover:text-white hover:border-white/20"
                }`}
                style={
                  activeFilter === industry
                    ? { background: getGradient(i), borderColor: "transparent" }
                    : {}
                }
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-5xl px-6 space-y-8">
          {filtered.map((study, i) => (
            <GlowCard key={study.title} gradient={getGradient(i)} delay={i * 0.1}>
              <div className="p-8 md:p-12">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#7DD3FC] border border-[#7DD3FC]/30 rounded-full px-2.5 py-0.5">
                    {study.industry}
                  </span>
                  {study.services.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-medium bg-[#1A1A1C] text-gray-400 px-2.5 py-0.5 rounded-full border border-white/10"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <h2 className="font-heading text-xl md:text-2xl font-bold text-white leading-snug tracking-tight">
                  {study.title}
                </h2>
                <p className="font-mono text-xs text-gray-500 mt-2">{study.clientProfile}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-7">
                  <div className="p-5 rounded-xl bg-[#FF3D77]/10 border border-[#FF3D77]/20">
                    <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#FF3D77] mb-3">
                      // before
                    </h4>
                    <ul className="space-y-2">
                      {study.before.map((b, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="text-[#FF3D77] mt-0.5 shrink-0">✗</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-5 rounded-xl bg-[#06B6D4]/10 border border-[#06B6D4]/20">
                    <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#06B6D4] mb-3">
                      // after
                    </h4>
                    <ul className="space-y-2">
                      {study.after.map((a, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-white/85">
                          <span className="text-[#06B6D4] mt-0.5 shrink-0">✓</span>
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-7 grid grid-cols-2 md:grid-cols-4 gap-3">
                  {study.kpis.map((kpi, j) => (
                    <div
                      key={j}
                      className="text-center p-4 rounded-xl bg-[#1A1A1C] border border-white/10"
                    >
                      <p className="font-heading text-xl md:text-2xl font-bold text-white tracking-tight">
                        {kpi.value}
                      </p>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-gray-500 mt-1.5">
                        {kpi.label}
                      </p>
                      <p className="font-mono text-[10px] text-gray-500/50 mt-0.5">
                        was: {kpi.before}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-3">
                  <p className="text-sm text-white/85 italic leading-relaxed">"{study.quote}"</p>
                  <p className="text-xs font-medium text-[#7DD3FC]">— {study.quoteBy}</p>
                </div>
              </div>
            </GlowCard>
          ))}

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500">
                No case studies found for this industry yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="relative section-padding charcoal-gradient overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <SectionHeading
            label="Your story next"
            title="Let's engineer your next before-and-after."
            description="Book a free audit and we'll define the highest-leverage transformation plan for your business."
          />
          <Link
            to="/contact"
            className="btn-press neon-cta inline-flex items-center justify-center rounded-md px-8 py-4 text-sm font-semibold tracking-tight"
          >
            Book Your Free Audit →
          </Link>
        </div>
      </section>
    </>
  );
}

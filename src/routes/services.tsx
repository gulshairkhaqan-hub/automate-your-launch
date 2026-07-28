import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "../components/SectionHeading";
import { GlowCard, getGradient } from "../components/GlowCard";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Automation Studio" },
      {
        name: "description",
        content:
          "Premium AI automation services built end-to-end: acquisition systems, operations systems, client delivery systems, and executive reporting.",
      },
      { property: "og:title", content: "Services — Automation Studio" },
      {
        property: "og:description",
        content:
          "A focused service architecture designed to improve response time, operational efficiency, and decision quality.",
      },
    ],
  }),
  component: ServicesPage,
});

const coreServices = [
  {
    icon: "🎯",
    title: "Acquisition Systems",
    problem:
      "Revenue is leaking because qualified leads are not being captured, scored, and followed up consistently across channels.",
    bestFor: "Founders with high inbound volume and inconsistent conversion",
    deliverables: [
      "Lead capture architecture across web, ads, and messaging",
      "Speed-to-lead automations (email, SMS, WhatsApp)",
      "Qualification logic + routing rules to the right owner",
      "CRM synchronization with lifecycle tracking",
      "Conversion dashboard with response and close-rate visibility",
    ],
    timeline: "2–3 weeks",
    investment: "from $3,500",
  },
  {
    icon: "⚙️",
    title: "Operations Systems",
    problem:
      "Your team spends too much time on repetitive admin and coordination work that slows delivery and increases overhead.",
    bestFor: "Agencies and service teams scaling delivery with lean headcount",
    deliverables: [
      "End-to-end process mapping and automation design",
      "Cross-tool workflow orchestration (CRM, PM, comms, docs)",
      "Automated handoffs, reminders, and quality checkpoints",
      "Error handling, fallback paths, and alerts",
      "Internal SOP documentation and handover training",
    ],
    timeline: "2–4 weeks",
    investment: "from $4,500",
  },
  {
    icon: "🧠",
    title: "Client Experience Systems",
    problem:
      "Client onboarding, updates, and support are inconsistent, creating churn risk and a fragmented brand experience.",
    bestFor: "Businesses with premium offers that need delivery consistency",
    deliverables: [
      "Automated onboarding flows with welcome and kickoff logic",
      "AI-assisted support + FAQ handling with human escalation",
      "Progress updates and milestone communication automation",
      "Nurture, retention, and reactivation sequences",
      "Voice-of-customer signal capture for productized improvements",
    ],
    timeline: "2–3 weeks",
    investment: "from $3,800",
  },
  {
    icon: "📈",
    title: "Executive Intelligence Systems",
    problem:
      "Leadership decisions are delayed because data is spread across tools and reporting is manual, incomplete, or stale.",
    bestFor: "Operators who need weekly decision-ready performance insights",
    deliverables: [
      "Cross-platform data model and KPI layer",
      "Real-time executive dashboard build",
      "Automated weekly leadership summaries",
      "Forecast and pipeline visibility views",
      "Role-based reporting for founders, ops, and sales",
    ],
    timeline: "1–2 weeks",
    investment: "from $2,900",
  },
];

function ServicesPage() {
  return (
    <>
      <section className="relative section-padding charcoal-gradient bg-noise overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionHeading
            label="Services"
            title="Focused systems. Premium execution."
            description="We intentionally offer fewer, sharper services so every engagement has clear scope, ownership, and measurable outcomes."
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-5xl px-6 space-y-6">
          {coreServices.map((service, i) => (
            <GlowCard key={i} gradient={getGradient(i)} delay={i * 0.1}>
              <div className="p-7 md:p-10">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#1A1A1C] border border-white/10 flex items-center justify-center text-2xl shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-white tracking-tight">
                      {service.title}
                    </h2>
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                      <span className="font-mono text-xs font-medium uppercase tracking-wider text-white/70 border border-white/20 rounded-full px-2.5 py-0.5">
                        {service.timeline}
                      </span>
                      <span className="font-mono text-sm font-semibold text-white">
                        {service.investment}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-5 rounded-xl bg-[#FF3D77]/10 border border-[#FF3D77]/20">
                  <p className="font-mono text-xs uppercase tracking-wider text-[#FF3D77] font-semibold mb-2">
                    // core challenge
                  </p>
                  <p className="text-sm text-white/85 leading-relaxed">{service.problem}</p>
                </div>

                <div className="mt-5 p-5 rounded-xl bg-[#06B6D4]/10 border border-[#06B6D4]/20">
                  <p className="font-mono text-xs uppercase tracking-wider text-[#06B6D4] font-semibold mb-2">
                    // best fit
                  </p>
                  <p className="text-sm text-white/85 leading-relaxed">{service.bestFor}</p>
                </div>

                <div className="mt-6">
                  <p className="font-mono text-xs uppercase tracking-wider text-[#7DD3FC] font-semibold mb-3">
                    // deliverables
                  </p>
                  <ul className="space-y-2.5">
                    {service.deliverables.map((d, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-gray-400">
                        <span className="text-[#7DD3FC] mt-0.5 shrink-0">✓</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="btn-press inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold text-white border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all"
                  >
                    Discuss this service →
                  </Link>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </section>

      <section
        className="section-padding bg-surface-1/40 border-y border-border/40"
        aria-label="Delivery standards"
      >
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            label="Delivery standards"
            title="What every engagement includes"
            description="The same premium operating discipline is applied to every project, regardless of scope."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              "Technical architecture before implementation so execution stays clean.",
              "Weekly progress updates with decisions, risks, and next milestones.",
              "Documentation + team handover to keep systems maintainable long term.",
            ].map((item, i) => (
              <GlowCard
                key={item}
                gradient={getGradient(i + 2)}
                noAnimation
                borderWidth={1}
                glowBlur={25}
                glowOpacity={0.35}
              >
                <div className="p-6 text-sm text-white/85 leading-relaxed">{item}</div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      <section className="relative section-padding charcoal-gradient overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <SectionHeading
            label="Next step"
            title="Get a custom automation architecture."
            description="Book a free audit and we'll map the highest-ROI system to build first for your business."
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

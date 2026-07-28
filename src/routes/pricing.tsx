import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { GlowCard, getGradient } from "../components/GlowCard";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Automation Studio" },
      {
        name: "description",
        content:
          "Transparent premium pricing for AI automation engagements. Choose a focused sprint, full system build, or ongoing optimization partner model.",
      },
      { property: "og:title", content: "Pricing — Automation Studio" },
      {
        property: "og:description",
        content:
          "Simple investment options with clear outcomes, milestones, and delivery ownership.",
      },
    ],
  }),
  component: PricingPage,
});

const packages = [
  {
    name: "Clarity Sprint",
    price: "$2,900",
    period: "one-time",
    description:
      "A focused architecture sprint to identify your highest-impact automation opportunities and define exactly what to build first.",
    popular: false,
    outcomes: [
      "Business workflow and bottleneck analysis",
      "Prioritized automation roadmap",
      "Target-state system architecture",
      "ROI model for top 3 opportunities",
      "Implementation plan with milestones",
    ],
    bestFor: "Founders who need strategic clarity before execution",
  },
  {
    name: "System Build",
    price: "$6,500",
    period: "starting investment",
    description:
      "End-to-end design and implementation of one core revenue or operations system, delivered with documentation and team handover.",
    popular: true,
    outcomes: [
      "One complete system build (acquisition, operations, or client experience)",
      "Cross-tool integrations with QA and failover handling",
      "Automated reporting + KPI visibility",
      "SOP documentation and internal training",
      "2 weeks post-launch optimization support",
    ],
    bestFor: "Teams ready to move from manual workflows to a production-grade system",
  },
  {
    name: "Scale Partner",
    price: "$3,000/mo",
    period: "retainer",
    description:
      "Ongoing strategic and technical partnership to optimize existing automations and roll out new systems as your business grows.",
    popular: false,
    outcomes: [
      "Continuous system monitoring and improvements",
      "Monthly automation releases and experiments",
      "Executive reporting and optimization reviews",
      "Priority support for automation incidents",
      "Strategic advisory for roadmap sequencing",
    ],
    bestFor: "Businesses that treat automation as a long-term growth advantage",
  },
];

const inclusions = [
  "Founder-led strategy and technical oversight",
  "Weekly progress updates and decision logs",
  "Security-conscious integration standards",
  "Clear milestone ownership and acceptance criteria",
];

const faqs = [
  {
    q: "How do we choose the right engagement?",
    a: "If your biggest challenge is direction, start with Clarity Sprint. If you already know what to fix, System Build is usually best. If you have active automations and want continuous compounding gains, Scale Partner is the right fit.",
  },
  {
    q: "Do you use templates or prebuilt systems?",
    a: "No. We use reusable engineering patterns for speed and reliability, but each system is tailored to your tools, team workflows, and business goals.",
  },
  {
    q: "What happens after implementation?",
    a: "You'll receive documentation and handover support. Many clients continue on Scale Partner for ongoing optimization, but you're never locked into a contract.",
  },
  {
    q: "Can you work with our existing stack?",
    a: "Yes. We design around your existing tools whenever possible and only recommend changes when they create clear operational or financial upside.",
  },
  {
    q: "How quickly can we get started?",
    a: "Most projects kick off within 7 days of alignment. During onboarding, we confirm scope, timelines, integrations, and access requirements.",
  },
  {
    q: "Do you support payment splits?",
    a: "Yes. For one-time projects, we typically structure payments across kickoff and milestone completion. We'll confirm the schedule during scoping.",
  },
];

function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <section className="relative section-padding charcoal-gradient bg-noise overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionHeading
            label="Pricing"
            title="Clear investment. Clear outcomes."
            description="No bloated packages or vague retainers. Choose the engagement model that matches your current stage and goals."
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {packages.map((pkg, i) => (
              <GlowCard key={i} gradient={getGradient(i)} delay={i * 0.1}>
                {pkg.popular && (
                  <>
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan to-transparent z-20" />
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                      <span
                        className="font-mono inline-block px-3 py-1 text-[10px] font-bold text-white rounded-full tracking-widest uppercase"
                        style={{ background: getGradient(i) }}
                      >
                        Most Chosen
                      </span>
                    </div>
                  </>
                )}
                <div className="p-7 md:p-9 flex flex-col flex-1">
                  <h3 className="font-heading text-2xl font-bold text-white tracking-tight">
                    {pkg.name}
                  </h3>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="font-heading text-4xl font-bold text-white tracking-tight">
                      {pkg.price}
                    </span>
                    <span className="font-mono text-xs text-gray-500">/{pkg.period}</span>
                  </div>
                  <p className="mt-3 text-sm text-gray-400 leading-relaxed">{pkg.description}</p>
                  <p className="mt-4 text-xs font-mono uppercase tracking-wider text-cyan">
                    Best for: {pkg.bestFor}
                  </p>

                  <div className="mt-7 flex-1">
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-white/70 mb-3">
                      // outcomes included
                    </p>
                    <ul className="space-y-2.5">
                      {pkg.outcomes.map((f, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-white/85">
                          <span className="text-[#7DD3FC] mt-0.5 shrink-0">✓</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7">
                    <Link
                      to="/contact"
                      className={`btn-press w-full inline-flex items-center justify-center rounded-md px-6 py-3.5 text-sm font-semibold ${
                        pkg.popular
                          ? "neon-cta"
                          : "border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 transition-all"
                      }`}
                    >
                      Discuss Engagement →
                    </Link>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-10">
            Not sure which model fits your stage?{" "}
            <Link
              to="/contact"
              className="text-cyan hover:text-cyan-light transition-colors font-medium"
            >
              Book a free audit
            </Link>{" "}
            and we'll recommend the highest-leverage starting point.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface-1/40 border-y border-border/40">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            label="Included by default"
            title="Every engagement includes"
            description="Premium process standards are not optional extras."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {inclusions.map((item, i) => (
              <GlowCard
                key={item}
                gradient={getGradient(i + 3)}
                delay={i * 0.05}
                borderWidth={1}
                glowBlur={30}
                glowOpacity={0.4}
              >
                <div className="p-5 text-sm text-white/85 leading-relaxed">{item}</div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" aria-label="Frequently asked questions">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading
            label="FAQ"
            title="Frequently asked questions."
            description="Everything most teams ask before we kick off."
          />
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <GlowCard
                key={i}
                gradient={getGradient(i)}
                delay={i * 0.04}
                borderWidth={1}
                glowBlur={25}
                glowOpacity={0.35}
                noAnimation
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan/40 transition-colors hover:bg-white/5"
                  aria-expanded={openFaq === i}
                >
                  <span className="text-sm md:text-base font-semibold text-white pr-4">
                    {faq.q}
                  </span>
                  <svg
                    className={`w-5 h-5 text-[#7DD3FC] shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                  transition={{ duration: 0.28, ease: "easeOut" as const }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm text-gray-400 leading-relaxed">{faq.a}</p>
                </motion.div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      <section className="relative section-padding charcoal-gradient overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <SectionHeading
            label="Ready to move"
            title="Let's scope your highest-ROI automation build."
            description="Book a free audit and get a direct recommendation based on your current systems and goals."
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

import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { GlowCard, getGradient } from "../components/GlowCard";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Automation Studio" },
      { name: "description", content: "Transparent pricing for AI-powered automation. Starter, Growth, and Scale packages. Add-ons available. ROI guarantee included." },
      { property: "og:title", content: "Pricing — Automation Studio" },
      { property: "og:description", content: "Automation packages starting at $2,500. No hidden fees, no lock-in contracts, ROI guarantee." },
    ],
  }),
  component: PricingPage,
});

const packages = [
  {
    name: "Starter",
    price: "$2,500",
    period: "one-time",
    description: "Perfect for solopreneurs and small teams ready to automate their first workflow.",
    popular: false,
    features: ["1 core automation workflow", "Lead capture form + auto-responder", "Basic CRM setup or integration", "Email sequence (up to 5 emails)", "1 week of post-launch support", "Documentation & training video"],
    notIncluded: ["AI chatbot", "Custom dashboard", "Multi-channel campaigns"],
  },
  {
    name: "Growth",
    price: "$5,000",
    period: "one-time",
    description: "For growing businesses that need multiple automations working together seamlessly.",
    popular: true,
    features: ["Up to 3 automation workflows", "Multi-channel lead capture system", "Full CRM setup + pipeline design", "Email & SMS sequences (unlimited)", "AI chatbot with lead qualification", "Custom KPI dashboard", "2 weeks of post-launch support", "Priority Slack support channel"],
    notIncluded: ["Dedicated account manager"],
  },
  {
    name: "Scale",
    price: "$10,000",
    period: "one-time",
    description: "Enterprise-grade automation for teams ready to fully systematize their operations.",
    popular: false,
    features: ["Unlimited automation workflows", "Full-stack automation audit & buildout", "Advanced AI chatbot with custom training", "Multi-platform CRM integration", "Advanced reporting & dashboards", "Team training workshop (live)", "30 days of post-launch support", "Dedicated account manager", "Quarterly optimization reviews"],
    notIncluded: [],
  },
];

const addons = [
  { name: "Additional Workflow", price: "$800", description: "Add an extra automation workflow to any package." },
  { name: "AI Chatbot Training", price: "$1,200", description: "Custom train your chatbot on your business data and FAQs." },
  { name: "Monthly Maintenance", price: "$500/mo", description: "Ongoing monitoring, optimization, and support." },
  { name: "Advanced Analytics", price: "$1,000", description: "Multi-source data dashboards with automated reporting." },
  { name: "SMS Campaign Add-On", price: "$600", description: "Add SMS sequences to your email automation." },
  { name: "Landing Page Design", price: "$750", description: "High-converting landing page designed and built for your funnel." },
];

const faqs = [
  { q: "How long does it take to see results?", a: "Most clients see measurable results within the first 2 weeks after launch. Lead capture improvements are often immediate, while revenue impact builds over 30–60 days as automations compound." },
  { q: "Do I need to provide the tools/software?", a: "We work with whatever tools you already use (HubSpot, GoHighLevel, Salesforce, etc.). If you need new tools, we'll recommend the best options and help you set them up. Tool subscription costs are separate from our service fees." },
  { q: "What happens after the project is delivered?", a: "Every package includes post-launch support (1–4 weeks depending on tier). After that, you can add our Monthly Maintenance add-on for ongoing monitoring and optimization, or manage the automations yourself with the documentation we provide." },
  { q: "Can I upgrade my package later?", a: "Absolutely. Many clients start with Starter and upgrade to Growth as they see results. We'll credit 50% of your initial package cost toward the upgrade." },
  { q: "What's your ROI guarantee?", a: "If your automations don't save you at least 10 hours per week or generate a measurable increase in leads within 60 days, we'll work for free until they do. No questions asked." },
  { q: "Do you offer payment plans?", a: "Yes. We offer 50/50 payment splits (50% upfront, 50% on delivery) for Growth and Scale packages. Custom payment plans available for enterprise engagements." },
];

function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* Hero */}
      <section className="relative section-padding charcoal-gradient bg-noise overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionHeading
            label="Pricing"
            title="Simple, transparent pricing."
            description="No hidden fees, no surprise charges. Choose the package that fits — or let us help you decide in a free audit."
          />
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {packages.map((pkg, i) => (
              <GlowCard
                key={i}
                gradient={getGradient(i)}
                delay={i * 0.1}
              >
                {pkg.popular && (
                  <>
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan to-transparent z-20" />
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                      <span className="font-mono inline-block px-3 py-1 text-[10px] font-bold text-white rounded-full tracking-widest uppercase"
                        style={{ background: getGradient(i) }}>
                        Most Popular
                      </span>
                    </div>
                  </>
                )}
                <div className="p-7 md:p-9 flex flex-col flex-1">
                  <h3 className="font-heading text-2xl font-bold text-white tracking-tight">{pkg.name}</h3>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="font-heading text-4xl font-bold text-white tracking-tight">{pkg.price}</span>
                    <span className="font-mono text-xs text-gray-500">/{pkg.period}</span>
                  </div>
                  <p className="mt-3 text-sm text-gray-400 leading-relaxed">{pkg.description}</p>

                  <div className="mt-7 flex-1">
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-white/70 mb-3">// included</p>
                    <ul className="space-y-2.5">
                      {pkg.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-white/85">
                          <span className="text-[#7DD3FC] mt-0.5 shrink-0">✓</span>
                          <span>{f}</span>
                        </li>
                      ))}
                      {pkg.notIncluded.map((f, j) => (
                        <li key={`n-${j}`} className="flex items-start gap-2.5 text-sm text-gray-500/50">
                          <span className="mt-0.5 shrink-0">—</span>
                          <span className="line-through">{f}</span>
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
                      Get Started →
                    </Link>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-10">
            All packages include our ROI guarantee. Not sure which to choose?{" "}
            <Link to="/contact" className="text-cyan hover:text-cyan-light transition-colors font-medium">Book a free audit</Link>{" "}
            — we'll recommend the best fit.
          </p>
        </div>
      </section>

      {/* Add-ons */}
      <section className="section-padding bg-surface-1/40 border-y border-border/40">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading label="Customize" title="Add-ons." description="Enhance any package with targeted add-ons for your specific needs." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {addons.map((addon, i) => (
              <GlowCard
                key={i}
                gradient={getGradient(i + 3)}
                delay={i * 0.05}
                borderWidth={1}
                glowBlur={30}
                glowOpacity={0.4}
              >
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-semibold text-white">{addon.name}</h4>
                    <span className="font-mono text-sm font-bold text-[#7DD3FC]">{addon.price}</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">{addon.description}</p>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" aria-label="Frequently asked questions">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading label="FAQ" title="Frequently asked questions." description="Everything you need to know before getting started." />
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
                  <span className="text-sm md:text-base font-semibold text-white pr-4">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-[#7DD3FC] shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
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

      {/* CTA */}
      <section className="relative section-padding charcoal-gradient overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <SectionHeading
            label="Ready?"
            title="Let's build your automation system."
            description="Book a free audit and get a personalized recommendation — no commitment, no pressure."
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

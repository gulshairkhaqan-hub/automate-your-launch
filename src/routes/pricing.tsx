import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";

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
    features: [
      "1 core automation workflow",
      "Lead capture form + auto-responder",
      "Basic CRM setup or integration",
      "Email sequence (up to 5 emails)",
      "1 week of post-launch support",
      "Documentation & training video",
    ],
    notIncluded: [
      "AI chatbot",
      "Custom dashboard",
      "Multi-channel campaigns",
    ],
  },
  {
    name: "Growth",
    price: "$5,000",
    period: "one-time",
    description: "For growing businesses that need multiple automations working together seamlessly.",
    popular: true,
    features: [
      "Up to 3 automation workflows",
      "Multi-channel lead capture system",
      "Full CRM setup + pipeline design",
      "Email & SMS sequences (unlimited)",
      "AI chatbot with lead qualification",
      "Custom KPI dashboard",
      "2 weeks of post-launch support",
      "Priority Slack support channel",
    ],
    notIncluded: [
      "Dedicated account manager",
    ],
  },
  {
    name: "Scale",
    price: "$10,000",
    period: "one-time",
    description: "Enterprise-grade automation for teams ready to fully systematize their operations.",
    popular: false,
    features: [
      "Unlimited automation workflows",
      "Full-stack automation audit & buildout",
      "Advanced AI chatbot with custom training",
      "Multi-platform CRM integration",
      "Advanced reporting & dashboards",
      "Team training workshop (live)",
      "30 days of post-launch support",
      "Dedicated account manager",
      "Quarterly optimization reviews",
    ],
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
  {
    q: "How long does it take to see results?",
    a: "Most clients see measurable results within the first 2 weeks after launch. Lead capture improvements are often immediate, while revenue impact builds over 30–60 days as automations compound.",
  },
  {
    q: "Do I need to provide the tools/software?",
    a: "We work with whatever tools you already use (HubSpot, GoHighLevel, Salesforce, etc.). If you need new tools, we'll recommend the best options and help you set them up. Tool subscription costs are separate from our service fees.",
  },
  {
    q: "What happens after the project is delivered?",
    a: "Every package includes post-launch support (1–4 weeks depending on tier). After that, you can add our Monthly Maintenance add-on for ongoing monitoring and optimization, or manage the automations yourself with the documentation we provide.",
  },
  {
    q: "Can I upgrade my package later?",
    a: "Absolutely. Many clients start with Starter and upgrade to Growth as they see results. We'll credit 50% of your initial package cost toward the upgrade.",
  },
  {
    q: "What's your ROI guarantee?",
    a: "If your automations don't save you at least 10 hours per week or generate a measurable increase in leads within 60 days, we'll work for free until they do. No questions asked.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes. We offer 50/50 payment splits (50% upfront, 50% on delivery) for Growth and Scale packages. Custom payment plans available for enterprise engagements.",
  },
];

function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="section-padding charcoal-gradient">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            label="Pricing"
            title="Simple, Transparent Pricing"
            description="No hidden fees, no surprise charges. Choose the package that fits your business — or let us help you decide in a free audit."
            light
          />
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, ease: "easeOut" as const }}
                className={`rounded-sm border bg-card flex flex-col ${
                  pkg.popular
                    ? "border-gold shadow-lg shadow-gold/5 relative"
                    : "border-border"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-block gold-gradient px-4 py-1 text-xs font-semibold text-gold-foreground rounded-sm tracking-wider uppercase">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="p-8 md:p-10 flex flex-col flex-1">
                  <h3 className="font-heading text-2xl font-bold text-foreground">{pkg.name}</h3>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="font-heading text-4xl font-bold text-foreground">{pkg.price}</span>
                    <span className="text-sm text-muted-foreground">/{pkg.period}</span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{pkg.description}</p>

                  <div className="mt-8 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-foreground mb-3">What's included:</p>
                    <ul className="space-y-2.5">
                      {pkg.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <span className="text-gold mt-0.5 shrink-0">✓</span>
                          <span>{f}</span>
                        </li>
                      ))}
                      {pkg.notIncluded.map((f, j) => (
                        <li key={`n-${j}`} className="flex items-start gap-2.5 text-sm text-muted-foreground/40">
                          <span className="mt-0.5 shrink-0">—</span>
                          <span className="line-through">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <Link
                      to="/contact"
                      className={`w-full inline-flex items-center justify-center rounded-sm px-6 py-3.5 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-gold/40 ${
                        pkg.popular
                          ? "gold-gradient text-gold-foreground hover:opacity-90"
                          : "bg-primary text-primary-foreground hover:bg-charcoal-light"
                      }`}
                    >
                      Get Started →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            All packages include our ROI guarantee. Not sure which to choose?{" "}
            <Link to="/contact" className="text-gold hover:text-gold-light transition-colors font-medium">Book a free audit</Link>{" "}
            and we'll recommend the best fit.
          </p>
        </div>
      </section>

      {/* Add-ons */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            label="Customize"
            title="Add-Ons"
            description="Enhance any package with targeted add-ons for your specific needs."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {addons.map((addon, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, ease: "easeOut" as const }}
                className="rounded-sm border border-border bg-card p-6 hover:border-gold/20 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold text-foreground">{addon.name}</h4>
                  <span className="text-sm font-bold text-gold">{addon.price}</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{addon.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" aria-label="Frequently asked questions">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading
            label="FAQ"
            title="Frequently Asked Questions"
            description="Everything you need to know before getting started."
          />
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, ease: "easeOut" as const }}
                className="rounded-sm border border-border bg-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gold/30"
                  aria-expanded={openFaq === i}
                >
                  <span className="text-sm font-semibold text-foreground pr-4">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
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
                  transition={{ duration: 0.25, ease: "easeOut" as const }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding charcoal-gradient">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionHeading
            label="Ready?"
            title="Let's Build Your Automation System"
            description="Book a free audit and get a personalized recommendation — no commitment, no pressure."
            light
          />
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-sm gold-gradient px-8 py-4 text-sm font-semibold text-gold-foreground tracking-wide transition-all hover:opacity-90"
          >
            Book Your Free Audit →
          </Link>
        </div>
      </section>
    </>
  );
}

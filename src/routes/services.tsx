import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Automation Studio" },
      { name: "description", content: "AI-powered lead capture, workflow automation, chatbots, CRM integration, and more. Tailored automation solutions for your business." },
      { property: "og:title", content: "Our Services — Automation Studio" },
      { property: "og:description", content: "End-to-end automation services to streamline your business and scale without burnout." },
    ],
  }),
  component: ServicesPage,
});

const allServices = [
  {
    icon: "⚡",
    title: "Lead Capture & Instant Follow-Up",
    description: "Smart forms, landing pages, and automated response sequences that engage leads within seconds — not hours. Integrates with your existing website and social channels.",
    features: ["Auto-responder sequences", "Lead scoring", "Multi-channel capture", "CRM sync"],
  },
  {
    icon: "🔄",
    title: "Workflow Automation",
    description: "We map your repetitive processes and build automated workflows that eliminate manual work. From client onboarding to invoicing, we automate it all.",
    features: ["Process mapping", "Tool integration", "Error handling", "Performance monitoring"],
  },
  {
    icon: "🤖",
    title: "AI Chatbots & Virtual Assistants",
    description: "Custom-trained AI chatbots that qualify leads, answer FAQs, and book appointments 24/7. Intelligent enough to know when to hand off to a human.",
    features: ["Custom training", "Lead qualification", "Appointment booking", "Human handoff"],
  },
  {
    icon: "📊",
    title: "CRM Setup & Integration",
    description: "We set up, configure, and integrate your CRM so every customer interaction is tracked, every deal is managed, and nothing slips through the cracks.",
    features: ["Pipeline design", "Data migration", "Custom fields", "Reporting dashboards"],
  },
  {
    icon: "📧",
    title: "Email & SMS Automation",
    description: "Nurture campaigns that run on autopilot. Welcome sequences, re-engagement flows, abandoned cart recovery, and more — all personalized at scale.",
    features: ["Drip campaigns", "Segmentation", "A/B testing", "Analytics"],
  },
  {
    icon: "🎯",
    title: "Custom Dashboards & Reporting",
    description: "Real-time visibility into your KPIs. Custom dashboards that pull data from all your tools so you can make decisions at a glance.",
    features: ["Multi-source data", "Real-time updates", "Custom KPIs", "Automated reports"],
  },
];

function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding charcoal-gradient">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            label="Our Services"
            title="Automation Solutions Built for Growth"
            description="Every solution is custom-built for your business. No templates, no cookie-cutter approaches — just intelligent systems that deliver results."
            light
          />
        </div>
      </section>

      {/* Services grid */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-sm border border-border bg-card p-8 md:p-10 transition-all hover:border-gold/30 hover:shadow-lg"
              >
                <span className="text-4xl">{service.icon}</span>
                <h3 className="font-heading text-2xl font-bold text-foreground mt-5">{service.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.features.map((f) => (
                    <span key={f} className="inline-block text-xs font-medium bg-secondary text-secondary-foreground px-3 py-1 rounded-sm">
                      {f}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionHeading
            label="Ready to Start?"
            title="Let's Automate Your Business"
            description="Book a free strategy audit and discover which automations will deliver the biggest ROI for your business."
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

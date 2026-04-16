import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Automation Studio" },
      { name: "description", content: "AI-powered lead capture, workflow automation, chatbots, CRM integration, email sequences, and custom dashboards. See deliverables, timelines, and pricing." },
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
    problem: "You're losing 30–50% of inbound leads because no one responds fast enough. Prospects go cold or choose a competitor who replied first.",
    deliverables: [
      "Multi-channel lead capture (web forms, social, landing pages)",
      "Instant SMS + email auto-responder sequences",
      "Lead scoring and priority routing",
      "CRM integration with real-time sync",
      "Performance dashboard with conversion tracking",
    ],
    timeline: "1–2 weeks",
    startingPrice: "$2,500",
  },
  {
    icon: "🔄",
    title: "Workflow Automation",
    problem: "Your team spends 15+ hours per week on repetitive tasks — data entry, status updates, file management — that add zero value to your bottom line.",
    deliverables: [
      "Current workflow audit and process mapping",
      "Custom n8n/Make automation builds",
      "Multi-tool integrations (CRM, email, Slack, etc.)",
      "Error handling and retry logic",
      "Documentation and training",
    ],
    timeline: "2–3 weeks",
    startingPrice: "$3,000",
  },
  {
    icon: "🤖",
    title: "AI Chatbots & Virtual Assistants",
    problem: "You can't be available 24/7, but your prospects expect instant answers. Missed chats = missed revenue.",
    deliverables: [
      "Custom-trained AI chatbot for your business",
      "Lead qualification conversation flows",
      "Appointment booking integration",
      "Smart human handoff protocols",
      "Analytics dashboard with conversation insights",
    ],
    timeline: "2–3 weeks",
    startingPrice: "$3,500",
  },
  {
    icon: "📊",
    title: "CRM Setup & Integration",
    problem: "Your customer data lives in 5 different tools. Deals fall through the cracks because no one has the full picture.",
    deliverables: [
      "CRM selection guidance or optimization",
      "Custom pipeline and stage design",
      "Data migration from existing tools",
      "Automated deal tracking and reminders",
      "Custom reporting dashboards",
    ],
    timeline: "1–2 weeks",
    startingPrice: "$2,000",
  },
  {
    icon: "📧",
    title: "Email & SMS Automation",
    problem: "You know you should be nurturing leads, but manually sending follow-ups is impossible at scale.",
    deliverables: [
      "Welcome and onboarding sequences",
      "Re-engagement and win-back campaigns",
      "Abandoned cart / proposal follow-ups",
      "Segmentation and personalization logic",
      "A/B testing framework with analytics",
    ],
    timeline: "1–2 weeks",
    startingPrice: "$2,000",
  },
  {
    icon: "🎯",
    title: "Custom Dashboards & Reporting",
    problem: "You're making decisions based on gut feeling because pulling data from multiple tools takes hours.",
    deliverables: [
      "Multi-source data integration",
      "Real-time KPI dashboards",
      "Automated weekly/monthly reports",
      "Custom metrics and goal tracking",
      "Team performance visibility",
    ],
    timeline: "1–2 weeks",
    startingPrice: "$1,500",
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
            description="Every solution is custom-built for your business. No templates, no cookie-cutter approaches — just intelligent systems that deliver measurable results."
            light
          />
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="mx-auto max-w-5xl px-6 space-y-8">
          {allServices.map((service, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut" as const }}
              className="rounded-sm border border-border bg-card overflow-hidden hover:border-gold/20 transition-colors"
            >
              <div className="p-8 md:p-10">
                {/* Header */}
                <div className="flex items-start gap-4">
                  <span className="text-4xl shrink-0">{service.icon}</span>
                  <div>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">{service.title}</h2>
                    <div className="flex flex-wrap items-center gap-4 mt-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-gold">{service.timeline}</span>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-sm font-semibold text-foreground">From {service.startingPrice}</span>
                    </div>
                  </div>
                </div>

                {/* Problem */}
                <div className="mt-6 p-5 rounded-sm bg-destructive/5 border border-destructive/10">
                  <p className="text-sm font-medium text-foreground mb-1">The Problem:</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.problem}</p>
                </div>

                {/* Deliverables */}
                <div className="mt-6">
                  <p className="text-sm font-medium text-foreground mb-3">What You Get:</p>
                  <ul className="space-y-2">
                    {service.deliverables.map((d, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="text-gold mt-0.5 shrink-0">✓</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-charcoal-light focus:outline-none focus:ring-2 focus:ring-gold/40"
                  >
                    Get Started →
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding charcoal-gradient">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionHeading
            label="Not Sure Where to Start?"
            title="Book a Free Audit"
            description="We'll analyze your current workflows and recommend the automations that'll deliver the biggest ROI — completely free."
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

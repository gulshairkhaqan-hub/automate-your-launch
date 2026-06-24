import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { GlowCard, getGradient } from "../components/GlowCard";

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
    problem: "Your team spends 15+ hours per week on repetitive tasks — data entry, status updates, file management — that add zero value.",
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
      <section className="relative section-padding charcoal-gradient bg-noise overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionHeading
            label="Services"
            title="Built for growth. Engineered to last."
            description="Every solution is custom-built for your business. No templates, no cookie-cutter approaches — just intelligent systems that deliver measurable results."
          />
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="mx-auto max-w-5xl px-6 space-y-6">
          {allServices.map((service, i) => (
            <GlowCard
              key={i}
              gradient={getGradient(i)}
              delay={i * 0.1}
            >
              <div className="p-7 md:p-10">
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#1A1A1C] border border-white/10 flex items-center justify-center text-2xl shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-white tracking-tight">{service.title}</h2>
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                      <span className="font-mono text-xs font-medium uppercase tracking-wider text-white/70 border border-white/20 rounded-full px-2.5 py-0.5">{service.timeline}</span>
                      <span className="font-mono text-sm font-semibold text-white">from {service.startingPrice}</span>
                    </div>
                  </div>
                </div>

                {/* Problem */}
                <div className="mt-6 p-5 rounded-xl bg-[#FF3D77]/10 border border-[#FF3D77]/20">
                  <p className="font-mono text-xs uppercase tracking-wider text-[#FF3D77] font-semibold mb-2">// the problem</p>
                  <p className="text-sm text-white/85 leading-relaxed">{service.problem}</p>
                </div>

                {/* Deliverables */}
                <div className="mt-6">
                  <p className="font-mono text-xs uppercase tracking-wider text-[#7DD3FC] font-semibold mb-3">// what you get</p>
                  <ul className="space-y-2.5">
                    {service.deliverables.map((d, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-gray-400">
                        <span className="text-[#7DD3FC] mt-0.5 shrink-0">✓</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="btn-press inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold text-white border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all"
                  >
                    Get Started →
                  </Link>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative section-padding charcoal-gradient overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <SectionHeading
            label="Not Sure Where to Start?"
            title="Book a free audit."
            description="We'll analyze your current workflows and recommend the automations that'll deliver the biggest ROI — completely free."
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

import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Automation Studio" },
      { name: "description", content: "See how real businesses transformed their operations with AI-powered automation. Before/after results, KPIs, and ROI breakdowns." },
      { property: "og:title", content: "Case Studies — Automation Studio" },
      { property: "og:description", content: "Real automation success stories with measurable results from coaches, agencies, and e-commerce businesses." },
    ],
  }),
  component: CaseStudiesPage,
});

const industries = ["All", "Real Estate", "E-Commerce", "Coaching", "Agency", "Local Business"] as const;

const caseStudies = [
  {
    industry: "Real Estate",
    title: "How a Real Estate Team Captured 98% of Leads and Closed 145% More Deals",
    client: "Pacific Realty Group",
    before: [
      "Manual lead follow-up taking 4+ hours",
      "40% of leads never contacted",
      "No system for tracking pipeline",
      "Agents overwhelmed with admin",
    ],
    after: [
      "Instant automated follow-up in < 30 seconds",
      "98% lead capture rate across all channels",
      "Full CRM pipeline with automated tracking",
      "3 hours saved per agent per day",
    ],
    kpis: [
      { value: "98%", label: "Lead Capture Rate", before: "60%" },
      { value: "< 30s", label: "Response Time", before: "4+ hours" },
      { value: "145%", label: "More Closings", before: "Baseline" },
      { value: "3hrs/day", label: "Time Saved Per Agent", before: "0" },
    ],
    quote: "We went from losing 40% of leads to capturing 98%. Automation Studio transformed our entire follow-up process and our revenue shows it.",
    quoteName: "Sarah Chen",
    quoteRole: "Team Lead, Pacific Realty Group",
    services: ["Lead Capture", "CRM Integration", "SMS Automation"],
  },
  {
    industry: "E-Commerce",
    title: "12x Faster Customer Response and 35% Higher Repeat Purchase Rate",
    client: "Bloom Naturals",
    before: [
      "200+ daily support tickets handled manually",
      "4-hour average response time",
      "No post-purchase follow-up",
      "3.2-star support rating",
    ],
    after: [
      "67% of tickets resolved by AI chatbot",
      "Under 2-minute average response",
      "Automated review requests and loyalty sequences",
      "4.8-star support rating",
    ],
    kpis: [
      { value: "12x", label: "Faster Response", before: "4hrs" },
      { value: "67%", label: "Tickets Auto-Resolved", before: "0%" },
      { value: "35%", label: "Higher Repeat Rate", before: "18%" },
      { value: "$180K", label: "Annual Revenue Lift", before: "N/A" },
    ],
    quote: "Our customer support runs itself now. Response time went from 4 hours to under 2 minutes, and our repeat purchase rate jumped 35%.",
    quoteName: "Marcus Williams",
    quoteRole: "Founder, Bloom Naturals",
    services: ["AI Chatbot", "Email Automation", "Dashboard"],
  },
  {
    industry: "Coaching",
    title: "A Business Coach Doubled Her Client Base While Working 20 Fewer Hours Per Week",
    client: "Park Coaching Co.",
    before: [
      "20+ hours/week on admin and scheduling",
      "Manual client onboarding (2–3 days)",
      "No lead nurture system",
      "Maxed out at 15 clients",
    ],
    after: [
      "Automated scheduling, reminders, and follow-ups",
      "Client onboarding in under 1 hour",
      "Automated lead nurture converting 3x more prospects",
      "Scaled to 32 clients with less effort",
    ],
    kpis: [
      { value: "20hrs", label: "Freed Per Week", before: "0" },
      { value: "2x", label: "Client Base", before: "15 clients" },
      { value: "3x", label: "Lead Conversion", before: "Baseline" },
      { value: "4.9★", label: "Client Satisfaction", before: "4.2★" },
    ],
    quote: "I freed up 20 hours a week and doubled my client base. The ROI is insane — best investment I've made in my business.",
    quoteName: "Jessica Park",
    quoteRole: "Business Coach, Park Coaching Co.",
    services: ["Workflow Automation", "Lead Capture", "Email Sequences"],
  },
  {
    industry: "Agency",
    title: "An Agency Cut Onboarding From 3 Days to 3 Hours and Scaled to 50+ Clients",
    client: "ScaleUp Digital Agency",
    before: [
      "3-day client onboarding process",
      "Scattered project data across 6 tools",
      "No automated reporting for clients",
      "Team spending 30% of time on internal ops",
    ],
    after: [
      "3-hour automated onboarding flow",
      "Unified data hub connecting all tools",
      "Automated weekly client reports",
      "Ops time reduced to 10% — more focus on delivery",
    ],
    kpis: [
      { value: "24x", label: "Faster Onboarding", before: "3 days" },
      { value: "50+", label: "Active Clients", before: "28" },
      { value: "20%", label: "Revenue Growth", before: "Plateau" },
      { value: "10%", label: "Time on Ops (from 30%)", before: "30%" },
    ],
    quote: "Client onboarding went from 3 days to 3 hours. Our team can finally focus on strategy instead of admin busywork.",
    quoteName: "David Ortega",
    quoteRole: "Operations Director, ScaleUp Agency",
    services: ["Workflow Automation", "CRM Integration", "Dashboards"],
  },
  {
    industry: "Local Business",
    title: "A Local Dental Practice Filled 95% of Available Appointments Automatically",
    client: "Bright Smile Dental",
    before: [
      "30% of appointment slots unfilled",
      "Manual phone confirmations and reminders",
      "No online booking system",
      "Losing patients to tech-savvy competitors",
    ],
    after: [
      "95% appointment fill rate",
      "Automated reminders via SMS + email",
      "24/7 online booking with AI pre-screening",
      "40% increase in new patient acquisition",
    ],
    kpis: [
      { value: "95%", label: "Appointment Fill Rate", before: "70%" },
      { value: "40%", label: "More New Patients", before: "Baseline" },
      { value: "85%", label: "Fewer No-Shows", before: "22% no-show" },
      { value: "$95K", label: "Annual Revenue Lift", before: "N/A" },
    ],
    quote: "We went from chasing patients by phone to having a fully booked calendar. The automation paid for itself in the first month.",
    quoteName: "Dr. Amy Torres",
    quoteRole: "Owner, Bright Smile Dental",
    services: ["AI Chatbot", "SMS Automation", "Lead Capture"],
  },
];

function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filtered = activeFilter === "All"
    ? caseStudies
    : caseStudies.filter(s => s.industry === activeFilter);

  return (
    <>
      {/* Hero */}
      <section className="section-padding charcoal-gradient">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            label="Case Studies"
            title="Real Results. Real Businesses."
            description="See how we've helped businesses like yours automate operations, capture more leads, and scale faster — with measurable ROI."
            light
          />
        </div>
      </section>

      {/* Filter chips */}
      <section className="bg-cream py-6 border-b border-border/50 sticky top-16 md:top-20 z-30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Filter by industry">
            {industries.map((industry) => (
              <button
                key={industry}
                role="tab"
                aria-selected={activeFilter === industry}
                onClick={() => setActiveFilter(industry)}
                className={`px-4 py-2 rounded-sm text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-gold/40 ${
                  activeFilter === industry
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-gold/30"
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="section-padding">
        <div className="mx-auto max-w-5xl px-6 space-y-12">
          {filtered.map((study, i) => (
            <motion.article
              key={study.client}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" as const }}
              className="rounded-sm border border-border bg-card overflow-hidden"
            >
              <div className="p-8 md:p-12">
                {/* Header */}
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold">{study.industry}</span>
                  {study.services.map((s) => (
                    <span key={s} className="inline-block text-xs font-medium bg-secondary text-secondary-foreground px-2.5 py-0.5 rounded-sm">{s}</span>
                  ))}
                </div>
                <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground leading-snug">{study.title}</h2>
                <p className="text-sm text-muted-foreground mt-1">{study.client}</p>

                {/* Before vs After */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="p-5 rounded-sm bg-destructive/5 border border-destructive/10">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-destructive mb-3">Before</h4>
                    <ul className="space-y-2">
                      {study.before.map((b, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-destructive mt-0.5 shrink-0">✗</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-5 rounded-sm bg-green-500/5 border border-green-500/10">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-green-700 mb-3">After</h4>
                    <ul className="space-y-2">
                      {study.after.map((a, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-green-600 mt-0.5 shrink-0">✓</span>
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* KPI blocks */}
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {study.kpis.map((kpi, j) => (
                    <div key={j} className="text-center p-4 rounded-sm bg-cream border border-border/50">
                      <p className="font-heading text-xl md:text-2xl font-bold gold-text-gradient">{kpi.value}</p>
                      <p className="text-xs text-muted-foreground mt-1 font-medium">{kpi.label}</p>
                      <p className="text-[10px] text-muted-foreground/60 mt-0.5">was: {kpi.before}</p>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row gap-4 md:items-center">
                  <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center text-sm font-semibold text-gold shrink-0">
                    {study.quoteName.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm text-foreground/80 italic leading-relaxed">"{study.quote}"</p>
                    <p className="text-sm font-medium text-gold mt-2">— {study.quoteName}, {study.quoteRole}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No case studies found for this industry yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding charcoal-gradient">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionHeading
            label="Your Turn"
            title="Ready to Be Our Next Success Story?"
            description="Book a free automation audit and let's map out your path to scalable growth — with measurable results."
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

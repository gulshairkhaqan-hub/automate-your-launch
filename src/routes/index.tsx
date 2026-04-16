import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { LeadCaptureForm } from "../components/LeadCaptureForm";
import heroBg from "../assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Automation Studio — Automate Your Business. Scale Without Burnout." },
      { name: "description", content: "We build AI-powered workflows that save time, reduce costs, and increase revenue. Book a free automation audit today." },
      { property: "og:title", content: "Automation Studio — Automate Your Business. Scale Without Burnout." },
      { property: "og:description", content: "AI-powered automation for coaches, agencies, real estate teams, and modern businesses." },
    ],
  }),
  component: HomePage,
});

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.15 } },
};

const services = [
  { icon: "⚡", title: "Lead Capture & Follow-Up", description: "Automated forms, instant responses, and smart follow-up sequences that never let a lead slip away." },
  { icon: "🔄", title: "Workflow Automation", description: "Connect your tools and eliminate repetitive tasks. From onboarding to invoicing — fully automated." },
  { icon: "🤖", title: "AI Chatbots", description: "24/7 intelligent chatbots that qualify leads, answer questions, and book appointments while you sleep." },
  { icon: "📊", title: "CRM Integration", description: "Unified customer data across all platforms. Every interaction tracked, every deal managed." },
  { icon: "📧", title: "Email & SMS Sequences", description: "Personalized nurture campaigns on autopilot that turn cold leads into paying customers." },
  { icon: "🎯", title: "Custom Dashboards", description: "Real-time KPI dashboards pulling from all your tools so you make data-driven decisions instantly." },
];

const kpis = [
  { value: "500+", label: "Workflows Automated" },
  { value: "2.4M", label: "Leads Captured" },
  { value: "98%", label: "Client Retention" },
  { value: "37x", label: "Average ROI" },
];

const testimonials = [
  { name: "Sarah Chen", role: "Real Estate Team Lead", company: "Pacific Realty", quote: "We went from losing 40% of leads to capturing 98%. Automation Studio transformed our entire follow-up process.", metric: "145% more closings" },
  { name: "Marcus Williams", role: "Founder", company: "Bloom Naturals", quote: "Our customer support runs itself now. Response time went from 4 hours to under 2 minutes. Game-changer.", metric: "12x faster responses" },
  { name: "Jessica Park", role: "Business Coach", company: "Park Coaching Co.", quote: "I freed up 20 hours a week and doubled my client base. The ROI is insane — best investment I've made.", metric: "20 hrs/week saved" },
  { name: "David Ortega", role: "Operations Director", company: "ScaleUp Agency", quote: "Client onboarding went from 3 days to 3 hours. Our team can finally focus on strategy instead of admin.", metric: "24x faster onboarding" },
];

const logos = ["TechFlow", "ScaleUp", "GrowthHQ", "NextLevel", "ProSync", "AutoBase", "RevOps", "FlowState"];

function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/85 to-charcoal/60" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:py-36">
          <motion.div {...stagger} initial="initial" animate="animate" className="max-w-2xl">
            <motion.span {...fadeUp} className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-6">
              AI-Powered Automation Agency
            </motion.span>
            <motion.h1 {...fadeUp} className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-[1.08]">
              Automate Your Business.{" "}
              <span className="gold-text-gradient">Scale Without Burnout.</span>
            </motion.h1>
            <motion.p {...fadeUp} className="mt-6 text-lg md:text-xl text-primary-foreground/70 leading-relaxed max-w-xl font-light">
              We build AI-powered workflows that save time, reduce costs, and increase revenue.
            </motion.p>
            <motion.div {...fadeUp} className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-sm gold-gradient px-8 py-4 text-sm font-semibold text-gold-foreground tracking-wide transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:ring-offset-2"
              >
                Book Free Automation Audit
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center rounded-sm border border-primary-foreground/20 px-8 py-4 text-sm font-medium text-primary-foreground transition-all hover:bg-primary-foreground/5 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
              >
                See Case Studies
              </Link>
            </motion.div>
            <motion.div {...fadeUp} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-primary-foreground/50">
              <span>✓ Free strategy audit</span>
              <span>✓ No lock-in contracts</span>
              <span>✓ ROI guarantee</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Client Logos ─────────────────────────────────── */}
      <section className="bg-cream py-10 border-y border-border/50" aria-label="Trusted clients">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">Trusted by 200+ forward-thinking businesses</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {logos.map((logo) => (
              <span key={logo} className="text-base font-semibold text-muted-foreground/30 tracking-wider select-none">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pain Points ──────────────────────────────────── */}
      <section className="section-padding" aria-label="Common business problems">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            label="The Problem"
            title="Sound Familiar?"
            description="Most businesses are leaving money on the table because of these common bottlenecks."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Missed Leads", desc: "Slow follow-up means prospects go to your competitors. Every minute counts — and you're losing hours.", icon: "🚫" },
              { title: "Manual Operations", desc: "Your team spends hours on tasks that should take seconds. Time is your most valuable asset.", icon: "⏰" },
              { title: "No Systems", desc: "Without automation, scaling means hiring. And hiring means more complexity, not less.", icon: "🔧" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, ease: "easeOut" as const }}
                className="rounded-sm border border-border bg-card p-8 hover:border-gold/20 transition-colors"
              >
                <span className="text-3xl">{item.icon}</span>
                <h3 className="font-heading text-xl font-bold text-foreground mt-4">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Snapshot ────────────────────────────── */}
      <section className="section-padding bg-cream" aria-label="Our services">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            label="What We Do"
            title="Automation Services"
            description="End-to-end automation solutions tailored to your business needs."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, ease: "easeOut" as const }}
                className="group rounded-sm border border-border bg-card p-8 transition-all hover:border-gold/30 hover:shadow-lg"
              >
                <span className="text-3xl">{service.icon}</span>
                <h3 className="font-heading text-lg font-bold text-foreground mt-4">{service.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-gold-light transition-colors"
            >
              View all services & pricing →
            </Link>
          </div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────── */}
      <section className="section-padding" aria-label="Our process">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            label="Our Process"
            title="3 Steps to Automation"
            description="A simple, proven process to transform your business operations."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { step: "01", title: "Free Audit", desc: "We analyze your current workflows, identify bottlenecks, and map out the biggest automation opportunities — free of charge." },
              { step: "02", title: "Custom Build", desc: "We design and build your automation system — tailored to your exact business needs, tools, and goals. No templates." },
              { step: "03", title: "Launch & Scale", desc: "Go live with full support. We monitor results, optimize performance, and scale your automations as your business grows." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, ease: "easeOut" as const }}
                className="text-center relative"
              >
                {i < 2 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] border-t border-dashed border-border" />
                )}
                <span className="font-heading text-5xl md:text-6xl font-bold gold-text-gradient relative z-10">{item.step}</span>
                <h3 className="font-heading text-xl font-bold text-foreground mt-4">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KPI Strip ────────────────────────────────────── */}
      <section className="gold-gradient py-16 md:py-20" aria-label="Key results">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {kpis.map((kpi, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, ease: "easeOut" as const }}
                className="text-center"
              >
                <p className="font-heading text-4xl md:text-5xl font-bold text-gold-foreground">{kpi.value}</p>
                <p className="text-sm text-gold-foreground/70 mt-2 font-medium">{kpi.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────── */}
      <section className="section-padding charcoal-gradient" aria-label="Client testimonials">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            label="Results"
            title="What Our Clients Say"
            description="Real results from real businesses — not hypotheticals."
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, ease: "easeOut" as const }}
                className="rounded-sm border border-primary-foreground/10 bg-primary-foreground/5 p-8"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold">{t.metric}</span>
                </div>
                <p className="text-sm text-primary-foreground/80 leading-relaxed italic">"{t.quote}"</p>
                <div className="mt-6 pt-4 border-t border-primary-foreground/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-sm font-semibold text-gold">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary-foreground">{t.name}</p>
                    <p className="text-xs text-primary-foreground/50">{t.role}, {t.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lead Capture CTA ─────────────────────────────── */}
      <section className="section-padding" aria-label="Book your free audit">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading
            label="Get Started"
            title="Book Your Free Automation Audit"
            description="Discover how much time and money you could save. No commitment, no pressure — just clarity."
          />
          <div className="rounded-sm border border-border bg-card p-8 md:p-10 shadow-sm">
            <LeadCaptureForm />
          </div>
        </div>
      </section>

      {/* ── Final CTA Banner ─────────────────────────────── */}
      <section className="charcoal-gradient py-16 md:py-20" aria-label="Call to action">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight">
              Stop Losing Leads.{" "}
              <span className="gold-text-gradient">Start Scaling.</span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-primary-foreground/60 max-w-xl mx-auto">
              Join 200+ businesses that automated their way to growth. Your free audit is one click away.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-sm gold-gradient px-8 py-4 text-sm font-semibold text-gold-foreground tracking-wide transition-all hover:opacity-90"
              >
                Book Free Automation Audit →
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-16 text-sm text-primary-foreground/40">
              <span className="flex items-center gap-2">🛡️ ROI Guarantee</span>
              <span className="flex items-center gap-2">⚡ Setup in 2 Weeks</span>
              <span className="flex items-center gap-2">🤝 No Lock-In Contracts</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

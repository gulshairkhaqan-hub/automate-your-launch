import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { LeadCaptureForm } from "../components/LeadCaptureForm";
import heroBg from "../assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Automation Studio — Automate Your Business. Scale Without Burnout." },
      { name: "description", content: "We build AI-powered automation systems that capture leads, streamline operations, and help you scale — without hiring more people." },
      { property: "og:title", content: "Automation Studio — Automate Your Business. Scale Without Burnout." },
      { property: "og:description", content: "AI-powered automation for coaches, agencies, real estate teams, and modern businesses." },
    ],
  }),
  component: HomePage,
});

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.15 } },
};

const services = [
  { icon: "⚡", title: "Lead Capture & Follow-Up", description: "Never miss a lead. Automated forms, instant responses, and smart follow-up sequences." },
  { icon: "🔄", title: "Workflow Automation", description: "Eliminate repetitive tasks. Connect your tools and let automation handle the busywork." },
  { icon: "🤖", title: "AI-Powered Chatbots", description: "24/7 customer engagement with intelligent chatbots that qualify leads while you sleep." },
  { icon: "📊", title: "CRM Integration", description: "Unified customer data across all platforms. Every interaction tracked, every opportunity managed." },
  { icon: "📧", title: "Email & SMS Sequences", description: "Nurture leads on autopilot with personalized email and SMS campaigns that convert." },
  { icon: "🎯", title: "Custom Dashboards", description: "Real-time insights into your business metrics. Make data-driven decisions at a glance." },
];

const testimonials = [
  { name: "Sarah Chen", role: "Real Estate Team Lead", quote: "We went from losing 40% of leads to capturing 98%. Automation Studio transformed our entire follow-up process.", metric: "145% more closings" },
  { name: "Marcus Williams", role: "E-Commerce Founder", quote: "Our customer support runs itself now. Response time went from 4 hours to under 2 minutes.", metric: "12x faster responses" },
  { name: "Jessica Park", role: "Business Coach", quote: "I freed up 20 hours a week and doubled my client base. The ROI is insane.", metric: "20 hrs/week saved" },
];

const logos = ["TechFlow", "ScaleUp", "GrowthHQ", "NextLevel", "ProSync", "AutoBase"];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/60" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32">
          <motion.div {...stagger} initial="initial" animate="animate" className="max-w-2xl">
            <motion.span {...fadeUp} className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-6">
              AI-Powered Automation Agency
            </motion.span>
            <motion.h1 {...fadeUp} className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-[1.1]">
              Automate Your Business.{" "}
              <span className="gold-text-gradient">Scale Without Burnout.</span>
            </motion.h1>
            <motion.p {...fadeUp} className="mt-6 text-lg md:text-xl text-primary-foreground/70 leading-relaxed max-w-xl">
              We build intelligent systems that capture every lead, streamline your operations, and help you grow — without hiring more people.
            </motion.p>
            <motion.div {...fadeUp} className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-sm gold-gradient px-8 py-4 text-sm font-semibold text-gold-foreground tracking-wide transition-all hover:opacity-90"
              >
                Book Your Free Audit
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center rounded-sm border border-primary-foreground/20 px-8 py-4 text-sm font-medium text-primary-foreground transition-all hover:bg-primary-foreground/5"
              >
                See Results
              </Link>
            </motion.div>
            <motion.div {...fadeUp} className="mt-8 flex items-center gap-6 text-sm text-primary-foreground/50">
              <span className="flex items-center gap-2">✓ Free strategy audit</span>
              <span className="flex items-center gap-2">✓ No lock-in contracts</span>
              <span className="flex items-center gap-2">✓ ROI guarantee</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Client logos */}
      <section className="bg-cream py-10 border-y border-border/50">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">Trusted by forward-thinking businesses</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {logos.map((logo) => (
              <span key={logo} className="text-lg font-semibold text-muted-foreground/40 tracking-wider">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            label="The Problem"
            title="Sound Familiar?"
            description="Most businesses are leaving money on the table because of these common bottlenecks."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Missed Leads", desc: "Slow follow-up means prospects go to your competitors. Every minute counts." },
              { title: "Manual Operations", desc: "Your team spends hours on tasks that should take seconds. Time is your most valuable asset." },
              { title: "No Systems", desc: "Without automation, scaling means hiring. And hiring means more complexity, not less." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-sm border border-border bg-card p-8"
              >
                <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center text-gold-foreground font-bold text-sm mb-5">
                  {i + 1}
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-cream">
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
                transition={{ delay: i * 0.08 }}
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
              Explore all services →
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            label="Our Process"
            title="3 Steps to Automation"
            description="A simple, proven process to transform your business operations."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Free Audit", desc: "We analyze your current workflows and identify the biggest automation opportunities." },
              { step: "02", title: "Custom Build", desc: "We design and build your automation system — tailored to your exact business needs." },
              { step: "03", title: "Launch & Scale", desc: "Go live, monitor results, and continuously optimize for maximum ROI." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <span className="font-heading text-5xl font-bold gold-text-gradient">{item.step}</span>
                <h3 className="font-heading text-xl font-bold text-foreground mt-4">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding charcoal-gradient">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            label="Results"
            title="What Our Clients Say"
            description="Real results from real businesses."
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-sm border border-primary-foreground/10 bg-primary-foreground/5 p-8"
              >
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-gold mb-4">{t.metric}</span>
                <p className="text-sm text-primary-foreground/80 leading-relaxed italic">"{t.quote}"</p>
                <div className="mt-6 pt-4 border-t border-primary-foreground/10">
                  <p className="text-sm font-semibold text-primary-foreground">{t.name}</p>
                  <p className="text-xs text-primary-foreground/50">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture CTA */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading
            label="Get Started"
            title="Book Your Free Automation Audit"
            description="Discover how much time and money you could save. No commitment, no pressure — just clarity."
          />
          <div className="rounded-sm border border-border bg-card p-8 md:p-10">
            <LeadCaptureForm />
          </div>
        </div>
      </section>

      {/* Guarantee bar */}
      <section className="bg-cream py-12 border-t border-border/50">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🛡️</span>
              <span className="text-sm font-medium text-foreground">ROI Guarantee</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚡</span>
              <span className="text-sm font-medium text-foreground">Setup in 2 Weeks</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🤝</span>
              <span className="text-sm font-medium text-foreground">No Lock-In Contracts</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

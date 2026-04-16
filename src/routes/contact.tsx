import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { LeadCaptureForm } from "../components/LeadCaptureForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book a Free Audit — Automation Studio" },
      { name: "description", content: "Schedule your free automation audit. Discover how AI-powered automation can save you 10+ hours per week and scale your business." },
      { property: "og:title", content: "Book a Free Audit — Automation Studio" },
      { property: "og:description", content: "Get a personalized automation strategy for your business — completely free." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding charcoal-gradient">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            label="Get Started"
            title="Book Your Free Automation Audit"
            description="Tell us about your business and we'll show you exactly where automation can save you time and money — no commitment required."
            light
          />
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-sm border border-border bg-card p-8 md:p-10 shadow-sm">
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">Tell Us About Your Business</h3>
                <p className="text-sm text-muted-foreground mb-6">We'll respond within 24 hours with a personalized automation assessment.</p>
                <LeadCaptureForm />
              </div>

              {/* Calendly placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" as const }}
                className="mt-8 rounded-sm border border-border bg-card p-8 md:p-10"
              >
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">Prefer to Book Directly?</h3>
                <p className="text-sm text-muted-foreground mb-6">Skip the form and schedule a 30-minute strategy call at a time that works for you.</p>
                <div className="rounded-sm bg-cream border border-border/50 p-12 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-background border border-border mb-4">
                    <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                  </div>
                  <p className="font-heading text-lg font-bold text-foreground">Calendar Scheduling</p>
                  <p className="text-sm text-muted-foreground mt-1">Calendly integration coming soon</p>
                  <p className="text-xs text-muted-foreground/60 mt-2">In the meantime, fill out the form above and we'll schedule you within 24 hours.</p>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* What you'll get */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" as const }}
                className="rounded-sm border border-border bg-card p-8"
              >
                <h4 className="font-heading text-lg font-bold text-foreground mb-4">What You'll Get</h4>
                <ul className="space-y-3">
                  {[
                    "30-minute strategy call with an automation expert",
                    "Custom workflow analysis for your business",
                    "Prioritized automation roadmap with ROI estimates",
                    "Tool recommendations tailored to your stack",
                    "No commitment or sales pressure — ever",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="text-gold mt-0.5 shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* WhatsApp */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" as const }}
                className="rounded-sm border border-border bg-card p-8"
              >
                <h4 className="font-heading text-lg font-bold text-foreground mb-2">Chat on WhatsApp</h4>
                <p className="text-sm text-muted-foreground mb-4">Quick question? Prefer messaging? Reach us directly on WhatsApp.</p>
                <a
                  href="https://wa.me/15551234567?text=Hi%20Automation%20Studio%2C%20I%27m%20interested%20in%20learning%20about%20your%20automation%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full rounded-sm bg-[#25D366] px-6 py-3 text-sm font-semibold text-[#fff] transition-all hover:bg-[#22c55e] focus:outline-none focus:ring-2 focus:ring-[#25D366]/40"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </motion.div>

              {/* Guarantee */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" as const }}
                className="rounded-sm border border-gold/30 bg-cream p-8"
              >
                <span className="text-2xl">🛡️</span>
                <h4 className="font-heading text-lg font-bold text-foreground mt-3">Our Guarantee</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  If we can't identify at least 3 automations that would save you 10+ hours per week, we'll send you a $50 gift card for your time. Zero risk.
                </p>
              </motion.div>

              {/* Direct contact */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" as const }}
                className="rounded-sm border border-border bg-card p-8"
              >
                <h4 className="font-heading text-lg font-bold text-foreground mb-3">Direct Contact</h4>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2">📧 hello@automationstudio.com</p>
                  <p className="flex items-center gap-2">📞 (555) 123-4567</p>
                  <p className="flex items-center gap-2">🕐 Mon–Fri, 9am–6pm EST</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

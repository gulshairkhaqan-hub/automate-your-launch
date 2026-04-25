import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { LeadCaptureForm } from "../components/LeadCaptureForm";
import { WhatsAppLink, MailtoLink, WhatsAppIcon } from "../components/ContactActions";
import { OWNER_EMAIL, WHATSAPP_DISPLAY } from "@/lib/contact";

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
      <section className="relative section-padding charcoal-gradient bg-noise overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionHeading
            label="Get Started"
            title="Book your free automation audit."
            description="Tell us about your business and we'll show you exactly where automation can save you time and money — no commitment required."
          />
        </div>
      </section>

      {/* Main */}
      <section className="section-padding">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Form column */}
            <div className="lg:col-span-3 space-y-6">
              <div className="glass-card rounded-xl p-7 md:p-9">
                <h3 className="font-heading text-xl font-bold text-foreground mb-1">Tell us about your business</h3>
                <p className="text-sm text-muted-foreground mb-6">We'll respond within 24 hours with a personalized automation assessment.</p>
                <LeadCaptureForm />
              </div>

              {/* Calendly placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" as const }}
                className="glass-card rounded-xl p-7 md:p-9"
              >
                <h3 className="font-heading text-xl font-bold text-foreground mb-1">Prefer to book directly?</h3>
                <p className="text-sm text-muted-foreground mb-6">Skip the form and schedule a 30-min strategy call at a time that works for you.</p>
                <div className="rounded-lg bg-surface-3/60 border border-dashed border-border p-10 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full gold-gradient mb-4 shadow-md shadow-cyan/30">
                    <svg className="w-7 h-7 text-gold-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                  </div>
                  <p className="font-heading text-lg font-bold text-foreground">Calendar Scheduling</p>
                  <p className="font-mono text-xs text-cyan mt-1">// calendly_integration: pending</p>
                  <p className="text-xs text-muted-foreground/70 mt-2">In the meantime, fill out the form above and we'll schedule you within 24 hours.</p>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-5">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" as const }}
                className="glass-card rounded-xl p-7"
              >
                <h4 className="font-heading text-lg font-bold text-foreground mb-4">What you'll get</h4>
                <ul className="space-y-3">
                  {[
                    "30-minute strategy call with an automation expert",
                    "Custom workflow analysis for your business",
                    "Prioritized automation roadmap with ROI estimates",
                    "Tool recommendations tailored to your stack",
                    "No commitment or sales pressure — ever",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="text-cyan mt-0.5 shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" as const }}
                className="glass-card rounded-xl p-7"
              >
                <h4 className="font-heading text-lg font-bold text-foreground mb-2">Chat on WhatsApp</h4>
                <p className="text-sm text-muted-foreground mb-4">Quick question? Reach us directly.</p>
                <WhatsAppLink
                  message="Hi Automation Studio, I'm interested in your services."
                  className="btn-press inline-flex items-center justify-center gap-2 w-full rounded-md bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:bg-[#22c55e]"
                >
                  <WhatsAppIcon />
                  WhatsApp: {WHATSAPP_DISPLAY}
                </WhatsAppLink>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" as const }}
                className="rounded-xl p-7 border border-cyan/30 bg-cyan/5"
              >
                <span className="text-2xl">🛡️</span>
                <h4 className="font-heading text-lg font-bold text-foreground mt-3">Our guarantee</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  If we can't identify at least 3 automations that would save you 10+ hours/week, we'll send you a $50 gift card for your time. Zero risk.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" as const }}
                className="glass-card rounded-xl p-7"
              >
                <h4 className="font-heading text-lg font-bold text-foreground mb-3">Direct contact</h4>
                <div className="space-y-2.5 text-sm text-muted-foreground font-mono">
                  <p className="flex items-center gap-2">
                    <span className="text-cyan">→</span>
                    <MailtoLink subject="Inquiry from automation.studio" className="hover:text-foreground transition-colors">
                      {OWNER_EMAIL}
                    </MailtoLink>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-cyan">→</span>
                    <WhatsAppLink className="hover:text-foreground transition-colors">
                      WhatsApp: {WHATSAPP_DISPLAY}
                    </WhatsAppLink>
                  </p>
                  <p className="flex items-center gap-2"><span className="text-cyan">→</span> Mon–Fri, 9am–6pm PKT</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

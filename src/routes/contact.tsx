import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "../components/SectionHeading";
import { LeadCaptureForm } from "../components/LeadCaptureForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book a Free Audit — Automation Studio" },
      { name: "description", content: "Schedule your free automation audit. Discover how AI-powered automation can save you time, capture more leads, and scale your business." },
      { property: "og:title", content: "Book a Free Audit — Automation Studio" },
      { property: "og:description", content: "Get a personalized automation strategy for your business — completely free." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="section-padding charcoal-gradient">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            label="Get Started"
            title="Book Your Free Automation Audit"
            description="Tell us about your business and we'll show you exactly where automation can save you time and money."
            light
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-sm border border-border bg-card p-8 md:p-10">
                <h3 className="font-heading text-xl font-bold text-foreground mb-6">Tell Us About Your Business</h3>
                <LeadCaptureForm />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              <div className="rounded-sm border border-border bg-card p-8">
                <h4 className="font-heading text-lg font-bold text-foreground mb-4">What You'll Get</h4>
                <ul className="space-y-3">
                  {[
                    "30-minute strategy call with an automation expert",
                    "Custom workflow analysis for your business",
                    "Prioritized automation roadmap",
                    "ROI projection based on your current operations",
                    "No commitment or sales pressure",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="text-gold mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-sm border border-gold/30 bg-cream p-8">
                <span className="text-2xl">🛡️</span>
                <h4 className="font-heading text-lg font-bold text-foreground mt-3">Our Guarantee</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  If we can't identify at least 3 automations that would save you 10+ hours per week, we'll send you a $50 gift card for your time.
                </p>
              </div>

              <div className="rounded-sm border border-border bg-card p-8">
                <h4 className="font-heading text-lg font-bold text-foreground mb-2">Direct Contact</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>📧 hello@automationstudio.com</p>
                  <p>📞 (555) 123-4567</p>
                  <p>🕐 Mon–Fri, 9am–6pm EST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

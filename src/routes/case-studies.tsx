import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Automation Studio" },
      { name: "description", content: "See how real businesses transformed their operations with AI-powered automation. Real results, real ROI." },
      { property: "og:title", content: "Case Studies — Automation Studio" },
      { property: "og:description", content: "Real automation success stories from coaches, agencies, and e-commerce businesses." },
    ],
  }),
  component: CaseStudiesPage,
});

const caseStudies = [
  {
    category: "Real Estate",
    title: "How a Real Estate Team Captured 98% of Leads",
    client: "Pacific Realty Group",
    challenge: "Missing 40% of inbound leads due to slow manual follow-up. Agents were spending 3+ hours daily on admin tasks.",
    solution: "Implemented automated lead capture from all channels, instant SMS/email follow-up sequences, and smart lead routing based on agent availability and specialization.",
    results: [
      { metric: "98%", label: "Lead Capture Rate" },
      { metric: "145%", label: "More Closings" },
      { metric: "3hrs", label: "Saved Per Agent Daily" },
    ],
    quote: "We went from losing 40% of leads to capturing 98%. Automation Studio transformed our entire follow-up process.",
    quoteName: "Sarah Chen, Team Lead",
  },
  {
    category: "E-Commerce",
    title: "12x Faster Customer Response for a DTC Brand",
    client: "Bloom Naturals",
    challenge: "Customer support overwhelmed with 200+ daily inquiries. Average response time was 4 hours, leading to negative reviews and lost repeat customers.",
    solution: "Deployed AI chatbot for instant FAQ handling, automated order status updates, smart ticket routing, and proactive post-purchase sequences.",
    results: [
      { metric: "12x", label: "Faster Response" },
      { metric: "67%", label: "Fewer Tickets" },
      { metric: "35%", label: "Higher Repeat Rate" },
    ],
    quote: "Our customer support runs itself now. Response time went from 4 hours to under 2 minutes.",
    quoteName: "Marcus Williams, Founder",
  },
  {
    category: "Coaching",
    title: "A Business Coach Doubled Her Client Base",
    client: "Jessica Park Coaching",
    challenge: "Spending 20+ hours per week on admin, scheduling, follow-ups, and client onboarding. Couldn't take on more clients without burning out.",
    solution: "Built end-to-end automation for lead nurturing, appointment scheduling, client onboarding, session reminders, and progress tracking.",
    results: [
      { metric: "20hrs", label: "Freed Per Week" },
      { metric: "2x", label: "Client Base" },
      { metric: "4.9★", label: "Client Satisfaction" },
    ],
    quote: "I freed up 20 hours a week and doubled my client base. The ROI is insane.",
    quoteName: "Jessica Park, Business Coach",
  },
];

function CaseStudiesPage() {
  return (
    <>
      <section className="section-padding charcoal-gradient">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            label="Case Studies"
            title="Real Results. Real Businesses."
            description="See how we've helped businesses like yours automate operations, capture more leads, and scale faster."
            light
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-5xl px-6 space-y-16">
          {caseStudies.map((study, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-sm border border-border bg-card overflow-hidden"
            >
              <div className="p-8 md:p-12">
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">{study.category}</span>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">{study.title}</h2>
                <p className="text-sm text-muted-foreground mt-1">{study.client}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-2">Challenge</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-2">Solution</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{study.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {study.results.map((r, j) => (
                    <div key={j} className="text-center p-4 rounded-sm bg-cream">
                      <p className="font-heading text-2xl md:text-3xl font-bold gold-text-gradient">{r.metric}</p>
                      <p className="text-xs text-muted-foreground mt-1">{r.label}</p>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-sm text-foreground/80 italic leading-relaxed">"{study.quote}"</p>
                  <p className="text-sm font-medium text-gold mt-3">— {study.quoteName}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionHeading
            label="Your Turn"
            title="Ready to Be Our Next Success Story?"
            description="Book a free automation audit and let's map out your path to scalable growth."
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

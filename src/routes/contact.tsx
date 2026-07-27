import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "../components/SectionHeading";
import { LeadCaptureForm } from "../components/LeadCaptureForm";
import { WhatsAppLink, MailtoLink, WhatsAppIcon } from "../components/ContactActions";
import { OWNER_EMAIL, WHATSAPP_DISPLAY } from "@/lib/contact";
import { GlowCard, getGradient } from "../components/GlowCard";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Automation Studio" },
      {
        name: "description",
        content:
          "Book a premium AI automation audit. Get a clear roadmap, highest-impact opportunities, and expert implementation guidance tailored to your business.",
      },
      { property: "og:title", content: "Contact — Automation Studio" },
      {
        property: "og:description",
        content:
          "Start with a focused automation audit and receive a practical plan to improve growth, operations, and delivery quality.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="relative section-padding charcoal-gradient bg-noise overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionHeading
            label="Contact"
            title="Book your executive automation audit."
            description="Share your current bottlenecks and we'll return with a focused strategy on what to automate first, why, and what impact to expect."
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="lg:col-span-3 space-y-6">
              <GlowCard gradient={getGradient(0)} delay={0.1}>
                <div className="p-7 md:p-9">
                  <h3 className="font-heading text-xl font-bold text-white mb-1">
                    Tell us about your business
                  </h3>
                  <p className="text-sm text-gray-400 mb-6">
                    You'll hear back within 24 hours with next steps and recommended audit agenda.
                  </p>
                  <LeadCaptureForm />
                </div>
              </GlowCard>

              <GlowCard gradient={getGradient(1)} delay={0.2}>
                <div className="p-7 md:p-9">
                  <h3 className="font-heading text-xl font-bold text-white mb-1">
                    What happens after you submit
                  </h3>
                  <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3">
                    {[
                      {
                        title: "01 · Review",
                        desc: "We assess your current systems, goals, and constraints.",
                      },
                      {
                        title: "02 · Prioritize",
                        desc: "We define the highest-ROI automation opportunities.",
                      },
                      {
                        title: "03 · Plan",
                        desc: "You receive a clear roadmap and implementation options.",
                      },
                    ].map((item, i) => (
                      <div
                        key={item.title}
                        className="rounded-xl bg-[#1A1A1C] border border-white/10 p-4"
                      >
                        <p className="font-mono text-xs uppercase tracking-wider text-[#7DD3FC]">
                          {item.title}
                        </p>
                        <p className="mt-2 text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </GlowCard>
            </div>

            <div className="lg:col-span-2 space-y-5">
              <GlowCard gradient={getGradient(2)} delay={0.1}>
                <div className="p-7">
                  <h4 className="font-heading text-lg font-bold text-white mb-4">
                    What you'll get
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "A founder-level review of your current automation maturity",
                      "A prioritized list of the highest-leverage workflow upgrades",
                      "Estimated impact on response speed, capacity, and efficiency",
                      "Recommended implementation sequence with practical next steps",
                      "A no-pressure conversation focused on fit and outcomes",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                        <span className="text-[#7DD3FC] mt-0.5 shrink-0">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </GlowCard>

              <GlowCard gradient={getGradient(3)} delay={0.2}>
                <div className="p-7">
                  <h4 className="font-heading text-lg font-bold text-white mb-2">
                    Direct WhatsApp support
                  </h4>
                  <p className="text-sm text-gray-400 mb-4">
                    Need a quick answer before booking? Message directly.
                  </p>
                  <WhatsAppLink
                    message="Hi Automation Studio, I want to discuss a possible automation project."
                    className="btn-press inline-flex items-center justify-center gap-2 w-full rounded-md bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:bg-[#22c55e]"
                  >
                    <WhatsAppIcon />
                    WhatsApp: {WHATSAPP_DISPLAY}
                  </WhatsAppLink>
                </div>
              </GlowCard>

              <GlowCard
                gradient={getGradient(4)}
                delay={0.3}
                borderWidth={1}
                glowBlur={30}
                glowOpacity={0.4}
              >
                <div className="p-7">
                  <span className="text-2xl">🛡️</span>
                  <h4 className="font-heading text-lg font-bold text-white mt-3">
                    Professional standards
                  </h4>
                  <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                    We only take projects where we can create measurable value and clear execution
                    ownership. If we're not the right fit, we'll tell you directly.
                  </p>
                </div>
              </GlowCard>

              <GlowCard
                gradient={getGradient(5)}
                delay={0.4}
                borderWidth={1}
                glowBlur={25}
                glowOpacity={0.35}
              >
                <div className="p-7">
                  <h4 className="font-heading text-lg font-bold text-white mb-3">Direct contact</h4>
                  <div className="space-y-2.5 text-sm text-gray-400 font-mono">
                    <p className="flex items-center gap-2">
                      <span className="text-[#7DD3FC]">→</span>
                      <MailtoLink
                        subject="Inquiry from automation.studio"
                        className="hover:text-white transition-colors"
                      >
                        {OWNER_EMAIL}
                      </MailtoLink>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-[#7DD3FC]">→</span>
                      <WhatsAppLink className="hover:text-white transition-colors">
                        WhatsApp: {WHATSAPP_DISPLAY}
                      </WhatsAppLink>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-[#7DD3FC]">→</span> Mon–Fri, 9am–6pm PKT
                    </p>
                  </div>
                </div>
              </GlowCard>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

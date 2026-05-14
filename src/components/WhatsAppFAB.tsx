import { useEffect, useState } from "react";
import { WhatsAppLink, WhatsAppIcon } from "./ContactActions";

/**
 * Floating WhatsApp button — desktop only (mobile uses MobileCTA).
 * Effects: continuous green pulse glow, ripple wave every 3s,
 * one-shot bounce on mount, hover tooltip.
 */
export function WhatsAppFAB() {
  const [bounce, setBounce] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setBounce(false), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 hidden md:block group">
      {/* Tooltip */}
      <span
        role="tooltip"
        className="pointer-events-none absolute right-[calc(100%+12px)] top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-surface-3/95 backdrop-blur px-3 py-1.5 text-xs font-medium text-foreground border border-border/60 opacity-0 translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
      >
        Chat with us on WhatsApp
      </span>

      <div className={`relative wa-ripple ${bounce ? "wa-bounce" : ""}`}>
        <WhatsAppLink
          message="Hi Automation Studio, I'd like to learn more about your services."
          ariaLabel="Chat with us on WhatsApp"
          className="btn-press wa-pulse relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white hover:bg-[#1ebe5d] transition-colors"
        >
          <WhatsAppIcon className="w-7 h-7" />
        </WhatsAppLink>
      </div>
    </div>
  );
}

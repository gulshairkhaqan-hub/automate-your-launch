import { Link } from "@tanstack/react-router";
import { WhatsAppLink, WhatsAppIcon } from "./ContactActions";

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-surface-3/90 backdrop-blur-xl border-t border-border/40 px-4 py-3">
      <div className="flex items-center gap-2">
        <Link
          to="/contact"
          className="btn-press flex-1 flex items-center justify-center rounded-md gold-gradient px-4 py-3.5 text-sm font-semibold text-gold-foreground tracking-tight shadow-lg shadow-cyan/20"
        >
          Book Free Audit
        </Link>
        <WhatsAppLink
          message="Hi Automation Studio, I'd like to book a free audit."
          className="btn-press inline-flex items-center justify-center rounded-md bg-[#25D366] px-4 py-3.5 text-white shadow-lg shadow-[#25D366]/20"
        >
          <WhatsAppIcon />
        </WhatsAppLink>
      </div>
    </div>
  );
}

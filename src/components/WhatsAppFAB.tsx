import { WhatsAppLink, WhatsAppIcon } from "./ContactActions";

/**
 * Floating WhatsApp button — visible on desktop (hidden on mobile because
 * MobileCTA already provides a WhatsApp shortcut in the bottom bar).
 */
export function WhatsAppFAB() {
  return (
    <WhatsAppLink
      message="Hi Automation Studio, I'd like to learn more about your services."
      ariaLabel="Chat with us on WhatsApp"
      className="btn-press fixed bottom-6 right-6 z-50 hidden md:flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 hover:bg-[#1ebe5d] transition-colors"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </WhatsAppLink>
  );
}

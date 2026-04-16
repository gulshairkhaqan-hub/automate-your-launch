import { Link } from "@tanstack/react-router";

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-primary/95 backdrop-blur-md border-t border-border/20 px-4 py-3 safe-area-pb">
      <Link
        to="/contact"
        className="flex items-center justify-center w-full rounded-sm gold-gradient px-5 py-3 text-sm font-semibold text-gold-foreground tracking-wide"
      >
        Book Free Audit — It's Free
      </Link>
    </div>
  );
}

import { Link } from "@tanstack/react-router";

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-surface-3/90 backdrop-blur-xl border-t border-border/40 px-4 py-3">
      <Link
        to="/contact"
        className="btn-press flex items-center justify-center w-full rounded-md gold-gradient px-5 py-3.5 text-sm font-semibold text-gold-foreground tracking-tight shadow-lg shadow-cyan/20"
      >
        Book Free Audit — It's Free
      </Link>
    </div>
  );
}

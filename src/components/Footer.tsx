import { Link } from "@tanstack/react-router";
import { WhatsAppLink, MailtoLink } from "./ContactActions";
import { WHATSAPP_DISPLAY } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="relative border-t border-border/40 bg-surface-3 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md gold-gradient flex items-center justify-center">
                <span className="font-mono text-sm font-bold text-gold-foreground">A</span>
              </div>
              <span className="font-heading text-xl font-bold text-foreground">
                Automation<span className="gold-text-gradient">.studio</span>
              </span>
            </div>
            <p className="mt-5 text-sm text-muted-foreground max-w-sm leading-relaxed">
              Premium AI automation systems for service businesses that need faster response,
              cleaner operations, and stronger margins.
            </p>
            <p className="mt-4 font-mono text-xs text-muted-foreground/60">
              <span className="text-cyan">$</span> delivery.standard:{" "}
              <span className="text-cyan">founder_led</span>
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan mb-5">
              // navigate
            </h4>
            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              <Link
                to="/"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </Link>
              <Link
                to="/case-studies"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Case Studies
              </Link>
              <Link
                to="/pricing"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan mb-5">
              // contact
            </h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <MailtoLink
                subject="Inquiry from automation.studio"
                className="hover:text-foreground transition-colors"
              >
                gulshairkhaqan@gmail.com
              </MailtoLink>
              <WhatsAppLink
                message="Hi Automation Studio, I'd like to learn more about your services."
                className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <span className="text-cyan">WhatsApp:</span> {WHATSAPP_DISPLAY}
              </WhatsAppLink>
              <span>Mon–Fri, 9am–6pm PKT</span>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1 text-cyan hover:text-cyan-light transition-colors font-medium mt-2"
              >
                Book a Free Audit →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/60 font-mono">
            © {new Date().getFullYear()} automation.studio — all systems nominal.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-muted-foreground/60 hover:text-foreground cursor-pointer transition-colors">
              Privacy
            </span>
            <span className="text-xs text-muted-foreground/60 hover:text-foreground cursor-pointer transition-colors">
              Terms
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

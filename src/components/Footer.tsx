import { Link } from "@tanstack/react-router";
import { WhatsAppLink, MailtoLink } from "./ContactActions";
import { WHATSAPP_DISPLAY } from "@/lib/contact";

const socials = [
  { label: "LinkedIn", href: "#", icon: "M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3v9zm-1.5-10.3a1.7 1.7 0 110-3.4 1.7 1.7 0 010 3.4zM19 19h-3v-4.7c0-1.1 0-2.5-1.5-2.5s-1.7 1.2-1.7 2.4V19h-3v-9h2.9v1.3a3.2 3.2 0 012.9-1.6c3.1 0 3.7 2 3.7 4.7V19z" },
  { label: "Twitter", href: "#", icon: "M22 5.8a8.5 8.5 0 01-2.4.7 4.2 4.2 0 001.8-2.3 8.4 8.4 0 01-2.7 1A4.2 4.2 0 0011.4 9a11.9 11.9 0 01-8.6-4.4 4.2 4.2 0 001.3 5.6 4.2 4.2 0 01-1.9-.5v.1a4.2 4.2 0 003.4 4.1 4.2 4.2 0 01-1.9.1 4.2 4.2 0 003.9 2.9A8.4 8.4 0 012 18.6 11.9 11.9 0 008.4 20.5c7.7 0 12-6.4 12-11.9V8a8.6 8.6 0 002.1-2.2z" },
  { label: "GitHub", href: "#", icon: "M12 2a10 10 0 00-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.4-3.4-1.4-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.5 1.1 3.1.9.1-.7.4-1.1.6-1.4-2.3-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.5-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 015 0c1.9-1.3 2.7-1 2.7-1 .6 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0012 2z" },
];

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
              We engineer AI-powered workflows that save time, reduce costs, and unlock revenue. Premium automation for modern teams.
            </p>
            <p className="mt-4 font-mono text-xs text-muted-foreground/60">
              <span className="text-cyan">$</span> system.status: <span className="text-cyan">operational</span>
            </p>
            <div className="mt-6 flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="nav-pop text-muted-foreground hover:text-foreground"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan mb-5">// navigate</h4>
            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</Link>
              <Link to="/case-studies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Case Studies</Link>
              <Link to="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan mb-5">// contact</h4>
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
              <Link to="/contact" className="inline-flex items-center gap-1 text-cyan hover:text-cyan-light transition-colors font-medium mt-2">
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
            <span className="text-xs text-muted-foreground/60 hover:text-foreground cursor-pointer transition-colors">Privacy</span>
            <span className="text-xs text-muted-foreground/60 hover:text-foreground cursor-pointer transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

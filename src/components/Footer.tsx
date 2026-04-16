import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="charcoal-gradient text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="font-heading text-2xl font-bold">
              Automation<span className="gold-text-gradient"> Studio</span>
            </span>
            <p className="mt-4 text-sm text-primary-foreground/60 max-w-sm leading-relaxed">
              We help businesses automate their operations, capture every lead, and scale without burnout. Premium AI-powered automation for modern teams.
            </p>
            <div className="mt-6 flex items-center gap-4">
              {["LinkedIn", "Twitter", "Instagram"].map((s) => (
                <span key={s} className="text-xs text-primary-foreground/40 hover:text-gold transition-colors cursor-pointer">{s}</span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-widest text-gold mb-4">Navigate</h4>
            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              <Link to="/" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">Home</Link>
              <Link to="/services" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">Services</Link>
              <Link to="/case-studies" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">Case Studies</Link>
              <Link to="/pricing" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">Pricing</Link>
              <Link to="/contact" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-widest text-gold mb-4">Get In Touch</h4>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/60">
              <span>hello@automationstudio.com</span>
              <span>(555) 123-4567</span>
              <span>Mon–Fri, 9am–6pm EST</span>
              <Link to="/contact" className="text-gold hover:text-gold-light transition-colors font-medium mt-2">
                Book a Free Audit →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Automation Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-primary-foreground/40 hover:text-primary-foreground/60 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-xs text-primary-foreground/40 hover:text-primary-foreground/60 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

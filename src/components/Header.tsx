import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-all duration-300 ${
        scrolled ? "header-scrolled" : "bg-transparent border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 rounded-md gold-gradient flex items-center justify-center shadow-lg shadow-cyan/20">
            <span className="font-mono text-sm font-bold text-gold-foreground">A</span>
            <span className="absolute inset-0 rounded-md bg-cyan/0 group-hover:bg-cyan/20 transition-colors" />
          </div>
          <span className="font-heading text-lg md:text-xl font-bold tracking-tight text-foreground">
            Automation<span className="gold-text-gradient">.studio</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-active={location.pathname === link.to}
              className="nav-pop text-sm font-medium text-muted-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <Link
            to="/contact"
            className="btn-press inline-flex items-center justify-center rounded-md gold-gradient px-5 py-2.5 text-sm font-semibold text-gold-foreground tracking-tight hover:shadow-lg hover:shadow-cyan/30"
          >
            Book Audit
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-md border border-border/50 bg-surface-2/40"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span
            className={`w-5 h-0.5 bg-foreground transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`w-5 h-0.5 bg-foreground transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-5 h-0.5 bg-foreground transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-t border-border/40 bg-surface-3/95 backdrop-blur-xl"
          >
            <nav className="flex flex-col px-5 py-5 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-md text-base font-medium transition-colors border ${
                    location.pathname === link.to
                      ? "text-foreground bg-surface-2 border-cyan/30"
                      : "text-muted-foreground border-transparent hover:bg-surface-2 hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-3 inline-flex items-center justify-center rounded-md gold-gradient px-5 py-3.5 text-sm font-semibold text-gold-foreground"
              >
                Book Audit
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

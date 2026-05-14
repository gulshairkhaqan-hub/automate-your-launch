import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { WhatsAppLink } from "./ContactActions";

/**
 * Custom in-house chat widget — bottom-left, indigo bubble matching theme.
 * No third-party tracker; greeting popup auto-shows after a short delay.
 */
export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const dismissed = sessionStorage.getItem("chat-greeting-dismissed");
    if (dismissed) return;
    const t = setTimeout(() => setShowGreeting(true), 3500);
    return () => clearTimeout(t);
  }, []);

  const dismissGreeting = () => {
    setShowGreeting(false);
    try { sessionStorage.setItem("chat-greeting-dismissed", "1"); } catch {}
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 hidden md:block">
      {/* Greeting bubble */}
      {showGreeting && !open && (
        <div className="chat-pop absolute bottom-[68px] left-0 w-[280px] glass-card rounded-2xl rounded-bl-sm p-4 shadow-lift">
          <button
            type="button"
            onClick={dismissGreeting}
            aria-label="Dismiss"
            className="absolute top-2 right-2 text-muted-foreground hover:text-foreground text-xs w-5 h-5 inline-flex items-center justify-center rounded-full"
          >
            ✕
          </button>
          <p className="text-sm text-foreground leading-relaxed pr-4">
            Hi! Want to automate your business? Book a free audit or ask me anything 👋
          </p>
          <button
            type="button"
            onClick={() => { setOpen(true); dismissGreeting(); }}
            className="mt-3 text-xs font-semibold text-cyan hover:text-cyan-light"
          >
            Open chat →
          </button>
        </div>
      )}

      {/* Open panel */}
      {open && (
        <div className="chat-pop absolute bottom-[68px] left-0 w-[320px] glass-card rounded-2xl rounded-bl-sm overflow-hidden shadow-lift">
          <div className="flex items-center justify-between gap-2 px-4 py-3 border-b border-border/50 bg-[#6366f1]/15">
            <div>
              <p className="font-heading text-sm font-bold text-foreground">Automation Studio</p>
              <p className="text-[11px] text-muted-foreground">Typically replies in minutes</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-muted-foreground hover:text-foreground text-sm"
            >
              ✕
            </button>
          </div>
          <div className="p-4 space-y-3">
            <div className="text-sm text-foreground bg-surface-2/60 rounded-lg rounded-tl-sm p-3 leading-relaxed">
              Hi! Want to automate your business? Book a free audit or ask me anything 👋
            </div>
            <div className="flex flex-col gap-2 pt-1">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="btn-press neon-cta inline-flex items-center justify-center rounded-md px-4 py-2.5 text-xs font-semibold"
              >
                Book a free audit →
              </Link>
              <WhatsAppLink
                message="Hi Automation Studio, I'd like to ask a few questions."
                className="btn-press inline-flex items-center justify-center rounded-md border border-border bg-surface-2/40 px-4 py-2.5 text-xs font-semibold text-foreground hover:border-cyan/40"
              >
                Continue on WhatsApp
              </WhatsAppLink>
            </div>
          </div>
        </div>
      )}

      {/* Toggle bubble */}
      <button
        type="button"
        onClick={() => { setOpen((v) => !v); dismissGreeting(); }}
        aria-label={open ? "Close chat" : "Open chat"}
        className="btn-press relative w-14 h-14 rounded-full text-white flex items-center justify-center shadow-lg transition-colors"
        style={{
          backgroundColor: "#6366f1",
          boxShadow: "0 8px 28px -6px rgba(99,102,241,0.7), 0 0 0 1px rgba(99,102,241,0.4)",
        }}
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        )}
      </button>
    </div>
  );
}

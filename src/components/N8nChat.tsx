import { useEffect } from "react";

const STYLE_ID = "n8n-chat-style";
const OVERRIDES_ID = "n8n-chat-overrides";
const SCRIPT_FLAG = "__n8nChatLoaded";

/**
 * Theme overrides for the n8n chat widget.
 * The widget renders its own DOM (it's a self-contained CDN bundle), so we
 * patch its CSS variables to (a) match our dark/cyan brand and (b) ensure
 * the USER message bubble is fully opaque & legible — the default theme
 * can render user bubbles with low contrast against dark backgrounds,
 * which looks like "the user message isn't showing up after sending".
 */
const OVERRIDE_CSS = `
:root {
  --chat--color-primary: #22d3ee;
  --chat--color-primary-shade-50: #06b6d4;
  --chat--color-primary-shade-100: #0891b2;
  --chat--color-secondary: #22d3ee;
  --chat--color-secondary-shade-50: #06b6d4;
  --chat--color-white: #ffffff;
  --chat--color-light: #0b1220;
  --chat--color-light-shade-50: #111a2e;
  --chat--color-light-shade-100: #1a2440;
  --chat--color-medium: #2a3550;
  --chat--color-dark: #e6edf7;
  --chat--color-disabled: #6b7280;
  --chat--color-typing: #94a3b8;

  --chat--window--width: 380px;
  --chat--window--height: 560px;

  --chat--header--background: #0b1220;
  --chat--header--color: #e6edf7;
  --chat--header-border-bottom: 1px solid rgba(34,211,238,0.2);

  --chat--body--background: #0b1220;
  --chat--message--font-size: 0.95rem;
  --chat--message--padding: 0.75rem 1rem;
  --chat--message--border-radius: 0.75rem;

  --chat--message--bot--background: #111a2e;
  --chat--message--bot--color: #e6edf7;
  --chat--message--bot--border: 1px solid rgba(255,255,255,0.06);

  --chat--message--user--background: #22d3ee;
  --chat--message--user--color: #04141b;
  --chat--message--user--border: 1px solid rgba(34,211,238,0.5);

  --chat--toggle--background: #22d3ee;
  --chat--toggle--hover--background: #06b6d4;
  --chat--toggle--color: #04141b;

  --chat--textarea--background: #111a2e;
  --chat--textarea--color: #e6edf7;
  --chat--input--background: #111a2e;
  --chat--input--text-color: #e6edf7;
  --chat--input--placeholder--color: #94a3b8;
  --chat--input--border: 1px solid rgba(255,255,255,0.08);
  --chat--input--send--button--background: #22d3ee;
  --chat--input--send--button--color: #04141b;
}

/* Hard-fallback: force user message visibility even if the widget bumps
   variable names in a future release. */
.chat-message-from-user,
.chat-message.chat-message-from-user,
[class*="chat-message"][class*="from-user"] {
  background: #22d3ee !important;
  color: #04141b !important;
  border: 1px solid rgba(34,211,238,0.5) !important;
  opacity: 1 !important;
}
`;

export function N8nChat() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Inject base stylesheet from the CDN (once)
    if (!document.getElementById(STYLE_ID)) {
      const link = document.createElement("link");
      link.id = STYLE_ID;
      link.rel = "stylesheet";
      link.href = "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css";
      document.head.appendChild(link);
    }

    // Inject our theme overrides (once). Appended AFTER the CDN sheet so
    // our values win the cascade.
    if (!document.getElementById(OVERRIDES_ID)) {
      const style = document.createElement("style");
      style.id = OVERRIDES_ID;
      style.textContent = OVERRIDE_CSS;
      document.head.appendChild(style);
    }

    // Initialize chat once
    const w = window as unknown as Record<string, unknown>;
    if (w[SCRIPT_FLAG]) return;
    w[SCRIPT_FLAG] = true;

    const url = "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js";
    (
      new Function("u", "return import(u)")(url) as Promise<{
        createChat: (opts: Record<string, unknown>) => void;
      }>
    )
      .then((mod) => {
        mod.createChat({
          webhookUrl:
            "https://gulshair.app.n8n.cloud/webhook/a513cdfa-af4c-4fd6-9e48-6bd8fc357624/chat",
          mode: "window",
          showWelcomeScreen: false,
          loadPreviousSession: true, // preserves history across rerenders/reloads
          defaultLanguage: "en",
          initialMessages: [
            "Hi 👋 I'm your Automation Studio assistant.",
            "Ask me about workflows, pricing, or book a free audit.",
          ],
          i18n: {
            en: {
              title: "Automation Studio",
              subtitle: "Ask anything — we usually reply instantly.",
              footer: "",
              getStarted: "New conversation",
              inputPlaceholder: "Type your message…",
              closeButtonTooltip: "Close chat",
            },
          },
          enableStreaming: false,
        });
      })
      .catch((err) => {
        console.error("[n8n-chat] failed to load", err);
      });
  }, []);

  return null;
}
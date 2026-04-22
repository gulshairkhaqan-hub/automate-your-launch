import { useEffect } from "react";

const STYLE_ID = "n8n-chat-style";
const SCRIPT_FLAG = "__n8nChatLoaded";

export function N8nChat() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Inject stylesheet once
    if (!document.getElementById(STYLE_ID)) {
      const link = document.createElement("link");
      link.id = STYLE_ID;
      link.rel = "stylesheet";
      link.href = "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css";
      document.head.appendChild(link);
    }

    // Initialize chat once
    if ((window as unknown as Record<string, unknown>)[SCRIPT_FLAG]) return;
    (window as unknown as Record<string, unknown>)[SCRIPT_FLAG] = true;

    const url = "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js";
    (new Function("u", "return import(u)")(url) as Promise<{ createChat: (opts: { webhookUrl: string }) => void }>)
      .then((mod) => {
        mod.createChat({
          webhookUrl:
            "https://gulshair.app.n8n.cloud/webhook/a513cdfa-af4c-4fd6-9e48-6bd8fc357624/chat",
        });
      })
      .catch((err) => {
        console.error("[n8n-chat] failed to load", err);
      });
  }, []);

  return null;
}
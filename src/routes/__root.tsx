import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { MobileCTA } from "../components/MobileCTA";
import { WhatsAppFAB } from "../components/WhatsAppFAB";
import { ChatWidget } from "../components/ChatWidget";
import { Toaster } from "../components/ui/sonner";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-heading text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-sm bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-charcoal-light"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Automation Studio — AI-Powered Business Automation" },
      { name: "description", content: "Automate your business, capture every lead, and scale without burnout. Premium AI automation for coaches, agencies, and modern businesses." },
      { name: "author", content: "Automation Studio" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Automation Studio — AI-Powered Business Automation" },
      { name: "twitter:title", content: "Automation Studio — AI-Powered Business Automation" },
      { property: "og:description", content: "Automate your business, capture every lead, and scale without burnout. Premium AI automation for coaches, agencies, and modern businesses." },
      { name: "twitter:description", content: "Automate your business, capture every lead, and scale without burnout. Premium AI automation for coaches, agencies, and modern businesses." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <div className="site-mesh" aria-hidden />
      <div className="site-grid" aria-hidden />
      <Header />
      <main className="pt-16 md:pt-20 pb-16 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <MobileCTA />
      <WhatsAppFAB />
      <ChatWidget />
      <Toaster theme="dark" position="bottom-center" richColors closeButton />
    </>
  );
}

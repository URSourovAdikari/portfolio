import type { Metadata, Viewport } from "next";
import { Suspense, type ReactNode } from "react";
import "@fontsource/geist-sans/400.css";
import "@fontsource/geist-sans/700.css";
import "./globals.css";
import ReactLenis from "lenis/react";
import Header from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { api } from "../lib/api";

export const metadata: Metadata = {
  title: "Sourov Chandra Adikari — Full Stack Web Developer",
  description: "Portfolio of Sourov Chandra Adikari, a Full Stack Web Developer building modern, responsive web applications.",
  authors: [{ name: "Sourov Chandra Adikari" }],
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0b0b0f",
};

export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const [portfolioResult, socialsResult] = await Promise.allSettled([
    api.getPortfolio(),
    api.getSocials(),
  ]);
  const portfolio = portfolioResult.status === "fulfilled" ? portfolioResult.value : {};
  const socials = socialsResult.status === "fulfilled" ? socialsResult.value : [];

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { try { const saved = localStorage.getItem("portfolio-theme") || localStorage.getItem("theme"); document.documentElement.classList.toggle("dark", saved !== "light"); } catch { document.documentElement.classList.add("dark"); } })();`,
          }}
        />
      </head>
      <body>
        <div className="bg-background min-h-screen relative overflow-x-hidden selection:bg-primary/30 selection:text-primary-foreground">
          <ReactLenis root options={{ smoothWheel: true, duration: 1.2 }}>
            <Header portfolio={portfolio} />
            <Suspense fallback={<div className="min-h-screen pt-32 text-center">Loading...</div>}>
              {children}
            </Suspense>
            <Footer portfolio={portfolio} socials={socials} />
          </ReactLenis>
        </div>
      </body>
    </html>
  );
}

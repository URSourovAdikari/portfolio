import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found — Sourov Chandra Adikari",
  description: "The requested page could not be found on Sourov Chandra Adikari's portfolio.",
  robots: { index: false, follow: false },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

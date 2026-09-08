import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Sourov Chandra Adikari",
  description: "Learn more about Sourov Chandra Adikari, his background, services, languages, and approach to full-stack web development.",
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

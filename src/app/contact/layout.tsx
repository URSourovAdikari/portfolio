import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Sourov Chandra Adikari",
  description: "Get in touch with Sourov Chandra Adikari for web development opportunities, collaboration, or professional inquiries.",
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

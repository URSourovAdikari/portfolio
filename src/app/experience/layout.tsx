import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience — Sourov Chandra Adikari",
  description: "Explore the professional development journey and practical experience of Sourov Chandra Adikari.",
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

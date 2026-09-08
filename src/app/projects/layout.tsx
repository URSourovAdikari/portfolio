import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Sourov Chandra Adikari",
  description: "Explore selected web development projects, technologies, features, and practical solutions built by Sourov Chandra Adikari.",
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

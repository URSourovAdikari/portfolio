import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expertise & Skills — Sourov Chandra Adikari",
  description: "Explore Sourov Chandra Adikari's full-stack development expertise, technologies, tools, and professional traits.",
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

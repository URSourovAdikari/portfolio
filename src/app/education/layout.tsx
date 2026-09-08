import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education — Sourov Chandra Adikari",
  description: "Explore the academic background and ongoing learning journey of Sourov Chandra Adikari.",
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

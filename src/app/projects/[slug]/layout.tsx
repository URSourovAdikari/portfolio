import type { Metadata } from "next";
import { api } from "@/lib/api";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;

  try {
    const project = await api.getProject(slug);
    const title = String(project.title ?? project.name ?? "Project");
    const description = String(project.description ?? project.subtitle ?? "Explore this project by Sourov Chandra Adikari.");
    return { title: `${title} — Sourov Chandra Adikari`, description };
  } catch {
    return { title: "Project — Sourov Chandra Adikari", description: "Explore a project by Sourov Chandra Adikari." };
  }
}

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

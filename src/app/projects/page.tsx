import { api } from "@/lib/api";
import { ProjectsSection } from "@/components/ProjectsSection/ProjectsSection";

export default async function Page() {
  const result = await api.getProjects().catch(() => null);
  return <main className="w-full flex flex-col pt-28 min-h-screen">
    {result ? <ProjectsSection projects={result} /> : <p className="py-32 text-center">Unable to load projects.</p>}
  </main>;
}

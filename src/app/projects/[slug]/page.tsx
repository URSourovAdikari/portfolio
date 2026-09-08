import { api, type Project } from "../../../lib/api";
import ProjectDetails from "../../../components/projects/ProjectDetails";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await api.getProject(slug).catch((): Project | null => null);

  return <ProjectDetails project={project} />;
}

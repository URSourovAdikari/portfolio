import { api } from "../../lib/api";
import SkillCategory from "../../components/EducationSection/SkillCategory";

export default async function Page() {
  const skills = await api.getSkills().catch(() => null);
  return <main className="w-full flex flex-col pt-28 min-h-screen">
    {skills ? <section className="max-w-7xl mx-auto w-full px-5 md:px-6 pb-20"><div className="mb-7"><p className="text-xs font-bold uppercase tracking-[0.16em] text-primary mb-2">Capabilities</p><h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">Expertise & <span className="text-gradient-primary">Skills</span></h1><p className="text-base text-muted-foreground max-w-2xl">A focused overview of my technical expertise, development stack, and professional traits.</p></div><SkillCategory skills={skills} /></section> : <p className="py-32 text-center">Unable to load skills.</p>}
  </main>;
}

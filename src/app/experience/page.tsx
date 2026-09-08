import { api } from "../../lib/api";
import { CareerTimeline } from "../../components/CareerSection/CareerTimeline";

export default async function Page() {
  const experience = await api.getExperience().catch(() => null);
  return <main className="w-full flex flex-col pt-28 min-h-screen">
    {experience ? <section className="max-w-7xl mx-auto w-full"><div className="px-5 md:px-6 mb-3"><p className="text-xs font-bold uppercase tracking-[0.16em] text-primary mb-2">Career</p><h1 className="text-3xl md:text-5xl font-bold tracking-tight">Career <span className="text-gradient-primary">Journey</span></h1></div><CareerTimeline experience={experience} /></section> : <p className="py-32 text-center">Unable to load career.</p>}
  </main>;
}

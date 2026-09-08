import { api, type Portfolio } from "../lib/api";
import { HeroSection } from "../components/HeroSection/HeroSection";
import { AboutSection } from "../components/AboutSection/AboutSection";
import { ProjectsSection } from "../components/ProjectsSection/ProjectsSection";
import TestimonialsSection from "../components/TestimonialsSection/TestimonialsSection";

export default async function Page() {
  const [portfolioResult, projectsResult, socialsResult] = await Promise.allSettled([
    api.getPortfolio(),
    api.getProjects(),
    api.getSocials(),
  ]);
  const portfolio = portfolioResult.status === "fulfilled" ? portfolioResult.value : null;
  const projects = projectsResult.status === "fulfilled" ? projectsResult.value : null;
  const socials = socialsResult.status === "fulfilled" ? socialsResult.value : [];
  const experienceYears = Math.max(1, new Date().getFullYear() - 2023);

  return (
    <main className="w-full flex flex-col border-none">
      {portfolio ? <>
        <HeroSection portfolio={{ ...portfolio, projectCount: projects?.length ?? 0, experienceYears }} socials={socials} projectCount={projects?.length ?? 0} experienceYears={experienceYears} />
        <AboutSection portfolio={{ ...portfolio, projectCount: projects?.length ?? 0, experienceYears } as Portfolio} showImage={false} />
      </> : <p className="pt-32 text-center">Unable to load profile.</p>}
      {projects ? <ProjectsSection projects={projects} limit={4} /> : <p className="py-16 text-center">Unable to load projects.</p>}
      <TestimonialsSection />
      </main>
  );
}

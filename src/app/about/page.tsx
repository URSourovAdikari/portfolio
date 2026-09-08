import { api } from "@/lib/api";
import { AboutSection } from "@/components/AboutSection/AboutSection";
import { LanguagesSection } from "@/components/LanguagesSection/LanguagesSection";

export default async function Page() {
  const [portfolioResult, projectsResult, languagesResult] = await Promise.allSettled([
    api.getPortfolio(), api.getProjects(), api.getLanguages(),
  ]);
  const portfolio = portfolioResult.status === "fulfilled" ? portfolioResult.value : null;
  const projects = projectsResult.status === "fulfilled" ? projectsResult.value : [];
  const languages = languagesResult.status === "fulfilled" ? languagesResult.value : null;
  const experienceYears = Math.max(1, new Date().getFullYear() - 2023);

  return <main className="w-full flex flex-col pt-28 min-h-screen">
    {portfolio ? <AboutSection portfolio={{ ...portfolio, projectCount: projects.length, experienceYears }} /> : <p className="py-32 text-center">Unable to load profile.</p>}
    {languages ? <LanguagesSection languages={languages} /> : <p className="py-16 text-center">Unable to load languages.</p>}
  </main>;
}

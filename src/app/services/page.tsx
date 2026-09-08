import { api } from "@/lib/api";
import { ServicesSection } from "@/components/ServicesSection/ServicesSection";

export default async function Page() {
  const services = await api.getServices().catch(() => null);

  return (
    <main className="w-full flex flex-col pt-28 min-h-screen">
      <section className="max-w-7xl mx-auto w-full px-5 md:px-6">
        <div className="mb-8 md:mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary mb-2">Services</p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            What I <span className="text-gradient-primary">Build</span>
          </h1>
        </div>
      </section>
      {services ? <ServicesSection services={services} /> : <p className="py-16 text-center">Unable to load services.</p>}
    </main>
  );
}

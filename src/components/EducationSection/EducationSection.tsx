"use client";

import { motion } from "framer-motion";
import { Brain, Code2, Layers3, Rocket, Server, Wrench, GraduationCap, Award, CheckCircle2, Calendar, Building2 } from "lucide-react";
import { MagicCard } from "@/components/lightswind/magic-card";
import type { Education, Skill } from "@/lib/api";

const categoryIcons: Record<string, typeof Code2> = {
  "Frontend Development": Code2,
  "Backend Development": Server,
  "Database & Backend Services": Layers3,
  "Tools & Deployment": Wrench,
};

export const EducationSection = ({ education: apiEducation, skills }: { education: Education[]; skills: Skill[] }) => {
  const education = apiEducation.length > 0 ? apiEducation.map((item) => ({ degree: item.degree ?? "Education", school: item.school ?? item.institution ?? "", year: item.year ?? [item.startDate, item.endDate].filter(Boolean).join(" – "), badge: item.badge ?? "Academic Background", badgeIcon: Award, badgeColor: "text-primary bg-primary/10 border-primary/30", icon: GraduationCap, details: item.details ?? (item.description ? [item.description] : []) })) : [];
  const technicalSkills = skills.filter((skill) => skill.category !== "Professional Traits");
  const professionalTraits = skills.filter((skill) => skill.category === "Professional Traits");
  const groupedSkills = Object.entries(
    technicalSkills.reduce<Record<string, Skill[]>>((groups, skill) => {
      const category = skill.category ?? "Technical Skills";
      (groups[category] ??= []).push(skill);
      return groups;
    }, {})
  );

  return (
    <section id="education" className="max-w-7xl mx-auto px-6 py-24 space-y-20">
      <div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true }} className="mb-12">
          <div className="flex items-center gap-4 mb-3">
            <motion.div className="portfolio-icon w-12 h-12 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary shadow-md" whileHover={{ y: -3, rotate: -3, scale: 1.04 }}><GraduationCap className="w-6 h-6" /></motion.div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Academic <span className="text-gradient-primary">Background</span></h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl">Building the theoretical foundation and research methodologies that empower high-performance practical engineering.</p>
        </motion.div>

        {education.length === 0 ? <p className="text-muted-foreground py-12">No education history is available right now.</p> : <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, i) => {
            const DegreeIcon = edu.icon;
            const BadgeIcon = edu.badgeIcon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -6 }} transition={{ delay: i * 0.15, duration: 0.5 }} viewport={{ once: true }}>
                <MagicCard className="portfolio-card h-full p-8 rounded-[2.25rem] border border-border/80 bg-card/80 shadow-xl" gradientSize={300} gradientColor="rgba(139, 92, 246, 0.12)" gradientFrom="#8b5cf6" gradientTo="#38bdf8">
                  <div className="flex flex-col h-full justify-between gap-6">
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-6">
                        <div className="portfolio-icon w-14 h-14 rounded-2xl bg-primary/10 border border-primary/25 text-primary flex items-center justify-center shadow-sm"><DegreeIcon className="w-7 h-7 text-primary" /></div>
                        <span className={`portfolio-chip px-3.5 py-1.5 rounded-full border text-xs font-extrabold flex items-center gap-1.5 shadow-sm ${edu.badgeColor}`}><BadgeIcon className="w-3.5 h-3.5" />{edu.badge}</span>
                      </div>
                      <h3 className="text-2xl font-extrabold text-foreground tracking-tight mb-2">{edu.degree}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-muted-foreground mb-6 pb-4 border-b border-border/60">
                        <span className="flex items-center gap-1.5 text-foreground font-bold"><Building2 className="w-3.5 h-3.5 text-primary" /> {edu.school}</span><span>•</span><span className="flex items-center gap-1.5 font-mono text-primary font-bold"><Calendar className="w-3.5 h-3.5" /> {edu.year}</span>
                      </div>
                      <ul className="space-y-3.5">{edu.details.map((detail, j) => <li key={j} className="text-sm text-muted-foreground flex items-start gap-3 leading-relaxed"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span className="text-foreground/90 font-medium">{detail}</span></li>)}</ul>
                    </div>
                  </div>
                </MagicCard>
              </motion.div>
            );
          })}
        </div>}
      </div>
      <motion.section id="skills" className="space-y-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.15 }}>
        <div className="flex items-center gap-3 mb-2">
          <motion.div className="portfolio-icon w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary" whileHover={{ y: -2, rotate: 4 }}>
            <Code2 className="w-5 h-5" />
          </motion.div>
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Expertise & Skills</h3>
            <p className="text-sm text-muted-foreground mt-1">Focused technologies and professional strengths I use to build modern web applications.</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {groupedSkills.map(([category, categorySkills], groupIndex) => {
              const Icon = categoryIcons[category] ?? Code2;

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.45, delay: groupIndex * 0.08 }}
                  viewport={{ once: true }}
                  className="portfolio-card glass-panel p-6 md:p-7 rounded-[1.75rem] border border-foreground/10 shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="portfolio-icon w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold">{category}</h4>
                  </div>

                  <div className="space-y-4">
                    {categorySkills.map((skill) => {
                      const progress = typeof skill.progress === "number" ? Math.min(100, Math.max(0, skill.progress)) : undefined;

                      return (
                        <div key={String(skill.id ?? skill.name)} className="space-y-1.5 group/skill">
                          <div className="flex items-center justify-between gap-4">
                            <span className="text-sm font-semibold text-foreground group-hover/skill:text-primary transition-colors">
                              {skill.name}
                            </span>
                            {progress !== undefined && <span className="text-xs font-semibold tabular-nums text-muted-foreground">{progress}%</span>}
                          </div>
                          {progress !== undefined && (
                            <div
                              className="h-1.5 w-full overflow-hidden rounded-full bg-foreground/10"
                              role="progressbar"
                              aria-label={`${skill.name} proficiency`}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              aria-valuenow={progress}
                            >
                              <motion.div
                                className="h-full rounded-full bg-primary origin-left"
                                initial={{ width: 0 }}
                                whileInView={{ width: `${progress}%` }}
                                transition={{ duration: 0.9, ease: "easeOut" }}
                                viewport={{ once: true }}
                              />
                            </div>
                          )}
                          {skill.focus && <p className="text-xs text-muted-foreground leading-relaxed">{skill.focus}</p>}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="portfolio-card glass-panel p-6 md:p-7 rounded-[1.75rem] border border-primary/15 shadow-lg"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
              <div className="flex items-center gap-3">
                <div className="portfolio-icon w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <Brain className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">Professional Traits</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">How I approach development and collaboration</p>
                </div>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20 w-fit">
                Core Competencies
              </span>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {professionalTraits.length > 0 ? (
                professionalTraits.map((trait, index) => (
                  <motion.span
                    key={String(trait.id ?? trait.name)}
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ y: -2, scale: 1.03 }}
                    transition={{ duration: 0.25, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="portfolio-chip px-3.5 py-2 rounded-xl border border-primary/20 bg-primary/5 text-sm font-semibold text-foreground cursor-default"
                  >
                    {trait.name}
                  </motion.span>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">No professional traits are available right now.</p>
              )}
            </div>

            <div className="mt-6 pt-5 border-t border-border/60 flex items-start gap-3">
              <div className="portfolio-icon p-2 rounded-xl bg-primary/10 text-primary shrink-0">
                <Rocket className="w-5 h-5" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I continuously improve my technical skills while focusing on clean implementation, practical problem solving, and reliable user experiences.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </section>
  );
};

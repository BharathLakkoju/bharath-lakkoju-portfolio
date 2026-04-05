"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Skills } from "@/types/portfolio";

const skillCategories = [
  { key: "languages", label: "Languages", color: "var(--accent)" },
  { key: "frontend", label: "Frontend", color: "var(--accent-2)" },
  { key: "backend", label: "Backend", color: "var(--accent-3)" },
  { key: "databases", label: "Databases", color: "var(--accent)" },
  { key: "aiml", label: "AI / ML", color: "var(--accent-2)" },
  { key: "devops", label: "DevOps", color: "var(--accent-3)" },
];

const allTechForMarquee = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL",
  "Tailwind CSS", "Framer Motion", "Supabase", "Docker", "GraphQL",
  "Prisma", "Drizzle ORM", "OpenAI API", "Claude AI", "Gemini API",
  "Redux", "Zustand", "NestJS", "MongoDB", "CI/CD", "Vercel",
];

export default function SkillsSection({ skills }: { skills: Skills }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      style={{
        padding: "120px 0",
        background: "linear-gradient(180deg, transparent 0%, rgba(247,144,106,0.03) 50%, transparent 100%)",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 72 }}
        >
          <span className="section-label">
            <span className="accent-line" />
            Skills
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(28px, 4vw, 48px)",
              letterSpacing: "-0.03em",
              marginTop: 16,
              color: "var(--text)",
            }}
          >
            My toolkit
          </h2>
        </motion.div>

        {/* Skills grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 20,
            marginBottom: 80,
          }}
        >
          {skillCategories.map((cat, ci) => {
            const items = skills[cat.key as keyof Skills] as string[];
            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: ci * 0.1, duration: 0.5 }}
                className="glass-card"
                style={{ borderRadius: 16, padding: "24px" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 16,
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: cat.color,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      fontSize: 13,
                      color: "var(--text)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {cat.label}
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {items.map((skill, si) => (
                    <motion.span
                      key={skill}
                      className="tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: ci * 0.1 + si * 0.04 }}
                      whileHover={{
                        borderColor: cat.color,
                        color: cat.color,
                        scale: 1.05,
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Marquee */}
      <div
        style={{
          overflow: "hidden",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "16px 0",
          background: "rgba(255,255,255,0.01)",
        }}
      >
        <div className="marquee-track" style={{ gap: 0 }}>
          {[...allTechForMarquee, ...allTechForMarquee].map((tech, i) => (
            <span
              key={i}
              style={{
                padding: "0 32px",
                fontSize: 12,
                fontFamily: "var(--font-body)",
                color: "var(--text-subtle)",
                whiteSpace: "nowrap",
                borderRight: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  background: i % 3 === 0 ? "var(--accent)" : i % 3 === 1 ? "var(--accent-2)" : "var(--accent-3)",
                  display: "inline-block",
                }}
              />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Skills } from "@/types/portfolio";

const skillCategories = [
  {
    key: "languages",
    label: "Languages",
    color: "var(--accent)",
    bg: "rgba(79,70,229,0.07)",
  },
  {
    key: "frontend",
    label: "Frontend",
    color: "var(--accent-2)",
    bg: "rgba(249,115,22,0.07)",
  },
  {
    key: "backend",
    label: "Backend & APIs",
    color: "var(--accent-3)",
    bg: "rgba(5,150,105,0.07)",
  },
  {
    key: "databases",
    label: "Databases",
    color: "var(--accent)",
    bg: "rgba(79,70,229,0.07)",
  },
  {
    key: "aiml",
    label: "AI / ML",
    color: "#7c3aed",
    bg: "rgba(124,58,237,0.07)",
  },
  {
    key: "devops",
    label: "DevOps & Tools",
    color: "#0ea5e9",
    bg: "rgba(14,165,233,0.07)",
  },
];

const allTechForMarquee = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Tailwind CSS",
  "Framer Motion",
  "Supabase",
  "Docker",
  "GraphQL",
  "Prisma",
  "Drizzle ORM",
  "OpenAI API",
  "Claude AI",
  "Gemini API",
  "Redux",
  "Zustand",
  "NestJS",
  "MongoDB",
  "CI/CD",
  "Vercel",
];

export default function SkillsSection({ skills }: { skills: Skills }) {
  const sectionRef = useRef<HTMLElement>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const yDecor = useTransform(scrollYProgress, [0, 1], [20, -40]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      style={{
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(180deg, transparent 0%, rgba(249,115,22,0.02) 50%, transparent 100%)",
      }}
    >
      {/* Parallax decoration */}
      <motion.div
        style={{
          position: "absolute",
          right: "-80px",
          bottom: "20%",
          width: 320,
          height: 320,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)",
          filter: "blur(50px)",
          y: yDecor,
          pointerEvents: "none",
        }}
      />

      <div
        style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}
        ref={ref}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          style={{ marginBottom: 64 }}
        >
          <span className="section-label">
            <span className="accent-line" />
            Skills
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
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
            gap: 16,
            marginBottom: 80,
          }}
        >
          {skillCategories.map((cat, ci) => {
            const items = skills[cat.key as keyof Skills] as string[];
            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: ci * 0.09,
                  duration: 0.55,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="light-card"
                style={{
                  borderRadius: 18,
                  padding: "22px 24px",
                  cursor: "default",
                  position: "relative",
                  overflow: "hidden",
                }}
                whileHover={{ y: -3, boxShadow: "var(--shadow-lg)" }}
              >
                {/* Left accent border */}
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: 3,
                    background: cat.color,
                    borderRadius: "18px 0 0 18px",
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 16,
                    paddingLeft: 8,
                  }}
                >
                  <div
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 8,
                      background: cat.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: cat.color,
                      }}
                    />
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: 14,
                      color: "var(--text)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {cat.label}
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 6,
                    paddingLeft: 8,
                  }}
                >
                  {items.map((skill, si) => (
                    <motion.span
                      key={skill}
                      className="tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        delay: ci * 0.09 + si * 0.04,
                        duration: 0.35,
                      }}
                      whileHover={{
                        borderColor: cat.color,
                        color: cat.color,
                        background: cat.bg,
                        scale: 1.06,
                        y: -1,
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
          padding: "14px 0",
          background: "var(--surface)",
        }}
      >
        <div className="marquee-track">
          {[...allTechForMarquee, ...allTechForMarquee].map((tech, i) => (
            <span
              key={i}
              style={{
                padding: "0 28px",
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
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background:
                    i % 3 === 0
                      ? "var(--accent)"
                      : i % 3 === 1
                        ? "var(--accent-2)"
                        : "var(--accent-3)",
                  display: "inline-block",
                  flexShrink: 0,
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

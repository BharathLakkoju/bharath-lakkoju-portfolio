"use client";

import { useRef, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Project } from "@/types/portfolio";
import { ExternalLink, Code2, Star, ArrowUpRight } from "lucide-react";

const categories = ["All", "AI / SaaS", "SaaS", "Full Stack", "Tools"];

const categoryColors: Record<string, string> = {
  "AI / SaaS": "rgba(79,70,229,0.08)",
  SaaS: "rgba(249,115,22,0.08)",
  "Full Stack": "rgba(5,150,105,0.08)",
  Tools: "rgba(14,165,233,0.08)",
};
const categoryTextColors: Record<string, string> = {
  "AI / SaaS": "var(--accent)",
  SaaS: "var(--accent-2)",
  "Full Stack": "var(--accent-3)",
  Tools: "#0ea5e9",
};

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [filter, setFilter] = useState("All");
  const [hovered, setHovered] = useState<string | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const yDecor = useTransform(scrollYProgress, [0, 1], [-20, 80]);

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{
        padding: "120px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Parallax bg decoration */}
      <motion.div
        style={{
          position: "absolute",
          right: "-100px",
          top: "20%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
          y: yDecor,
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto" }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 48 }}
        >
          <span className="section-label">
            <span className="accent-line" />
            Projects
          </span>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: 24,
              marginTop: 16,
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(28px, 4vw, 48px)",
                letterSpacing: "-0.03em",
                color: "var(--text)",
              }}
            >
              Things I&apos;ve built
            </h2>

            {/* Filters */}
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  style={{
                    padding: "6px 16px",
                    borderRadius: 99,
                    border: "1.5px solid",
                    borderColor:
                      filter === cat ? "var(--accent)" : "var(--border)",
                    background:
                      filter === cat
                        ? "rgba(79,70,229,0.09)"
                        : "var(--surface)",
                    color:
                      filter === cat ? "var(--accent)" : "var(--text-muted)",
                    fontSize: 12,
                    fontFamily: "var(--font-body)",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    fontWeight: filter === cat ? 600 : 400,
                    boxShadow:
                      filter === cat
                        ? "0 2px 8px rgba(79,70,229,0.15)"
                        : "var(--shadow-sm)",
                  }}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 20,
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.88, y: -10 }}
                transition={{
                  duration: 0.45,
                  delay: i * 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onHoverStart={() => setHovered(project.id)}
                onHoverEnd={() => setHovered(null)}
                style={{ position: "relative" }}
              >
                <motion.div
                  className="light-card"
                  style={{
                    borderRadius: 20,
                    padding: "28px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 18,
                    position: "relative",
                    overflow: "hidden",
                    cursor: "default",
                  }}
                  whileHover={{ y: -4, boxShadow: "var(--shadow-lg)" }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Top color bar */}
                  <motion.div
                    animate={{ scaleX: hovered === project.id ? 1 : 0 }}
                    initial={{ scaleX: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      background: "var(--gradient-1)",
                      transformOrigin: "left",
                    }}
                  />

                  {/* Hover bg glow */}
                  <motion.div
                    animate={{ opacity: hovered === project.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "radial-gradient(ellipse at 50% 0%, rgba(79,70,229,0.04) 0%, transparent 70%)",
                      pointerEvents: "none",
                    }}
                  />

                  {/* Header row */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    <div style={{ flex: 1, paddingRight: 12 }}>
                      {/* Category badge */}
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 4,
                          fontSize: 10,
                          padding: "3px 10px",
                          borderRadius: 99,
                          background:
                            categoryColors[project.category] ??
                            "rgba(79,70,229,0.06)",
                          color:
                            categoryTextColors[project.category] ??
                            "var(--accent)",
                          letterSpacing: "0.08em",
                          fontFamily: "var(--font-body)",
                          fontWeight: 500,
                          marginBottom: 10,
                          border: "1px solid",
                          borderColor:
                            categoryTextColors[project.category] ??
                            "var(--accent)",
                          opacity: 0.85,
                        }}
                      >
                        {project.category}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 7,
                          marginBottom: 8,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--font-display)",
                            fontWeight: 800,
                            fontSize: 18,
                            letterSpacing: "-0.02em",
                            color: "var(--text)",
                          }}
                        >
                          {project.name}
                        </span>
                        {project.featured && (
                          <Star
                            size={12}
                            style={{
                              color: "var(--accent-2)",
                              fill: "var(--accent-2)",
                              flexShrink: 0,
                            }}
                          />
                        )}
                      </div>
                      <p
                        style={{
                          fontSize: 13,
                          color: "var(--text-muted)",
                          lineHeight: 1.65,
                        }}
                      >
                        {project.shortDesc}
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 6,
                        flexShrink: 0,
                      }}
                    >
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.15, color: "var(--accent)" }}
                          whileTap={{ scale: 0.9 }}
                          style={{
                            width: 34,
                            height: 34,
                            borderRadius: 10,
                            border: "1px solid var(--border)",
                            background: "var(--bg-2)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "var(--text-subtle)",
                            textDecoration: "none",
                          }}
                          title="GitHub"
                        >
                          <Code2 size={14} />
                        </motion.a>
                      )}
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.15, color: "var(--accent)" }}
                          whileTap={{ scale: 0.9 }}
                          style={{
                            width: 34,
                            height: 34,
                            borderRadius: 10,
                            border: "1px solid var(--border)",
                            background: "var(--bg-2)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "var(--text-subtle)",
                            textDecoration: "none",
                          }}
                          title="Live Demo"
                        >
                          <ArrowUpRight size={14} />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul
                    style={{
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: 7,
                      flex: 1,
                    }}
                  >
                    {project.highlights.slice(0, 3).map((h, j) => (
                      <li
                        key={j}
                        style={{
                          display: "flex",
                          gap: 9,
                          alignItems: "flex-start",
                          fontSize: 12,
                          color: "var(--text-muted)",
                          lineHeight: 1.65,
                        }}
                      >
                        <span
                          style={{
                            width: 5,
                            height: 5,
                            borderRadius: "50%",
                            background: "var(--gradient-1)",
                            flexShrink: 0,
                            marginTop: 7,
                          }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Stack tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                    {project.stack.slice(0, 5).map((tech) => (
                      <span key={tech} className="tag">
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 5 && (
                      <span
                        className="tag"
                        style={{
                          color: "var(--accent)",
                          borderColor: "rgba(79,70,229,0.2)",
                          background: "rgba(79,70,229,0.05)",
                        }}
                      >
                        +{project.stack.length - 5}
                      </span>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

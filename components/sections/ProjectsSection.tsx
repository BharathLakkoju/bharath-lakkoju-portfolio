"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Project } from "@/types/portfolio";
import { ExternalLink, Code2, Star } from "lucide-react";

const categories = ["All", "AI / SaaS", "SaaS", "Full Stack", "Tools"];

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [filter, setFilter] = useState("All");
  const [hovered, setHovered] = useState<string | null>(null);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" style={{ padding: "120px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
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
                fontWeight: 700,
                fontSize: "clamp(28px, 4vw, 48px)",
                letterSpacing: "-0.03em",
                color: "var(--text)",
              }}
            >
              Things I've built
            </h2>
            {/* Filters */}
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    padding: "6px 14px",
                    borderRadius: 99,
                    border: "1px solid",
                    borderColor: filter === cat ? "var(--accent)" : "var(--border)",
                    background:
                      filter === cat ? "rgba(124,106,247,0.12)" : "rgba(255,255,255,0.02)",
                    color: filter === cat ? "var(--accent)" : "var(--text-muted)",
                    fontSize: 12,
                    fontFamily: "var(--font-body)",
                    cursor: "pointer",
                    transition: "all 0.2s",
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
                transition={{ duration: 0.45, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                onHoverStart={() => setHovered(project.id)}
                onHoverEnd={() => setHovered(null)}
                style={{ position: "relative" }}
              >
                <div
                  className="glass-card"
                  style={{
                    borderRadius: 18,
                    padding: "28px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 20,
                    position: "relative",
                    overflow: "hidden",
                    cursor: "default",
                  }}
                >
                  {/* Hover glow */}
                  <motion.div
                    animate={{
                      opacity: hovered === project.id ? 1 : 0,
                    }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "radial-gradient(ellipse at 50% 0%, rgba(124,106,247,0.1) 0%, transparent 70%)",
                      pointerEvents: "none",
                    }}
                  />

                  {/* Header */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          marginBottom: 8,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--font-display)",
                            fontWeight: 700,
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
                            style={{ color: "var(--accent-2)", fill: "var(--accent-2)" }}
                          />
                        )}
                      </div>
                      <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>
                        {project.shortDesc}
                      </p>
                    </div>
                    <div style={{ display: "flex", gap: 8, marginLeft: 12 }}>
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, color: "var(--accent)" }}
                          style={{ color: "var(--text-subtle)", textDecoration: "none" }}
                        >
                          <Code2 size={16} />
                        </motion.a>
                      )}
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, color: "var(--accent)" }}
                          style={{ color: "var(--text-subtle)", textDecoration: "none" }}
                        >
                          <ExternalLink size={16} />
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
                          gap: 8,
                          alignItems: "flex-start",
                          fontSize: 12,
                          color: "var(--text-muted)",
                          lineHeight: 1.6,
                        }}
                      >
                        <span
                          style={{
                            width: 3,
                            height: 3,
                            borderRadius: "50%",
                            background: "var(--accent)",
                            flexShrink: 0,
                            marginTop: 7,
                          }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Stack tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {project.stack.slice(0, 5).map((tech) => (
                      <span key={tech} className="tag">
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 5 && (
                      <span className="tag" style={{ color: "var(--accent)" }}>
                        +{project.stack.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Category badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: 20,
                      right: 56,
                      fontSize: 10,
                      padding: "2px 8px",
                      borderRadius: 99,
                      background: "rgba(124,106,247,0.1)",
                      border: "1px solid rgba(124,106,247,0.2)",
                      color: "var(--accent)",
                      letterSpacing: "0.08em",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {project.category}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

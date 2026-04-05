"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Experience } from "@/types/portfolio";
import { Briefcase, Calendar } from "lucide-react";

export default function ExperienceSection({ experience }: { experience: Experience[] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      style={{
        padding: "120px 24px",
        background: "linear-gradient(180deg, transparent 0%, rgba(124,106,247,0.03) 50%, transparent 100%)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 72 }}
        >
          <span className="section-label">
            <span className="accent-line" />
            Experience
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
            Where I've worked
          </h2>
        </motion.div>

        <div style={{ position: "relative" }}>
          {/* Timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "absolute",
              left: 20,
              top: 0,
              bottom: 0,
              width: 1,
              background: "linear-gradient(180deg, var(--accent) 0%, rgba(124,106,247,0.1) 100%)",
              transformOrigin: "top",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            {experience.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                style={{ paddingLeft: 56, position: "relative" }}
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.15, type: "spring", stiffness: 200 }}
                  style={{
                    position: "absolute",
                    left: 12,
                    top: 24,
                    width: 17,
                    height: 17,
                    borderRadius: "50%",
                    background: exp.current ? "var(--gradient-1)" : "var(--bg-3)",
                    border: "2px solid",
                    borderColor: exp.current ? "transparent" : "var(--border)",
                    boxShadow: exp.current ? "0 0 16px rgba(124,106,247,0.5)" : "none",
                    transform: "translateX(-50%)",
                  }}
                />

                <div
                  className="glass-card"
                  style={{ borderRadius: 16, padding: "28px 32px" }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      flexWrap: "wrap",
                      gap: 12,
                      marginBottom: 20,
                    }}
                  >
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                        <h3
                          style={{
                            fontFamily: "var(--font-display)",
                            fontWeight: 700,
                            fontSize: 20,
                            letterSpacing: "-0.02em",
                            color: "var(--text)",
                          }}
                        >
                          {exp.company}
                        </h3>
                        {exp.current && (
                          <span
                            style={{
                              fontSize: 10,
                              padding: "2px 8px",
                              borderRadius: 99,
                              background: "rgba(106,247,200,0.1)",
                              border: "1px solid rgba(106,247,200,0.3)",
                              color: "var(--accent-3)",
                              letterSpacing: "0.1em",
                              fontFamily: "var(--font-body)",
                            }}
                          >
                            CURRENT
                          </span>
                        )}
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <Briefcase size={12} style={{ color: "var(--accent)" }} />
                        <span
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: 14,
                            color: "var(--accent)",
                            fontWeight: 500,
                          }}
                        >
                          {exp.role}
                        </span>
                        <span style={{ color: "var(--text-subtle)", fontSize: 12 }}>—</span>
                        <span style={{ color: "var(--text-subtle)", fontSize: 12 }}>
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        color: "var(--text-muted)",
                        fontSize: 12,
                        fontFamily: "var(--font-body)",
                        background: "rgba(255,255,255,0.04)",
                        padding: "4px 12px",
                        borderRadius: 99,
                        border: "1px solid var(--border)",
                      }}
                    >
                      <Calendar size={11} />
                      {exp.startDate} — {exp.endDate}
                    </div>
                  </div>

                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                    {exp.bullets.map((bullet, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.4 + i * 0.15 + j * 0.05 }}
                        style={{
                          display: "flex",
                          gap: 10,
                          alignItems: "flex-start",
                          fontSize: 13,
                          color: "var(--text-muted)",
                          lineHeight: 1.7,
                        }}
                      >
                        <span
                          style={{
                            width: 4,
                            height: 4,
                            borderRadius: "50%",
                            background: "var(--accent)",
                            flexShrink: 0,
                            marginTop: 8,
                            opacity: 0.7,
                          }}
                        />
                        {bullet}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

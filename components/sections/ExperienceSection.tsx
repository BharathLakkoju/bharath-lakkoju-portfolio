"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Experience } from "@/types/portfolio";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function ExperienceSection({
  experience,
}: {
  experience: Experience[];
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const yDecor = useTransform(scrollYProgress, [0, 1], [40, -60]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      style={{
        padding: "120px 24px",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(180deg, transparent 0%, rgba(79,70,229,0.02) 50%, transparent 100%)",
      }}
    >
      {/* Parallax decoration */}
      <motion.div
        style={{
          position: "absolute",
          left: "-120px",
          top: "30%",
          width: 360,
          height: 360,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(79,70,229,0.05) 0%, transparent 70%)",
          filter: "blur(50px)",
          y: yDecor,
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto" }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 72 }}
        >
          <span className="section-label">
            <span className="accent-line" />
            Experience
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
            Where I&apos;ve worked
          </h2>
        </motion.div>

        <div style={{ position: "relative" }}>
          {/* Timeline spine */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "absolute",
              left: 22,
              top: 0,
              bottom: 0,
              width: 2,
              background:
                "linear-gradient(180deg, var(--accent) 0%, rgba(79,70,229,0.15) 100%)",
              transformOrigin: "top",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {experience.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -32 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  delay: 0.2 + i * 0.18,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ paddingLeft: 60, position: "relative" }}
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{
                    delay: 0.3 + i * 0.18,
                    type: "spring",
                    stiffness: 220,
                    damping: 14,
                  }}
                  style={{
                    position: "absolute",
                    left: 13,
                    top: 28,
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: exp.current
                      ? "var(--gradient-1)"
                      : "var(--surface)",
                    border: exp.current
                      ? "none"
                      : "2px solid rgba(79,70,229,0.3)",
                    boxShadow: exp.current
                      ? "0 0 0 4px rgba(79,70,229,0.15), 0 4px 12px rgba(79,70,229,0.3)"
                      : "0 0 0 3px rgba(79,70,229,0.08)",
                    transform: "translateX(-50%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {exp.current && (
                    <div
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        background: "#fff",
                      }}
                    />
                  )}
                </motion.div>

                <motion.div
                  className="light-card"
                  style={{
                    borderRadius: 18,
                    padding: "28px 32px",
                    cursor: "default",
                  }}
                  whileHover={{ y: -2, boxShadow: "var(--shadow-lg)" }}
                >
                  {/* Card top accent */}
                  {exp.current && (
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 3,
                        background: "var(--gradient-1)",
                        borderRadius: "18px 18px 0 0",
                      }}
                    />
                  )}

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      flexWrap: "wrap",
                      gap: 12,
                      marginBottom: 22,
                    }}
                  >
                    <div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          marginBottom: 6,
                        }}
                      >
                        <h3
                          style={{
                            fontFamily: "var(--font-display)",
                            fontWeight: 800,
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
                              padding: "3px 10px",
                              borderRadius: 99,
                              background: "rgba(5,150,105,0.08)",
                              border: "1px solid rgba(5,150,105,0.2)",
                              color: "var(--accent-3)",
                              letterSpacing: "0.08em",
                              fontFamily: "var(--font-body)",
                              fontWeight: 500,
                            }}
                          >
                            CURRENT
                          </span>
                        )}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          flexWrap: "wrap",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 5,
                          }}
                        >
                          <Briefcase
                            size={12}
                            style={{ color: "var(--accent)" }}
                          />
                          <span
                            style={{
                              fontFamily: "var(--font-display)",
                              fontSize: 13,
                              color: "var(--accent)",
                              fontWeight: 600,
                            }}
                          >
                            {exp.role}
                          </span>
                        </div>
                        <span
                          style={{ color: "var(--border-hover)", fontSize: 12 }}
                        >
                          ·
                        </span>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 5,
                          }}
                        >
                          <MapPin
                            size={11}
                            style={{ color: "var(--text-subtle)" }}
                          />
                          <span
                            style={{
                              color: "var(--text-subtle)",
                              fontSize: 12,
                            }}
                          >
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    <motion.div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        color: "var(--text-muted)",
                        fontSize: 12,
                        fontFamily: "var(--font-body)",
                        background: "var(--bg-2)",
                        padding: "5px 12px",
                        borderRadius: 99,
                        border: "1px solid var(--border)",
                        flexShrink: 0,
                      }}
                    >
                      <Calendar size={11} style={{ color: "var(--accent)" }} />
                      {exp.startDate} — {exp.endDate}
                    </motion.div>
                  </div>

                  <ul
                    style={{
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                    }}
                  >
                    {exp.bullets.map((bullet, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.45 + i * 0.18 + j * 0.06 }}
                        style={{
                          display: "flex",
                          gap: 10,
                          alignItems: "flex-start",
                          fontSize: 13,
                          color: "var(--text-muted)",
                          lineHeight: 1.75,
                        }}
                      >
                        <CheckCircle2
                          size={14}
                          style={{
                            color: "var(--accent)",
                            flexShrink: 0,
                            marginTop: 3,
                            opacity: 0.7,
                          }}
                        />
                        {bullet}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

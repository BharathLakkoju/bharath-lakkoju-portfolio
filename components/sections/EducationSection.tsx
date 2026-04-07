"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Education } from "@/types/portfolio";
import { GraduationCap, Award } from "lucide-react";

export default function EducationSection({
  education,
}: {
  education: Education[];
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          style={{ marginBottom: 48 }}
        >
          <span className="section-label">
            <span className="accent-line" />
            Education
          </span>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: i * 0.1,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="light-card"
              style={{
                borderRadius: 18,
                padding: "24px 32px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 20,
                cursor: "default",
                position: "relative",
                overflow: "hidden",
              }}
              whileHover={{ y: -2, boxShadow: "var(--shadow-lg)" }}
            >
              {/* Left accent */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: 4,
                  background: "var(--gradient-1)",
                  borderRadius: "18px 0 0 18px",
                }}
              />

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 18,
                  paddingLeft: 8,
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: "rgba(79,70,229,0.08)",
                    border: "1px solid rgba(79,70,229,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <GraduationCap size={22} style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 800,
                      fontSize: 17,
                      letterSpacing: "-0.02em",
                      color: "var(--text)",
                      marginBottom: 4,
                    }}
                  >
                    {edu.institution}
                  </div>
                  <div style={{ fontSize: 13, color: "var(--text-muted)" }}>
                    {edu.degree}
                  </div>
                </div>
              </div>

              <div style={{ textAlign: "right" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    justifyContent: "flex-end",
                    marginBottom: 4,
                  }}
                >
                  <Award size={14} style={{ color: "var(--accent-2)" }} />
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 800,
                      fontSize: 20,
                      background: "var(--gradient-1)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {edu.gpa}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "var(--text-subtle)",
                    fontFamily: "var(--font-body)",
                    background: "var(--bg-2)",
                    padding: "3px 10px",
                    borderRadius: 99,
                    border: "1px solid var(--border)",
                    display: "inline-block",
                  }}
                >
                  {edu.year}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

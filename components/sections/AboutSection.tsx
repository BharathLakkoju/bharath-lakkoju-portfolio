"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Meta } from "@/types/portfolio";
import { MapPin, Trophy } from "lucide-react";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] } },
});

export default function AboutSection({
  meta,
  achievements,
}: {
  meta: Meta;
  achievements: string[];
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "2+", label: "Years Experience" },
    { value: "8+", label: "Apps Deployed" },
    { value: "60%", label: "Engagement Boost" },
    { value: "99%", label: "Uptime Achieved" },
  ];

  return (
    <section
      id="about"
      ref={ref}
      style={{ padding: "120px 24px", maxWidth: 1200, margin: "0 auto" }}
    >
      {/* Section header */}
      <motion.div
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={fadeUp(0)}
        style={{ marginBottom: 72 }}
      >
        <span className="section-label">
          <span className="accent-line" />
          About Me
        </span>
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "start",
        }}
        className="about-grid"
      >
        {/* Left: bio */}
        <div>
          <motion.h2
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={fadeUp(0.1)}
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: 24,
              color: "var(--text)",
            }}
          >
            Building things that{" "}
            <span className="gradient-text font-serif" style={{ fontStyle: "italic" }}>
              matter
            </span>
          </motion.h2>

          <motion.p
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={fadeUp(0.2)}
            style={{
              color: "var(--text-muted)",
              lineHeight: 1.9,
              marginBottom: 20,
              fontSize: 14,
            }}
          >
            {meta.bio}
          </motion.p>

          <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={fadeUp(0.25)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              color: "var(--text-subtle)",
              marginBottom: 40,
              fontSize: 13,
            }}
          >
            <MapPin size={13} />
            <span>{meta.location}</span>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={fadeUp(0.3)}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 16,
            }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
                className="glass-card"
                style={{ borderRadius: 12, padding: "20px 24px" }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: 32,
                    letterSpacing: "-0.04em",
                    background: "var(--gradient-1)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: 12, color: "var(--text-subtle)", marginTop: 4 }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right: achievements */}
        <div>
          <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={fadeUp(0.2)}
            style={{ marginBottom: 24 }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 20,
              }}
            >
              <Trophy size={14} style={{ color: "var(--accent-2)" }} />
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: 14,
                  color: "var(--text)",
                }}
              >
                Awards & Recognition
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {achievements.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    display: "flex",
                    gap: 12,
                    padding: "14px 16px",
                    borderRadius: 10,
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid var(--border)",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "var(--gradient-1)",
                      flexShrink: 0,
                      marginTop: 7,
                    }}
                  />
                  <span style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>
                    {a}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}

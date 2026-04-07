"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Meta } from "@/types/portfolio";
import { MapPin, Trophy, Sparkles } from "lucide-react";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  },
});

export default function AboutSection({
  meta,
  achievements,
}: {
  meta: Meta;
  achievements: string[];
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yDecor = useTransform(scrollYProgress, [0, 1], [-30, 60]);

  const stats = [
    { value: "2+", label: "Years Experience", color: "var(--accent)" },
    { value: "8+", label: "Apps Deployed", color: "var(--accent-2)" },
    { value: "60%", label: "Engagement Boost", color: "var(--accent-3)" },
    { value: "99%", label: "Uptime Achieved", color: "var(--accent)" },
  ];

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: "120px 24px",
        maxWidth: 1200,
        margin: "0 auto",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Parallax decoration */}
      <motion.div
        style={{
          position: "absolute",
          top: "10%",
          right: "-80px",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(79,70,229,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
          y: yDecor,
          pointerEvents: "none",
        }}
      />

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
              fontWeight: 800,
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: 24,
              color: "var(--text)",
            }}
          >
            Building things that{" "}
            <span
              className="gradient-text font-serif"
              style={{ fontStyle: "italic" }}
            >
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
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              color: "var(--text-subtle)",
              marginBottom: 40,
              fontSize: 12,
              padding: "5px 12px",
              borderRadius: 99,
              border: "1px solid var(--border)",
              background: "var(--bg-2)",
            }}
          >
            <MapPin size={12} style={{ color: "var(--accent)" }} />
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
              gap: 12,
            }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.88, y: 16 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{
                  delay: 0.38 + i * 0.09,
                  duration: 0.55,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="light-card"
                style={{
                  borderRadius: 14,
                  padding: "20px 22px",
                  cursor: "default",
                  position: "relative",
                  overflow: "hidden",
                }}
                whileHover={{ y: -3, boxShadow: "var(--shadow-lg)" }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: 3,
                    background: stat.color,
                    borderRadius: "14px 14px 0 0",
                  }}
                />
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: 30,
                    letterSpacing: "-0.04em",
                    color: stat.color,
                    lineHeight: 1,
                    marginBottom: 6,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "var(--text-subtle)",
                    fontFamily: "var(--font-body)",
                  }}
                >
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
            variants={fadeUp(0.15)}
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
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 10,
                  background: "rgba(249,115,22,0.1)",
                  border: "1px solid rgba(249,115,22,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Trophy size={14} style={{ color: "var(--accent-2)" }} />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 15,
                  color: "var(--text)",
                }}
              >
                Awards & Recognition
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {achievements.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 24 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    delay: 0.25 + i * 0.09,
                    duration: 0.55,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="light-card"
                  style={{
                    display: "flex",
                    gap: 12,
                    padding: "14px 16px",
                    borderRadius: 12,
                    alignItems: "flex-start",
                    cursor: "default",
                  }}
                  whileHover={{ x: 4, borderColor: "var(--border-hover)" }}
                >
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: 6,
                      background: `rgba(79,70,229,${0.06 + (i % 3) * 0.04})`,
                      border: "1px solid rgba(79,70,229,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: 1,
                    }}
                  >
                    <Sparkles size={10} style={{ color: "var(--accent)" }} />
                  </div>
                  <span
                    style={{
                      fontSize: 13,
                      color: "var(--text-muted)",
                      lineHeight: 1.65,
                    }}
                  >
                    {a}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

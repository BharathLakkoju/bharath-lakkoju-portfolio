"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Meta } from "@/types/portfolio";
import { ArrowDown, Code2, Link2, Mail, MapPin } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.09, duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function HeroSection({ meta }: { meta: Meta }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yBg1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yBg2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      ref={ref}
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "120px 24px 80px",
        background:
          "linear-gradient(160deg, #f0efff 0%, #f7f7fb 40%, #fff7f2 100%)",
      }}
    >
      {/* Dot grid — parallax layer 1 */}
      <motion.div className="dot-grid" style={{ y: yBg1, scale }} />

      {/* Hero grid lines — parallax layer 2 */}
      <motion.div className="hero-grid" style={{ y: yBg2 }} />

      {/* Decorative floating blobs */}
      <motion.div
        className="blob-float"
        style={{
          position: "absolute",
          top: "12%",
          right: "8%",
          width: 320,
          height: 320,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(79,70,229,0.08) 0%, transparent 70%)",
          filter: "blur(48px)",
          y: yBg1,
        }}
      />
      <motion.div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "5%",
          width: 280,
          height: 280,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
          y: yBg2,
        }}
      />

      {/* Floating geometric accent shapes */}
      <motion.div
        className="blob-float"
        initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 1.0, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "absolute",
          top: "20%",
          right: "15%",
          width: 64,
          height: 64,
          borderRadius: 16,
          background:
            "linear-gradient(135deg, rgba(79,70,229,0.15) 0%, rgba(124,58,237,0.1) 100%)",
          border: "1px solid rgba(79,70,229,0.2)",
          y: yBg1,
        }}
      />
      <motion.div
        style={{
          position: "absolute",
          bottom: "28%",
          left: "12%",
          width: 44,
          height: 44,
          borderRadius: "50%",
          background:
            "linear-gradient(135deg, rgba(249,115,22,0.18) 0%, rgba(234,88,12,0.1) 100%)",
          border: "1px solid rgba(249,115,22,0.2)",
          y: yBg2,
        }}
      />
      <motion.div
        className="blob-float"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{
          position: "absolute",
          top: "55%",
          right: "6%",
          width: 28,
          height: 28,
          borderRadius: 6,
          background: "rgba(5,150,105,0.15)",
          border: "1px solid rgba(5,150,105,0.25)",
          y: yBg2,
        }}
      />

      {/* Main content with vertical parallax */}
      <motion.div
        style={{ y: yContent, opacity }}
        initial="hidden"
        animate="show"
        variants={container}
      >
        <div
          style={{
            maxWidth: 860,
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Availability badge */}
          <motion.div
            variants={fadeUp}
            custom={0}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "7px 18px",
              borderRadius: 99,
              border: "1px solid rgba(5,150,105,0.25)",
              background: "rgba(5,150,105,0.06)",
              marginBottom: 40,
            }}
          >
            <span
              className="pulse-dot"
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "var(--accent-3)",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 11,
                color: "var(--accent-3)",
                letterSpacing: "0.1em",
              }}
            >
              {meta.availability}
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={fadeUp}
            custom={1}
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(52px, 8.5vw, 100px)",
              lineHeight: 0.93,
              letterSpacing: "-0.04em",
              marginBottom: 28,
            }}
          >
            <span style={{ color: "var(--text)", display: "block" }}>
              {meta.name.split(" ")[0]}
            </span>
            <span className="gradient-text" style={{ display: "block" }}>
              {meta.name.split(" ")[1]}
            </span>
          </motion.h1>

          {/* Title in serif italic */}
          <motion.p
            variants={fadeUp}
            custom={2}
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "clamp(20px, 3vw, 28px)",
              color: "var(--text-muted)",
              marginBottom: 16,
              lineHeight: 1.4,
            }}
          >
            {meta.title}
          </motion.p>

          {/* Location badge */}
          <motion.div
            variants={fadeUp}
            custom={3}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
              color: "var(--text-subtle)",
              fontSize: 12,
              marginBottom: 32,
            }}
          >
            <MapPin size={12} style={{ color: "var(--accent)" }} />
            <span style={{ fontFamily: "var(--font-body)" }}>
              {meta.location}
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            custom={4}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(13px, 2vw, 15px)",
              color: "var(--text-muted)",
              maxWidth: 520,
              margin: "0 auto 48px",
              lineHeight: 1.85,
            }}
          >
            {meta.tagline}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp}
            custom={5}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              flexWrap: "wrap",
              marginBottom: 52,
            }}
          >
            <motion.a
              href="#projects"
              style={{
                padding: "13px 32px",
                borderRadius: 99,
                background: "var(--gradient-1)",
                color: "#fff",
                textDecoration: "none",
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: 14,
                letterSpacing: "-0.01em",
                boxShadow:
                  "0 4px 24px rgba(79,70,229,0.3), 0 1px 4px rgba(79,70,229,0.2)",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 8px 32px rgba(79,70,229,0.4), 0 2px 8px rgba(79,70,229,0.2)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href={`mailto:${meta.email}`}
              style={{
                padding: "13px 32px",
                borderRadius: 99,
                border: "1.5px solid var(--border)",
                color: "var(--text)",
                textDecoration: "none",
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: 14,
                letterSpacing: "-0.01em",
                background: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(8px)",
              }}
              whileHover={{
                borderColor: "var(--accent)",
                color: "var(--accent)",
                background: "rgba(79,70,229,0.05)",
                scale: 1.03,
              }}
              whileTap={{ scale: 0.97 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={fadeUp}
            custom={6}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
            }}
          >
            {[
              { href: meta.github, icon: Code2, label: "GitHub" },
              { href: meta.linkedin, icon: Link2, label: "LinkedIn" },
              { href: `mailto:${meta.email}`, icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                title={label}
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 12,
                  border: "1.5px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  background: "rgba(255,255,255,0.7)",
                  backdropFilter: "blur(8px)",
                  boxShadow: "var(--shadow-sm)",
                }}
                whileHover={{
                  borderColor: "var(--accent)",
                  color: "var(--accent)",
                  background: "rgba(79,70,229,0.06)",
                  scale: 1.12,
                  y: -2,
                }}
                whileTap={{ scale: 0.93 }}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        style={{
          position: "absolute",
          bottom: 36,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          color: "var(--text-subtle)",
        }}
      >
        <span
          style={{
            fontSize: 10,
            letterSpacing: "0.18em",
            fontFamily: "var(--font-body)",
          }}
        >
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={13} />
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Meta } from "@/types/portfolio";
import { ArrowDown, Code2, Link2, Mail } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function HeroSection({ meta }: { meta: Meta }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

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
      }}
    >
      {/* Grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(124,106,247,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124,106,247,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      <motion.div
        style={{ y, opacity }}
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        className="hero-content"
      >
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          {/* Availability badge */}
          <motion.div
            variants={fadeUp}
            custom={0}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 16px",
              borderRadius: 99,
              border: "1px solid rgba(106,247,200,0.3)",
              background: "rgba(106,247,200,0.06)",
              marginBottom: 40,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "var(--accent-3)",
                display: "inline-block",
                animation: "pulse 2s ease-in-out infinite",
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
              fontSize: "clamp(48px, 8vw, 96px)",
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              marginBottom: 24,
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
              fontSize: "clamp(18px, 3vw, 26px)",
              color: "var(--text-muted)",
              marginBottom: 20,
              lineHeight: 1.4,
            }}
          >
            {meta.title}
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            custom={3}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(13px, 2vw, 15px)",
              color: "var(--text-subtle)",
              maxWidth: 560,
              margin: "0 auto 48px",
              lineHeight: 1.8,
            }}
          >
            {meta.tagline}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp}
            custom={4}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              flexWrap: "wrap",
              marginBottom: 56,
            }}
          >
            <motion.a
              href="#projects"
              style={{
                padding: "12px 28px",
                borderRadius: 99,
                background: "var(--gradient-1)",
                color: "#fff",
                textDecoration: "none",
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: 14,
                letterSpacing: "-0.01em",
                boxShadow: "0 0 40px rgba(124,106,247,0.3)",
              }}
              whileHover={{ scale: 1.04, boxShadow: "0 0 60px rgba(124,106,247,0.4)" }}
              whileTap={{ scale: 0.97 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href={`mailto:${meta.email}`}
              style={{
                padding: "12px 28px",
                borderRadius: 99,
                border: "1px solid var(--border)",
                color: "var(--text)",
                textDecoration: "none",
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: 14,
                letterSpacing: "-0.01em",
                background: "rgba(255,255,255,0.03)",
              }}
              whileHover={{ borderColor: "var(--accent)", background: "rgba(124,106,247,0.08)" }}
              whileTap={{ scale: 0.97 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={fadeUp}
            custom={5}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
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
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  background: "rgba(255,255,255,0.03)",
                }}
                whileHover={{
                  borderColor: "var(--accent)",
                  color: "var(--accent)",
                  background: "rgba(124,106,247,0.08)",
                  scale: 1.1,
                }}
                whileTap={{ scale: 0.95 }}
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
        transition={{ delay: 1.5 }}
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          color: "var(--text-subtle)",
        }}
      >
        <span style={{ fontSize: 10, letterSpacing: "0.15em", fontFamily: "var(--font-body)" }}>
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.8); }
        }
      `}</style>
    </section>
  );
}

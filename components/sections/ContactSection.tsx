"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Meta } from "@/types/portfolio";
import { Mail, Code2, Link2, MapPin, Phone, Send } from "lucide-react";

export default function ContactSection({ meta }: { meta: Meta }) {
  const sectionRef = useRef<HTMLElement>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const yDecor1 = useTransform(scrollYProgress, [0, 1], [-40, 60]);
  const yDecor2 = useTransform(scrollYProgress, [0, 1], [20, -50]);

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        padding: "120px 24px",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(160deg, #f0efff 0%, #f7f7fb 50%, #fff7f2 100%)",
      }}
    >
      {/* Parallax decorations */}
      <motion.div
        style={{
          position: "absolute",
          left: "-60px",
          top: "10%",
          width: 360,
          height: 360,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(79,70,229,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
          y: yDecor1,
          pointerEvents: "none",
        }}
      />
      <motion.div
        style={{
          position: "absolute",
          right: "-80px",
          bottom: "15%",
          width: 280,
          height: 280,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 70%)",
          filter: "blur(50px)",
          y: yDecor2,
          pointerEvents: "none",
        }}
      />

      {/* Decorative shapes */}
      <motion.div
        className="blob-float"
        style={{
          position: "absolute",
          top: "18%",
          right: "12%",
          width: 56,
          height: 56,
          borderRadius: 14,
          background: "rgba(79,70,229,0.08)",
          border: "1px solid rgba(79,70,229,0.15)",
          y: yDecor1,
        }}
      />
      <motion.div
        style={{
          position: "absolute",
          bottom: "22%",
          left: "8%",
          width: 36,
          height: 36,
          borderRadius: "50%",
          background: "rgba(5,150,105,0.1)",
          border: "1px solid rgba(5,150,105,0.2)",
          animation: "float 8s ease-in-out infinite",
          y: yDecor2,
        }}
      />

      <div
        style={{
          maxWidth: 720,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
        ref={ref}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">
            <span className="accent-line" />
            Contact
          </span>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(36px, 6vw, 72px)",
              letterSpacing: "-0.04em",
              lineHeight: 1.0,
              marginTop: 24,
              marginBottom: 20,
              color: "var(--text)",
            }}
          >
            Let&apos;s build something{" "}
            <span
              className="gradient-text font-serif"
              style={{ fontStyle: "italic" }}
            >
              together
            </span>
          </h2>

          <p
            style={{
              color: "var(--text-muted)",
              fontSize: 15,
              lineHeight: 1.85,
              maxWidth: 500,
              margin: "0 auto 48px",
            }}
          >
            I&apos;m actively seeking SDE-1, SDE-2, Full Stack, and AI Engineer
            roles. Open to full-time positions at product companies and MNCs in
            India.
          </p>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginBottom: 40 }}
          >
            <motion.a
              href={`mailto:${meta.email}`}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 12px 40px rgba(79,70,229,0.35)",
              }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "16px 36px",
                borderRadius: 99,
                background: "var(--gradient-1)",
                color: "#fff",
                textDecoration: "none",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 16,
                letterSpacing: "-0.01em",
                boxShadow: "0 6px 28px rgba(79,70,229,0.3)",
              }}
            >
              <Send size={17} />
              {meta.email}
            </motion.a>
          </motion.div>

          {/* Contact info row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 20,
              flexWrap: "wrap",
              marginBottom: 40,
            }}
          >
            {[
              { icon: MapPin, label: meta.location },
              { icon: Phone, label: meta.phone },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  color: "var(--text-muted)",
                  fontSize: 13,
                  padding: "6px 14px",
                  borderRadius: 99,
                  background: "rgba(255,255,255,0.7)",
                  border: "1px solid var(--border)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <Icon size={13} style={{ color: "var(--accent)" }} />
                {label}
              </div>
            ))}
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{ display: "flex", justifyContent: "center", gap: 10 }}
          >
            {[
              { href: meta.github, icon: Code2, label: "GitHub" },
              { href: meta.linkedin, icon: Link2, label: "LinkedIn" },
            ].map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="light-card"
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  borderColor: "var(--border-hover)",
                  boxShadow: "var(--shadow-md)",
                }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 22px",
                  borderRadius: 12,
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  fontFamily: "var(--font-display)",
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                }}
              >
                <Icon size={15} />
                {label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

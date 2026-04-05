"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Meta } from "@/types/portfolio";
import { Mail, Code2, Link2, MapPin, Phone } from "lucide-react";

export default function ContactSection({ meta }: { meta: Meta }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      style={{
        padding: "120px 24px",
        background: "linear-gradient(180deg, transparent 0%, rgba(124,106,247,0.04) 50%, transparent 100%)",
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
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
            }}
          >
            Let's build something{" "}
            <span className="gradient-text font-serif" style={{ fontStyle: "italic" }}>
              together
            </span>
          </h2>

          <p
            style={{
              color: "var(--text-muted)",
              fontSize: 15,
              lineHeight: 1.8,
              maxWidth: 520,
              margin: "0 auto 48px",
            }}
          >
            I'm actively seeking SDE-1, SDE-2, Full Stack, and AI Engineer roles. 
            Open to full-time positions at product companies and MNCs in India.
          </p>

          {/* Primary CTA */}
          <motion.a
            href={`mailto:${meta.email}`}
            whileHover={{ scale: 1.04, boxShadow: "0 0 60px rgba(124,106,247,0.4)" }}
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
              boxShadow: "0 0 40px rgba(124,106,247,0.3)",
              marginBottom: 48,
            }}
          >
            <Mail size={18} />
            {meta.email}
          </motion.a>

          {/* Contact info row */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 24,
              flexWrap: "wrap",
              marginBottom: 48,
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
                }}
              >
                <Icon size={13} style={{ color: "var(--accent)" }} />
                {label}
              </div>
            ))}
          </div>

          {/* Social links */}
          <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
            {[
              { href: meta.github, icon: Code2, label: "GitHub" },
              { href: meta.linkedin, icon: Link2, label: "LinkedIn" },
            ].map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05,
                  borderColor: "var(--accent)",
                  color: "var(--accent)",
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 20px",
                  borderRadius: 12,
                  border: "1px solid var(--border)",
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  fontFamily: "var(--font-display)",
                  fontSize: 13,
                  fontWeight: 500,
                  background: "rgba(255,255,255,0.03)",
                  transition: "all 0.2s",
                }}
              >
                <Icon size={15} />
                {label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

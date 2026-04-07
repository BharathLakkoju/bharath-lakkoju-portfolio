"use client";

import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Nav({ name }: { name: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 60));

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "14px 0",
          background: scrolled ? "rgba(248,248,251,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(79,70,229,0.1)" : "none",
          transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
          boxShadow: scrolled ? "0 1px 16px rgba(79,70,229,0.06)" : "none",
        }}
      >
        <nav
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <motion.a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              textDecoration: "none",
            }}
            whileHover={{ scale: 1.03 }}
          >
            <motion.div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: "var(--gradient-1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 13,
                fontWeight: 700,
                fontFamily: "var(--font-display)",
                color: "#fff",
                letterSpacing: "-0.02em",
                boxShadow: "0 2px 12px rgba(79,70,229,0.3)",
              }}
              whileHover={{ rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {initials}
            </motion.div>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 15,
                color: "var(--text)",
                letterSpacing: "-0.02em",
              }}
            >
              {name}
            </span>
          </motion.a>

          {/* Desktop nav */}
          <div
            style={{ display: "flex", alignItems: "center", gap: 2 }}
            className="hidden-mobile"
          >
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                style={{
                  position: "relative",
                  padding: "7px 14px",
                  borderRadius: 8,
                  textDecoration: "none",
                  fontFamily: "var(--font-display)",
                  fontSize: 13,
                  fontWeight: 500,
                  color:
                    active === item.href
                      ? "var(--accent)"
                      : "var(--text-muted)",
                  transition: "color 0.2s",
                  letterSpacing: "-0.01em",
                }}
                whileHover={{ color: "var(--accent)" }}
                onClick={() => setActive(item.href)}
              >
                {item.label}
                {active === item.href && (
                  <motion.span
                    layoutId="nav-active"
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: 8,
                      background: "rgba(79,70,229,0.08)",
                    }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}

            <motion.a
              href={`mailto:lbh.lbharath@gmail.com`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "7px 16px",
                borderRadius: 99,
                border: "1.5px solid var(--border)",
                textDecoration: "none",
                fontFamily: "var(--font-display)",
                fontSize: 12,
                fontWeight: 600,
                color: "var(--accent)",
                marginLeft: 10,
                letterSpacing: "-0.01em",
                background: "rgba(79,70,229,0.05)",
                boxShadow: "var(--shadow-sm)",
              }}
              whileHover={{
                borderColor: "var(--accent)",
                background: "rgba(79,70,229,0.1)",
                scale: 1.04,
              }}
              whileTap={{ scale: 0.97 }}
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
              display: "none",
              color: "var(--text)",
            }}
            aria-label="Toggle menu"
            className="mobile-menu-btn"
          >
            <div
              style={{
                width: 22,
                display: "flex",
                flexDirection: "column",
                gap: 5,
              }}
            >
              <motion.span
                style={{
                  display: "block",
                  height: 2,
                  background: "var(--text)",
                  borderRadius: 2,
                  transformOrigin: "left",
                }}
                animate={open ? { rotate: 45, y: -1 } : { rotate: 0, y: 0 }}
              />
              <motion.span
                style={{
                  display: "block",
                  height: 2,
                  background: "var(--text)",
                  borderRadius: 2,
                }}
                animate={open ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              />
              <motion.span
                style={{
                  display: "block",
                  height: 2,
                  background: "var(--text)",
                  borderRadius: 2,
                  transformOrigin: "left",
                }}
                animate={open ? { rotate: -45, y: 1 } : { rotate: 0, y: 0 }}
              />
            </div>
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed",
              top: 68,
              left: 16,
              right: 16,
              background: "rgba(255,255,255,0.97)",
              backdropFilter: "blur(24px)",
              borderRadius: 18,
              border: "1px solid var(--border)",
              padding: "16px 12px",
              zIndex: 99,
              display: "flex",
              flexDirection: "column",
              gap: 4,
              boxShadow: "0 8px 40px rgba(79,70,229,0.12)",
            }}
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setOpen(false)}
                style={{
                  padding: "12px 16px",
                  borderRadius: 10,
                  textDecoration: "none",
                  fontFamily: "var(--font-display)",
                  fontSize: 15,
                  fontWeight: 500,
                  color: "var(--text-muted)",
                }}
                whileHover={{
                  color: "var(--accent)",
                  background: "rgba(79,70,229,0.06)",
                }}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}

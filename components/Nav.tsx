"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "16px 0",
          transition: "background 0.3s",
          background: scrolled
            ? "rgba(10,10,15,0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
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
            whileHover={{ scale: 1.02 }}
          >
            <div
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
              }}
            >
              {initials}
            </div>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
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
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
            className="hidden-mobile"
          >
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                style={{
                  padding: "6px 14px",
                  borderRadius: 8,
                  textDecoration: "none",
                  fontFamily: "var(--font-display)",
                  fontSize: 13,
                  fontWeight: 500,
                  color:
                    active === item.href
                      ? "var(--text)"
                      : "var(--text-muted)",
                  transition: "color 0.2s",
                  letterSpacing: "-0.01em",
                }}
                whileHover={{
                  color: "var(--text)",
                  backgroundColor: "rgba(255,255,255,0.05)",
                }}
                onClick={() => setActive(item.href)}
              >
                {item.label}
              </motion.a>
            ))}

            <motion.a
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "6px 14px",
                borderRadius: 8,
                border: "1px solid var(--border)",
                textDecoration: "none",
                fontFamily: "var(--font-display)",
                fontSize: 12,
                fontWeight: 500,
                color: "var(--text-muted)",
                marginLeft: 8,
                letterSpacing: "-0.01em",
              }}
              whileHover={{
                borderColor: "var(--accent)",
                color: "var(--accent)",
              }}
            >
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
                  height: 1.5,
                  background: "var(--text)",
                  borderRadius: 2,
                  transformOrigin: "left",
                }}
                animate={open ? { rotate: 45, y: -1 } : { rotate: 0, y: 0 }}
              />
              <motion.span
                style={{
                  display: "block",
                  height: 1.5,
                  background: "var(--text)",
                  borderRadius: 2,
                }}
                animate={open ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              />
              <motion.span
                style={{
                  display: "block",
                  height: 1.5,
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: "fixed",
              top: 65,
              left: 16,
              right: 16,
              background: "rgba(17,17,24,0.98)",
              backdropFilter: "blur(30px)",
              borderRadius: 16,
              border: "1px solid var(--border)",
              padding: 20,
              zIndex: 99,
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setOpen(false)}
                style={{
                  padding: "12px 16px",
                  borderRadius: 8,
                  textDecoration: "none",
                  fontFamily: "var(--font-display)",
                  fontSize: 15,
                  fontWeight: 500,
                  color: "var(--text-muted)",
                }}
              >
                {item.label}
              </motion.a>
            ))}
            <a
              style={{
                padding: "12px 16px",
                borderRadius: 8,
                textDecoration: "none",
                fontFamily: "var(--font-display)",
                fontSize: 14,
                fontWeight: 500,
                color: "var(--accent)",
                marginTop: 8,
                borderTop: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
            </a>
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

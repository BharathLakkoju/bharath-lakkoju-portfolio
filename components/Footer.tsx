"use client";

import { motion } from "framer-motion";
import { Meta } from "@/types/portfolio";
import { Heart } from "lucide-react";

export default function Footer({ meta }: { meta: Meta }) {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "28px 24px",
        position: "relative",
        zIndex: 2,
        background: "var(--surface)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 6,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 12,
            color: "var(--text-subtle)",
          }}
        >
          © {new Date().getFullYear()} {meta.name}. Built with
        </span>
        <motion.span
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Heart size={12} style={{ color: "#f97316", fill: "#f97316" }} />
        </motion.span>
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 12,
            color: "var(--text-subtle)",
          }}
        >
          using Next.js &amp; Framer Motion.
        </span>
      </div>
    </footer>
  );
}

"use client";

import { Meta } from "@/types/portfolio";

export default function Footer({ meta }: { meta: Meta }) {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "32px 24px",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 12,
            color: "var(--text-subtle)",
          }}
        >
          © {new Date().getFullYear()} {meta.name}. Built with Next.js & Framer Motion.
        </span>
      </div>
    </footer>
  );
}

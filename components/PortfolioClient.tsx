"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { PortfolioData } from "@/types/portfolio";
import Nav from "@/components/Nav";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

interface Props {
  data: PortfolioData;
}

export default function PortfolioClient({ data: initialData }: Props) {
  const [data, setData] = useState(initialData);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setCursorVisible(true);
    };
    const handleLeave = () => setCursorVisible(false);
    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      {/* Scroll progress bar */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX }}
      />

      {/* Cursor glow */}
      <AnimatePresence>
        {cursorVisible && (
          <motion.div
            className="cursor-glow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: mousePos.x, y: mousePos.y }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 40 }}
            style={{ position: "fixed", top: 0, left: 0, pointerEvents: "none", zIndex: 1 }}
          />
        )}
      </AnimatePresence>

      {/* Ambient background blobs */}
      <div className="ambient ambient-1 blob-float" />
      <div className="ambient ambient-2" style={{ animationDelay: "3s" }} />
      <div className="ambient ambient-3" style={{ animationDelay: "5s" }} />

      {/* Navigation */}
      <Nav name={data.meta.name} />

      {/* Main content */}
      <main style={{ position: "relative", zIndex: 2 }}>
        <HeroSection meta={data.meta} />
        <AboutSection meta={data.meta} achievements={data.achievements} />
        <ExperienceSection experience={data.experience} />
        <ProjectsSection projects={data.projects} />
        <SkillsSection skills={data.skills} />
        <EducationSection education={data.education} />
        <ContactSection meta={data.meta} />
      </main>

      <Footer meta={data.meta} />
    </div>
  );
}

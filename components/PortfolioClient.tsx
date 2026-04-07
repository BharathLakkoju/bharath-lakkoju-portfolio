"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
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

export default function PortfolioClient({ data }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 32 });

  return (
    <div
      ref={containerRef}
      style={{ position: "relative", background: "var(--bg)" }}
    >
      {/* Scroll progress bar */}
      <motion.div className="scroll-progress" style={{ scaleX }} />

      {/* Ambient background blobs — light theme tints */}
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

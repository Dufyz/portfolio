"use client";

import AOS from "aos";
import { useEffect } from "react";

import About from "@/components/home/about";
import HeroSection from "@/components/home/hero-section";
import Contact from "@/components/home/contact";
import Projects from "@/components/home/projects";

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <main>
      <HeroSection />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

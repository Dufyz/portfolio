"use client";

import AOS from "aos";
import { useEffect } from "react";

import About from "@/components/home/about";
import HeroSection from "@/components/home/hero-section";
import Contact from "@/components/home/contact";
import Work from "@/components/home/work";
import Experience from "@/components/home/experience";

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
      {/* <Experience /> */}
      <Work />
      <Contact />
    </main>
  );
}

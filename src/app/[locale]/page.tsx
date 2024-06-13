"use client";

import AOS from "aos";
import { useEffect } from "react";

import About from "@/components/home/about";
import HeroSection from "@/components/home/hero-section";
import Contact from "@/components/home/contact";

export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 500,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <main className="bg-gray-900">
      <HeroSection />
      <About />
      <Contact />
    </main>
  );
}

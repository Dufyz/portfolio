"use client";

import AOS from "aos";
import { useEffect } from "react";

import About from "@/components/home/about";
import HeroSection from "@/components/home/hero-section";

export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <main className="bg-gray-900">
      <HeroSection />
      <About />
    </main>
  );
}

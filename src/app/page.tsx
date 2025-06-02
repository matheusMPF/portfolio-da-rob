// src/app/page.tsx
"use client";

import Footer from "../components/Footer";
import { HeroSection } from "./HeroSection/page";

import { InfoSection } from "./InfoSection/page";
import { IntroSection } from "./IntroSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <IntroSection />
      <InfoSection />
      <Footer />
    </main>
  );
}

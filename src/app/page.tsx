// src/app/page.tsx
'use client';

import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';

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

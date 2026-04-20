import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { StackSection } from './components/StackSection';
import { MultiLevelSection } from './components/MultiLevelSection';
import { ComparisonSection } from './components/ComparisonSection';
import { WhoSection } from './components/WhoSection';
import { RoadmapSection } from './components/RoadmapSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen text-[#f5f5f0]" style={{ background: '#0a0e1a', fontFamily: "'Geist', system-ui, sans-serif" }}>
      <Navbar scrolled={scrolled} />
      <HeroSection />
      <ProblemSection />
      <StackSection />
      <MultiLevelSection />
      <ComparisonSection />
      <WhoSection />
      <RoadmapSection />
      <CTASection />
      <Footer />
    </div>
  );
}

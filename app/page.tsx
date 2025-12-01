'use client';

import { useEffect, useState } from 'react';
import NavigationV2 from './components/NavigationV2';
import HeroV2 from './components/HeroV2';
import AboutV2 from './components/AboutV2';
import CaseStudiesV2 from './components/CaseStudiesV2';
import SkillsV2 from './components/SkillsV2';
import ContactV2 from './components/ContactV2';
import CustomCursor from './components/CustomCursor';

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    document.addEventListener('click', handleSmoothScroll);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="min-h-screen bg-v2-dark text-white overflow-x-hidden cursor-none">
      <CustomCursor />
      <div className="v2-dot-pattern fixed inset-0 pointer-events-none opacity-30" />
      <div className="v2-gradient-orb v2-gradient-orb-1" />
      <div className="v2-gradient-orb v2-gradient-orb-2" />
      <div className="v2-gradient-orb v2-gradient-orb-3" />
      
      <NavigationV2 />
      <HeroV2 />
      <AboutV2 />
      <CaseStudiesV2 />
      <SkillsV2 />
      <ContactV2 />
      
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-900/50 z-50 backdrop-blur-sm">
        <div 
          className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 transition-all duration-300 relative overflow-hidden"
          style={{ width: `${scrollProgress}%` }}
        >
          <div className="absolute inset-0 bg-white/30 animate-pulse" />
        </div>
      </div>
    </main>
  );
}

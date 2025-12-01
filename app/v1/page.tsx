import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import CaseStudies from './components/CaseStudies';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import VersionSwitcher from './components/VersionSwitcher';

export default function V1Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <CaseStudies />
      <Experience />
      <Skills />
      <Contact />
      <VersionSwitcher />
    </main>
  );
}


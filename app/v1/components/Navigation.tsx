'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#case-studies' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background border-b-4 border-electric-blue shadow-[0_4px_0px_0px_rgba(0,212,255,1)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Name */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group"
            >
              <div className="border-4 border-hot-pink bg-hot-pink px-4 py-2 hover:bg-transparent transition-colors">
                <span className="font-heading text-xl md:text-2xl font-bold text-deep-black group-hover:text-hot-pink transition-colors uppercase">
                  SANA SHAHID
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="font-mono text-sm uppercase text-foreground hover:text-electric-blue transition-colors border-b-2 border-transparent hover:border-electric-blue pb-1"
                >
                  {link.label}
                </button>
              ))}
              
              {/* Contact CTA */}
              <button
                onClick={scrollToContact}
                className="brutal-button bg-lime-green text-deep-black hover:shadow-[4px_4px_0px_0px_rgba(255,0,110,1)] text-sm px-6 py-3"
              >
                GET IN TOUCH
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden border-4 border-foreground p-2 hover:bg-foreground hover:text-background transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t-4 border-electric-blue bg-background"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left font-mono text-lg uppercase text-foreground hover:text-electric-blue transition-colors border-l-4 border-transparent hover:border-electric-blue pl-4 py-2"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={scrollToContact}
                className="w-full brutal-button bg-lime-green text-deep-black hover:shadow-[4px_4px_0px_0px_rgba(255,0,110,1)] mt-4"
              >
                GET IN TOUCH
              </button>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Spacer to prevent content from being hidden under fixed nav */}
      <div className="h-20"></div>
    </>
  );
}


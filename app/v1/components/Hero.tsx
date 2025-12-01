'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToWork = () => {
    document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative overflow-hidden py-20 px-6 md:px-12 flex items-center">
      {/* Animated Background Blocks */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ rotate: -10, scale: 1.05 }}
        className="absolute top-20 left-0 w-72 h-72 bg-electric-blue border-8 border-deep-black -z-10"
        style={{ transform: 'rotate(-8deg)' }}
      />
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ rotate: 7, scale: 1.05 }}
        className="absolute bottom-40 right-20 w-64 h-64 bg-hot-pink border-8 border-deep-black -z-10"
        style={{ transform: 'rotate(5deg)' }}
      />
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        whileHover={{ rotate: -5, scale: 1.05 }}
        className="absolute top-1/2 right-1/4 w-48 h-48 bg-lime-green border-8 border-deep-black -z-10"
        style={{ transform: 'rotate(-3deg)' }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          {/* Main Headline */}
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <span className="font-heading text-foreground block">
              I TURN PRODUCTS
            </span>
            <span className="font-heading text-electric-blue block mt-4">
              INTO REVENUE
            </span>
            <motion.span 
              className="font-heading text-neon-yellow block mt-4 relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              ENGINES
              <motion.span 
                className="absolute -bottom-4 left-0 w-32 h-2 bg-hot-pink"
                initial={{ width: 0 }}
                animate={{ width: 128 }}
                transition={{ duration: 0.6, delay: 1 }}
              />
            </motion.span>
          </motion.h1>

          {/* Name Badge */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            whileHover={{ rotate: 0, scale: 1.05 }}
            className="border-8 border-hot-pink bg-deep-black inline-block px-8 py-4 mt-8"
            style={{ transform: 'rotate(-2deg)' }}
          >
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-hot-pink" />
              <h2 className="font-mono text-4xl md:text-5xl font-bold text-hot-pink uppercase tracking-wider">
                SANA SHAHID
              </h2>
            </div>
            <p className="font-body text-foreground/80 mt-2 text-lg">
              B2B SaaS Product Marketer • GTM Strategist
            </p>
          </motion.div>
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="max-w-4xl mb-12"
        >
          <div className="border-l-8 border-electric-blue pl-8 py-6 bg-deep-black/50 mb-6">
            <motion.p 
              className="text-2xl md:text-3xl font-body text-foreground leading-relaxed mb-4"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.2 }}
            >
              Most product marketers either know <span className="text-hot-pink font-bold">strategy</span> or 
              <span className="text-lime-green font-bold"> execution</span>. I do both.
            </motion.p>
            <motion.p 
              className="text-xl md:text-2xl font-body text-foreground/90 leading-relaxed"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.4 }}
            >
              I&apos;ve helped B2B SaaS companies generate <span className="font-bold text-neon-yellow">€6M+ in ARR</span>, 
              shorten sales cycles by <span className="font-bold text-electric-blue">15%</span>, and increase 
              win rates by <span className="font-bold text-hot-pink">20%</span> through positioning that resonates 
              and go-to-market that converts.
            </motion.p>
          </div>

          {/* Impact Highlights */}
          <motion.div 
            className="grid md:grid-cols-3 gap-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            <motion.div 
              className="border-4 border-lime-green bg-lime-green/5 p-4"
              whileHover={{ y: -4, borderColor: '#adff00', backgroundColor: 'rgba(173, 255, 0, 0.15)' }}
              transition={{ duration: 0.2 }}
            >
              <div className="font-mono text-sm text-lime-green mb-2">POSITIONING</div>
              <p className="font-body text-sm text-foreground/90">
                Turn complex features into compelling value stories that buyers actually care about
              </p>
            </motion.div>
            <motion.div 
              className="border-4 border-hot-pink bg-hot-pink/5 p-4"
              whileHover={{ y: -4, borderColor: '#ff006e', backgroundColor: 'rgba(255, 0, 110, 0.15)' }}
              transition={{ duration: 0.2 }}
            >
              <div className="font-mono text-sm text-hot-pink mb-2">ENABLEMENT</div>
              <p className="font-body text-sm text-foreground/90">
                Arm sales teams with the right messages, tools, and confidence to close faster
              </p>
            </motion.div>
            <motion.div 
              className="border-4 border-electric-blue bg-electric-blue/5 p-4"
              whileHover={{ y: -4, borderColor: '#00d4ff', backgroundColor: 'rgba(0, 212, 255, 0.15)' }}
              transition={{ duration: 0.2 }}
            >
              <div className="font-mono text-sm text-electric-blue mb-2">GROWTH</div>
              <p className="font-body text-sm text-foreground/90">
                Build demand engines that consistently fill pipeline with qualified opportunities
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.8 }}
          className="flex flex-wrap gap-6"
        >
          <motion.button
            onClick={scrollToWork}
            whileHover={{ y: -4, boxShadow: '8px 8px 0px 0px rgba(0,212,255,1)' }}
            whileTap={{ scale: 0.95 }}
            className="brutal-button bg-neon-yellow text-deep-black transition-all"
          >
            SEE THE RESULTS
          </motion.button>
          <motion.button
            onClick={scrollToContact}
            whileHover={{ y: -4, boxShadow: '8px 8px 0px 0px rgba(255,0,110,1)' }}
            whileTap={{ scale: 0.95 }}
            className="brutal-button bg-electric-blue text-deep-black transition-all"
          >
            LET&apos;S TALK STRATEGY
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-8 h-8 text-lime-green" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

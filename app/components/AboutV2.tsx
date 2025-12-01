'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Zap, TrendingUp, Award } from 'lucide-react';

export default function AboutV2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [counters, setCounters] = useState({ years: 0, companies: 0, products: 0, markets: 0 });

  useEffect(() => {
    if (!isInView) return;

    const targets = { years: 7, companies: 10, products: 15, markets: 20 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        years: Math.floor(targets.years * progress),
        companies: Math.floor(targets.companies * progress),
        products: Math.floor(targets.products * progress),
        markets: Math.floor(targets.markets * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView]);

  const stats = [
    { icon: Target, value: counters.years + '+', label: 'Years Experience', color: 'text-cyan-400' },
    { icon: Zap, value: counters.companies + '+', label: 'Companies Worked With', color: 'text-purple-400' },
    { icon: TrendingUp, value: counters.products + '+', label: 'Products Launched', color: 'text-pink-400' },
    { icon: Award, value: counters.markets + '+', label: 'Markets Served', color: 'text-green-400' },
  ];

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full slider-morph blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full slider-morph blur-3xl" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-block px-4 py-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full mb-6 slider-shine"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-cyan-400 font-medium">About Me</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Transforming Products Into
              <span className="v2-gradient-text block mt-2 slider-neon-text"> Market Leaders</span>
            </h2>

            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              I'm a Certified Product Marketing Manager with deep expertise in B2B SaaS, specializing 
              in AI-driven growth strategies and marketing automation. My mission is to build workflows 
              that give marketers their time and focus back while driving measurable business outcomes.
            </p>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              From go-to-market strategy to sales enablement and value-led positioning, I bridge the gap 
              between product, marketing, and sales to accelerate pipeline and shorten sales cycles across 
              SMB and enterprise markets globally.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {[
                'GTM Strategy',
                'AI Automation',
                'Sales Enablement',
                'Product Positioning',
                'B2B SaaS',
                'Data Analytics',
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-white/10 transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            <a
              href="#contact"
              className="v2-btn-primary inline-block px-8 py-4 slider-liquid-btn slider-btn-3d group relative overflow-hidden"
            >
              <span className="relative z-10">Let's Work Together</span>
            </a>
          </motion.div>

          {/* Right Side - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20, rotateX: -45 }}
                  animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.1, rotateY: 5, z: 50 }}
                  className="v2-glass-card p-6 rounded-2xl slider-tilt-card slider-shine border-2 border-white/10 hover:border-white/30 transition-all duration-300"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  >
                    <Icon className={`${stat.color} mb-4`} size={32} />
                  </motion.div>
                  <div className={`text-4xl font-bold ${stat.color} mb-2 slider-counter`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}


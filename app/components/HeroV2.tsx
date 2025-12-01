'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Sparkles, Zap, TrendingUp, Target } from 'lucide-react';

export default function HeroV2() {
  const [currentRole, setCurrentRole] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  
  const roles = [
    'AI Innovation',
    'Product Growth',
    'Marketing Automation',
    'GTM Strategy',
    'Data-Driven Insights',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Layered Parallax Background Elements */}
      <motion.div 
        className="absolute inset-0 slider-layer-1"
        style={{ y: y1 }}
      >
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-[15%] w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </motion.div>

      <motion.div 
        className="absolute inset-0 slider-layer-2"
        style={{ y: y2 }}
      >
        <div className="absolute top-[40%] right-[20%] w-64 h-64 bg-pink-500/10 rounded-full blur-2xl" />
        <div className="absolute bottom-[30%] left-[25%] w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      </motion.div>

      {/* Animated Grid Lines */}
      <div className="absolute inset-0 slider-grid opacity-20" />

      {/* Floating Elements with 3D Effect */}
      <motion.div
        className="absolute top-[20%] left-[15%] floating-card"
        style={{
          x: mousePosition.x * 2,
          y: mousePosition.y * 2,
        }}
      >
        <div className="v2-glass-card p-4 rounded-2xl backdrop-blur-xl transform rotate-12 hover:rotate-0 transition-transform duration-500">
          <Zap className="text-cyan-400" size={32} />
        </div>
      </motion.div>

      <motion.div
        className="absolute top-[60%] right-[10%] floating-card"
        style={{
          x: mousePosition.x * -1.5,
          y: mousePosition.y * 1.5,
        }}
      >
        <div className="v2-glass-card p-4 rounded-2xl backdrop-blur-xl transform -rotate-12 hover:rotate-0 transition-transform duration-500">
          <TrendingUp className="text-purple-400" size={32} />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-[25%] left-[8%] floating-card"
        style={{
          x: mousePosition.x * 1.8,
          y: mousePosition.y * -1.2,
        }}
      >
        <div className="v2-glass-card p-4 rounded-2xl backdrop-blur-xl transform rotate-6 hover:rotate-0 transition-transform duration-500">
          <Target className="text-pink-400" size={32} />
        </div>
      </motion.div>

      {/* Main Content with Scale Animation */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center"
        style={{ opacity, scale }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Badge with Glow */}
          <motion.div 
            className="flex items-center justify-center gap-2 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative inline-flex items-center gap-3 px-6 py-3 rounded-full group">
              {/* Outer glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-purple-500/30 to-pink-500/30 rounded-full blur-xl animate-pulse" />
              
              {/* Border gradient */}
              <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-60 group-hover:opacity-100 transition-opacity">
                <div className="w-full h-full bg-[#0a0e27] rounded-full" />
              </div>
              
              {/* Inner background */}
              <div className="absolute inset-[2px] bg-gradient-to-r from-cyan-900/30 via-purple-900/30 to-pink-900/30 rounded-full backdrop-blur-xl" />
              
              {/* Content */}
              <div className="relative flex items-center gap-2 z-10">
                <Sparkles className="text-cyan-400" size={20} />
                <span className="text-cyan-400 font-semibold tracking-wide text-sm md:text-base bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400 bg-clip-text text-transparent">
                  AI-Driven Product Marketing
                </span>
              </div>
              
              {/* Animated shine effect */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ['-200%', '200%'] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                />
              </div>
            </div>
          </motion.div>
          
          {/* Main Heading with Split Text Animation */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Driving Product Growth
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Through{' '}
              <span className="v2-gradient-text inline-block slider-text-reveal">
                {roles[currentRole]}
              </span>
            </motion.span>
          </h1>

          {/* Subtitle with Stagger */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-400 mb-4 max-w-3xl mx-auto leading-relaxed"
          >
            Leveraging AI to build workflows that give marketers their time and focus back
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl mx-auto"
          >
            Product Marketing Manager specializing in B2B SaaS, GTM strategy, and AI-powered automation
          </motion.p>

          {/* CTA Buttons with Advanced Hover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#case-studies"
              className="v2-btn-primary px-8 py-4 text-lg font-semibold slider-btn-3d group relative overflow-hidden"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            </a>
            <a
              href="#contact"
              className="v2-btn-secondary px-8 py-4 text-lg font-semibold slider-btn-3d"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Stats Row with 3D Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 max-w-5xl mx-auto"
        >
          {[
            { value: '€6M+', label: 'ARR Growth', color: 'cyan' },
            { value: '40%', label: 'MQL Increase', color: 'purple' },
            { value: '20%', label: 'Win Rate Boost', color: 'pink' },
            { value: '15%', label: 'Shorter Sales Cycles', color: 'green' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5, rotateY: -45 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: 1.6 + index * 0.1, duration: 0.6 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                z: 50,
              }}
              className="slider-stat-card v2-glass-card p-6 rounded-2xl backdrop-blur-xl border-2 border-white/10 hover:border-white/30 transition-all duration-300"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px',
              }}
            >
              <div className="text-4xl md:text-5xl font-bold v2-gradient-text mb-2 slider-counter">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm md:text-base font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator with Pulse */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 15, 0] }}
        transition={{ 
          opacity: { delay: 2, duration: 0.5 },
          y: { repeat: Infinity, duration: 2.5, ease: 'easeInOut' }
        }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer group"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-gray-500 text-sm uppercase tracking-wider">Scroll</span>
          <div className="relative">
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 border-2 border-cyan-400 rounded-full"
            />
            <ChevronDown className="text-cyan-400 group-hover:text-white transition-colors" size={32} />
          </div>
        </div>
      </motion.a>

      {/* Slider Revolution Style Particles */}
      <div className="slider-particles-container">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="slider-particle"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </section>
  );
}


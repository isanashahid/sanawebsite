'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Filter, TrendingUp, Users, DollarSign, Clock } from 'lucide-react';

export default function CaseStudiesV2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'AI/ML', 'SaaS', 'Energy Tech', 'Analytics'];

  const caseStudies = [
    {
      title: 'TrustYou AI-Powered CDP',
      category: 'AI/ML',
      client: 'TrustYou',
      description: 'Led GTM strategy and sales enablement for AI-powered Customer Data Platform in hospitality sector',
      results: [
        { icon: DollarSign, label: '€470K ARR', detail: 'in 6 months' },
        { icon: TrendingUp, label: '30% Conversion', detail: 'improvement' },
        { icon: Users, label: 'SMB + Enterprise', detail: 'segments' },
      ],
      tech: ['AI CDP', 'CRM Integration', 'Marketing Automation'],
      gradient: 'from-cyan-400 to-blue-500',
      image: '🤖',
    },
    {
      title: 'LexisNexis IPlytics Patent Analytics',
      category: 'Analytics',
      client: 'LexisNexis IPlytics',
      description: 'Created competitive positioning and field enablement assets for patent analytics SaaS platform',
      results: [
        { icon: DollarSign, label: '€6M ARR', detail: 'growth' },
        { icon: Clock, label: '15% Faster', detail: 'sales cycles' },
        { icon: TrendingUp, label: '20% Win Rate', detail: 'increase' },
      ],
      tech: ['Patent Analytics', 'B2B SaaS', 'Enterprise Sales'],
      gradient: 'from-purple-400 to-pink-500',
      image: '📊',
    },
    {
      title: 'TCL SunPower Energy Tracking Platform',
      category: 'Energy Tech',
      client: 'TCL SunPower',
      description: 'Led GTM strategy, sales enablement, and SEO campaigns for global energy tech SaaS products',
      results: [
        { icon: TrendingUp, label: '40% MQL', detail: 'increase' },
        { icon: Users, label: '3x Traffic', detail: 'in 6 months' },
        { icon: DollarSign, label: 'Pipeline Growth', detail: 'EMEA & NA' },
      ],
      tech: ['Energy Tech', 'SEO', 'Partner Marketing'],
      gradient: 'from-green-400 to-emerald-500',
      image: '⚡',
    },
    {
      title: 'Sky Ledge Fuel Theft Prevention',
      category: 'SaaS',
      client: 'Sky Ledge',
      description: 'Identified high-fit ICPs and delivered positioning for fleet management SaaS in Ghana market',
      results: [
        { icon: Users, label: 'ICP Clarity', detail: 'improved targeting' },
        { icon: TrendingUp, label: 'Higher Engagement', detail: 'across channels' },
        { icon: DollarSign, label: 'More Pilots', detail: 'qualified prospects' },
      ],
      tech: ['B2B SaaS', 'Fleet Management', 'ICP Analysis'],
      gradient: 'from-orange-400 to-red-500',
      image: '🚚',
    },
    {
      title: 'ACCEO Smart Vendor POS System',
      category: 'SaaS',
      client: 'ACCEO',
      description: 'Launched product features and onboarding programs for retail POS SaaS platform',
      results: [
        { icon: TrendingUp, label: '85% Adoption', detail: 'in 3 months' },
        { icon: Users, label: 'Multi-Store', detail: 'retail clients' },
        { icon: DollarSign, label: 'Pricing Optimization', detail: 'analysis' },
      ],
      tech: ['Retail POS', 'Onboarding', 'Feature Adoption'],
      gradient: 'from-pink-400 to-rose-500',
      image: '🏪',
    },
    {
      title: 'Zigron AWS Cloud Services',
      category: 'SaaS',
      client: 'Zigron',
      description: 'Executed GTM strategy and competitive positioning for AWS-based cloud solutions',
      results: [
        { icon: DollarSign, label: '$300K+', detail: 'revenue' },
        { icon: TrendingUp, label: '18% Conversion', detail: 'improvement' },
        { icon: Users, label: 'Enterprise', detail: 'EU & US teams' },
      ],
      tech: ['AWS Cloud', 'Enterprise', 'Partner Enablement'],
      gradient: 'from-blue-400 to-indigo-500',
      image: '☁️',
    },
  ];

  const filteredStudies = activeFilter === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeFilter);

  return (
    <section id="case-studies" ref={ref} className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-purple-400/10 border border-purple-400/20 rounded-full mb-6">
            <span className="text-purple-400 font-medium">Case Studies</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Proven Results Across
            <span className="v2-gradient-text"> Industries</span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real-world impact through strategic product marketing and AI-driven growth initiatives
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          <Filter className="text-gray-500" size={20} />
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30, rotateX: -20 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                rotateX: 5,
                z: 50,
              }}
              className="v2-glass-card rounded-2xl overflow-hidden group cursor-pointer slider-tilt-card slider-shine border-2 border-white/10 hover:border-white/30 transition-all duration-500"
              style={{ 
                transformStyle: 'preserve-3d',
                perspective: '1000px',
              }}
            >
              {/* Card Header */}
              <div className={`h-48 bg-gradient-to-br ${study.gradient} flex items-center justify-center text-7xl relative overflow-hidden slider-kenburns`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <motion.span 
                  className="relative z-10"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {study.image}
                </motion.span>
                {/* Animated lines */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:animate-pulse" />
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:animate-pulse" />
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs px-3 py-1 bg-white/10 rounded-full text-gray-300">
                    {study.category}
                  </span>
                  <ArrowUpRight className="text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" size={20} />
                </div>

                <h3 className="text-xl font-bold mb-2 relative">
                  <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-300">
                    {study.title}
                  </span>
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </h3>
                
                <p className="text-sm text-gray-500 mb-4">{study.client}</p>
                
                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                  {study.description}
                </p>

                {/* Results */}
                <div className="space-y-3 mb-6">
                  {study.results.map((result, idx) => {
                    const Icon = result.icon;
                    return (
                      <div key={idx} className="flex items-center gap-3">
                        <Icon className="text-gray-500" size={16} />
                        <div className="flex-1">
                          <span className="text-white font-semibold text-sm">{result.label}</span>
                          <span className="text-gray-500 text-xs ml-2">{result.detail}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {study.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


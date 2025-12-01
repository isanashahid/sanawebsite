'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Briefcase, ChevronRight, TrendingUp } from 'lucide-react';

const mainExperiences = [
  {
    id: 'toptal',
    company: 'Toptal (Contract PMM)',
    duration: 'May 2024 - Present',
    tagline: 'Product marketing for high-growth SaaS companies across 3 continents',
    color: 'electric-blue',
    highlights: [
      'Sky Ledge (Ghana): Positioned fuel theft SaaS for emerging markets, improved lead quality 40%',
      'TCL SunPower (Global): 3x organic traffic, 40% MQL growth through strategic repositioning',
      'TrustYou (Hospitality): €470K ARR in 6 months from new CDP launch',
    ],
    fullStory: 'Working with Toptal taught me something crucial: great product marketing transcends industries. Whether it\'s fuel theft detection in Ghana, energy monitoring in Germany, or hospitality tech globally, the fundamentals stay the same: understand the market, find the positioning gap, build messaging that resonates, enable sales to close.\n\nAcross three very different products in three very different markets, I\'ve proven the same hypothesis: when you nail positioning and back it with execution, revenue follows.',
  },
  {
    id: 'iplytics',
    company: 'LexisNexis IPlytics',
    duration: '2022 - 2024',
    tagline: 'Drove €6M ARR growth in competitive patent analytics market',
    color: 'lime-green',
    highlights: [
      '€6M ARR growth in North America through strategic positioning vs. entrenched competitors',
      '15% shorter sales cycles and 20% higher win rates through enablement excellence',
      'Built category leadership through analyst relations (Forrester, Gartner)',
    ],
    fullStory: 'IPlytics was where I learned that better products don\'t always win—better positioning does. We had superior AI, better data, cleaner UX. But we were losing to tools patent attorneys had used for 10 years.\n\nThe breakthrough? Stop competing on features. Start competing on outcomes. We repositioned from "patent analytics platform" to "speed-to-insight engine." Built battlecards focused on time savings, not technical specs. Trained sales on value-based selling, not feature dumping.\n\nResult: €6M in new ARR. More importantly, we changed how the entire sales team thought about selling.',
  },
  {
    id: 'acceo',
    company: 'ACCEO Smart Vendor',
    duration: '2020 - 2022',
    tagline: '85% feature adoption through customer-centric launch strategy',
    color: 'hot-pink',
    highlights: [
      '85% adoption of new features within 3 months through strategic onboarding',
      'Repositioned commodity POS system as revenue optimization platform for retail',
      'Led pricing sensitivity analysis that unlocked enterprise segment',
    ],
    fullStory: 'ACCEO taught me that product marketing doesn\'t end at launch—it starts there. We had great features nobody was using. Classic adoption problem.\n\nThe fix wasn\'t more features. It was better onboarding, clearer value communication, and sales training that actually stuck. Built a complete customer marketing program that turned passive users into active advocates.\n\n85% adoption in 90 days. Proof that great product marketing is as much about retention as acquisition.',
  },
  {
    id: 'zigron',
    company: 'Zigron (AWS Cloud Services)',
    duration: '2017 - 2020',
    tagline: 'Generated $300K+ revenue positioning AWS solutions for enterprise',
    color: 'neon-yellow',
    highlights: [
      '$300K+ in revenue through strategic GTM for AWS-based cloud solutions',
      '18% improvement in enterprise lead-to-opportunity conversion through objection handling',
      'Built partnership playbooks that scaled across EU and US teams',
    ],
    fullStory: 'Zigron was my MBA in B2B marketing. Small team. Big goals. Enterprise buyers who knew more about AWS than we did.\n\nLearned fast: you can\'t out-technical enterprise buyers. But you can out-position them. We stopped talking about infrastructure and started talking about business transformation. Built objection-handling playbooks that turned "we\'ll build it ourselves" into "when can we start?"\n\n$300K in revenue. But the real education? Understanding how enterprise buyers actually make decisions.',
  },
];

const sideProjects = [
  { company: 'Democorder', role: 'Strategy Consultant', year: '2025', desc: 'Product positioning & GTM for AI-powered screen recording platform' },
  { company: 'Invisible Edge', role: 'Marketing Strategist', year: '2024-25', desc: 'C-level messaging & LinkedIn strategy for leadership coaching SaaS' },
  { company: 'Olmedi', role: 'Organic Growth Lead', year: '2019-24', desc: 'SEO & content strategy for healthcare marketing (5-year engagement)' },
  { company: 'FrontBurners', role: 'Social Media Manager', year: '2022-23', desc: 'Brand storytelling for hospitality/restaurant sector' },
];

export default function Experience() {
  const [expandedRole, setExpandedRole] = useState<string | null>(null);

  const toggleRole = (id: string) => {
    setExpandedRole(expandedRole === id ? null : id);
  };

  return (
    <section id="experience" className="py-24 px-6 md:px-12 relative bg-deep-black/30">
      {/* Section Title */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="max-w-7xl mx-auto mb-16"
      >
        <motion.div
          whileHover={{ rotate: 2, scale: 1.02 }}
          className="inline-block border-8 border-hot-pink bg-hot-pink px-6 py-3 rotate-brutal-1"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-deep-black uppercase">
            WHERE I&apos;VE DONE THIS
          </h2>
        </motion.div>
        <p className="font-body text-xl text-foreground/80 mt-6 max-w-3xl">
          8+ years. 4 B2B SaaS companies. Countless launches, repositionings, and market entries. 
          Here&apos;s what actually happened.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto space-y-8">
        {/* Main Experiences */}
        {mainExperiences.map((exp, index) => {
          const isExpanded = expandedRole === exp.id;
          const colorClasses = {
            'electric-blue': 'border-electric-blue text-electric-blue',
            'hot-pink': 'border-hot-pink text-hot-pink',
            'lime-green': 'border-lime-green text-lime-green',
            'neon-yellow': 'border-neon-yellow text-neon-yellow',
          };

          return (
            <motion.div
              key={exp.id}
              id={`exp-${exp.id}`}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ x: 4 }}
              className={`border-8 ${colorClasses[exp.color as keyof typeof colorClasses].split(' ')[0]} bg-deep-black/50 transition-all`}
            >
              <div className="p-6 md:p-8">
                {/* Header - Always Visible */}
                <div className="flex items-start gap-4 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Briefcase className={`w-10 h-10 ${colorClasses[exp.color as keyof typeof colorClasses].split(' ')[1]} flex-shrink-0`} />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
                      {exp.company}
                    </h3>
                    <p className="text-foreground/60 font-mono text-sm uppercase mb-3">{exp.duration}</p>
                    <p className="text-foreground/90 text-lg md:text-xl leading-relaxed font-body">
                      {exp.tagline}
                    </p>
                  </div>
                </div>

                {/* Key Highlights - Always Visible */}
                <div className="space-y-3 mb-6">
                  {exp.highlights.map((highlight, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <TrendingUp className={`w-5 h-5 ${colorClasses[exp.color as keyof typeof colorClasses].split(' ')[1]} flex-shrink-0 mt-1`} />
                      <p className="text-foreground/80 text-base">{highlight}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Expand Button */}
                <motion.button
                  onClick={() => toggleRole(exp.id)}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`brutal-button ${
                    isExpanded 
                      ? 'bg-deep-black text-foreground border-foreground'
                      : `bg-${exp.color} text-deep-black`
                  } flex items-center gap-2`}
                >
                  {isExpanded ? 'HIDE THE STORY' : 'READ THE STORY'}
                  <ChevronRight className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                </motion.button>
              </div>

              {/* Expanded Story - Natural Downward Expansion */}
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t-8 border-deep-black"
                >
                  <div className={`p-6 md:p-8 ${colorClasses[exp.color as keyof typeof colorClasses].split(' ')[0].replace('border-', 'bg-')}/5`}>
                    <div className="max-w-3xl">
                      {exp.fullStory.split('\n\n').map((paragraph, idx) => (
                        <motion.p
                          key={idx}
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          className="text-foreground/90 text-lg leading-relaxed mb-4 last:mb-0"
                        >
                          {paragraph}
                        </motion.p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          );
        })}

        {/* Side Projects - Compact Display */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="border-8 border-neon-yellow bg-deep-black p-8"
        >
          <h3 className="font-heading text-2xl font-bold text-neon-yellow mb-6 uppercase">
            + Side Projects & Consulting
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {sideProjects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="border-4 border-neon-yellow/30 bg-neon-yellow/5 p-4 hover:bg-neon-yellow/10 transition-colors"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-heading text-lg font-bold text-foreground">{project.company}</h4>
                  <span className="text-xs font-mono text-foreground/60">{project.year}</span>
                </div>
                <p className="text-foreground/70 text-sm mb-1">{project.role}</p>
                <p className="text-foreground/80 text-sm">{project.desc}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-foreground/60 text-sm mt-6 font-mono">
            ▸ Because the best learning happens when you&apos;re solving real problems for real companies
          </p>
        </motion.div>
      </div>
    </section>
  );
}

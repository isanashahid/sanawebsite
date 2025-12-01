'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Brain, 
  BarChart3, 
  Megaphone, 
  Code2, 
  TrendingUp,
  Users,
  FileText,
  Target,
  Lightbulb,
  Rocket,
  Database,
  Zap
} from 'lucide-react';

export default function SkillsV2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const skillCategories = [
    {
      title: 'AI & Automation Tools',
      icon: Brain,
      color: 'cyan',
      skills: [
        { name: 'ChatGPT & Claude', level: 95, icon: Lightbulb },
        { name: 'Midjourney & DALL-E', level: 90, icon: Brain },
        { name: 'Make.com / Zapier', level: 92, icon: Zap },
        { name: 'AI Workflow Design', level: 88, icon: Code2 },
      ],
    },
    {
      title: 'Marketing Platforms',
      icon: Megaphone,
      color: 'purple',
      skills: [
        { name: 'HubSpot & Salesforce', level: 90, icon: Database },
        { name: 'Google Analytics 4', level: 85, icon: BarChart3 },
        { name: 'LinkedIn Ads', level: 88, icon: Users },
        { name: 'Marketing Automation', level: 92, icon: Rocket },
      ],
    },
    {
      title: 'GTM Strategy',
      icon: Target,
      color: 'pink',
      skills: [
        { name: 'Positioning & Messaging', level: 95, icon: FileText },
        { name: 'Sales Enablement', level: 93, icon: Users },
        { name: 'Competitive Analysis', level: 90, icon: TrendingUp },
        { name: 'Product Launch', level: 91, icon: Rocket },
      ],
    },
    {
      title: 'Analytics & Insights',
      icon: BarChart3,
      color: 'green',
      skills: [
        { name: 'Data Analysis', level: 87, icon: Database },
        { name: 'A/B Testing', level: 85, icon: Code2 },
        { name: 'Customer Research', level: 92, icon: Users },
        { name: 'ROI Measurement', level: 89, icon: TrendingUp },
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { text: string; bg: string; gradient: string }> = {
      cyan: { text: 'text-cyan-400', bg: 'bg-cyan-400/10', gradient: 'from-cyan-400 to-blue-500' },
      purple: { text: 'text-purple-400', bg: 'bg-purple-400/10', gradient: 'from-purple-400 to-pink-500' },
      pink: { text: 'text-pink-400', bg: 'bg-pink-400/10', gradient: 'from-pink-400 to-rose-500' },
      green: { text: 'text-green-400', bg: 'bg-green-400/10', gradient: 'from-green-400 to-emerald-500' },
    };
    return colors[color];
  };

  return (
    <section id="skills" ref={ref} className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-green-400/10 border border-green-400/20 rounded-full mb-6">
            <span className="text-green-400 font-medium">Expertise</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="v2-gradient-text">Technologies</span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for driving product growth through AI-powered marketing strategies
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            const colors = getColorClasses(category.color);
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + categoryIndex * 0.1, duration: 0.6 }}
                className="v2-glass-card p-8 rounded-2xl"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 ${colors.bg} rounded-xl`}>
                    <CategoryIcon className={colors.text} size={28} />
                  </div>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05, duration: 0.4 }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <SkillIcon className="text-gray-500" size={16} />
                            <span className="text-gray-300 font-medium">{skill.name}</span>
                          </div>
                          <span className={`${colors.text} font-semibold`}>{skill.level}%</span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : {}}
                            transition={{ delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05, duration: 1, ease: 'easeOut' }}
                            className={`h-full bg-gradient-to-r ${colors.gradient} rounded-full relative`}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse" />
                          </motion.div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Technical Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 v2-glass-card p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            AI Automation <span className="v2-gradient-text">Workflow</span>
          </h3>
          
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: '1', title: 'Research', desc: 'AI-powered market & competitor analysis', icon: Target },
              { step: '2', title: 'Strategy', desc: 'Data-driven positioning & messaging', icon: Lightbulb },
              { step: '3', title: 'Content', desc: 'Automated content generation & optimization', icon: FileText },
              { step: '4', title: 'Distribution', desc: 'Multi-channel campaign automation', icon: Rocket },
              { step: '5', title: 'Analytics', desc: 'Real-time performance tracking & insights', icon: TrendingUp },
            ].map((item, index) => {
              const ItemIcon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                  className="text-center relative"
                >
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center font-bold text-xl">
                    {item.step}
                  </div>
                  <ItemIcon className="text-gray-500 mx-auto mb-2" size={20} />
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                  
                  {/* Connector Line */}
                  {index < 4 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


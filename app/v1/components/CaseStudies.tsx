'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Building2, Zap, Scale, ChevronRight } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    company: 'TrustYou',
    industry: 'Hospitality Tech',
    challenge: 'Launch a CDP in a market drowning in martech',
    icon: Building2,
    color: 'electric-blue',
    preview: 'How we convinced skeptical hoteliers to adopt yet another platform—and generated €470K ARR in 6 months.',
    metrics: [
      { value: '€470K', label: 'ARR in 6 Months' },
      { value: '30%', label: 'Conversion Lift' },
      { value: '40%', label: 'Existing Customer Upsells' },
    ],
    story: {
      situation: 'TrustYou had built an AI-powered CDP specifically for hotels. Great product. Terrible timing. Every hotel had just endured years of MarTech vendors promising the world and delivering headaches. They were done with &quot;platforms.&quot;',
      insight: 'The breakthrough came from a single conversation with a hotel GM in Munich. She didn&apos;t want another CDP. She wanted to stop losing direct bookings to OTAs. That became our entire positioning.',
      approach: 'Instead of selling a &quot;Customer Data Platform,&quot; we repositioned as &quot;The Direct Booking Revenue System.&quot; Every feature tied back to one metric: incremental room nights booked direct. Built a calculator showing exact revenue lift. Created battlecards for every competitor focused on business outcomes, not technical specs.',
      result: '€470K in new ARR within 6 months. But the real win? 40% of existing ORM customers voluntarily upgraded because they finally understood the value. Sales cycle dropped from 8 weeks to 5.',
      learning: 'Markets don&apos;t buy categories. They buy solutions to specific, painful problems. Find the pain. Make it the hero of your story.',
    },
  },
  {
    id: 2,
    company: 'TCL SunPower',
    industry: 'Energy Tech',
    challenge: 'Scale in new markets with zero brand recognition',
    icon: Zap,
    color: 'hot-pink',
    preview: 'Tripling organic traffic and growing MQLs 40% by positioning a commodity as a competitive advantage.',
    metrics: [
      { value: '3x', label: 'Organic Traffic' },
      { value: '40%', label: 'MQL Growth' },
      { value: '22%', label: 'Lower CAC' },
    ],
    story: {
      situation: 'TCL SunPower was entering EMEA and North America with an energy monitoring app. Great technology. Crowded market. Unknown brand. And—here\'s the kicker—most solar installers saw monitoring as a commodity giveaway, not a revenue opportunity.',
      insight: 'Spent a week calling installers across Germany and Texas. Nobody cared about &quot;energy monitoring.&quot; But they all complained about the same thing: customers calling them when their systems underperformed, eating up service hours for free.',
      approach: 'Repositioned from &quot;monitoring app&quot; to &quot;Automated Service Prevention Platform.&quot; Built an SEO strategy around long-tail problems installers actually searched for. Created partner toolkits showing distributors how to use monitoring as a service upsell, not a cost center. Every piece of content answered one question: &quot;How does this make me more profitable?&quot;',
      result: 'Organic traffic went from 2K/month to 7K/month in 6 months. MQLs up 40%. But the metric that mattered most to TCL? Partner-sourced deals grew from 15% to 35% of pipeline. Distributors finally had a story worth telling.',
      learning: 'Positioning isn&apos;t what you say about yourself. It&apos;s the conversation you enable in your customer&apos;s head.',
    },
  },
  {
    id: 3,
    company: 'LexisNexis IPlytics',
    industry: 'Legal Tech / IP Analytics',
    challenge: 'Win against entrenched competitors with 10+ year head starts',
    icon: Scale,
    color: 'lime-green',
    preview: 'How strategic enablement drove €6M in ARR growth and turned sales cycles from 12 weeks to 10.',
    metrics: [
      { value: '€6M', label: 'ARR Growth' },
      { value: '15%', label: 'Shorter Cycles' },
      { value: '20%', label: 'Higher Win Rates' },
    ],
    story: {
      situation: 'IPlytics had better AI, better data, better UI. But they were competing against tools that patent attorneys had used for a decade. Switching tools in legal? That&apos;s like asking someone to switch religions. It doesn&apos;t matter how good your product is if nobody trusts change.',
      insight: 'Sat in on 15 lost-deal calls. Pattern emerged: We weren&apos;t losing on features. We were losing on the sales team\'s inability to articulate speed-to-insight vs. data comprehensiveness. Our reps were explaining &quot;what&quot; we did. Buyers needed to hear &quot;why it mattered.&quot;',
      approach: 'Built a complete enablement system: 15 competitor-specific battlecards, objection-handling playbooks, demo narratives focused on time-savings not features. Ran quarterly training on value-based selling. Created a &quot;reasons to switch&quot; framework that made change feel inevitable, not risky. Most importantly: stopped selling against incumbents and started selling toward outcomes.',
      result: '€6M in North American ARR growth. Sales cycles down from 12 weeks to 10. Win rates against top 2 competitors up 20%. But here&apos;s what actually mattered: sales team adoption hit 85%. They trusted the messaging enough to use it.',
      learning: 'Great positioning dies in the hands of a sales team that doesn&apos;t believe it. Enablement isn&apos;t about materials. It&apos;s about confidence.',
    },
  },
];

export default function CaseStudies() {
  const [expandedStudy, setExpandedStudy] = useState<number | null>(null);

  const toggleStudy = (id: number) => {
    setExpandedStudy(expandedStudy === id ? null : id);
  };

  return (
    <section id="case-studies" className="py-24 px-6 md:px-12 relative">
      {/* Section Title */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="max-w-7xl mx-auto mb-16"
      >
        <motion.div
          whileHover={{ rotate: -2, scale: 1.02 }}
          className="inline-block border-8 border-neon-yellow bg-neon-yellow px-8 py-4 rotate-brutal-2"
        >
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-deep-black uppercase">
            RESULTS THAT MATTERED
          </h2>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-body text-xl md:text-2xl text-foreground/80 mt-8 max-w-3xl"
        >
          These aren&apos;t vanity metrics. They&apos;re real business outcomes from companies 
          that needed <span className="text-electric-blue font-bold">positioning that converts</span> and 
          <span className="text-hot-pink font-bold"> go-to-market that scales</span>.
        </motion.p>
      </motion.div>

      {/* Case Studies */}
      <div className="max-w-7xl mx-auto space-y-8">
        {caseStudies.map((study, index) => {
          const Icon = study.icon;
          const isExpanded = expandedStudy === study.id;
          const colorClasses = {
            'electric-blue': 'border-electric-blue text-electric-blue bg-electric-blue/10',
            'hot-pink': 'border-hot-pink text-hot-pink bg-hot-pink/10',
            'lime-green': 'border-lime-green text-lime-green bg-lime-green/10',
          };

          return (
            <motion.div
              key={study.id}
              id={`study-${study.id}`}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className={`border-8 ${colorClasses[study.color as keyof typeof colorClasses].split(' ')[0]} ${colorClasses[study.color as keyof typeof colorClasses].split(' ')[2]}`}
            >
              {/* Always Visible Header */}
              <div className="p-6 md:p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  {/* Left: Story Preview */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className={`w-12 h-12 ${colorClasses[study.color as keyof typeof colorClasses].split(' ')[1]}`} />
                      </motion.div>
                      <div>
                        <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                          {study.company}
                        </h3>
                        <p className="text-foreground/60 font-mono text-sm uppercase mt-1">{study.industry}</p>
                      </div>
                    </div>

                    <div className={`border-l-4 ${colorClasses[study.color as keyof typeof colorClasses].split(' ')[0]} pl-4 py-2 mb-4`}>
                      <p className="text-foreground/70 font-mono text-sm uppercase mb-1">The Challenge</p>
                      <p className="text-foreground text-xl font-bold">{study.challenge}</p>
                    </div>

                    <p className="text-foreground/90 text-lg leading-relaxed mb-6">
                      {study.preview}
                    </p>
                  </div>

                  {/* Right: Metrics */}
                  <div className="flex lg:flex-col gap-4">
                    {study.metrics.map((metric, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ scale: 0.9 }}
                        whileInView={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        className="border-4 border-deep-black bg-deep-black p-4 min-w-[140px]"
                      >
                        <div className="metric text-3xl">{metric.value}</div>
                        <div className="text-foreground/70 font-mono text-xs uppercase mt-1">{metric.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Expand Button */}
                <motion.button
                  onClick={() => toggleStudy(study.id)}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`mt-6 w-full md:w-auto brutal-button ${
                    isExpanded 
                      ? 'bg-deep-black text-foreground'
                      : `bg-${study.color} text-deep-black`
                  } flex items-center justify-center gap-2`}
                >
                  {isExpanded ? 'HIDE FULL STORY' : 'READ THE FULL STORY'}
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
                  <div className="p-6 md:p-8 bg-deep-black/50 space-y-8">
                    {/* Situation */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="font-heading text-2xl font-bold text-neon-yellow mb-3 uppercase flex items-center gap-2">
                        <span className="text-3xl">01</span> The Situation
                      </h4>
                      <p className="text-foreground/90 text-lg leading-relaxed">{study.story.situation}</p>
                    </motion.div>

                    {/* Insight */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className={`border-l-8 ${colorClasses[study.color as keyof typeof colorClasses].split(' ')[0]} pl-6 py-4`}
                    >
                      <h4 className="font-heading text-2xl font-bold text-foreground mb-3 uppercase flex items-center gap-2">
                        <span className="text-3xl">02</span> The Insight
                      </h4>
                      <p className="text-foreground/90 text-lg leading-relaxed">{study.story.insight}</p>
                    </motion.div>

                    {/* Approach */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <h4 className="font-heading text-2xl font-bold text-electric-blue mb-3 uppercase flex items-center gap-2">
                        <span className="text-3xl">03</span> What We Did
                      </h4>
                      <p className="text-foreground/90 text-lg leading-relaxed">{study.story.approach}</p>
                    </motion.div>

                    {/* Result */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                      className="bg-foreground/5 border-4 border-foreground/20 p-6"
                    >
                      <h4 className="font-heading text-2xl font-bold text-lime-green mb-3 uppercase flex items-center gap-2">
                        <span className="text-3xl">04</span> The Result
                      </h4>
                      <p className="text-foreground/90 text-lg leading-relaxed mb-4">{study.story.result}</p>
                      <div className={`border-l-4 ${colorClasses[study.color as keyof typeof colorClasses].split(' ')[0]} pl-4 py-2`}>
                        <p className="text-foreground/70 font-mono text-sm uppercase mb-1">Key Learning</p>
                        <p className="text-foreground text-lg font-bold italic">&quot;{study.story.learning}&quot;</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto mt-16 text-center"
      >
        <div className="border-8 border-hot-pink bg-deep-black px-8 py-10">
          <p className="font-heading text-2xl md:text-3xl text-foreground mb-6">
            Want to see how this applies to <span className="text-hot-pink">your market</span>?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ y: -4, boxShadow: '8px 8px 0px 0px rgba(173,255,0,1)' }}
            whileTap={{ scale: 0.95 }}
            className="brutal-button bg-hot-pink text-stark-white inline-block"
          >
            LET&apos;S TALK STRATEGY
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

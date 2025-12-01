'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Target, Users, TrendingUp, Zap } from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState<'philosophy' | 'whatido' | 'whyme'>('philosophy');

  return (
    <section id="about" className="py-24 px-6 md:px-12 relative overflow-hidden bg-deep-black/30">
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
          transition={{ duration: 0.2 }}
          className="inline-block border-8 border-lime-green bg-lime-green px-6 py-3 rotate-brutal-1"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-deep-black uppercase">
            THE TRUTH ABOUT PMM
          </h2>
        </motion.div>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        {/* Core Stats - Always Visible */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {[
            { value: '€6M+', label: 'Pipeline Generated', sublabel: 'Across 3 B2B SaaS companies', color: 'neon-yellow', icon: TrendingUp },
            { value: '8+', label: 'Years Deep', sublabel: 'In B2B SaaS markets', color: 'electric-blue', icon: Zap },
            { value: '15%', label: 'Faster Deals', sublabel: 'Through better positioning', color: 'hot-pink', icon: Target },
            { value: '20%', label: 'Higher Win Rates', sublabel: 'With strategic enablement', color: 'lime-green', icon: Users },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className={`border-8 border-${stat.color} bg-deep-black p-5 hover:bg-${stat.color}/10 transition-all`}
              >
                <Icon className={`w-8 h-8 text-${stat.color} mb-3`} />
                <div className="metric text-4xl mb-1">{stat.value}</div>
                <div className="text-foreground font-bold text-sm mb-1">{stat.label}</div>
                <div className="text-foreground/60 font-mono text-xs">{stat.sublabel}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main Story - Always Visible, No Expansion Needed */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {/* Left: The Problem */}
          <motion.div
            whileHover={{ x: -4 }}
            className="border-8 border-hot-pink bg-deep-black p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-hot-pink animate-pulse"></div>
              <h3 className="font-heading text-2xl font-bold text-hot-pink uppercase">THE REAL CHALLENGE</h3>
            </div>
            <div className="space-y-4 text-foreground/90 text-lg leading-relaxed">
              <p>
                Here&apos;s what I&apos;ve learned after 8 years in B2B SaaS: <span className="text-hot-pink font-bold">most products fail 
                not because they&apos;re bad, but because nobody understands why they matter.</span>
              </p>
              <p>
                Your engineering team builds brilliant features. Your sales team is hungry. But somewhere between 
                the product roadmap and the first sales call, the story gets lost.
              </p>
              <p className="text-neon-yellow font-bold">
                That&apos;s where I come in.
              </p>
            </div>
          </motion.div>

          {/* Right: What I Do */}
          <motion.div
            whileHover={{ x: 4 }}
            className="border-8 border-electric-blue bg-deep-black p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-electric-blue animate-pulse"></div>
              <h3 className="font-heading text-2xl font-bold text-electric-blue uppercase">WHAT I ACTUALLY DO</h3>
            </div>
            <div className="space-y-4 text-foreground/90 text-lg leading-relaxed">
              <p>
                I don&apos;t just &quot;do marketing.&quot; I translate your product into a language your market 
                actually cares about. I find the <span className="text-electric-blue font-bold">one thing</span> that makes buyers 
                lean forward in their chairs.
              </p>
              <p>
                Then I build the entire go-to-market system around it: the positioning that differentiates you, 
                the messaging that resonates, the content that educates, and the enablement that empowers your 
                sales team to close.
              </p>
              <p className="text-lime-green font-bold">
                Strategy + Execution. Not one without the other.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Tabs for Different Angles */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-4 mb-8"
        >
          {[
            { id: 'philosophy', label: 'MY PHILOSOPHY', color: 'lime-green' },
            { id: 'whatido', label: 'WHAT I DELIVER', color: 'hot-pink' },
            { id: 'whyme', label: 'WHY IT WORKS', color: 'electric-blue' },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                className={`brutal-button ${
                  isActive
                    ? `bg-${tab.color} text-deep-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`
                    : 'bg-deep-black text-foreground border-foreground hover:bg-foreground/10'
                }`}
              >
                {tab.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'philosophy' && (
            <motion.div
              key="philosophy"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="border-8 border-lime-green bg-deep-black p-8 md:p-12"
            >
              <h3 className="font-heading text-3xl font-bold text-lime-green mb-8 uppercase">
                Markets Don&apos;t Buy Features. They Buy Outcomes.
              </h3>
              <div className="space-y-6 text-foreground/90 text-lg leading-relaxed max-w-4xl">
                <p>
                  I learned this the hard way at my first B2B SaaS job. We had the best patent analytics tool on the market. 
                  Better data. Better UI. Better everything. But we were losing deals to competitors who had worse products.
                </p>
                <p className="text-xl text-foreground font-bold">
                  Why? Because they understood something we didn&apos;t: <span className="text-neon-yellow">buyers don&apos;t 
                  care about your product. They care about their problems.</span>
                </p>
                <p>
                  That&apos;s when I stopped talking about &quot;AI-powered insights&quot; and started talking about 
                  &quot;cutting patent research time from 3 weeks to 3 days.&quot; Revenue grew €6M that year.
                </p>
                <motion.div
                  initial={{ scale: 0.95 }}
                  whileInView={{ scale: 1 }}
                  className="border-l-8 border-hot-pink pl-6 py-4 bg-hot-pink/5 mt-8"
                >
                  <p className="text-2xl font-bold text-hot-pink mb-3">
                    The Core Belief:
                  </p>
                  <p className="text-xl text-foreground">
                    Product marketing isn&apos;t about making your product sound good. It&apos;s about making your 
                    customer&apos;s life measurably better—and proving it.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}

          {activeTab === 'whatido' && (
            <motion.div
              key="whatido"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="border-8 border-hot-pink bg-deep-black p-8 md:p-12"
            >
              <h3 className="font-heading text-3xl font-bold text-hot-pink mb-8 uppercase">
                Full-Stack Go-to-Market
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: 'Market Intelligence',
                    desc: 'I talk to your customers, analyze your competitors, and find the positioning gap nobody else sees. Not with surveys—with real conversations that uncover what actually matters.',
                  },
                  {
                    title: 'Positioning & Messaging',
                    desc: 'I turn complex capabilities into simple value stories. The kind that makes prospects say "that\'s exactly what we need" instead of "interesting, tell me more."',
                  },
                  {
                    title: 'Sales Enablement',
                    desc: 'I arm your team with battlecards that actually work, demo narratives that stick, and objection-handling that turns "maybe" into "yes." Because great positioning dies if sales can\'t sell it.',
                  },
                  {
                    title: 'Demand Generation',
                    desc: 'I build content engines that attract qualified buyers. Not random traffic—pipeline. SEO that ranks. Campaigns that convert. Lead nurturing that actually nurtures.',
                  },
                  {
                    title: 'Launch Strategy',
                    desc: 'I orchestrate product launches that create momentum, not just noise. Beta programs that build advocates. Messaging that cuts through. Timing that maximizes impact.',
                  },
                  {
                    title: 'Performance Optimization',
                    desc: 'I measure what matters: pipeline velocity, win rates, deal size, sales cycle length. Then I iterate until the numbers move in the right direction.',
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    whileHover={{ scale: 1.03 }}
                    className="border-4 border-hot-pink/30 bg-hot-pink/5 p-6 hover:bg-hot-pink/10 transition-all"
                  >
                    <h4 className="font-heading text-xl font-bold text-hot-pink mb-3">{item.title}</h4>
                    <p className="text-foreground/80 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'whyme' && (
            <motion.div
              key="whyme"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="border-8 border-electric-blue bg-deep-black p-8 md:p-12"
            >
              <h3 className="font-heading text-3xl font-bold text-electric-blue mb-8 uppercase">
                Why Companies Hire Me
              </h3>
              <div className="space-y-8">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="border-l-8 border-neon-yellow pl-8 py-6"
                >
                  <h4 className="font-heading text-2xl font-bold text-neon-yellow mb-3">
                    01. I Speak Both Languages
                  </h4>
                  <p className="text-foreground/90 text-lg leading-relaxed">
                    I can sit with your product team and understand technical nuances. Then turn around and explain 
                    it to your CEO in business outcomes they actually care about. Most marketers do one or the other. I do both.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="border-l-8 border-lime-green pl-8 py-6"
                >
                  <h4 className="font-heading text-2xl font-bold text-lime-green mb-3">
                    02. I Don&apos;t Just Strategize—I Ship
                  </h4>
                  <p className="text-foreground/90 text-lg leading-relaxed">
                    You don&apos;t need another consultant with a 40-page deck. You need someone who can write the battlecard, 
                    train the sales team, and launch the campaign—all before your competitor moves. Strategy means nothing without execution.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="border-l-8 border-hot-pink pl-8 py-6"
                >
                  <h4 className="font-heading text-2xl font-bold text-hot-pink mb-3">
                    03. I&apos;ve Done This Before (And It Worked)
                  </h4>
                  <p className="text-foreground/90 text-lg leading-relaxed">
                    €6M in pipeline. 30% conversion lift. 15% shorter sales cycles. 20% higher win rates. These aren&apos;t 
                    projections—they&apos;re results from companies I&apos;ve worked with. I know what works because I&apos;ve already made it work.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ scale: 0.95 }}
                  whileInView={{ scale: 1 }}
                  className="border-8 border-electric-blue bg-electric-blue/10 p-8 mt-8"
                >
                  <p className="text-2xl font-bold text-electric-blue text-center">
                    &quot;Most PMMs are either strategic or tactical. Sana is the rare marketer who can do both—and 
                    knows exactly when to use which.&quot;
                  </p>
                  <p className="text-center text-foreground/60 mt-4 font-mono text-sm">
                    — Common feedback from teams I&apos;ve worked with
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Decorative Elements with Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.3, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        animate={{ rotate: [0, 5, 0] }}
        className="absolute top-40 right-10 w-32 h-32 border-4 border-hot-pink -z-10"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.3, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        animate={{ rotate: [0, -5, 0] }}
        className="absolute bottom-20 left-10 w-24 h-24 border-4 border-electric-blue -z-10"
      />
    </section>
  );
}

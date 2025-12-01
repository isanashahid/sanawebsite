'use client';

import { motion } from 'framer-motion';

const capabilityAreas = [
  {
    category: 'STRATEGIC POSITIONING',
    color: 'electric-blue',
    tagline: 'Turn features into market advantages',
    capabilities: [
      'Market segmentation & ICP definition',
      'Competitive differentiation frameworks',
      'Value proposition development',
      'Messaging architecture (company → product → feature)',
      'Category creation & positioning',
      'Win/loss analysis & market intelligence',
    ],
  },
  {
    category: 'GO-TO-MARKET EXECUTION',
    color: 'hot-pink',
    tagline: 'Launch strategies that create momentum',
    capabilities: [
      'Product launch orchestration',
      'Beta program design & management',
      'Channel strategy & partner enablement',
      'Pricing & packaging strategy',
      'Launch sequencing & timing',
      'Cross-functional GTM alignment',
    ],
  },
  {
    category: 'SALES ENABLEMENT',
    color: 'lime-green',
    tagline: 'Give your team the tools to close',
    capabilities: [
      'Competitive battlecards & objection handling',
      'Demo narratives & storytelling frameworks',
      'Sales training & certification programs',
      'Pitch decks & presentation materials',
      'ROI calculators & value selling tools',
      'Win rate improvement programs',
    ],
  },
  {
    category: 'DEMAND GENERATION',
    color: 'neon-yellow',
    tagline: 'Fill pipeline with qualified opportunities',
    capabilities: [
      'Content strategy & SEO programs',
      'Multi-channel campaign execution',
      'Email marketing & lifecycle nurturing',
      'Landing page optimization & CRO',
      'LinkedIn & social selling strategy',
      'Lead scoring & qualification frameworks',
    ],
  },
];

const toolsUsed = {
  marketing: ['HubSpot', 'Zoho', 'Lemlist', 'Apollo', 'Clay'],
  analytics: ['Google Analytics', 'Mixpanel', 'Amplitude'],
  ai: ['GPT-4', 'Claude', 'n8n', 'Artisan Ava'],
  content: ['WordPress', 'Webflow', 'Notion', 'Miro'],
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Section Title */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="max-w-7xl mx-auto mb-16"
      >
        <motion.div
          whileHover={{ rotate: -2, scale: 1.02 }}
          className="inline-block border-8 border-electric-blue bg-electric-blue px-6 py-3 rotate-brutal-2"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-deep-black uppercase">
            WHAT I BRING TO THE TABLE
          </h2>
        </motion.div>
        <p className="font-body text-xl text-foreground/80 mt-6 max-w-3xl">
          Not a laundry list of tools. A complete product marketing system—from strategy to execution.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        {/* Capability Areas */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {capabilityAreas.map((area, index) => {
            const colorClasses = {
              'electric-blue': 'border-electric-blue text-electric-blue bg-electric-blue/10',
              'hot-pink': 'border-hot-pink text-hot-pink bg-hot-pink/10',
              'lime-green': 'border-lime-green text-lime-green bg-lime-green/10',
              'neon-yellow': 'border-neon-yellow text-neon-yellow bg-neon-yellow/10',
            };

            return (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`border-8 ${colorClasses[area.color as keyof typeof colorClasses]} p-8 transition-all`}
              >
                <div className="mb-6">
                  <h3 className={`font-heading text-2xl md:text-3xl font-bold ${colorClasses[area.color as keyof typeof colorClasses].split(' ')[1]} mb-2 uppercase`}>
                    {area.category}
                  </h3>
                  <p className="text-foreground/70 text-lg italic">{area.tagline}</p>
                </div>
                <ul className="space-y-3">
                  {area.capabilities.map((capability, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.2, delay: index * 0.1 + idx * 0.05 }}
                      whileHover={{ x: 4 }}
                      className="flex items-start gap-3 group"
                    >
                      <span className={`${colorClasses[area.color as keyof typeof colorClasses].split(' ')[1]} text-lg group-hover:scale-125 transition-transform`}>
                        ▸
                      </span>
                      <span className="text-foreground/90 group-hover:text-foreground transition-colors">{capability}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Tools & Technologies - Compact */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="border-8 border-foreground/20 bg-deep-black p-8"
        >
          <h3 className="font-heading text-2xl font-bold text-foreground mb-6 uppercase">
            Tools I&apos;ve Used (But Don&apos;t Define Me)
          </h3>
          <p className="text-foreground/70 mb-6">
            Great product marketing isn&apos;t about tools—it&apos;s about strategy. But here&apos;s what I&apos;ve worked with:
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {Object.entries(toolsUsed).map(([category, tools], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="space-y-2"
              >
                <h4 className="font-mono text-sm uppercase text-foreground/60">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, toolIdx) => (
                    <motion.span
                      key={toolIdx}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1 border-2 border-foreground/30 bg-foreground/5 text-foreground/80 text-xs font-mono hover:bg-foreground/10 transition-colors"
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Value Statement */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center max-w-4xl mx-auto"
        >
          <div className="border-8 border-hot-pink bg-deep-black p-8">
            <p className="text-2xl md:text-3xl font-heading font-bold text-foreground leading-relaxed">
              You don&apos;t need someone who can <span className="text-hot-pink">&quot;do marketing.&quot;</span>
              <br />
              You need someone who can <span className="text-lime-green">build a revenue engine</span>.
            </p>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mt-6"
            >
              <a
                href="#contact"
                className="brutal-button bg-hot-pink text-stark-white inline-block"
              >
                LET&apos;S BUILD YOURS
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        whileInView={{ opacity: 0.2, rotate: 15 }}
        viewport={{ once: true }}
        animate={{ rotate: [15, 20, 15] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-20 right-20 w-20 h-20 border-4 border-neon-yellow -z-10"
      />
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        whileInView={{ opacity: 0.2, rotate: -10 }}
        viewport={{ once: true }}
        animate={{ rotate: [-10, -15, -10] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        className="absolute bottom-20 left-10 w-16 h-16 bg-hot-pink border-4 border-deep-black -z-10"
      />
    </section>
  );
}

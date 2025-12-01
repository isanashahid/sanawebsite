'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin, ExternalLink } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'EMAIL',
    value: 'isanashahid@gmail.com',
    href: 'mailto:isanashahid@gmail.com',
    color: 'electric-blue',
  },
  {
    icon: Linkedin,
    label: 'LINKEDIN',
    value: 'linkedin.com/in/isanashahid',
    href: 'https://linkedin.com/in/isanashahid',
    color: 'hot-pink',
  },
  {
    icon: MapPin,
    label: 'LOCATION',
    value: 'Berlin, Germany - Working Globally',
    href: null,
    color: 'lime-green',
  },
  {
    icon: ExternalLink,
    label: 'PORTFOLIO',
    value: 'sanashahid.me',
    href: 'https://sanashahid.me',
    color: 'neon-yellow',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 relative min-h-screen flex items-center">
      {/* Background Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="absolute top-20 left-10 w-64 h-64 bg-electric-blue border-8 border-deep-black -z-10"
        style={{ transform: 'rotate(-10deg)' }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="absolute bottom-20 right-10 w-48 h-48 bg-hot-pink border-8 border-deep-black -z-10"
        style={{ transform: 'rotate(8deg)' }}
      />

      <div className="max-w-7xl mx-auto w-full">
        {/* Section Title */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-16 text-center"
        >
          <motion.div
            whileHover={{ rotate: 2, scale: 1.02 }}
            className="inline-block border-8 border-lime-green bg-lime-green px-8 py-4"
          >
            <h2 className="font-heading text-5xl md:text-7xl font-bold text-deep-black uppercase">
              LET&apos;S TALK
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-2xl md:text-3xl text-foreground mt-8 max-w-3xl mx-auto"
          >
            Got a product that needs positioning? <span className="text-electric-blue font-bold">Let&apos;s fix it.</span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-body text-xl text-foreground/80 mt-4 max-w-2xl mx-auto"
          >
            Sales team struggling to close? <span className="text-hot-pink font-bold">I can help.</span><br />
            GTM strategy needs an overhaul? <span className="text-lime-green font-bold">Let&apos;s build it together.</span>
          </motion.p>
        </motion.div>

        {/* Contact Links */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {contactLinks.map((link, index) => {
            const colorClasses = {
              'electric-blue': 'border-electric-blue text-electric-blue bg-electric-blue/10',
              'hot-pink': 'border-hot-pink text-hot-pink bg-hot-pink/10',
              'lime-green': 'border-lime-green text-lime-green bg-lime-green/10',
              'neon-yellow': 'border-neon-yellow text-neon-yellow bg-neon-yellow/10',
            };

            const hoverShadows = {
              'electric-blue': 'hover:shadow-[8px_8px_0px_0px_rgba(0,212,255,1)]',
              'hot-pink': 'hover:shadow-[8px_8px_0px_0px_rgba(255,0,110,1)]',
              'lime-green': 'hover:shadow-[8px_8px_0px_0px_rgba(173,255,0,1)]',
              'neon-yellow': 'hover:shadow-[8px_8px_0px_0px_rgba(255,255,0,1)]',
            };

            const Icon = link.icon;
            const Component = link.href ? 'a' : 'div';

            return (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Component
                  {...(link.href ? { href: link.href, target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className={`block border-8 ${colorClasses[link.color as keyof typeof colorClasses]} 
                             p-6 transition-all ${hoverShadows[link.color as keyof typeof hoverShadows]}
                             ${link.href ? 'cursor-pointer hover:translate-x-[-4px] hover:translate-y-[-4px]' : ''}`}
                  style={{
                    transform: index % 2 === 0 ? 'rotate(-1deg)' : 'rotate(1deg)',
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`mt-1 ${colorClasses[link.color as keyof typeof colorClasses].split(' ')[1]}`}>
                      <Icon className="w-8 h-8 md:w-10 md:h-10" />
                    </div>
                    <div className="flex-1">
                      <div className="font-mono text-xs md:text-sm text-foreground/70 uppercase mb-2">
                        {link.label}
                      </div>
                      <div className={`font-heading text-xl md:text-2xl font-bold break-all
                                     ${colorClasses[link.color as keyof typeof colorClasses].split(' ')[1]}`}>
                        {link.value}
                      </div>
                      {link.href && (
                        <div className="mt-2 text-foreground/60 text-sm font-mono flex items-center gap-2">
                          <span>CLICK TO {link.label === 'EMAIL' ? 'SEND' : 'VISIT'}</span>
                          <ExternalLink className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                  </div>
                </Component>
              </motion.div>
            );
          })}
        </div>

        {/* Terminal-style CTA */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="terminal" style={{ transform: 'rotate(-1deg)' }}>
            <div className="pl-8 space-y-2">
              <p className="font-mono text-sm md:text-base">
                <span className="text-neon-yellow">$</span> sana --status
              </p>
              <p className="font-mono text-sm md:text-base">
                <span className="text-electric-blue">►</span> Available for consulting projects
              </p>
              <p className="font-mono text-sm md:text-base">
                <span className="text-hot-pink">►</span> Open to fractional PMM roles
              </p>
              <p className="font-mono text-sm md:text-base">
                <span className="text-neon-yellow">►</span> Response time: &lt;24 hours
              </p>
              <p className="font-mono text-sm md:text-base mt-4">
                <span className="text-lime-green">$</span> echo &quot;Let&apos;s build something amazing together&quot;
              </p>
              <p className="font-mono text-sm md:text-base text-lime-green animate-pulse">
                ▸ Waiting for your message...
              </p>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="border-t-4 border-foreground/20 pt-8">
            <p className="font-mono text-sm text-foreground/60">
              © 2025 Sana Shahid. Built with Next.js, TypeScript & Brutalist Aesthetics.
            </p>
            <p className="font-mono text-xs text-foreground/40 mt-2">
              &lt;/PORTFOLIO&gt;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Linkedin, Send, MapPin, Phone, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactV2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus('success');
    setTimeout(() => setFormStatus('idle'), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'isanashahid@gmail.com',
      href: 'mailto:isanashahid@gmail.com',
      color: 'text-cyan-400',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/isanashahid',
      href: 'https://linkedin.com/in/isanashahid',
      color: 'text-blue-400',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+49 176 70025409',
      href: 'tel:+4917670025409',
      color: 'text-purple-400',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Berlin, Germany',
      href: null,
      color: 'text-pink-400',
    },
  ];

  return (
    <section id="contact" ref={ref} className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-pink-400/10 border border-pink-400/20 rounded-full mb-6">
              <span className="text-pink-400 font-medium">Get In Touch</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build Something
              <span className="v2-gradient-text"> Amazing Together</span>
            </h2>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Ready to drive product growth through AI-powered marketing strategies? 
              Let's discuss how I can help accelerate your go-to-market success.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                  >
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 p-4 v2-glass-card rounded-xl hover:scale-105 transition-all duration-300 group"
                      >
                        <div className={`p-3 ${info.color.replace('text-', 'bg-')}/10 rounded-lg`}>
                          <Icon className={info.color} size={24} />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">{info.label}</div>
                          <div className="text-white font-medium group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 transition-all">
                            {info.value}
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-4 v2-glass-card rounded-xl">
                        <div className={`p-3 ${info.color.replace('text-', 'bg-')}/10 rounded-lg`}>
                          <Icon className={info.color} size={24} />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">{info.label}</div>
                          <div className="text-white font-medium">{info.value}</div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '< 24h', label: 'Response Time' },
                { value: '100%', label: 'Confidential' },
                { value: 'Global', label: 'Availability' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                  className="text-center p-4 v2-glass-card rounded-xl"
                >
                  <div className="text-2xl font-bold v2-gradient-text mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="v2-glass-card p-8 rounded-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 transition-all duration-300 text-white placeholder-gray-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400 transition-all duration-300 text-white placeholder-gray-500"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400/50 focus:border-pink-400 transition-all duration-300 text-white placeholder-gray-500"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400 transition-all duration-300 text-white placeholder-gray-500 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full v2-btn-primary py-4 text-lg font-semibold flex items-center justify-center gap-2 group"
              >
                <span>Send Message</span>
                <Send className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>

              {/* Form Status Messages */}
              {formStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 bg-green-400/10 border border-green-400/20 rounded-lg text-green-400"
                >
                  <CheckCircle size={20} />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}

              {formStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 bg-red-400/10 border border-red-400/20 rounded-lg text-red-400"
                >
                  <AlertCircle size={20} />
                  <span>Something went wrong. Please try again or email me directly.</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-gray-500">
            © {new Date().getFullYear()} Sana Shahid. Built with{' '}
            <span className="v2-gradient-text">Next.js & AI</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}


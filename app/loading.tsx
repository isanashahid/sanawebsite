'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        {/* Brutalist Loading Animation */}
        <div className="flex gap-4 mb-8">
          {[0, 1, 2, 3].map((index) => (
            <motion.div
              key={index}
              initial={{ y: 0 }}
              animate={{ y: [-20, 0, -20] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: index * 0.1,
              }}
              className={`w-8 h-8 border-4 border-deep-black ${
                index === 0
                  ? 'bg-electric-blue'
                  : index === 1
                  ? 'bg-hot-pink'
                  : index === 2
                  ? 'bg-lime-green'
                  : 'bg-neon-yellow'
              }`}
            />
          ))}
        </div>

        {/* Loading Text */}
        <div className="terminal inline-block">
          <div className="pl-8">
            <p className="font-mono text-base">
              <span className="text-lime-green">$</span> Loading portfolio...
            </p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="font-mono text-sm text-lime-green mt-2"
            >
              ▸ Please wait...
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}


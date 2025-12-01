'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-electric-blue border-8 border-deep-black -z-10 rotate-brutal-1" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-hot-pink border-8 border-deep-black -z-10 rotate-brutal-2" />

      <div className="text-center max-w-3xl">
        {/* 404 Number */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-12"
        >
          <div className="metric text-9xl md:text-[15rem] text-neon-yellow leading-none">
            404
          </div>
          <div className="h-2 w-full bg-lime-green mt-4"></div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="terminal mb-8"
          style={{ transform: 'rotate(-1deg)' }}
        >
          <div className="pl-8">
            <p className="font-mono text-base md:text-lg mb-4">
              <span className="text-hot-pink">ERROR:</span> Page not found
            </p>
            <p className="font-mono text-sm md:text-base text-foreground/80">
              The page you&apos;re looking for doesn&apos;t exist in this dimension.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <Link href="/">
            <button className="brutal-button bg-electric-blue text-deep-black hover:shadow-[8px_8px_0px_0px_rgba(255,0,110,1)]">
              RETURN TO HOME
            </button>
          </Link>
        </motion.div>

        {/* ASCII Art */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="mt-12 font-mono text-xs text-foreground/40"
        >
          <pre>
{`
 ¯\\_(ツ)_/¯
`}
          </pre>
        </motion.div>
      </div>
    </div>
  );
}


'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function VersionSwitcher() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href="/v2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-8 right-8 z-50 group"
    >
      <div className="relative">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
        
        {/* Button */}
        <div className="relative px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold text-white shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110 flex items-center gap-2">
          <Sparkles 
            size={20} 
            className={isHovered ? 'animate-spin' : 'animate-pulse'} 
          />
          <span>Try V2 Premium</span>
        </div>

        {/* Tooltip */}
        {isHovered && (
          <div className="absolute bottom-full mb-2 right-0 px-4 py-2 bg-black/90 backdrop-blur-xl rounded-lg text-sm whitespace-nowrap border border-white/10 animate-in fade-in slide-in-from-bottom-2 duration-200">
            <div className="text-cyan-400 font-medium mb-1">✨ Slider Revolution Pro Style</div>
            <div className="text-gray-400 text-xs">Premium agency theme with advanced animations</div>
          </div>
        )}
      </div>
    </Link>
  );
}


import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export default function AiBlob({ to }) {
  const navigate = useNavigate();

  return (
    <motion.div 
      className="relative group cursor-pointer flex items-center justify-center w-48 h-48 md:w-60 md:h-60 mx-auto rounded-[50%]"
      onClick={(e) => { e.preventDefault(); navigate(to); }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Outer Sphere with rim glow (Matched to Dither Blue) */}
      <div className="absolute inset-0 rounded-[50%] bg-black shadow-[inset_0_0_30px_rgba(13,15,142,0.7),0_0_40px_rgba(13,15,142,0.3)] border border-[#0d0f8e]/30 overflow-hidden">
        
        {/* Rotating Container for Inner Glows */}
        <motion.div
          className="absolute inset-[-30%] blur-[40px] opacity-80 mix-blend-screen"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          {/* Main Dither Blue Blob */}
          <motion.div 
            className="absolute top-1/4 left-1/4 w-3/5 h-3/5 bg-[#0d0f8e] rounded-[50%]"
            animate={{ scale: [1, 1.3, 1], x: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Lighter Highlight Blue Blob */}
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-3/5 h-3/5 bg-[#1c22d1] rounded-[50%]"
            animate={{ scale: [1, 1.4, 1], x: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </motion.div>
        
        {/* Central Core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35%] h-[35%] bg-white rounded-[50%] blur-[20px] opacity-25 z-10 mix-blend-overlay" />
      </div>
      
      {/* Circular Text SVG */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none p-4">
        <svg 
          className="w-full h-full animate-[spin_12s_linear_infinite] text-white opacity-90 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" 
          viewBox="0 0 200 200"
        >
          <path 
            id="circlePath" 
            d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" 
            fill="transparent" 
          />
          <text className="font-display-hero text-[17.5px] uppercase tracking-widest fill-current font-bold">
            <textPath href="#circlePath" startOffset="0%">
              REGISTER . REGISTER . REGISTER . REGISTER .
            </textPath>
          </text>
        </svg>
      </div>

      {/* Center Arrow Icon for Affordance */}
      <span className="relative z-30 material-symbols-outlined text-4xl text-white opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
        east
      </span>
    </motion.div>
  );
}

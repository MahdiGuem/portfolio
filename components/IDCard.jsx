import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const IDCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Motion values for the tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smoothing out the movement
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  // Map position to rotation
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["20deg", "-20deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-20deg", "20deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate relative position from center (-0.5 to 0.5)
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative h-[500px] w-[350px] rounded-[2.5rem] border border-white/10 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden cursor-pointer"
      >
        {/* INITIAL HOVER GLOW SWEEP */}
        {isHovered && (
          <motion.div 
            initial={{ x: '-100%', skewX: -20 }}
            animate={{ x: '200%' }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 z-20 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent w-full h-full pointer-events-none"
          />
        )}

        {/* MOUSE TRACKING SPOTLIGHT */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none opacity-50 transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(34, 211, 238, 0.15), transparent 40%)`,
          }}
        />

        {/* CONTENT LAYER */}
        <div 
          className="relative z-30 flex flex-col items-center p-10 h-full justify-between"
        >
          {/* PIC FRAME */}
          <motion.div 
            style={{
              rotateY,
              rotateX,
              transformStyle: "preserve-3d",
            }}
            className="relative w-44 h-44 mt-4"
          >
            <div className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-full animate-pulse" />
            <div className="relative w-full h-full rounded-3xl border border-white/20 overflow-hidden bg-black shadow-2xl">
               <img 
                 src="./pfp.png" 
                 alt="Profile" 
                 className="w-full h-full object-cover scale-110"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </motion.div>

          {/* NAME & CONTACT */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-black text-white tracking-tighter uppercase italic leading-none">
            Mahdi Guemri
            </h2>
            <p className="text-[10px] font-mono text-cyan-400 tracking-[0.4em] uppercase opacity-80">
              Full-stack web developer
            </p>
          </div>

          {/* BASIC INFO BADGE */}
          <div className="w-full space-y-3">
             <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 border-b border-white/5 pb-2">
                <span>Monastir, ISIMM</span>
                <span className="text-cyan-400">Pursuing Masters in CS</span>
             </div>
             
          </div>

          {/* ACTION BUTTON */}
          <a 
            href="./Mahdi_Guemri_Resume_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-4 text-center rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-black text-xs uppercase tracking-widest shadow-[0_10px_20px_rgba(34,211,238,0.3)] cursor-pointer"
          >
            Download CV
          </a>
        </div>

        {/* DECORATIVE WIREFRAME ELEMENT */}
        <div className="absolute -bottom-100 -right-10 w-40 h-40 border border-white/5 rounded-full pointer-events-none" />
      </motion.div>
    </div>
  );
};

export default IDCard;
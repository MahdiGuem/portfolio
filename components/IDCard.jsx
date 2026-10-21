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

    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
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
        style={{ '--v-panel': 'rgba(13, 22, 32, 0.62)' }}
        className="relative h-[500px] w-[350px] v-frame v-shape v-cut-lg bg-vline backdrop-blur-2xl shadow-[0_0_60px_rgba(0,0,0,0.65)] overflow-hidden cursor-pointer"
      >
        {/* INITIAL HOVER GLOW SWEEP */}
        {isHovered && (
          <motion.div 
            initial={{ x: '-100%', skewX: -20 }}
            animate={{ x: '200%' }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 z-20 bg-gradient-to-r from-transparent via-vblue/25 to-transparent w-full h-full pointer-events-none"
          />
        )}

        {/* MOUSE TRACKING SPOTLIGHT */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none opacity-60 transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0, 160, 255, 0.18), transparent 40%)`,
          }}
        />

        {/* SCANLINE SWEEP */}
        <div className="v-scan z-10" />

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
            <div className="absolute inset-0 bg-vblue/25 blur-2xl animate-pulse" />
            <div className="relative w-full h-full v-shape v-cut bg-vline">
              <div className="absolute inset-[1px] v-shape overflow-hidden bg-void">
                <img 
                  src="./pfp.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void/80 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* NAME & CONTACT */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-display font-extrabold text-white tracking-[0.04em] uppercase leading-none">
            Mahdi Guemri
            </h2>
            <p className="text-[10px] font-display font-semibold text-vsky tracking-[0.35em] uppercase opacity-90">
              Full-stack web developer
            </p>
          </div>

          {/* BASIC INFO BADGE */}
          <div className="w-full space-y-3">
             <div className="flex justify-between items-center text-[10px] font-display text-vmuted border-b border-vline pb-2">
                <span>Monastir, ISIMM</span>
                <span className="text-vsky">Pursuing Masters in CS</span>
             </div>
             
          </div>

          {/* ACTION BUTTON */}
          <a 
            href="./Mahdi_Guemri_Resume_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="v-btn w-full cursor-pointer"
          >
            Download CV
          </a>
        </div>

        {/* DECORATIVE WIREFRAME ELEMENT */}
        <div className="absolute -bottom-100 -right-10 w-40 h-40 v-shape v-cut-lg border border-vline pointer-events-none" />
      </motion.div>
    </div>
  );
};

export default IDCard;
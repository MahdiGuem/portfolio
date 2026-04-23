import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { techLogos } from '../src/utils/techLogos';

const ProjectCard = ({ project, onOpen }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  const { title, description, tech, screenshot, video } = project;

  const handleClick = () => {
    if (onOpen) onOpen(project);
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-zinc-950 group cursor-pointer shadow-[0_0_30px_rgba(0,0,0,0.6)]"
    >
      {/* MEDIA LAYER */}
      <div className="absolute inset-0 z-0 bg-black">
        <img
          src={screenshot}
          alt={title}
          className="w-full h-full object-cover"
        />

        <AnimatePresence mode="wait">
          {isHovered && (
            <motion.video
              key="video"
              ref={videoRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-90 scale-105"
            >
              <source src={video} type="video/mp4" />
            </motion.video>
          )}
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      </div>

      {/* CONTENT LAYER */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-4">
        {/* Title / Description (same position, bottom left) */}
        <AnimatePresence mode="wait">
          {!isHovered ? (
            <motion.h3
              key="title"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="text-lg md:text-xl font-bold text-white uppercase mb-3"
            >
              {title}
            </motion.h3>
          ) : (
            <motion.p
              key="desc"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="text-zinc-300 text-xs md:text-sm mb-3 line-clamp-2 pb-2"
            >
              {description}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Tech stack (fixed, bottom left) */}
        <div className="flex flex-wrap gap-2">
          {tech.slice(0, 4).map((t, i) => (
<img
                    key={i}
                    src={techLogos[t] || techLogos['React']}
                    alt={t}
                    className="w-6 h-6 rounded bg-white/10 p-1 object-contain"
                  />
          ))}
          {tech.length > 4 && (
            <span className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-[10px] text-zinc-400">
              +{tech.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* CLICK HINT */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-4 right-4 z-30"
          >
            <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/50 text-cyan-400 text-xs font-medium backdrop-blur-sm">
              Click to learn more
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SUBTLE SCANLINE OVERLAY */}
      <div className="absolute inset-0 z-30 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_1px,2px_100%] opacity-30" />
    </motion.div>
  );
};

export default ProjectCard;
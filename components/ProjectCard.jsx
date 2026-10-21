import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { techLogos } from '../src/utils/techLogos';

const ProjectCard = ({ project, onOpen }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  const { title, description, tech, screenshot, video } = project;
  const hasVideo = video && !videoError;

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
      className="relative w-full aspect-[16/9] v-shape v-cut bg-vline transition-colors duration-300 group cursor-pointer hover:bg-vblue/50"
    >
      <div className="absolute inset-[1px] v-shape overflow-hidden bg-void">
        {/* MEDIA LAYER */}
        <div className="absolute inset-0 z-0 bg-void">
          <img
            src={screenshot}
            alt={title}
            className="w-full h-full object-cover"
          />

          <AnimatePresence mode="wait">
            {isHovered && (
              hasVideo ? (
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
                  onError={() => setVideoError(true)}
                >
                  <source src={video} type="video/mp4" />
                </motion.video>
              ) : (
                <motion.div
                  key="video-placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 w-full h-full bg-navy2 flex items-center justify-center"
                >
                  <span className="text-vsky text-sm font-display font-semibold uppercase tracking-[0.25em]">Video demo in progress</span>
                </motion.div>
              )
            )}
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent" />
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
                className="text-lg md:text-xl font-display font-bold text-white uppercase tracking-wide mb-3"
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
                className="text-vtext/80 text-xs md:text-sm mb-3 line-clamp-2 pb-2"
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
                className="w-6 h-6 v-shape v-cut-xs bg-vline2 p-1 object-contain"
              />
            ))}
            {tech.length > 4 && (
              <span className="w-6 h-6 v-shape v-cut-xs bg-vline2 flex items-center justify-center text-[10px] font-display text-vmuted">
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
              <span className="v-tag backdrop-blur-sm">
                Click to learn more
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* SUBTLE SCANLINE OVERLAY */}
        <div className="absolute inset-0 z-30 pointer-events-none v-scanlines opacity-40" />
      </div>
    </motion.div>
  );
};

export default ProjectCard;

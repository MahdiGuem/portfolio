import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { techLogos } from '../src/utils/techLogos';

const ProjectOverlay = ({ project, isOpen, onClose }) => {
  const [videoError, setVideoError] = useState(false);
  
  if (!isOpen) return null;

  const { title, fullDescription, tech, liveLink, video, screenshot } = project;
  const hasVideo = video && !videoError;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-void/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="relative w-full max-w-4xl max-h-[90vh] v-frame v-shape v-cut-lg bg-vline"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative m-[1px] max-h-[calc(90vh-2px)] v-shape overflow-y-auto v-scroll bg-navy/95 backdrop-blur-xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 v-shape v-cut-sm flex items-center justify-center bg-vline2 text-vtext hover:bg-vblue hover:text-void transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <div className="relative aspect-video overflow-hidden bg-void">
            {hasVideo ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                controls
                className="w-full h-full object-contain"
                onError={() => setVideoError(true)}
              >
                <source src={video} type="video/mp4" />
              </video>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-navy2">
                <span className="text-vsky text-sm font-display font-semibold uppercase tracking-[0.25em]">Video demo in progress</span>
              </div>
            )}
          </div>

          <div className="p-8 space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white uppercase tracking-wide">
                {title}
              </h2>
            </div>

            <div>
              <p className="text-vtext/80 text-sm md:text-base leading-relaxed">
                {fullDescription}
              </p>
            </div>

            <div>
              <h3 className="text-xs font-display font-bold text-vsky uppercase tracking-[0.28em] mb-3">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {tech.map((t, i) => (
                  <div
                    key={i}
                    className="v-chip"
                  >
                    <img
                      src={techLogos[t] || `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg`}
                      alt={t}
                      className="w-5 h-5 object-contain"
                    />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {liveLink && (
              <div className="pt-4 border-t border-vline">
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="v-btn"
                >
                  <span>View Live</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectOverlay;

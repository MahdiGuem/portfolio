import React from 'react';
import { motion } from 'framer-motion';
import { techLogos } from '../src/utils/techLogos';



const ProjectOverlay = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  const { title, fullDescription, tech, liveLink, video, screenshot } = project;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-zinc-950/90 border border-white/20 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="relative aspect-video rounded-t-3xl overflow-hidden bg-black">
          <video
            autoPlay
            muted
            loop
            playsInline
            controls
            className="w-full h-full object-contain"
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>

        <div className="p-8 space-y-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
              {title}
            </h2>
          </div>

          <div>
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
              {fullDescription}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-3">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {tech.map((t, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10"
                >
                  <img
                    src={techLogos[t] || `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg`}
                    alt={t}
                    className="w-5 h-5 object-contain"
                  />
                  <span className="text-xs text-zinc-300 font-medium">{t}</span>
                </div>
              ))}
            </div>
          </div>

          {liveLink && (
            <div className="pt-4 border-t border-white/10">
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold text-sm uppercase tracking-wider rounded-full shadow-[0_4px_12px_rgba(34,211,238,0.4)] hover:shadow-[0_6px_16px_rgba(34,211,238,0.6)] transition-all"
              >
                <span>View Live</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectOverlay;
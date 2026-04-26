import React, { useState } from 'react';
import { motion } from 'framer-motion';
import IDCard from '../components/IDCard';
import ProjectCard from '../components/ProjectCard';
import ProjectOverlay from '../components/ProjectOverlay';
import { techLogos } from './utils/techLogos';

const FuturisticPortfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = [
    {
      title: "NeoRail",
      description: "Multi-modal operational memory for rail networks with RAG-based decision support.",
      fullDescription: "NeoRail is a real-time decision support system for rail networks, serving as a smart operational memory using Retrieval-Augmented Generation (RAG) to quickly access past solutions, avoiding slow calculations and high-stress human guesswork during disruptions. The platform bridges the gap between field conductors and central control admins, ensuring every operational decision is backed by the best historical data available. Features include voice-native incident reporting via Web Speech API, visual evidence capture, AI-powered golden run retrieval using Qdrant vector search, and a command center dashboard for reviewing field reports and selecting AI-validated resolution protocols.",
      tech: ["Next.js", "Qdrant","Supabase","Prisma", "TypeScript", "Auth.js", , "FastAPI", "Tailwind CSS"],
      liveLink: "https://neorail.demo.com",
      screenshot: "./Neorail_screenshot.png",
      video: "./Neorail_video.mp4"
    },
    {
    "title": "KeepMyBusiness",
    "description": "Multi-client ERP system with request management and content display.",
    "fullDescription": "KeepMyBusiness (KMB) is an enterprise resource planning platform for managing client registrations, content cards, and administrative workflows. Features include dynamic content display with video/text/product cards, client request submission and approval system, role-based admin dashboard, and JWT-secured API endpoints.",
    "tech": ["Next.js", "MongoDB", "Spring Boot", "Java", "TypeScript", "Tailwind CSS", "NextUI", "Framer Motion"],
    "liveLink": "https://keepmybusiness.demo.com",
    "screenshot": "./kmb_screenshot.png",
    "video": "./kmb_video.mp4"
  }

  ];

  const techStack = ["React", "Node.js", "Python", "TypeScript", "AI/ML", "FastAPI", "MongoDB", "Docker"];

const NavBar = ({ showCV = false }) => {
    const links = showCV ? ['CV', 'About', 'Work', 'Contact'] : ['About', 'Work', 'Contact'];

    return (
      <nav className="flex items-center gap-4 px-4 py-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-2xl shadow-2xl">
        {links.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-xs sm:text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors uppercase tracking-widest"
          >
            {item}
          </a>
        ))}
      </nav>
    );
  };

  const AboutSection = () => (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20 ">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-8 bg-gradient-to-b from-white via-gray-400 to-gray-700 bg-clip-text text-transparent">
            About
          </h2>
          <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed mb-12 max-w-2xl mx-auto min-w-full pb-2">
            Full-stack developer passionate about creating innovative web experiences and exploring the intersection of technology and design.
            Specializing in modern web technologies and AI integration.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/20 hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-colors"
              >
                <img
                  src={techLogos[tech] || techLogos['React']}
                  alt={tech}
                  className="w-5 h-5 object-contain"
                />
                <span className="text-xs font-medium text-gray-300">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );

  const WorkSection = () => (
    <section id="work" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4 bg-gradient-to-b from-white via-gray-400 to-gray-700 bg-clip-text text-transparent">
            Work
          </h2>
          <p className="text-lg text-zinc-400">Click the project to watch a video demo and get more details.</p>
        </motion.div>
        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <ProjectCard project={project} onOpen={setSelectedProject} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  const ContactSection = () => (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-8 bg-gradient-to-b from-white via-gray-400 to-gray-700 bg-clip-text text-transparent">
            Contact
          </h2>
          <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed mb-12 max-w-2xl mx-auto pb-2">
            If it's for joining a team or creating a project from scratch, reach out below!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.a
              href="mailto:mahdiguemri@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-black text-lg uppercase tracking-widest rounded-full shadow-[0_10px_20px_rgba(34,211,238,0.3)] hover:shadow-[0_15px_30px_rgba(34,211,238,0.5)] transition-shadow relative z-10"
            >
              Send Mail
            </motion.a>
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/in/mahdi-guemri-152971269/" className="text-zinc-400 hover:text-cyan-400 transition-colors relative z-10">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://github.com/MahdiGuem" className="text-zinc-400 hover:text-cyan-400 transition-colors relative z-10">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );

  return (
    <div className="relative w-full min-h-screen bg-[#050505] text-white overflow-hidden font-sans">
      {/* Unified Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-violet-600/10 blur-[120px] animate-pulse transition-all duration-700" />
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: `linear-gradient(to right, #222 1px, transparent 1px), linear-gradient(to bottom, #222 1px, transparent 1px)`, backgroundSize: '4rem 4rem', maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)' }}
        />
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex h-screen">
        {/* Left: ID Card + Nav Bar */}
        <div className="relative w-[400px] shrink-0 h-screen flex flex-col items-center justify-center p-6">
          <IDCard />
          <div className="absolute bottom-8">
<NavBar showCV={false} />
          </div>
        </div>

        {/* Right: Scrollable Content */}
        <div className="flex-1 h-screen overflow-y-auto scrollbar-hide relative z-10">
          <AboutSection />
          <WorkSection />
          <ContactSection />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden h-screen overflow-y-auto scrollbar-hide relative z-10">
        <section id="home" className="min-h-screen flex items-center justify-center px-6">
          <IDCard />
        </section>
        <AboutSection />
        <WorkSection />
        <ContactSection />

        {/* Floating Nav Bar */}
        <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
          <NavBar showCV={true} />
        </nav>
      </div>

      <ProjectOverlay project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};

export default FuturisticPortfolio;
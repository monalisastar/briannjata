'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useEffect } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import Typewriter from 'typewriter-effect'; // Vercel-safe

const taglines = [
  'Engineering trust through code',
  'Building the future, one block at a time',
  'Developer. Visionary. Carbon Strategist.',
  'Crafting the decentralized tomorrow',
];

const Hero = () => {
  const particlesInit = async (main: any) => {
    await loadSlim(main); // ✅ fixed
  };

  return (
    <section
      id="top-anchor"
      className="relative overflow-hidden px-6 py-24 md:py-36 z-10 rounded-3xl bg-gradient-to-br from-[#0e1529] via-[#0b1c3f] to-[#08111d] border border-blue-200/20 shadow-[0_0_90px_rgba(21,120,240,0.35)] backdrop-blur-3xl"
    >
      {/* 🪐 Particle layer */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          fullScreen: false,
          background: { color: 'transparent' },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: { enable: true, mode: 'push' },
              onHover: { enable: true, mode: 'repulse' },
              resize: true,
            },
            modes: {
              push: { quantity: 3 },
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            number: { value: 60, density: { enable: true, area: 800 } },
            color: { value: '#00bfff' },
            shape: { type: 'star' },
            opacity: { value: 0.4 },
            size: { value: { min: 1, max: 4 } },
            links: {
              enable: true,
              distance: 150,
              color: '#00bfff',
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              outModes: 'out',
            },
          },
        }}
      />

      {/* 🌐 Grid overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none rounded-3xl overflow-hidden">
        <div className="w-full h-full bg-[radial-gradient(circle,_rgba(255,255,255,0.05)_1px,_transparent_1px)] [background-size:22px_22px]" />
      </div>

      {/* ✨ Main content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center text-white space-y-6 max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-transparent bg-gradient-to-r from-sky-300 via-blue-300 to-purple-400 bg-clip-text drop-shadow-lg">
          Hi, I’m Brian Njata
        </h1>

        <div className="text-lg md:text-xl text-blue-100/90 min-h-[30px]">
          <Typewriter
            onInit={(typewriter) => {
              const loopTaglines = () => {
                taglines.forEach((text, index) => {
                  typewriter
                    .typeString(text)
                    .pauseFor(1800)
                    .deleteAll();
                  if (index === taglines.length - 1) {
                    typewriter.callFunction(() => loopTaglines());
                  }
                });
              };
              loopTaglines();
              typewriter.start();
            }}
          />
        </div>

        <div className="flex justify-center gap-6 mt-6 text-xl text-blue-200">
          <a
            href="mailto:brian@briannjata.org"
            className="hover:text-cyan-400 transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://linkedin.com/in/brian-njata-30700125b"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/monalisastar/monalisastar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </motion.div>

      {/* ↓ Scroll hint */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce text-blue-200/80 text-sm">
        ↓ Scroll to explore
      </div>
    </section>
  );
};

export default Hero;


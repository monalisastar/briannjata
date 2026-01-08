'use client';

import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaEye,
  FaDownload,
  FaTimes,
} from 'react-icons/fa';

export default function Hero() {
  const jobsFlow = useAnimation();
  const authFlow = useAnimation();
  const [showResume, setShowResume] = useState(false);

  // -------- Resume download tracking (robust) --------
  const trackResumeDownload = () => {
    const payload = JSON.stringify({ source: 'Hero Resume Button' });

    if (navigator.sendBeacon) {
      navigator.sendBeacon('/api/track-resume', payload);
    } else {
      fetch('/api/track-resume', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
      }).catch(() => {});
    }
  };

  // -------- Jobs burst simulation --------
  useEffect(() => {
    let mounted = true;

    const runJobs = async () => {
      while (mounted) {
        await jobsFlow.start({
          strokeDashoffset: [0, -180],
          transition: { duration: 1.2, ease: 'linear' },
        });

        await new Promise(r => setTimeout(r, 200 + Math.random() * 300));

        await jobsFlow.start({
          strokeDashoffset: [0, -180],
          transition: { duration: 0.9, ease: 'linear' },
        });

        await new Promise(r => setTimeout(r, 1200 + Math.random() * 2000));
      }
    };

    runJobs();
    return () => {
      mounted = false;
    };
  }, [jobsFlow]);

  // -------- Auth spike simulation --------
  useEffect(() => {
    let mounted = true;

    const runAuth = async () => {
      while (mounted) {
        await new Promise(r => setTimeout(r, 3000 + Math.random() * 4000));

        await authFlow.start({
          opacity: [0.2, 1, 0.2],
          transition: { duration: 0.8, ease: 'easeOut' },
        });
      }
    };

    runAuth();
    return () => {
      mounted = false;
    };
  }, [authFlow]);

  // -------- Close modal on ESC --------
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowResume(false);
    };

    if (showResume) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [showResume]);

  return (
    <>
      <section className="relative w-full min-h-[calc(100vh-5rem)] overflow-hidden bg-[#0B0F1C] text-white">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F1C] via-[#101828] to-[#1B2735]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.04),transparent_45%)]" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-5rem)]">

          {/* LEFT — COPY */}
          <div className="flex items-center">
            <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 space-y-8">
              <h1 className="text-4xl md:text-5xl xl:text-[64px] font-bold leading-tight">
                Turning ideas into production-grade software.
              </h1>

              <p className="text-blue-100/90 text-lg md:text-xl max-w-xl">
                From architecture to deployment, I design software that scales
                reliably and performs under real-world load.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition font-medium"
                >
                  View Selected Work
                </a>

                <button
                  onClick={() => setShowResume(true)}
                  className="px-6 py-3 rounded-lg border border-blue-300/40 text-blue-200 hover:bg-blue-300/10 transition flex items-center gap-2"
                >
                  <FaEye /> Preview Resume
                </button>

                <a
                  href="/resume.pdf"
                  download
                  onClick={trackResumeDownload}
                  className="px-6 py-3 rounded-lg border border-green-400/40 text-green-300 hover:bg-green-400/10 transition flex items-center gap-2"
                >
                  <FaDownload /> Download Resume
                </a>
              </div>

              <div className="flex gap-6 pt-4 text-xl text-blue-300/80">
                <a href="mailto:brian@briannjata.org"><FaEnvelope /></a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
              </div>
            </div>
          </div>

          {/* RIGHT — SYSTEM DIAGRAM */}
          <div className="relative w-full h-full overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.12]
              bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),
                   linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]
              [background-size:24px_24px]"
            />

            <svg viewBox="0 0 1000 600" className="absolute inset-0 w-full h-full">
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <g filter="url(#glow)">
                <rect x="420" y="260" width="220" height="110" rx="18" stroke="#A855F7" strokeWidth="3" />
                <text x="530" y="308" textAnchor="middle" fill="#F5E9FF" fontWeight="700">
                  API Gateway
                </text>
              </g>

              <g filter="url(#glow)" opacity="0.8">
                <rect x="120" y="300" width="200" height="90" rx="14" stroke="#60A5FA" strokeWidth="2" />
                <text x="220" y="340" textAnchor="middle" fill="#E5F0FF">
                  Client
                </text>
              </g>

              <g filter="url(#glow)" opacity="0.8">
                <rect x="720" y="300" width="220" height="90" rx="14" stroke="#22D3EE" strokeWidth="2" />
                <text x="830" y="340" textAnchor="middle" fill="#ECFEFF">
                  Database
                </text>
              </g>

              <motion.g filter="url(#glow)" animate={authFlow}>
                <rect x="450" y="110" width="180" height="80" rx="14" stroke="#22C55E" strokeWidth="2" />
                <text x="540" y="150" textAnchor="middle" fill="#ECFDF5">
                  Auth
                </text>
              </motion.g>

              <g filter="url(#glow)" opacity="0.85">
                <rect x="450" y="440" width="220" height="85" rx="14" stroke="#FACC15" strokeWidth="2" />
                <text x="560" y="480" textAnchor="middle" fill="#FEFCE8">
                  Jobs / Events
                </text>
              </g>

              <motion.path
                d="M320 345 C380 345, 400 330, 420 315"
                stroke="#94A3B8"
                strokeWidth="1.4"
                fill="none"
                strokeDasharray="6 14"
                animate={{ strokeDashoffset: [0, -220] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              />

              <motion.path
                d="M640 315 C680 330, 700 345, 720 345"
                stroke="#67E8F9"
                strokeWidth="1.4"
                fill="none"
                strokeDasharray="10 18"
                animate={{ strokeDashoffset: [0, -300] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              />

              <motion.path
                d="M530 260 C530 210, 540 180, 540 150"
                stroke="#86EFAC"
                strokeWidth="1.2"
                fill="none"
                strokeDasharray="4 16"
                animate={{ strokeDashoffset: [0, -120] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
              />

              <motion.path
                d="M530 370 C530 410, 540 430, 560 460"
                stroke="#FDE68A"
                strokeWidth="1.2"
                fill="none"
                strokeDasharray="3 20"
                animate={jobsFlow}
              />
            </svg>

            <div className="absolute bottom-6 right-8 text-xs font-mono text-green-400 flex gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
              5 nodes active · ~15ms latency
            </div>
          </div>
        </div>
      </section>

      {/* Resume Preview Modal */}
      <AnimatePresence>
        {showResume && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowResume(false)}
          >
            <motion.div
              className="relative w-full max-w-4xl h-[85vh] bg-[#0B0F1C] rounded-xl overflow-hidden border border-white/10"
              onClick={e => e.stopPropagation()}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
            >
              <button
                onClick={() => setShowResume(false)}
                className="absolute top-4 right-4 text-white/70 hover:text-white"
              >
                <FaTimes />
              </button>

              <iframe
                src="/resume.pdf"
                className="w-full h-full"
                title="Resume Preview"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

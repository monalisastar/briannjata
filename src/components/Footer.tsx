'use client';

import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const target = document.getElementById('top-anchor');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative w-full px-6 py-12 mt-24 rounded-t-3xl shadow-[0_0_60px_rgba(0,191,255,0.4)] bg-gradient-to-br from-[#0b0f2f] via-[#1a1d4a] to-[#0b0f2f] text-white backdrop-blur-md border-t border-blue-200/10 z-20 overflow-hidden">
      {/* Animated rainbow line */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-blue-500 via-green-400 to-purple-500 animate-pulse" />

      {/* Back to Top Floating Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-blue-600/20 backdrop-blur-md border border-blue-400/30 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
          aria-label="Back to Top"
        >
          <FaArrowUp />
        </button>
      )}

      {/* Badge / Tagline */}
      <div className="mb-4 text-sm text-blue-100/80">
        🛠️ Built with <span className="font-semibold text-white">Next.js, TailwindCSS, Solidity & Passion</span>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 text-blue-100/80 text-xl mb-6">
        <a
          href="mailto:brian@briannjata.org"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>

        <a
          href="https://www.linkedin.com/in/brian-njata-30700125b"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/monalisastar/monalisastar"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>

      {/* Contact Info */}
      <p className="text-sm text-blue-100/70 mb-2">
        Contact: <a href="mailto:brian@briannjata.org" className="underline">brian@briannjata.org</a>
      </p>

      {/* Copyright */}
      <p className="text-xs text-blue-100/50">
        © {new Date().getFullYear()} Brian Njata. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;


'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Systems', href: '/systems' },
  { label: 'Capabilities', href: '/capabilities' },
  { label: 'Work', href: '/work' },
  { label: 'Writing', href: '/writing' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const lastScrollY = useRef(0);

  // Scroll detection + hide/show
  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;

      setScrolled(currentY > 20);

      if (currentY > lastScrollY.current && currentY > 80) {
        // scrolling down
        setHidden(true);
      } else {
        // scrolling up
        setHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{
          y: hidden ? -96 : 0,
          opacity: hidden ? 0 : 1,
        }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className={`
          fixed top-0 inset-x-0 z-[100]
          px-6 md:px-12 py-4
          flex items-center justify-between
          bg-[#0B0F1C]/90 backdrop-blur
          ${scrolled ? 'border-b border-white/10' : ''}
        `}
      >
        {/* Brand / Home */}
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/images/logo.png"
            alt="Brian Njata"
            width={56}
            height={56}
            priority
            className="object-contain"
          />

          {/* Name hidden on small screens */}
          <span className="hidden md:inline text-white font-semibold text-lg tracking-tight">
            Brian Njata
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8 text-sm text-white/80">
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-white text-2xl"
          aria-label="Open menu"
        >
          ☰
        </button>
      </motion.nav>

      {/* ===== MOBILE MENU ===== */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-[#0B0F1C]"
          >
            {/* Close */}
            <div className="flex justify-end px-6 py-6">
              <button
                onClick={() => setMenuOpen(false)}
                className="text-white text-3xl"
                aria-label="Close menu"
              >
                ×
              </button>
            </div>

            {/* Mobile links */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center justify-center gap-8 h-[calc(100vh-6rem)]"
            >
              {navItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl text-white/90 hover:text-white transition"
                >
                  {item.label}
                </Link>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

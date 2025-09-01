'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blogs' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' }, // ✅ Added Projects
  { label: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem('theme') as 'dark' | 'light' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const active = stored || (prefersDark ? 'dark' : 'light');
    setTheme(active);
    document.documentElement.classList.toggle('dark', active === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a0f2c]/80 dark:bg-black/70 backdrop-blur-lg shadow-lg'
            : 'bg-[#0a0f2c]/40 dark:bg-black/40 backdrop-blur-md'
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="Logo" width={36} height={36} className="rounded-full" />
          <span className="hidden md:inline-block text-white font-bold text-lg dark:text-white">
            Brian Njata
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 text-sm md:text-base text-white dark:text-white">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`hover:text-blue-300 transition ${
                pathname === href ? 'text-blue-400 font-semibold' : ''
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Theme Toggle & Hamburger */}
        <div className="flex items-center gap-4">
          <button onClick={toggleTheme} className="text-white text-xl" aria-label="Toggle Theme">
            {theme === 'dark' ? '🌞' : '🌙'}
          </button>
          <button
            onClick={() => setMenuOpen(true)}
            className="text-white md:hidden"
            aria-label="Open Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Fullscreen Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className="fixed inset-0 z-50 bg-[#0a0f2c]/90 dark:bg-black/90 backdrop-blur-lg text-white flex flex-col justify-center items-center space-y-8"
          >
            <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-3xl">
              ✖️
            </button>
            {navItems.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`text-2xl hover:text-blue-300 transition ${
                  pathname === href ? 'text-blue-400 font-semibold' : ''
                }`}
              >
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;


'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const tags = ['Vision', 'Recovery'];
const recommendedPosts = [
  {
    title: 'Panic, Rebirth & Purpose',
    slug: 'panic-rebirth-journey',
    image: '/images/panic.png',
  },
  {
    title: 'Building Future-Proof Ecosystems',
    slug: 'future-ecosystems',
    image: '/images/future-ecosystem.png',
  },
];

export default function FounderReflections() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [headings, setHeadings] = useState<string[]>([]);

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolled);
    };

    const collectHeadings = () => {
      const elements = Array.from(document.querySelectorAll('h2')).map(h => h.textContent || '');
      setHeadings(elements);
    };

    window.addEventListener('scroll', updateScroll);
    collectHeadings();
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const scrollToHeading = (text: string) => {
    const el = Array.from(document.querySelectorAll('h2')).find(h => h.textContent === text);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <article className="relative bg-gradient-to-b from-[#0a0a0a] via-[#0f1116] to-[#0a0a0a] text-white px-4 md:px-24 py-16">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-purple-500 z-50 transition-all" style={{ width: `${scrollProgress}%` }} />

      {/* Sticky TOC */}
      <aside className="hidden lg:block fixed top-24 left-10 w-64 z-30">
        <div className="bg-[#111827] p-4 rounded-xl border border-purple-900 shadow-md">
          <h3 className="text-purple-400 font-bold mb-2">On this page</h3>
          <ul className="space-y-2 text-sm">
            {headings.map((heading, i) => (
              <li
                key={i}
                className="cursor-pointer hover:text-purple-400 transition"
                onClick={() => scrollToHeading(heading)}
              >
                • {heading}
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <section className="max-w-4xl mx-auto relative z-10 backdrop-blur-md bg-white/5 p-6 md:p-12 rounded-2xl border border-white/10 shadow-lg">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <span key={i} className="bg-purple-800/40 text-xs px-3 py-1 rounded-full text-purple-200 uppercase tracking-wider">
              #{tag}
            </span>
          ))}
        </div>

        {/* Animated Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          Founder Reflections: Code, Crisis & Calling
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-300 mb-8"
        >
          A personal journey through panic, purpose, and the pursuit of digital transformation.
        </motion.p>

        {/* Blog Content */}
        <section className="space-y-8 leading-relaxed text-gray-200">
          <h2 className="text-xl font-semibold">My Roots and Crisis</h2>
          <p>
            Everything I’ve built — every piece of code, every platform, every ritual — has been forged through deep emotional battle...
          </p>

          <h2 className="text-xl font-semibold">Code as a Compass</h2>
          <p>
            For months, I woke up to shadows — a numbness I couldn’t name. But every time I opened VS Code, a light returned...
          </p>

          <blockquote className="border-l-4 border-purple-500 pl-4 italic text-purple-300">
            “This is my country. This is my story. And I am still in command.”
          </blockquote>

          <h2 className="text-xl font-semibold">The Platforms I’ve Birthed</h2>
          <ul className="list-disc pl-6">
            <li>Hire A Tutor (smart contract–based reward bots)</li>
            <li>FreelancersVerse (Web3 + Climate services marketplace)</li>
            <li>Eco-Mentor LMS (climate education built from scratch)</li>
          </ul>

          <h2 className="text-xl font-semibold">The Rebirth of Leadership</h2>
          <p>
            I no longer build just for income. I build to rewire broken systems. To show others like me — you can lose everything and still rise.
          </p>
        </section>
      </section>

      {/* Recommended Reads */}
      <section className="max-w-5xl mx-auto mt-20 px-6">
        <h3 className="text-lg font-bold text-purple-300 mb-6">🌟 Recommended Reads</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {recommendedPosts.map(({ slug, title, image }, i) => (
            <Link key={i} href={`/blogs/${slug}`} className="group block bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-purple-500 transition">
              <div className="relative h-40 w-full">
                <Image src={image} alt={title} fill className="object-cover transition group-hover:scale-105 duration-300" />
              </div>
              <div className="p-4 text-white">
                <h4 className="font-semibold group-hover:text-purple-400">{title}</h4>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Back to Top */}
      {scrollProgress > 10 && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-purple-700 text-white px-4 py-2 rounded-full shadow-lg hover:bg-purple-600 transition z-50"
        >
          ↑ Back to Top
        </button>
      )}
    </article>
  );
}



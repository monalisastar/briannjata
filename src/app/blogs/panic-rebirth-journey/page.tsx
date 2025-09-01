// app/blogs/panic-rebirth-journey/page.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const headings = [
  'The Invisible Prison',
  'The First Ritual: Water & Command',
  'Code as Resurrection',
  'The Sunlight Moment',
  'Dreams & Rebirth',
  'Building From Pain',
  'Why It All Matters',
  'Today',
];

export default function PanicRebirthJourney() {
  const [activeId, setActiveId] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const tocRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScroll);
    updateScroll();

    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.find(e => e.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: '-40% 0% -50% 0%' }
    );
    headings.forEach(id => {
      const el = document.getElementById(id.toLowerCase().replace(/ /g, '-'));
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase().replace(/ /g, '-'));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen w-full relative bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 px-4 md:px-12 py-10">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-blue-600 z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto flex gap-8">
        {/* Sticky TOC */}
        <aside className="hidden lg:block w-64 sticky top-20 h-max text-sm">
          <div ref={tocRef} className="bg-white/50 border border-gray-200 p-4 rounded-xl shadow">
            <h3 className="text-base font-semibold mb-2">On This Page</h3>
            <ul className="space-y-2">
              {headings.map(title => {
                const id = title.toLowerCase().replace(/ /g, '-');
                return (
                  <li key={id}>
                    <button
                      onClick={() => scrollTo(title)}
                      className={`block text-left w-full ${
                        activeId === id ? 'text-blue-700 font-semibold' : 'text-gray-700'
                      }`}
                    >
                      {title}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        <article className="w-full max-w-3xl mx-auto bg-white/70 backdrop-blur-md p-6 md:p-10 rounded-2xl shadow-lg border border-white/30">
          {/* Tags */}
          <div className="mb-4 flex flex-wrap gap-2">
            {['Recovery', 'Spiritual Healing'].map(tag => (
              <span key={tag} className="text-xs bg-blue-200 text-blue-900 rounded-full px-3 py-1 font-medium">
                #{tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Panic, Rebirth & Purpose: My Recovery from the Edge of Reality
          </h1>
          <p className="text-sm text-gray-600 mb-8">July 6, 2025</p>

          {/* Blog Content */}
          <div className="space-y-8 text-gray-800 text-[17px] leading-8">
            {/* Insert your blog content here exactly like original version with headings having IDs */}
            {/* Sample heading */}
            <h2 id="the-invisible-prison" className="text-2xl font-semibold">The Invisible Prison</h2>
            <p>...</p>
            {/* Repeat with rest of your actual blog content and match <h2> IDs with the TOC above */}

            {/* Example image */}
            <Image src="/blog1-dark-recovery.png" alt="Recovery" width={1000} height={600} className="rounded-xl shadow-md" />

            {/* Final Signature */}
            <p className="italic text-center mt-10 text-gray-600">
              — Brian Njata, Founder of Freelancers Palace & Eco-Mentor
            </p>

            {/* Back to top */}
            <div className="text-center mt-12">
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-sm text-blue-600 hover:underline">
                ↑ Back to Top
              </button>
            </div>
          </div>

          {/* Recommended Reads */}
          <section className="mt-16 border-t pt-10">
            <h3 className="text-xl font-semibold mb-6">Recommended Reads</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blogs/panic-rebirth-journey" className="block bg-white shadow hover:shadow-lg p-4 rounded-lg transition">
                <Image src="/blog1-dark-recovery.png" alt="Post" width={400} height={220} className="rounded-md mb-3" />
                <h4 className="text-lg font-medium">Panic, Rebirth & Purpose</h4>
                <p className="text-sm text-gray-600">My story from fear to purpose</p>
              </Link>
              <Link href="/blogs/future-ecosystems" className="block bg-white shadow hover:shadow-lg p-4 rounded-lg transition">
                <Image src="/blog1-tech-purpose.png" alt="Post" width={400} height={220} className="rounded-md mb-3" />
                <h4 className="text-lg font-medium">Building Future-Proof Ecosystems</h4>
                <p className="text-sm text-gray-600">Designing platforms for tomorrow</p>
              </Link>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}


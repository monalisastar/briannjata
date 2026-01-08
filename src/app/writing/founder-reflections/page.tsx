'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const TAGS = ['Systems', 'Engineering', 'Resilience'];

const SECTIONS = [
  { id: 'pressure', title: 'Operating Under Sustained Pressure' },
  { id: 'failure-modes', title: 'Failure Modes Are Signals' },
  { id: 'graceful-degradation', title: 'Designing for Graceful Degradation' },
  { id: 'observability', title: 'Observability Before Optimization' },
  { id: 'recovery', title: 'Recovery as a First-Class Concept' },
  { id: 'leadership', title: 'Leadership Under Constraint' },
];

export default function SystemStabilityLessons() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.body.scrollHeight - window.innerHeight;
      setProgress((window.scrollY / total) * 100);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#0B0F1C] via-[#101828] to-[#1B2735] px-6 md:px-12 py-20 text-white">
      {/* Progress bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-blue-500 z-50"
        style={{ width: `${progress}%` }}
      />

      <div className="max-w-7xl mx-auto flex gap-10">
        {/* TOC */}
        <aside className="hidden lg:block w-64 sticky top-24 h-max">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-sm">
            <h3 className="font-semibold text-blue-300 mb-3">
              On this page
            </h3>
            <ul className="space-y-2">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => scrollTo(s.id)}
                    className="text-left text-blue-100/80 hover:text-white transition"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Article */}
        <article className="max-w-3xl mx-auto bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 md:p-10 shadow-lg">
          {/* Tags */}
          <div className="flex gap-2 mb-4">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-blue-500/10 border border-blue-400/20 px-3 py-1 rounded-full text-blue-200"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            What Panic Taught Me About System Stability and Failure Modes
          </motion.h1>

          <p className="text-blue-100/70 mb-8 text-sm">
            Engineering reflection • Reliability • Human systems
          </p>

          {/* Content */}
          <section className="space-y-10 text-blue-100/90 leading-relaxed">

            <section id="pressure">
              <h2 className="text-xl font-semibold mb-2">
                Operating Under Sustained Pressure
              </h2>
              <p>
                In engineering, prolonged load often reveals issues that never
                appear during normal operation. Human systems are no different.
                Sustained pressure exposes hidden coupling, weak assumptions,
                and brittle recovery paths.
              </p>
            </section>

            <section id="failure-modes">
              <h2 className="text-xl font-semibold mb-2">
                Failure Modes Are Signals
              </h2>
              <p>
                Failures are not random. They are indicators of where a system
                lacks redundancy, clarity, or safe fallback behavior. Ignoring
                early warning signs leads to cascading breakdowns.
              </p>
            </section>

            <section id="graceful-degradation">
              <h2 className="text-xl font-semibold mb-2">
                Designing for Graceful Degradation
              </h2>
              <p>
                The most resilient systems do not aim to avoid failure entirely.
                They aim to fail *predictably*, isolate damage, and preserve
                core functionality even under stress.
              </p>
            </section>

            <section id="observability">
              <h2 className="text-xl font-semibold mb-2">
                Observability Before Optimization
              </h2>
              <p>
                You cannot fix what you cannot see. Instrumentation, logging,
                and honest self-observation are prerequisites for stability.
                Optimization without visibility is guesswork.
              </p>
            </section>

            <section id="recovery">
              <h2 className="text-xl font-semibold mb-2">
                Recovery as a First-Class Concept
              </h2>
              <p>
                Recovery is not an afterthought. Whether in software or life,
                systems must be designed with clear restart paths, rollback
                strategies, and tolerance for imperfection.
              </p>
            </section>

            <section id="leadership">
              <h2 className="text-xl font-semibold mb-2">
                Leadership Under Constraint
              </h2>
              <p>
                Real leadership is tested when systems are under strain. Calm,
                incremental decisions outperform dramatic interventions. This
                principle guides how I design, debug, and lead technical work.
              </p>
            </section>

            {/* Closing */}
            <p className="italic text-center text-blue-200/80 mt-12">
              Stability is not the absence of stress — it is the presence of
              structure, awareness, and recovery.
            </p>

            {/* Back */}
            <div className="text-center mt-10">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-sm text-blue-400 hover:underline"
              >
                ↑ Back to top
              </button>
            </div>
          </section>

          {/* Recommended */}
          <section className="mt-16 border-t border-white/10 pt-10">
            <h3 className="text-lg font-semibold mb-6 text-blue-200">
              Related Reading
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/blogs/panic-rebirth-journey"
                className="block bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-blue-400 transition"
              >
                <Image
                  src="/blog1-dark-recovery.png"
                  alt="Panic and recovery"
                  width={400}
                  height={220}
                  className="rounded-t-xl object-cover"
                />
                <div className="p-4">
                  <h4 className="font-medium">
                    Panic, Rebirth & Purpose
                  </h4>
                </div>
              </Link>

              <Link
                href="/blogs/future-ecosystems"
                className="block bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-blue-400 transition"
              >
                <Image
                  src="/blog1-tech-purpose.png"
                  alt="Future systems"
                  width={400}
                  height={220}
                  className="rounded-t-xl object-cover"
                />
                <div className="p-4">
                  <h4 className="font-medium">
                    Building Future-Proof Ecosystems
                  </h4>
                </div>
              </Link>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const headings = [
  'Introduction',
  'System Instability Under Sustained Load',
  'Loss of Predictability',
  'Recovery Through Control Loops',
  'Observability and Feedback',
  'Designing for Failure',
  'Why This Matters',
];

export default function PanicSystemStabilityClient() {
  const [activeId, setActiveId] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const tocRef = useRef<HTMLDivElement>(null);

  /* ---------------------------------------
     Scroll progress indicator
  ---------------------------------------- */
  useEffect(() => {
    const updateScroll = () => {
      const totalHeight =
        document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScroll);
    updateScroll();

    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  /* ---------------------------------------
     Active section tracking
  ---------------------------------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.find(e => e.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: '-40% 0% -50% 0%' }
    );

    headings.forEach(title => {
      const id = title.toLowerCase().replace(/ /g, '-');
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (title: string) => {
    const id = title.toLowerCase().replace(/ /g, '-');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen w-full relative bg-gradient-to-br from-[#0B0F1C] via-[#101828] to-[#1B2735] px-4 md:px-12 py-12 text-white">
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-blue-500 z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto flex gap-10">
        {/* TOC */}
        <aside className="hidden lg:block w-64 sticky top-24 h-max text-sm">
          <div
            ref={tocRef}
            className="bg-white/5 border border-white/10 rounded-xl p-4"
          >
            <h3 className="font-semibold mb-3">On this page</h3>
            <ul className="space-y-2">
              {headings.map(title => {
                const id = title.toLowerCase().replace(/ /g, '-');
                return (
                  <li key={id}>
                    <button
                      onClick={() => scrollTo(title)}
                      className={`text-left w-full transition ${
                        activeId === id
                          ? 'text-blue-400 font-medium'
                          : 'text-white/70 hover:text-white'
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

        {/* Article */}
        <article className="w-full max-w-3xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-10">
          {/* Tags */}
          <div className="mb-4 flex flex-wrap gap-2">
            {['Systems Thinking', 'Engineering', 'Resilience'].map(tag => (
              <span
                key={tag}
                className="text-xs bg-blue-500/15 text-blue-300 px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            What Panic Taught Me About System Stability and Failure Modes
          </h1>

          <p className="text-sm text-white/60 mb-10">
            July 2025 · 6 min read
          </p>

          {/* Content */}
          <div className="space-y-8 text-[17px] leading-8 text-white/90">
            <section id="introduction">
              <p>
                During a period of sustained psychological overload, I
                experienced firsthand what happens when a system loses
                predictability. What followed became one of the most
                instructive lessons I’ve had about stability, failure modes,
                and recovery — lessons that now shape how I design software
                systems.
              </p>
            </section>

            <section id="system-instability-under-sustained-load">
              <h2 className="text-2xl font-semibold mb-2">
                System Instability Under Sustained Load
              </h2>
              <p>
                Systems rarely fail because of a single event. They fail when
                load accumulates without adequate release mechanisms. Under
                constant stress, thresholds narrow, feedback loops distort,
                and small inputs trigger disproportionate reactions.
              </p>
            </section>

            <section id="loss-of-predictability">
              <h2 className="text-2xl font-semibold mb-2">
                Loss of Predictability
              </h2>
              <p>
                The most dangerous moment in any system is not failure —
                it’s unpredictability. When outputs stop correlating with
                inputs, trust erodes. This mirrors production systems where
                intermittent faults are more damaging than hard crashes.
              </p>
            </section>

            <section id="recovery-through-control-loops">
              <h2 className="text-2xl font-semibold mb-2">
                Recovery Through Control Loops
              </h2>
              <p>
                Stability returned only when simple, repeatable control loops
                were reintroduced. Clear inputs. Observable outputs. Slow,
                deliberate adjustments. This is identical to restoring
                reliability in unstable software systems.
              </p>
            </section>

            <section id="observability-and-feedback">
              <h2 className="text-2xl font-semibold mb-2">
                Observability and Feedback
              </h2>
              <p>
                Recovery accelerated when signals were made visible. Logging,
                monitoring, and reflection created feedback that replaced
                guesswork. Systems cannot heal in the dark.
              </p>
            </section>

            <section id="designing-for-failure">
              <h2 className="text-2xl font-semibold mb-2">
                Designing for Failure
              </h2>
              <p>
                This experience reinforced a core principle: resilience comes
                from designing for failure, not assuming stability. Systems
                must degrade gracefully, fail loudly, and recover predictably.
              </p>
            </section>

            <section id="why-this-matters">
              <h2 className="text-2xl font-semibold mb-2">
                Why This Matters
              </h2>
              <p>
                Today, I build systems with a deeper respect for limits,
                feedback, and recovery paths. The goal isn’t perfection —
                it’s stability under pressure and clarity during failure.
              </p>
            </section>

            {/* Signature */}
            <p className="italic text-center mt-12 text-white/60">
              — Brian Njata
            </p>

            {/* Back to top */}
            <div className="text-center mt-10">
              <button
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
                className="text-sm text-blue-400 hover:underline"
              >
                ↑ Back to top
              </button>
            </div>
          </div>

          {/* Recommended */}
          <section className="mt-16 border-t border-white/10 pt-10">
            <h3 className="text-xl font-semibold mb-6">
              Recommended Reads
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/blogs/founder-reflections"
                className="block bg-white/5 border border-white/10 rounded-xl p-4 hover:border-white/20 transition"
              >
                <h4 className="font-medium">
                  Founder Reflections: Building with Vision
                </h4>
                <p className="text-sm text-white/60">
                  Lessons from building under uncertainty
                </p>
              </Link>

              <Link
                href="/blogs/eco-mentor-journey"
                className="block bg-white/5 border border-white/10 rounded-xl p-4 hover:border-white/20 transition"
              >
                <h4 className="font-medium">
                  Launching Freelnacers Palace
                </h4>
                <p className="text-sm text-white/60">
                  Designing systems for freelance and impact
                </p>
              </Link>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}

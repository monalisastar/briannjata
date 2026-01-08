'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ArticleClient() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0B0F1C] via-[#101828] to-[#1B2735] text-white px-6 md:px-12 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12">

        {/* LEFT — Reader Anchor */}
        <aside className="hidden lg:block">
          <div className="sticky top-32 border-l border-white/10 pl-6">
            <p className="text-sm font-medium text-white/60 mb-4">
              If this is familiar
            </p>
            <ul className="space-y-3 text-sm text-white/70">
              <li><a href="#before" className="hover:text-white">Life before it happened</a></li>
              <li><a href="#moment" className="hover:text-white">The moment things shifted</a></li>
              <li><a href="#hospital" className="hover:text-white">Being taken to hospital</a></li>
              <li><a href="#misunderstanding" className="hover:text-white">What I misunderstood</a></li>
            </ul>
          </div>
        </aside>

        {/* RIGHT — Story */}
        <article className="max-w-3xl">

          <Link
            href="/writing"
            className="inline-block mb-10 text-sm text-white/60 hover:text-white transition"
          >
            ← Back to Writing
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            The Day My Nervous System Broke
          </h1>

          <p className="text-sm text-white/50 mb-10">
            January 10, 2026 · Panic & Recovery
          </p>

          <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-14 border border-white/10">
            <Image
              src="/images/panic-01-exam-hall.png"
              alt="Quiet exam hall with sunlight through a window"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-14 text-lg leading-relaxed text-white/90">

            <section id="before">
              <h2 className="text-2xl font-semibold mb-4">
                Before Anything Went Wrong
              </h2>

              <p>
                Before that day, my life followed a familiar rhythm.
                I was a law student approaching the end of my studies.
              </p>

              <p>
                The pressure was real, but it was purposeful.
              </p>
            </section>

            <section id="moment">
              <h2 className="text-2xl font-semibold mb-4">
                The Moment Everything Changed
              </h2>

              <p>
                I arrived early for my law finals.
                About an hour into the paper, something shifted abruptly.
              </p>
            </section>

            <section id="hospital">
              <h2 className="text-2xl font-semibold mb-4">
                Losing Control in Public
              </h2>

              <p>
                I was taken to Aga Khan University Hospital in Pangani.
              </p>

              <p className="text-white/80">
                This experience later shaped how I think about
                <Link href="/about" className="underline ml-1 hover:text-white">
                  systems, stress, and recovery
                </Link>.
              </p>
            </section>

            <section id="misunderstanding">
              <h2 className="text-2xl font-semibold mb-4">
                What I Didn’t Understand Yet
              </h2>

              <p>
                This was not the day I broke down.
              </p>

              <p className="text-white/80">
                It was the day I learned how fragile — and important —
                systems really are, something that now informs my
                <Link href="/capabilities" className="underline ml-1 hover:text-white">
                  professional work
                </Link>.
              </p>
            </section>

          </div>

          {/* Share */}
          <div className="mt-20 pt-8 border-t border-white/10">
            <p className="text-sm text-white/60 mb-3">Share this story</p>
            <div className="flex gap-4 text-sm">
              <a
                href="https://twitter.com/intent/tweet?text=The%20Day%20My%20Nervous%20System%20Broke&url=https://briannjata.org/writing/the-day-my-nervous-system-broke"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Share on X
              </a>
              <button
                onClick={() =>
                  navigator.clipboard.writeText(window.location.href)
                }
                className="hover:text-white"
              >
                Copy link
              </button>
            </div>
          </div>

        </article>
      </div>
    </main>
  );
}

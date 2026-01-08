'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ArticleClient() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0B0F1C] via-[#101828] to-[#1B2735] text-white px-6 md:px-12 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12">

        {/* LEFT: Sticky Navigation */}
        <aside className="hidden lg:block">
          <div className="sticky top-32 border-l border-white/10 pl-6">
            <p className="text-sm font-medium text-white/60 mb-4">
              In this story
            </p>
            <ul className="space-y-3 text-sm text-white/70">
              <li><a href="#illusion" className="hover:text-white">Why most things sounded helpful</a></li>
              <li><a href="#movement" className="hover:text-white">Moving before confidence returned</a></li>
              <li><a href="#outside" className="hover:text-white">Going outside while still afraid</a></li>
              <li><a href="#nothing-happened" className="hover:text-white">When nothing happened</a></li>
              <li><a href="#self" className="hover:text-white">Letting go of self-condemnation</a></li>
              <li><a href="#time" className="hover:text-white">What time did quietly</a></li>
            </ul>
          </div>
        </aside>

        {/* RIGHT: Content */}
        <article className="max-w-3xl">

          <Link
            href="/writing"
            className="inline-block mb-10 text-sm text-white/60 hover:text-white transition"
          >
            ← Back to Writing
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            What Actually Helped (After Everything Else Failed)
          </h1>

          <p className="text-sm text-white/50 mb-10">
            January 18, 2026 · Panic & Recovery
          </p>

          <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-14 border border-white/10">
            <Image
              src="/images/panic-11-quiet-morning.png"
              alt="Quiet morning walk and simple movement outdoors"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-12 text-lg leading-relaxed text-white/90">

            <section id="illusion">
              <h2 className="text-2xl font-semibold mb-4">
                Why Most Things Sounded Helpful
              </h2>

              <p>
                After months of panic, I had accumulated a long list of things
                that sounded helpful. Techniques, explanations, reassurance,
                and strategies that promised relief if applied correctly.
              </p>

              <p>
                Most of them assumed panic could be controlled through effort
                or understanding.
              </p>

              <p>
                What actually helped was less impressive.
              </p>
            </section>

            <section id="movement">
              <h2 className="text-2xl font-semibold mb-4">
                Moving Before Confidence Returned
              </h2>

              <p>
                I began moving again without structure or confidence.
                Press-ups at home. Short runs around the compound.
                Basic movement without goals.
              </p>

              <p>
                Sensations followed me. My heart raced. My head felt strange.
                But movement reintroduced something important: capacity.
              </p>
            </section>

            <section id="outside">
              <h2 className="text-2xl font-semibold mb-4">
                Going Outside While Still Afraid
              </h2>

              <p>
                I started going outside deliberately.
                Short walks became longer ones.
              </p>

              <p>
                I walked while sensations were present and resisted the urge
                to monitor them. I did not try to fix them.
              </p>

              <p>
                I need to be clear about something.
                None of this felt good at the time.
              </p>

              <p>
                I did not walk because I felt calm.
                I walked while anxious, dizzy, and uncertain.
              </p>
            </section>

            <section id="nothing-happened">
              <h2 className="text-2xl font-semibold mb-4">
                When Nothing Happened
              </h2>

              <p>
                Many days I finished a walk feeling exactly the same.
              </p>

              <p>
                What changed was not how I felt in the moment,
                but what kept not happening.
              </p>

              <p>
                Each day passed without collapse.
                Without hospitalization.
                Without the catastrophe my mind predicted.
              </p>

              <p>
                That absence mattered more than comfort.
              </p>

              <p>
                Each walk completed without catastrophe weakened the link
                between sensation and danger.
              </p>
            </section>

            <section id="self">
              <h2 className="text-2xl font-semibold mb-4">
                Letting Go of Self-Condemnation
              </h2>

              <p>
                I stopped condemning myself internally.
              </p>

              <p>
                Self-pressure kept my nervous system tense.
                I learned to forgive uneven days and stop
                interpreting difficulty as failure.
              </p>

              <p>
                Aligning myself with my Creator helped release the
                need for control. This was not avoidance.
                It was trust beyond self-monitoring.
              </p>
            </section>

            <section id="time">
              <h2 className="text-2xl font-semibold mb-4">
                What Time Did Quietly
              </h2>

              <p>
                Neurologically, time without escalation did the work.
                Ordinary days taught safety through repetition.
              </p>

              <p>
                Improvement was slow enough that I doubted it
                was happening at all.
              </p>

              <p>
                There was no clear turning point.
                Looking back, the change only becomes obvious
                over weeks, not days.
              </p>

              <p className="pt-6 font-medium">
                What helped was not bravery.
                <br />
                It was consistency, forgiveness,
                and showing up while uncomfortable.
              </p>
            </section>

          </div>

          {/* Share */}
          <div className="mt-20 pt-8 border-t border-white/10">
            <p className="text-sm text-white/60 mb-3">Share this story</p>
            <div className="flex gap-4 text-sm">
              <a
                href="https://twitter.com/intent/tweet?text=What%20Actually%20Helped%20After%20Everything%20Else%20Failed&url=https://briannjata.org/writing/what-actually-helped"
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

          {/* Recommendations */}
          <div className="mt-20 pt-10 border-t border-white/10">
            <h2 className="text-xl font-semibold mb-6">
              Continue reading
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <Link
                href="/writing/the-false-recovery-phase"
                className="block rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
              >
                <p className="font-medium mb-1">
                  The False Recovery Phase No One Warns You About
                </p>
                <p className="text-sm text-white/70">
                  When panic stops, but calm still feels wrong.
                </p>
              </Link>

              <Link
                href="/writing/living-normally-without-feeling-normal"
                className="block rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
              >
                <p className="font-medium mb-1">
                  Living Normally While Still Not Feeling Normal
                </p>
                <p className="text-sm text-white/70">
                  Rebuilding life before confidence returned.
                </p>
              </Link>
            </div>
          </div>

        </article>
      </div>
    </main>
  );
}

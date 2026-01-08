'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ArticleClient() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0B0F1C] via-[#101828] to-[#101828] text-white px-6 md:px-12 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12">

        {/* LEFT — Reader Orientation */}
        <aside className="hidden lg:block">
          <div className="sticky top-32 border-l border-white/10 pl-6">
            <p className="text-sm font-medium text-white/60 mb-4">
              If this is you right now
            </p>
            <ul className="space-y-3 text-sm text-white/70">
              <li><a href="#where-you-are" className="hover:text-white">Where you are right now</a></li>
              <li><a href="#why-it-feels-permanent" className="hover:text-white">Why it feels permanent</a></li>
              <li><a href="#what-youll-face" className="hover:text-white">What the next weeks feel like</a></li>
              <li><a href="#what-helped" className="hover:text-white">What actually helps at this stage</a></li>
              <li><a href="#what-to-hold" className="hover:text-white">What to hold onto</a></li>
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
            What I Would Tell Someone One Week Into Panic
          </h1>

          <p className="text-sm text-white/50 mb-10">
            February 20, 2026 · Panic & Recovery
          </p>

          <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-14 border border-white/10">
            <Image
              src="/images/advise-one-week-panic.png"
              alt="Quiet moment of reflection during early panic"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-14 text-lg leading-relaxed text-white/90">

            <section id="where-you-are">
              <h2 className="text-2xl font-semibold mb-4">
                Where You Are Right Now
              </h2>

              <p>
                One week into panic is a specific kind of hell.
              </p>

              <p>
                By then, the shock has worn off, but the fear has settled in.
                Your body feels unfamiliar. Your thoughts feel unsafe.
                Sleep no longer restores you.
              </p>

              <p>
                You are exhausted, yet constantly alert.
                Each morning begins with the same quiet question:
                <em> why am I still like this?</em>
              </p>

              <p>
                I know this place because I lived there.
              </p>
            </section>

            <section id="why-it-feels-permanent">
              <h2 className="text-2xl font-semibold mb-4">
                Why This Feels Permanent
              </h2>

              <p>
                Those early weeks were not dramatic — they were terrifying.
                I did not feel anxious in the abstract.
                I felt like I was dying.
              </p>

              <p>
                I felt like something fundamental in my body had failed
                and could not be reversed.
              </p>

              <p>
                When you are inside panic, the future collapses.
                There is no “later.”
                There is only now — and <em>now</em> feels unbearable.
              </p>

              <p className="font-medium">
                What you are experiencing feels permanent — but it is not.
              </p>
            </section>

            <section id="what-youll-face">
              <h2 className="text-2xl font-semibold mb-4">
                What the Next Weeks Feel Like
              </h2>

              <p>
                At one week in, panic has not revealed its pattern yet.
                Everything feels chaotic and urgent.
              </p>

              <p>
                Your body produces intense sensations —
                racing heart, breathlessness, dizziness, unreality —
                and your mind interprets that intensity as danger.
              </p>

              <p>
                I made that mistake too.
              </p>

              <p>
                I spent those weeks checking my heartbeat,
                monitoring my breathing,
                tracking my thoughts.
              </p>

              <p>
                Each check felt necessary.
                Each one quietly trained my nervous system to stay alert.
              </p>

              <p>
                You will likely do this as well.
                That does not mean you are failing.
              </p>
            </section>

            <section id="what-helped">
              <h2 className="text-2xl font-semibold mb-4">
                What Actually Helps at This Stage
              </h2>

              <p>
                Fear will return after good moments.
                Symptoms will change shape.
              </p>

              <p>
                You will have days that feel like progress,
                followed by days that feel like collapse.
              </p>

              <p className="font-medium">
                This does not mean you are back at the beginning.
              </p>

              <p>
                Recovery is uneven.
                It moves quietly, underneath doubt.
              </p>

              <p>
                What helped me was not bravery or insight.
                It was time passing without catastrophe.
              </p>

              <p>
                Each day I woke up and nothing terrible happened,
                something small shifted —
                even when I could not feel it.
              </p>
            </section>

            <section id="what-to-hold">
              <h2 className="text-2xl font-semibold mb-4">
                What to Hold Onto
              </h2>

              <p>
                You may believe you are broken forever.
                I believed that too.
              </p>

              <p>
                I did not return to my old self,
                but I did not stay trapped either.
              </p>

              <p>
                Stability returned before confidence.
                Function returned before feeling.
              </p>

              <p>
                That is likely how it will happen for you as well.
              </p>

              <p className="pt-6 font-medium">
                You are not weak.
                <br />
                You are not failing.
                <br />
                And you are not trapped here forever —
                even if it feels that way.
              </p>

              <p className="font-medium">
                I know, because I stood where you are standing.
              </p>
            </section>

          </div>

          {/* Share */}
          <div className="mt-20 pt-8 border-t border-white/10">
            <p className="text-sm text-white/60 mb-3">Share this story</p>
            <div className="flex gap-4 text-sm">
              <a
                href="https://twitter.com/intent/tweet?text=What%20I%20Would%20Tell%20Someone%20One%20Week%20Into%20Panic&url=https://briannjata.org/writing/what-i-would-tell-someone-one-week-in"
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

          {/* Continue */}
          <div className="mt-20 pt-10 border-t border-white/10">
            <h2 className="text-xl font-semibold mb-6">
              You may want to read next
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <Link
                href="/writing/what-actually-helped"
                className="block rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
              >
                <p className="font-medium mb-1">
                  What Actually Helped (After Everything Else Failed)
                </p>
                <p className="text-sm text-white/70">
                  The boring, uncomfortable things that worked.
                </p>
              </Link>

              <Link
                href="/writing/the-false-recovery-phase"
                className="block rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
              >
                <p className="font-medium mb-1">
                  The False Recovery Phase No One Warns You About
                </p>
                <p className="text-sm text-white/70">
                  When panic stops but something still feels wrong.
                </p>
              </Link>
            </div>
          </div>

        </article>
      </div>
    </main>
  );
}

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
              <li><a href="#not-better" className="hover:text-white">When panic stops but you don’t feel better</a></li>
              <li><a href="#checking" className="hover:text-white">Why you start checking yourself</a></li>
              <li><a href="#disconnect" className="hover:text-white">Doing life while feeling disconnected</a></li>
              <li><a href="#fear" className="hover:text-white">The fear that this is permanent</a></li>
              <li><a href="#resolution" className="hover:text-white">What actually changes over time</a></li>
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
            The False Recovery Phase No One Warns You About
          </h1>

          <p className="text-sm text-white/50 mb-10">
            February 2, 2026 · Panic & Recovery
          </p>

          <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-14 border border-white/10">
            <Image
              src="/images/panic-09-quiet-morning.png"
              alt="Quiet room in soft morning light"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-12 text-lg leading-relaxed text-white/90">

            <section id="not-better">
              <h2 className="text-2xl font-semibold mb-4">
                When Panic Stops but You Don’t Feel Better
              </h2>

              <p>
                When the panic attacks stopped, I expected relief.
                I expected my body to exhale. I expected to feel grateful.
              </p>

              <p>
                Instead, I felt flat.
              </p>

              <p>
                The dramatic symptoms faded. My heart no longer raced the way it
                had. The adrenaline surges stopped hijacking my days. From the
                outside, this looked like recovery.
              </p>

              <p>
                From the inside, it felt like something important had gone
                missing.
              </p>

              <p>
                Emotion dulled. Motivation softened. Calm didn’t feel peaceful —
                it felt unfamiliar. I wasn’t panicking anymore, but I wasn’t
                myself either.
              </p>

              <p>
                This is the phase nobody prepares you for, because it doesn’t
                look like danger. It looks like safety that doesn’t register.
              </p>
            </section>

            <section id="checking">
              <h2 className="text-2xl font-semibold mb-4">
                Why You Start Checking Yourself
              </h2>

              <p>
                After prolonged panic, your nervous system doesn’t snap back to
                normal. It downshifts. It conserves. It becomes cautious.
              </p>

              <p>
                Sensations feel muted. Emotions feel narrow. Nothing feels
                urgent, but nothing feels right either.
              </p>

              <p>
                This is where checking begins.
              </p>

              <p>
                You start asking quiet questions throughout the day:
                <em> Do I feel okay? Do I feel like myself? Why does this still feel off?</em>
              </p>

              <p>
                Each check feels reasonable. Each one makes the feeling more
                noticeable. You don’t realize that attention itself is now the
                problem.
              </p>
            </section>

            <section id="disconnect">
              <h2 className="text-2xl font-semibold mb-4">
                Doing Life While Feeling Disconnected
              </h2>

              <p>
                Function returns before feeling does.
              </p>

              <p>
                You can wake up, go outside, talk to people, exercise, work.
                Life resumes on paper.
              </p>

              <p>
                Internally, it feels like you’re watching through glass.
              </p>

              <p>
                Boredom becomes unsettling. Stillness feels unnatural. Calm feels
                suspicious, like something you shouldn’t trust yet.
              </p>

              <p>
                This is especially difficult if you were previously driven,
                curious, intense, or emotionally engaged with life.
              </p>
            </section>

            <section id="fear">
              <h2 className="text-2xl font-semibold mb-4">
                The Fear That This Is Permanent
              </h2>

              <p>
                Eventually, one thought rises above the rest:
              </p>

              <p className="font-medium">
                <em>What if this is it?</em>
              </p>

              <p>
                Not panic. Not fear. Just this muted, distant version of living.
              </p>

              <p>
                That thought feels logical. It feels informed. It feels like
                insight.
              </p>

              <p>
                It isn’t.
              </p>

              <p>
                It is a question being asked from inside a temporary nervous
                system state — and it cannot be answered accurately from there.
              </p>
            </section>

            <section id="resolution">
              <h2 className="text-2xl font-semibold mb-4">
                What Actually Changes Over Time
              </h2>

              <p>
                This phase does not resolve through effort or insight.
              </p>

              <p>
                It resolves quietly.
              </p>

              <p>
                You stop checking as often. Neutral moments stop being
                interrogated. Days pass without asking how they feel.
              </p>

              <p>
                Normality returns without announcement.
              </p>

              <p className="pt-6 font-medium">
                This phase is not failure.
                <br />
                It is your nervous system learning that it no longer needs to
                stay on guard.
              </p>
            </section>

          </div>
        </article>
      </div>
    </main>
  );
}

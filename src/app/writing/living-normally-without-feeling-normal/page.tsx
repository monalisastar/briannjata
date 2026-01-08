import Image from 'next/image';
import Link from 'next/link';

/* =========================
   SEO METADATA
========================= */
export const metadata = {
  title: 'Living Normally While Still Not Feeling Normal After Panic',
  description:
    'A personal reflection on returning to daily life after panic attacks, when function returns before feeling. This is lived experience, not medical advice.',

  openGraph: {
    title: 'Living Normally While Still Not Feeling Normal After Panic',
    description:
      'A quiet account of functioning, rebuilding, and returning to unfinished life after panic and nervous system overwhelm.',
    type: 'article',
  },
};

export default function LivingNormallyWhileStillNotFeelingNormal() {
  return (
    <>
      {/* =========================
          ARTICLE SCHEMA
      ========================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline:
              'Living Normally While Still Not Feeling Normal After Panic',
            description:
              'A personal reflection on returning to daily life after panic attacks, when function returns before feeling.',
            author: {
              '@type': 'Person',
              name: 'Brian Njata',
            },
            datePublished: '2026-02-06',
            dateModified: '2026-02-06',
            image:
              'https://briannjata.org/images/panic-12-ordinary-day.png',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id':
                'https://briannjata.org/writing/living-normally-while-still-not-feeling-normal',
            },
            articleSection: 'Panic & Recovery',
            keywords: [
              'panic recovery',
              'panic disorder',
              'feeling normal after panic',
              'nervous system recovery',
              'mental health lived experience',
            ],
          }),
        }}
      />

      {/* =========================
          BREADCRUMB SCHEMA
      ========================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://briannjata.org/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Writing',
                item: 'https://briannjata.org/writing',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name:
                  'Living Normally While Still Not Feeling Normal',
                item:
                  'https://briannjata.org/writing/living-normally-while-still-not-feeling-normal',
              },
            ],
          }),
        }}
      />

      {/* =========================
          SERIES SCHEMA
      ========================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CreativeWorkSeries',
            name: 'Panic & Recovery',
            description:
              'A first-person series documenting panic disorder, nervous system overload, and the gradual return to stability.',
            creator: {
              '@type': 'Person',
              name: 'Brian Njata',
            },
          }),
        }}
      />

      <main className="min-h-screen bg-gradient-to-br from-[#0B0F1C] via-[#101828] to-[#1B2735] text-white px-6 md:px-12 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12">

          {/* LEFT — Reader Orientation */}
          <aside className="hidden lg:block">
            <div className="sticky top-32 border-l border-white/10 pl-6">
              <p className="text-sm font-medium text-white/60 mb-4">
                If this is where you are
              </p>
              <ul className="space-y-3 text-sm text-white/70">
                <li><a href="#function-first" className="hover:text-white">Function returning first</a></li>
                <li><a href="#waiting" className="hover:text-white">Waiting to feel normal</a></li>
                <li><a href="#missing-old-self" className="hover:text-white">Missing who you used to be</a></li>
                <li><a href="#unfinished-life" className="hover:text-white">Returning to unfinished life</a></li>
                <li><a href="#steadier" className="hover:text-white">What this phase gives instead</a></li>
              </ul>
            </div>
          </aside>

          {/* RIGHT — Story */}
          <article className="max-w-3xl">
            {/* Back */}
            <Link
              href="/writing"
              className="inline-block mb-10 text-sm text-white/60 hover:text-white transition"
            >
              ← Back to Writing
            </Link>

            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              Living Normally While Still Not Feeling Normal
            </h1>

            <p className="text-sm text-white/50 mb-10">
              February 6, 2026 · Panic & Recovery
            </p>

            <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-14 border border-white/10">
              <Image
                src="/images/panic-12-ordinary-day.png"
                alt="An ordinary day continuing quietly after crisis"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content */}
            <div className="space-y-14 text-lg leading-relaxed text-white/90">

              <section id="function-first">
                <h2 className="text-2xl font-semibold mb-4">
                  When Function Comes Back Before Feeling
                </h2>

                <p>
                  By the time panic loosened its grip, I expected normality to
                  return with it.
                </p>

                <p>
                  What returned first was function.
                </p>

                <p>
                  I could work, move through the day, and rebuild routines.
                  The structure mattered — and learning to think in systems
                  gave me something stable to lean on.
                </p>

                <p className="text-white/80">
                  That way of thinking now underpins how I approach both
                  <Link href="/about" className="underline hover:text-white ml-1">
                    my work
                  </Link>
                  and recovery.
                </p>
              </section>

              <section id="waiting">
                <h2 className="text-2xl font-semibold mb-4">
                  Waiting to Feel Ready
                </h2>

                <p>
                  Waiting to feel normal before living normally delayed recovery.
                </p>

                <p>
                  Repetition came before comfort.
                  Action came before confidence.
                </p>
              </section>

              <section id="missing-old-self">
                <h2 className="text-2xl font-semibold mb-4">
                  Missing Who You Used to Be
                </h2>

                <p>
                  I did not return to my old self.
                </p>

                <p>
                  What replaced it was caution — and a deeper respect for
                  stability over chaos.
                </p>
              </section>

              <section id="unfinished-life">
                <h2 className="text-2xl font-semibold mb-4">
                  Returning to an Interrupted Life
                </h2>

                <p>
                  Panic interrupted real life.
                  Studies paused. Work slowed.
                </p>

                <p>
                  Recovery meant returning to unfinished responsibilities,
                  including rebuilding systems — personal and technical —
                  piece by piece.
                </p>

                <p className="text-white/80">
                  That same systems-first mindset now informs the kinds of
                  platforms and tools I design in my
                  <Link href="/capabilities" className="underline hover:text-white ml-1">
                    professional work
                  </Link>.
                </p>
              </section>

              <section id="steadier">
                <h2 className="text-2xl font-semibold mb-4">
                  What This Phase Gives Instead
                </h2>

                <p>
                  I did not get my old self back.
                </p>

                <p className="font-medium">
                  I gained a steadier one.
                </p>
              </section>

            </div>

            {/* Continue */}
            <div className="mt-20 pt-10 border-t border-white/10">
              <h2 className="text-xl font-semibold mb-6">
                Read next
              </h2>

              <div className="grid gap-6 md:grid-cols-2">
                <Link
                  href="/writing/what-actually-helped"
                  className="block rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
                >
                  <p className="font-medium mb-1">
                    What Actually Helped
                  </p>
                  <p className="text-sm text-white/70">
                    The slow, uncomfortable things that worked.
                  </p>
                </Link>

                <Link
                  href="/writing/what-i-would-tell-someone-one-week-in"
                  className="block rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
                >
                  <p className="font-medium mb-1">
                    What I Would Tell Someone One Week In
                  </p>
                  <p className="text-sm text-white/70">
                    For when everything still feels raw.
                  </p>
                </Link>
              </div>
            </div>

          </article>
        </div>
      </main>
    </>
  );
}

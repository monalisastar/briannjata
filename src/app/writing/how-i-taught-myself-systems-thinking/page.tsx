import Image from 'next/image';
import Link from 'next/link';

/* =========================
   SEO METADATA (SERVER)
========================= */
export const metadata = {
  title: 'How I Taught Myself Systems Thinking During Panic Disorder Recovery',
  description:
    'A personal reflection on how systems thinking and learning to code helped stabilize my thinking during recovery from panic attacks. This article shares lived experience, not medical advice.',

  openGraph: {
    title: 'How I Taught Myself Systems Thinking During Panic Disorder Recovery',
    description:
      'A personal account of using systems thinking and structured problem-solving as a grounding tool during panic disorder recovery.',
    type: 'article',
  },
};

/* =========================
   PAGE
========================= */
export default function HowITaughtMyselfSystemsThinking() {
  return (
    <>
      {/* =========================
          ARTICLE STRUCTURED DATA
      ========================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline:
              'How I Taught Myself Systems Thinking During Panic Disorder Recovery',
            description:
              'A personal reflection on how systems thinking and learning to code helped stabilize my thinking during panic disorder recovery.',
            author: {
              '@type': 'Person',
              name: 'Brian Njata',
            },
            datePublished: '2026-02-25',
            dateModified: '2026-02-25',
            image:
              'https://briannjata.org/images/panic-14-code-desk.png',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id':
                'https://briannjata.org/writing/how-i-taught-myself-systems-thinking',
            },
            articleSection: 'Mental Health & Systems Thinking',
            keywords: [
              'panic disorder recovery',
              'panic attacks',
              'mental health and programming',
              'systems thinking',
              'coding during recovery',
            ],
          }),
        }}
      />

      {/* =========================
          BREADCRUMB SCHEMA (ADDED)
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
                name: 'Systems & Thinking',
                item: 'https://briannjata.org/writing?tag=Systems%20%26%20Thinking',
              },
              {
                '@type': 'ListItem',
                position: 4,
                name:
                  'How I Taught Myself Systems Thinking to Survive My Own Mind',
                item:
                  'https://briannjata.org/writing/how-i-taught-myself-systems-thinking',
              },
            ],
          }),
        }}
      />

      {/* =========================
          SERIES SCHEMA (ADDED)
      ========================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CreativeWorkSeries',
            name: 'Systems & Thinking',
            description:
              'A collection of essays exploring systems thinking, structured reasoning, and engineering mindsets formed under constraint and recovery.',
            creator: {
              '@type': 'Person',
              name: 'Brian Njata',
            },
          }),
        }}
      />

      <main className="min-h-screen bg-gradient-to-br from-[#0B0F1C] via-[#101828] to-[#1B2735] text-white px-6 md:px-12 py-20">
        <article className="max-w-3xl mx-auto">

          {/* Back Link */}
          <Link
            href="/writing"
            className="inline-block mb-10 text-sm text-white/60 hover:text-white transition"
          >
            ← Back to Writing
          </Link>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            How I Taught Myself Systems Thinking to Survive My Own Mind
          </h1>

          <p className="text-sm text-white/50 mb-12">
            February 25, 2026 · Recovery & Systems
          </p>

          {/* Image */}
          <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-12 border border-white/10">
            <Image
              src="/images/panic-14-code-desk.png"
              alt="A quiet desk with a computer screen showing code during late-night recovery"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="space-y-6 text-lg leading-relaxed text-white/90">

            <p>
              When panic loosened its grip, it left behind space.
            </p>

            <p>
              Without constant fear to react to, my mind began searching for
              meaning, prediction, and certainty. Left unmanaged, that search
              drifted toward apocalyptic thinking — imagining worst-case futures
              without structure or grounding.
            </p>

            <p>
              What I needed was not distraction.
              I needed something that could hold my attention without feeding fear.
            </p>

            <p>
              That is how I entered tech.
            </p>

            <p>
              Not through ambition or trend, but through necessity. Code offered
              boundaries. Rules. Traceable cause and effect. When something broke,
              there was a reason — and a way to find it.
            </p>

            <p>
              I avoided copying blindly. I wanted to understand how systems were
              structured, how dependencies interacted, and how failures propagated.
              Stability mattered more to me than speed.
            </p>

            <p>
              Slowly, systems thinking replaced catastrophic thinking.
            </p>

            <p>
              Inputs. Processes. Outputs. Failure modes.
              These concepts left little room for vague dread.
            </p>

            <p>
              Coding did not calm my nervous system directly.
              It disciplined my attention.
            </p>

            <p>
              Bugs became investigations, not threats.
              Problems became local instead of existential.
            </p>

            <p>
              Tech returned a sense of agency.
              Effort produced visible outcomes.
              Progress was incremental and earned.
            </p>

            <p>
              As my law studies and business slowed during recovery, systems
              thinking became a scaffold — not an escape.
            </p>

            <p>
              Over time, my thinking narrowed from global catastrophe to local
              diagnosis. That shift was stabilizing.
            </p>

            <div className="pt-6 border-t border-white/10 text-white/80 text-base">
              <p>
                I need to be clear about something.
              </p>

              <p>
                This worked for me because of how my mind operates.
                Different nervous systems stabilize through different paths.
              </p>

              <p>
                Some people regulate through movement.
                Others through art, routine, faith, conversation, or rest.
                Systems thinking happened to give <em>my</em> mind something solid
                to stand on.
              </p>

              <p>
                This is not a model to copy.
                It is a record of what helped me stay grounded.
              </p>
            </div>

            <p className="pt-6 font-medium">
              Tech did not heal me.
              <br />
              It gave my mind a place to stand.
            </p>

          </div>

        </article>
      </main>
    </>
  );
}

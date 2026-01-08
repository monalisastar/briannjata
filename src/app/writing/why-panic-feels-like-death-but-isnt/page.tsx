import Image from 'next/image';
import Link from 'next/link';
import ShareActions from './ShareActions';

export const metadata = {
  title: 'Why Panic Feels Like Death (But Isn’t)',
  description:
    'Why panic attacks feel life-threatening, especially at night, and why intensity does not mean danger — written from lived experience.',
  openGraph: {
    title: 'Why Panic Feels Like Death (But Isn’t)',
    description:
      'An explanation for why panic attacks feel like dying, written for people searching for answers at their worst moments.',
    type: 'article',
  },
};

export default function WhyPanicFeelsLikeDeath() {
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
            headline: 'Why Panic Feels Like Death (But Isn’t)',
            description:
              'Why panic attacks feel like dying and why the nervous system creates this illusion.',
            author: {
              '@type': 'Person',
              name: 'Brian Njata',
            },
            datePublished: '2026-01-12',
            dateModified: '2026-01-12',
            image: 'https://briannjata.org/images/panic-08-calm-room.png',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id':
                'https://briannjata.org/writing/why-panic-feels-like-death-but-isnt',
            },
            articleSection: 'Panic & Recovery',
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
                name: 'Why Panic Feels Like Death (But Isn’t)',
                item:
                  'https://briannjata.org/writing/why-panic-feels-like-death-but-isnt',
              },
            ],
          }),
        }}
      />

      <main className="min-h-screen bg-gradient-to-br from-[#0B0F1C] via-[#101828] to-[#1B2735] text-white px-6 md:px-12 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12">

          {/* LEFT — Reader Orientation */}
          <aside className="hidden lg:block">
            <div className="sticky top-32 border-l border-white/10 pl-6">
              <p className="text-sm font-medium text-white/60 mb-4">
                If it’s 3 a.m. right now
              </p>
              <ul className="space-y-3 text-sm text-white/70">
                <li><a href="#why-heart" className="hover:text-white">Why the heart becomes the focus</a></li>
                <li><a href="#monitoring" className="hover:text-white">What constant checking does</a></li>
                <li><a href="#dissociation" className="hover:text-white">Why everything feels unreal</a></li>
                <li><a href="#death-thoughts" className="hover:text-white">Why death thoughts appear</a></li>
                <li><a href="#reframe" className="hover:text-white">What actually matters to understand</a></li>
              </ul>
            </div>
          </aside>

          {/* RIGHT — Article */}
          <article className="max-w-3xl">

            <Link
              href="/writing"
              className="inline-block mb-10 text-sm text-white/60 hover:text-white transition"
            >
              ← Back to Writing
            </Link>

            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              Why Panic Feels Like Death (But Isn’t)
            </h1>

            <p className="text-sm text-white/50 mb-10">
              January 12, 2026 · Panic & Recovery
            </p>

            <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-14 border border-white/10">
              <Image
                src="/images/panic-08-calm-room.png"
                alt="Quiet, empty room in daylight"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* ARTICLE BODY */}
            <div className="space-y-6 text-lg leading-relaxed text-white/90">
              <p>
                If you found this at 3 a.m., heart pounding, Googling symptoms
                while trying to convince yourself you’re not dying — this is for you.
              </p>

              <p>
                Panic does not announce itself gently.
                It arrives through the body, not through thoughts.
                That is why it feels convincing.
              </p>

              <p id="why-heart">
                When panic began for me, the most confusing part was not fear
                itself. It was the sudden loss of automatic trust in my body.
              </p>

              <p>
                My heart would race violently. Other times I could not feel it at
                all. I placed my hand on my chest repeatedly — when it felt too
                fast, I panicked; when I couldn’t feel it clearly, I panicked
                again, convinced it had stopped.
              </p>

              <p id="monitoring">
                Breathing stopped being automatic.
                Swallowing felt supervised.
                Nothing stayed in the background.
              </p>

              <p>
                Panic does not introduce new sensations.
                It removes the filter that normally keeps them quiet.
              </p>

              <p>
                As attention turned inward, every sensation amplified.
                Standing felt unfamiliar.
                Walking felt strange.
                Even speech began to feel manual.
              </p>

              <p id="dissociation">
                Later came dissociation — the sense that I was watching myself
                from behind glass.
                This felt worse than the physical symptoms.
                It felt like I was losing my mind.
              </p>

              <p>I wasn’t.</p>

              <p id="death-thoughts">
                Night brought darker thoughts.
                I imagined funerals.
                Coffins.
                How I would leave my loved ones behind.
              </p>

              <p>
                Around May, head pressure appeared — like a tight band pulling
                from the back forward. Sunlight felt threatening.
                The label was agoraphobia. The sensation still exists.
              </p>

              <p>
                What sustained all of this was not danger, but monitoring.
                Each check reinforced the belief that something needed checking.
                Each reassurance taught my brain that the threat was real.
              </p>

              <p id="reframe">
                The nervous system does not distinguish between danger and
                closely watched sensation.
                What receives attention is treated as important.
                What is treated as important grows louder.
              </p>

              <p className="pt-6 font-medium">
                Panic feels like death because it uses the same systems designed
                to respond to death.
                <br />
                Intensity does not equal danger.
              </p>
            </div>

            {/* SHARE */}
            <div className="mt-20 pt-8 border-t border-white/10">
              <p className="text-sm text-white/60 mb-3">Share this</p>
              <ShareActions />
            </div>

          </article>
        </div>
      </main>
    </>
  );
}

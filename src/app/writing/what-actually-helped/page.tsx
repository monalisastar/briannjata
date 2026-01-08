import ArticleClient from './ArticleClient';

/* =========================
   DATE HELPERS
========================= */
const today = new Date().toISOString().split('T')[0];

/* =========================
   METADATA (SEO)
========================= */
export const metadata = {
  title: 'What Actually Helped (After Everything Else Failed)',
  description:
    'A personal account of what genuinely helped during panic disorder recovery, after techniques and reassurance failed. Lived experience, not medical advice.',

  openGraph: {
    title: 'What Actually Helped (After Everything Else Failed)',
    description:
      'An honest reflection on what helped during panic recovery when nothing else seemed to work.',
    type: 'article',
    images: [
      {
        url: 'https://briannjata.org/images/panic-11-quiet-morning.png',
        width: 1200,
        height: 630,
        alt: 'Quiet morning during panic recovery',
      },
    ],
  },
};

export default function Page() {
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
            headline: 'What Actually Helped (After Everything Else Failed)',
            description:
              'A personal account of what genuinely helped during panic disorder recovery.',
            author: {
              '@type': 'Person',
              name: 'Brian Njata',
            },
            datePublished: today,
            dateModified: today,
            image:
              'https://briannjata.org/images/panic-11-quiet-morning.png',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id':
                'https://briannjata.org/writing/what-actually-helped',
            },
            articleSection: 'Panic & Recovery',
            keywords: [
              'panic recovery',
              'what helped panic disorder',
              'panic attacks lived experience',
              'nervous system recovery',
              'mental health recovery story',
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
                name: 'What Actually Helped (After Everything Else Failed)',
                item:
                  'https://briannjata.org/writing/what-actually-helped',
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
              'A first-person series documenting panic disorder, nervous system recovery, and the gradual return to stability.',
            creator: {
              '@type': 'Person',
              name: 'Brian Njata',
            },
          }),
        }}
      />

      {/* =========================
          CLIENT ARTICLE
      ========================= */}
      <ArticleClient />
    </>
  );
}

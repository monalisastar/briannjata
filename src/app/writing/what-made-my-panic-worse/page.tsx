import ArticleClient from './ArticleClient';

/* =========================
   METADATA (SEO)
========================= */
export const metadata = {
  title: 'What Made My Panic Worse',
  description:
    'A personal account of the behaviors and habits that unintentionally reinforced panic and anxiety. Lived experience, not medical advice.',

  openGraph: {
    title: 'What Made My Panic Worse',
    description:
      'An honest reflection on the patterns that intensified panic instead of relieving it.',
    type: 'article',
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
            headline: 'What Made My Panic Worse',
            description:
              'A personal account of the habits and behaviors that unintentionally reinforced panic.',
            author: {
              '@type': 'Person',
              name: 'Brian Njata',
            },
            datePublished: '2026-01-16',
            dateModified: '2026-01-16',
            image:
              'https://briannjata.org/images/panic-10-dim-room.png',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id':
                'https://briannjata.org/writing/what-made-my-panic-worse',
            },
            articleSection: 'Panic & Recovery',
            keywords: [
              'panic disorder',
              'panic made worse',
              'anxiety habits',
              'panic recovery mistakes',
              'nervous system hypervigilance',
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
                name: 'What Made My Panic Worse',
                item:
                  'https://briannjata.org/writing/what-made-my-panic-worse',
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

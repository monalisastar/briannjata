import ArticleClient from './ArticleClient';

/* =========================
   METADATA (SEO)
========================= */
export const metadata = {
  title: 'The False Recovery Phase No One Warns You About',
  description:
    'A personal reflection on the quiet phase after panic attacks stop, when symptoms fade but normality has not yet returned. Lived experience, not medical advice.',

  openGraph: {
    title: 'The False Recovery Phase No One Warns You About',
    description:
      'An honest account of the confusing recovery phase after panic attacks, when function returns before feeling.',
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
            headline: 'The False Recovery Phase No One Warns You About',
            description:
              'A personal account of the quiet, confusing phase after panic attacks stop but normality has not yet returned.',
            author: {
              '@type': 'Person',
              name: 'Brian Njata',
            },
            datePublished: '2026-02-02',
            dateModified: '2026-02-02',
            image:
              'https://briannjata.org/images/panic-09-quiet-morning.png',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id':
                'https://briannjata.org/writing/the-false-recovery-phase',
            },
            articleSection: 'Panic & Recovery',
            keywords: [
              'panic recovery',
              'false recovery phase',
              'panic disorder',
              'nervous system recovery',
              'feeling numb after panic',
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
                name: 'The False Recovery Phase No One Warns You About',
                item:
                  'https://briannjata.org/writing/the-false-recovery-phase',
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

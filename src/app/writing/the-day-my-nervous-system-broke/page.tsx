import ArticleClient from './ArticleClient';

/* =========================
   METADATA (SEO)
========================= */
export const metadata = {
  title: 'The Day My Nervous System Broke',
  description:
    'A personal account of the first panic attack that changed everything — written from lived experience, not medical advice.',

  openGraph: {
    title: 'The Day My Nervous System Broke',
    description:
      'A first-person account of panic, loss of control, and the moment recovery began.',
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
            headline: 'The Day My Nervous System Broke',
            description:
              'A personal account of the first panic attack that changed everything.',
            author: {
              '@type': 'Person',
              name: 'Brian Njata',
            },
            datePublished: '2026-01-10',
            dateModified: '2026-01-10',
            image:
              'https://briannjata.org/images/panic-01-exam-hall.png',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id':
                'https://briannjata.org/writing/the-day-my-nervous-system-broke',
            },
            articleSection: 'Panic & Recovery',
            keywords: [
              'panic attack',
              'first panic attack',
              'panic disorder',
              'nervous system overload',
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
                name: 'The Day My Nervous System Broke',
                item:
                  'https://briannjata.org/writing/the-day-my-nervous-system-broke',
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

      {/* =========================
          CLIENT ARTICLE
      ========================= */}
      <ArticleClient />
    </>
  );
}

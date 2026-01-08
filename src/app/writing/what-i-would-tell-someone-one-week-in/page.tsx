import ArticleClient from './ArticleClient';

/* =========================
   METADATA (SEO)
========================= */
export const metadata = {
  title: 'What I Would Tell Someone One Week Into Panic',
  description:
    'A personal message for those in the first week of panic attacks — written from lived experience, not medical advice.',

  openGraph: {
    title: 'What I Would Tell Someone One Week Into Panic',
    description:
      'A grounded, honest message for people in the early days of panic attacks and nervous system overload.',
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
            headline: 'What I Would Tell Someone One Week Into Panic',
            description:
              'A personal message for people in the first week of panic attacks, based on lived experience.',
            author: {
              '@type': 'Person',
              name: 'Brian Njata',
            },
            datePublished: '2026-02-20',
            dateModified: '2026-02-20',
            image:
              'https://briannjata.org/images/advise-one-week-panic.png',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id':
                'https://briannjata.org/writing/what-i-would-tell-someone-one-week-in',
            },
            articleSection: 'Panic & Recovery',
            keywords: [
              'first panic attack',
              'one week into panic',
              'panic disorder early stage',
              'panic recovery lived experience',
              'nervous system overwhelm',
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
                name: 'What I Would Tell Someone One Week Into Panic',
                item:
                  'https://briannjata.org/writing/what-i-would-tell-someone-one-week-in',
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
              'A first-person series documenting panic disorder, nervous system overwhelm, and gradual recovery.',
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

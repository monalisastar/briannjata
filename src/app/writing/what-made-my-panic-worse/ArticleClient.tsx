import ArticleClient from './ArticleClient';

export const metadata = {
  title: 'What Made My Panic Worse',
  description:
    'A lived account of the habits and behaviors that unintentionally reinforced panic and anxiety. Written for people stuck in panic loops.',

  openGraph: {
    title: 'What Made My Panic Worse',
    description:
      'An honest account of what reinforced panic instead of relieving it.',
    type: 'article',
  },
};

export default function Page() {
  return (
    <>
      {/* Article structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'What Made My Panic Worse',
            description:
              'A personal account of the behaviors that reinforced panic and anxiety.',
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
              'panic attack loop',
              'anxiety reassurance cycle',
              'nervous system hypervigilance',
            ],
          }),
        }}
      />

      <ArticleClient />
    </>
  );
}

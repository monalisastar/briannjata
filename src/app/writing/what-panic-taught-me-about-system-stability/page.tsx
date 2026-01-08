import type { Metadata } from 'next';
import PanicSystemStabilityClient from './PanicSystemStabilityClient';

export const metadata: Metadata = {
  title: 'What Panic Taught Me About System Stability and Failure Modes',
  description:
    'A systems-thinking reflection on panic, instability, feedback loops, and recovery — connecting nervous system breakdowns to resilient software design.',
  openGraph: {
    title: 'What Panic Taught Me About System Stability and Failure Modes',
    description:
      'How panic revealed deep lessons about system instability, observability, and recovery — applied to software engineering.',
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
            headline:
              'What Panic Taught Me About System Stability and Failure Modes',
            description:
              'A systems-thinking reflection connecting panic and nervous system instability to resilient software design.',
            author: {
              '@type': 'Person',
              name: 'Brian Njata',
            },
            datePublished: '2025-07-01',
            dateModified: '2025-07-01',
            articleSection: 'Systems & Thinking',
            keywords: [
              'systems thinking',
              'system stability',
              'failure modes',
              'panic and engineering',
              'resilient systems',
              'observability',
            ],
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id':
                'https://briannjata.org/writing/panic-system-stability',
            },
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
                  'What Panic Taught Me About System Stability and Failure Modes',
                item:
                  'https://briannjata.org/writing/panic-system-stability',
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
            name: 'Systems & Thinking',
            description:
              'Essays connecting systems thinking, engineering, and lived experience under stress.',
            creator: {
              '@type': 'Person',
              name: 'Brian Njata',
            },
          }),
        }}
      />

      <PanicSystemStabilityClient />
    </>
  );
}

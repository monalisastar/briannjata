import WritingClient from './WritingClient';

export const metadata = {
  title: 'Writing from Experience – Brian Njata',
  description:
    'Personal writing on panic, recovery, systems thinking, and building a career under constraint. Lived experience, not advice.',

  openGraph: {
    title: 'Writing from Experience – Brian Njata',
    description:
      'Essays on panic recovery, systems thinking, and rebuilding life and work under constraint.',
    type: 'website',
  },
};

export default function WritingPage() {
  return (
    <>
      {/* =========================
          BLOG COLLECTION SCHEMA
      ========================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'Writing from Experience',
            description:
              'Personal writing on panic, recovery, systems thinking, and building a career under constraint.',
            author: {
              '@type': 'Person',
              name: 'Brian Njata',
            },
            blogPost: [
              {
                '@type': 'BlogPosting',
                headline: 'The Day My Nervous System Broke',
                url:
                  'https://briannjata.org/writing/the-day-my-nervous-system-broke',
              },
              {
                '@type': 'BlogPosting',
                headline: 'Why Panic Feels Like Death (But Isn’t)',
                url:
                  'https://briannjata.org/writing/why-panic-feels-like-death-but-isnt',
              },
              {
                '@type': 'BlogPosting',
                headline:
                  'The False Recovery Phase No One Warns You About',
                url:
                  'https://briannjata.org/writing/the-false-recovery-phase',
              },
              {
                '@type': 'BlogPosting',
                headline: 'What Made My Panic Worse',
                url:
                  'https://briannjata.org/writing/what-made-my-panic-worse',
              },
              {
                '@type': 'BlogPosting',
                headline:
                  'What Actually Helped (After Everything Else Failed)',
                url:
                  'https://briannjata.org/writing/what-actually-helped',
              },
              {
                '@type': 'BlogPosting',
                headline:
                  'Living Normally While Still Not Feeling Normal',
                url:
                  'https://briannjata.org/writing/living-normally-without-feeling-normal',
              },
              {
                '@type': 'BlogPosting',
                headline:
                  'What I Would Tell Someone One Week Into Panic',
                url:
                  'https://briannjata.org/writing/what-i-would-tell-someone-one-week-in',
              },
              {
                '@type': 'BlogPosting',
                headline:
                  'How I Taught Myself Systems Thinking to Survive My Own Mind',
                url:
                  'https://briannjata.org/writing/how-i-taught-myself-systems-thinking',
              },
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
            ],
          }),
        }}
      />

      <WritingClient />
    </>
  );
}

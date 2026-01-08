'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

/* ---------------------------------------
   Writing Index — Personal Work
---------------------------------------- */

type WritingPost = {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  excerpt: string;
  image: string;
};

const posts: WritingPost[] = [
  /* ============================
     Panic & Recovery Series
  ============================ */
  {
    slug: 'the-day-my-nervous-system-broke',
    title: 'The Day My Nervous System Broke',
    category: 'Panic & Recovery',
    tags: ['Panic & Recovery'],
    excerpt:
      'The moment panic entered my life did not feel emotional. It felt mechanical. This is where the misunderstanding began.',
    image: '/images/panic-01-exam-hall.png',
  },
  {
    slug: 'why-panic-feels-like-death-but-isnt',
    title: 'Why Panic Feels Like Death (But Isn’t)',
    category: 'Panic & Recovery',
    tags: ['Panic & Recovery', 'Systems & Thinking'],
    excerpt:
      'Panic convinces because it uses the same systems designed to respond to death. Understanding this changed everything.',
    image: '/images/panic-08-false-alarm.png',
  },
  {
    slug: 'the-false-recovery-phase',
    title: 'The False Recovery Phase No One Warns You About',
    category: 'Panic & Recovery',
    tags: ['Panic & Recovery'],
    excerpt:
      'When panic stopped, I expected relief. Instead, calm felt wrong. This phase scared me more than panic itself.',
    image: '/images/panic-09-quiet-morning.png',
  },
  {
    slug: 'what-made-my-panic-worse',
    title: 'What Made My Panic Worse (Hard Truths)',
    category: 'Panic & Recovery',
    tags: ['Panic & Recovery'],
    excerpt:
      'I did not just experience panic — I unknowingly trained it. This is what reinforced the loop.',
    image: '/images/panic-10-dim-room.png',
  },
  {
    slug: 'what-actually-helped',
    title: 'What Actually Helped (After Everything Else Failed)',
    category: 'Panic & Recovery',
    tags: ['Panic & Recovery'],
    excerpt:
      'Recovery was not dramatic. It was repetitive, uncomfortable, and quiet. That is why it worked.',
    image: '/images/panic-11-quiet-morning.png',
  },
  {
    slug: 'living-normally-without-feeling-normal',
    title: 'Living Normally While Still Not Feeling Normal',
    category: 'Panic & Recovery',
    tags: ['Panic & Recovery'],
    excerpt:
      'Life resumed before feeling did. This is what it meant to rebuild while still feeling altered.',
    image: '/images/panic-12-ordinary-day.png',
  },
  {
    slug: 'what-i-would-tell-someone-one-week-in',
    title: 'What I Would Tell Someone One Week Into Panic',
    category: 'Panic & Recovery',
    tags: ['Panic & Recovery'],
    excerpt:
      'No promises. No timelines. Just what I wish someone had told me when I thought I was dying.',
    image: '/images/advise-one-week-panic.png',
  },

  /* ============================
     Systems / Career Direction
  ============================ */
  {
    slug: 'how-i-taught-myself-systems-thinking',
    title: 'How I Taught Myself Systems Thinking to Survive My Own Mind',
    category: 'Systems & Thinking',
    tags: ['Systems & Thinking', 'Building & Work'],
    excerpt:
      'When panic loosened its grip, my mind needed structure. Systems thinking gave it a place to stand.',
    image: '/images/panic-14-code-desk.png',
  },
];

const tagOptions = [
  'All',
  'Panic & Recovery',
  'Systems & Thinking',
  'Building & Work',
];

export default function WritingPage() {
  const [activeTag, setActiveTag] = useState('All');

  const filteredPosts =
    activeTag === 'All'
      ? posts
      : posts.filter(
          (post) =>
            post.category === activeTag || post.tags.includes(activeTag)
        );

  const featured = posts[0];

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-[#0B0F1C] via-[#101828] to-[#1B2735] px-6 md:px-12 py-20 text-white">
      {/* EXACT UI YOU PROVIDED */}
    </main>
  );
}

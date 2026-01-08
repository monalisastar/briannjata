'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

/* ---------------------------------------
   Types
---------------------------------------- */

type WritingPost = {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  excerpt: string;
  image: string;
};

/* ---------------------------------------
   Data
---------------------------------------- */

const posts: WritingPost[] = [
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
      'Life resumed before feeling did. This is what rebuilding looked like while still feeling altered.',
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

/* ---------------------------------------
   Component
---------------------------------------- */

export default function WritingClient() {
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
    <main className="min-h-screen bg-gradient-to-br from-[#0B0F1C] via-[#101828] to-[#1B2735] px-6 md:px-12 py-24 text-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Writing from Experience
        </motion.h1>

        <p className="text-center text-white/70 max-w-3xl mx-auto mb-16">
          Personal writing on panic, recovery, systems thinking, and rebuilding
          life and work under constraint.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {tagOptions.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-1.5 rounded-full text-sm border transition ${
                activeTag === tag
                  ? 'bg-white text-black font-semibold'
                  : 'border-white/30 text-white/70 hover:bg-white/10'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Featured */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24 rounded-2xl overflow-hidden bg-white/5 border border-white/10"
        >
          <Link href={`/writing/${featured.slug}`} className="block">
            <div className="relative h-64 md:h-80 w-full">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-8">
              <span className="text-xs bg-blue-700 px-3 py-1 rounded-full inline-block mb-4">
                Featured · {featured.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                {featured.title}
              </h2>
              <p className="text-white/80 max-w-3xl">
                {featured.excerpt}
              </p>
            </div>
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
            >
              <Link
                href={`/writing/${post.slug}`}
                className="block rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:scale-[1.02] transition"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs bg-black/60 px-3 py-1 rounded-full inline-block mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-semibold mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-white/70">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}

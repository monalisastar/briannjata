'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const posts = [
  {
    slug: 'founder-reflections',
    title: 'Founder Reflections: Building with Vision During Recovery',
    date: 'July 1, 2025',
    category: 'Mental Clarity',
    tags: ['Vision', 'Recovery'],
    excerpt: 'How I rebuilt my life through code, purpose, and divine clarity — from the lowest mental point to launching visionary tech...',
    image: '/blog1-dark-recovery.png',
  },
  {
    slug: 'panic-rebirth-journey',
    title: 'Panic, Rebirth & Purpose: My Recovery from the Edge of Reality',
    date: 'July 6, 2025',
    category: 'Recovery & Spiritual Healing',
    tags: ['Recovery'],
    excerpt: 'From panic attacks and unreality to rebuilding with vision. This is the raw story of how I coded my way back to life.',
    image: '/blog1-sunlight-breakthrough.png',
  },
  {
    slug: 'eco-mentor-journey',
    title: 'Launching Eco-Mentor: The Climate Learning Revolution',
    date: 'June 12, 2025',
    category: 'Climate Action',
    tags: ['Climate'],
    excerpt: 'Why climate knowledge must be accessible, visionary, and built for the African future — through Eco-Mentor.',
    image: '/eco-mentor.png',
  },
  {
    slug: 'flr-token-trust',
    title: 'Why I Created the FLR Token to Power Digital Trust',
    date: 'June 24, 2025',
    category: 'Web3 & Ethics',
    tags: ['Web3'],
    excerpt: 'FLR isn’t just a crypto token. It’s a proof-of-trust system for freelancers, fair payments, and digital honor.',
    image: '/freelancepalace-banner.png',
  },
];

const tagOptions = ['All', 'Recovery', 'Vision', 'Climate', 'Web3'];

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState('All');

  const filteredPosts =
    activeTag === 'All'
      ? posts
      : posts.filter((post) => post.tags?.includes(activeTag));

  const featured = posts[0]; // Latest post as featured

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 px-6 md:px-12 py-16 text-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Brian’s Journal — Code × Recovery × Vision
        </motion.h1>

        {/* Tag Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tagOptions.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-1 rounded-full text-sm border ${
                activeTag === tag
                  ? 'bg-white text-black font-semibold'
                  : 'border-white/30 text-white/70 hover:bg-white/10'
              } transition`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-xl"
        >
          <Link href={`/blogs/${featured.slug}`} className="block">
            <div className="relative h-64 md:h-80 w-full">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover hover:scale-105 transition duration-500"
              />
            </div>
            <div className="p-6">
              <span className="text-xs bg-blue-700 text-white px-3 py-1 rounded-full inline-block mb-3">
                Featured · {featured.category}
              </span>
              <h2 className="text-2xl font-semibold mb-2">{featured.title}</h2>
              <p className="text-white/80 text-sm">{featured.excerpt}</p>
              <p className="mt-3 text-xs text-white/60">{featured.date}</p>
            </div>
          </Link>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/blogs/${post.slug}`}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition block"
              >
                <div className="relative h-48 md:h-56 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition duration-300"
                    priority
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs text-white/80 bg-black px-3 py-1 rounded-full inline-block mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">{post.title}</h3>
                  <p className="text-sm text-white/70 mb-3">{post.excerpt}</p>
                  <p className="text-xs text-white/50">{post.date}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center text-white/70 text-sm">
          Curious to read more? <br />
          <span className="text-white font-semibold">
            Explore the mind of a visionary building through code, clarity, and purpose.
          </span>
        </div>
      </div>
    </main>
  );
}


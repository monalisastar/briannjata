'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const posts = [
  {
    title: 'Founder Reflections: Building with Vision During Recovery',
    snippet:
      'How I rebuilt my life through code, purpose, and divine clarity — from the lowest mental point to launching visionary tech...',
    date: 'July 1, 2025',
    link: '/blogs/founder-reflections',
    image: '/blog1-dark-recovery.png',
  },
  {
    title: 'Panic, Rebirth & Purpose: My Recovery from the Edge of Reality',
    snippet:
      'From panic attacks and unreality to rebuilding with vision. This is the raw story of how I coded my way back to life.',
    date: 'July 6, 2025',
    link: '/blogs/panic-rebirth-journey',
    image: '/blog1-sunlight-breakthrough.png',
  },
  {
    title: 'Launching Eco-Mentor: The Climate Learning Revolution',
    snippet:
      'Why climate knowledge must be accessible, visionary, and built for the African future — through Eco-Mentor.',
    date: 'June 12, 2025',
    link: '/blogs/eco-mentor-journey',
    image: '/eco-mentor.png',
  },
  {
    title: 'Why I Created the FLR Token to Power Digital Trust',
    snippet:
      'FLR isn’t just a crypto token. It’s a proof-of-trust system to power the future of fair digital work, payments, and dispute resolution.',
    date: 'June 24, 2025',
    link: '/blogs/flr-token-trust',
    image: '/freelancepalace-banner.png',
  },
];

const BlogPreview = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12 relative overflow-hidden bg-gradient-to-br from-[#0b0f2f] to-[#091930] text-white">
      {/* Floating badge */}
      <div className="absolute top-6 left-6 bg-blue-500/10 text-blue-100 border border-blue-300/20 backdrop-blur-md px-4 py-1 rounded-full text-sm shadow-md z-10">
         Brian's Journal Vault
      </div>

      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-blue-100 text-center z-10 relative">
        Reflections from the Code & the Heart
      </h2>

      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 z-10 relative">
        {posts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-blue-500/10 backdrop-blur-xl border border-blue-300/20 rounded-2xl shadow-[0_0_40px_#3b82f6] hover:shadow-[0_0_60px_#60a5fa] transition overflow-hidden hover:scale-[1.02]"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={post.image}
                alt={`Cover for ${post.title}`}
                fill
                className="object-cover transition duration-500 hover:scale-110"
              />
            </div>

            <div className="p-5">
              <p className="text-xs text-blue-200 mb-1">{post.date}</p>
              <h3 className="text-lg font-semibold mb-2 text-white">
                {post.title}
              </h3>
              <p className="text-sm text-blue-100/90 mb-4">{post.snippet}</p>
              <Link
                href={post.link}
                className="text-blue-400 text-sm font-medium hover:underline"
              >
                Read More →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-14 z-10 relative">
        <Link
          href="/blog"
          className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition font-medium shadow-lg"
        >
          Visit Full Blog
        </Link>
      </div>
    </section>
  );
};

export default BlogPreview;


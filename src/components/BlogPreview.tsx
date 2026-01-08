'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const posts = [
  {
    title: 'The Day My Nervous System Broke',
    snippet:
      'The moment panic entered my life did not feel emotional. It felt mechanical. This is where the misunderstanding began.',
    date: 'Jan 10, 2026',
    link: '/writing/the-day-my-nervous-system-broke',
    image: '/images/panic-01-exam-hall.png',
  },
  {
    title: 'Why Panic Feels Like Death (But Isn’t)',
    snippet:
      'Panic is convincing because it uses the same systems designed to respond to death. Understanding this changed everything.',
    date: 'Jan 12, 2026',
    link: '/writing/why-panic-feels-like-death-but-isnt',
    image: '/images/panic-08-false-alarm.png',
  },
  {
    title: 'The False Recovery Phase No One Warns You About',
    snippet:
      'When panic stops, many people expect relief. What follows instead is a quieter, more confusing phase.',
    date: 'Feb 2, 2026',
    link: '/writing/the-false-recovery-phase',
    image: '/images/panic-09-quiet-morning.png',
  },
];

export default function BlogPreview() {
  return (
    <section
      id="writing"
      className="w-full py-24 px-6 md:px-12 bg-[#0B0F1C] text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Writing from Experience
          </h2>
          <p className="mt-3 text-white/60 max-w-2xl">
            Personal writing on panic, recovery, systems thinking, and rebuilding
            life and work under constraint.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.article
              key={post.link}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="
                rounded-2xl
                bg-white/[0.04]
                border border-white/[0.08]
                overflow-hidden
                transition
                hover:border-white/20
              "
            >
              <div className="relative h-44 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <p className="text-xs text-white/50 mb-2">
                  {post.date}
                </p>

                <h3 className="text-lg font-semibold mb-3">
                  {post.title}
                </h3>

                <p className="text-sm text-white/70 mb-5 leading-relaxed">
                  {post.snippet}
                </p>

                <Link
                  href={post.link}
                  className="text-sm text-blue-400 hover:text-blue-300 transition font-medium"
                >
                  Read story →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16">
          <Link
            href="/writing"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition font-medium"
          >
            View all writing →
          </Link>
        </div>

      </div>
    </section>
  );
}

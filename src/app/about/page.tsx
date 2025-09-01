'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';

const quotes = [
  "I don't just build platforms — I architect ecosystems of trust.",
  "Digital sovereignty. Climate justice. Human dignity. That’s the mission.",
  "Code is just the tool. Purpose is the blueprint.",
];

export default function AboutPage() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>About | Brian Njata</title>
        <meta
          name="description"
          content="Learn about Brian Njata — the visionary behind Freelancers Palace, Eco-Mentor, and FLR Trust Labs. A builder of trust systems, climate solutions, and ethical technology."
        />
      </Head>

      <main className="min-h-screen w-full bg-gradient-to-br from-[#0B0F1C] via-[#101828] to-[#1B2735] px-4 md:px-8 py-10 text-white">
        <section className="max-w-6xl mx-auto bg-[#0a0f2c]/60 backdrop-blur-lg border border-blue-500/20 shadow-[0_0_40px_10px_rgba(59,130,246,0.25)] rounded-2xl p-6 md:p-12 space-y-16">

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Image
              src="/brian.jpg"
              alt="Brian Njata"
              width={120}
              height={120}
              className="rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover"
            />
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">About Me</h1>
            <p className="text-xl italic max-w-3xl mx-auto text-blue-300 transition-opacity duration-500">
              {quotes[quoteIndex]}
            </p>
          </motion.div>

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-inner border border-white/10 space-y-6"
          >
            <h2 className="text-2xl font-semibold text-blue-200">Who I Am</h2>
            <p>
              I’m Brian Njata — a founder, systems thinker, and purpose-driven builder. My work is rooted in personal transformation, global inequity, and the belief that digital systems must be re-centered around trust, justice, and transparency.
            </p>
            <p>
              Through projects like <strong>Freelancers Palace</strong>, <strong>Eco-Mentor</strong>, and <strong>FLR Trust Labs</strong>, I aim to create tools and platforms that restore fairness — in work, climate, and data.
            </p>
            <p>
              I didn’t come from a coding background. Everything I built, I built from curiosity, obsession, and survival — during recovery, reflection, and vision-making.
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { title: 'Fairness', desc: 'Every human deserves just reward for honest work.' },
              { title: 'Trust', desc: 'Code is powerful, but trust is the currency of the future.' },
              { title: 'Vision', desc: 'Build for the world you want — not the one you inherited.' },
              { title: 'Healing', desc: 'I believe personal healing fuels ethical innovation.' },
              { title: 'Resilience', desc: 'Platforms should reflect the courage of their builders.' },
              { title: 'Sovereignty', desc: 'People must own their identity, data, and future.' },
            ].map((val, i) => (
              <div
                key={i}
                className="bg-white/5 p-6 rounded-xl shadow-inner border border-blue-400/10"
              >
                <h3 className="font-bold text-lg text-blue-300 mb-2">{val.title}</h3>
                <p className="text-sm text-gray-200">{val.desc}</p>
              </div>
            ))}
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-blue-200">Milestones</h2>
            <div className="space-y-6 border-l-2 border-blue-500/40 pl-6">
              {[
                {
                  year: '2025',
                  title: 'Recovery & Spiritual Reset',
                  desc: 'The turning point. From fear to purpose.',
                },
                {
                  year: '2025',
                  title: 'Freelancers Palace Conceptualized',
                  desc: 'From lived struggle to structured vision.',
                },
                {
                  year: '2025',
                  title: 'FLR Token & Trust Labs Launched',
                  desc: 'A new trust engine for Web3, AI, and carbon space.',
                },
                {
                  year: '2026+',
                  title: 'Scaling + Carbon Project Integration',
                  desc: 'Toward AI agents, FLR scores, and verified justice systems.',
                },
              ].map((item, idx) => (
                <div key={idx}>
                  <p className="text-sm text-blue-400">{item.year}</p>
                  <h4 className="font-semibold text-white">{item.title}</h4>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Ecosystem Vision */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-white/5 p-6 rounded-xl shadow-inner border border-blue-400/10"
          >
            <h2 className="text-xl font-semibold mb-2 text-blue-300">Ecosystem Vision</h2>
            <p className="text-gray-200">
              I’m not just building apps — I’m building an interoperable ecosystem of digital trust:
            </p>
            <ul className="list-disc pl-6 mt-3 text-sm text-gray-300">
              <li>Freelancers Palace — proof-of-work meets fairness</li>
              <li>Eco-Mentor — decolonized climate learning</li>
              <li>FLR Token — on-chain trust infrastructure</li>
              <li>Next frontier — AI agents, Web3 identities, verified offsets</li>
            </ul>
          </motion.div>

          {/* Core Tech */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="bg-white/5 p-6 rounded-xl shadow border border-blue-400/10"
          >
            <h2 className="text-xl font-semibold mb-2 text-blue-200">Core Technologies I Use</h2>
            <ul className="flex flex-wrap gap-4 text-sm text-blue-100 mt-3">
              {[
                'Next.js',
                'Tailwind CSS',
                'Framer Motion',
                'MongoDB + Prisma',
                'firebase',
                'Nodemailer',
                'Smart Contracts',
                'IPFS & Blockchain Tools',
                'OpenAI API',
                 'Python',
                  'NodeJs',
              ].map((tech, i) => (
                <li key={i} className="bg-blue-800/30 px-3 py-1 rounded-full shadow-inner border border-blue-400/20">
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <p className="mb-4 font-medium text-blue-200">Let’s build the future with trust, not noise.</p>
            <a
              href="/contact"
              className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition"
            >
              Contact Me
            </a>
          </motion.div>
        </section>
      </main>
    </>
  );
}


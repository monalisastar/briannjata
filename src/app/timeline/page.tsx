'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const timeline = [
  {
    year: '2025',
    title: 'Started Programming',
    description: 'Began learning full-stack development and launched Freelancers Palace.',
  },
  {
    year: '2025',
    title: 'FLR Token Launched',
    description: 'Deployed FLR Token to power blockchain-based trust and escrow.',
  },
  {
    year: '2025',
    title: 'AI Freelancer Vetting',
    description: 'Developed a smart onboarding system with anti-plagiarism and AI screening.',
  },
  {
    year: '2025',
    title: 'Eco-Mentor LMS',
    description: 'Created a learning platform focused on GHG accounting and climate tech.',
  },
  {
    year: '2025',
    title: 'Backend Stack Mastery',
    description: 'Self-taught Prisma, Next.js, MongoDB, and built production-grade APIs.',
  },
  {
    year: '2025',
    title: 'briannjata.org Goes Live',
    description: 'Launched my personal portfolio showcasing all my visionary projects.',
  },
];

const future = [
  {
    year: '2026',
    title: 'FLR DAO Launched',
    description: 'Trust scores become cross-platform through the FLR DAO infrastructure.',
  },
  {
    year: '2026',
    title: 'GPT-Native Assistants',
    description: 'Integrated AI copilots across all your apps and dashboards.',
  },
  {
    year: '2027',
    title: 'Web3 Startup Accelerator',
    description: 'Founded an accelerator for climate + AI startups in Africa.',
  },
  {
    year: '2028',
    title: 'Keynote at AI & Climate Summit',
    description: 'Spoke on digital trust and ethical AI at a global conference.',
  },
  {
    year: '2029',
    title: 'Author — "The Trust Code"',
    description: 'Published your first book on tech, governance, and digital ethics.',
  },
  {
    year: '2030',
    title: 'Appointed to UN Tech Council',
    description: 'Joined international leadership on digital rights and AI governance.',
  },
];

export default function TimelinePage() {
  const [view, setView] = useState<'past' | 'future'>('past');
  const [showNarration, setShowNarration] = useState(false);
  const activeList = view === 'past' ? timeline : future;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-cyan-100 py-20 px-6 relative">
      {/* Glowing timeline spine */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1 bg-cyan-400/40 w-[2px] h-full animate-pulse z-0" />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-8 relative z-10"
      >
        🧠 Brian’s AI-Powered Timeline
      </motion.h1>

      {/* Toggle Buttons */}
      <div className="flex justify-center gap-4 mb-12 relative z-10">
        <button
          onClick={() => setView('past')}
          className={`px-4 py-2 rounded-full font-medium transition ${
            view === 'past'
              ? 'bg-blue-700 text-white'
              : 'bg-white/30 text-blue-700 border border-blue-400'
          }`}
        >
          🧬 Real Journey
        </button>
        <button
          onClick={() => setView('future')}
          className={`px-4 py-2 rounded-full font-medium transition ${
            view === 'future'
              ? 'bg-blue-700 text-white'
              : 'bg-white/30 text-blue-700 border border-blue-400'
          }`}
        >
          🚀 Projected Future
        </button>
      </div>

      {/* Timeline Items */}
      <div className="relative border-l-2 border-blue-300 pl-6 max-w-4xl mx-auto space-y-16 z-10">
        {activeList.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative bg-white/30 backdrop-blur-md p-6 rounded-xl shadow-xl border border-white/20"
          >
            <div className="absolute -left-[1.15rem] top-4 w-6 h-6 bg-blue-400 rounded-full border-4 border-white shadow-lg" />
            <h3 className="text-xl md:text-2xl font-semibold text-blue-800">
              {item.year} — {item.title}
            </h3>
            <p className="mt-1 text-blue-700/90">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Narration Button */}
      <div className="mt-20 text-center z-10 relative">
        <button
          onClick={() => setShowNarration(!showNarration)}
          className="text-blue-800 hover:text-blue-950 underline text-sm"
        >
          🗣 {showNarration ? 'Hide AI Narration' : 'Narrate this Timeline'}
        </button>
      </div>

      {/* Narration Box */}
      {showNarration && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="mt-8 max-w-3xl mx-auto bg-white/40 backdrop-blur-md border border-white/20 rounded-xl p-6 text-blue-900 shadow-lg"
        >
          <p className="text-lg font-medium">Narrator:</p>
          <p className="mt-2 text-sm leading-relaxed">
            In 2025, Brian Njata began a visionary journey—building ecosystems across Web3, climate tech, and AI. From launching FLR Token to engineering ethical systems and smart contracts, each step shaped the infrastructure of tomorrow. By 2026, he led DAO innovation and integrated GPT-native copilots. By 2030, his work shaped global digital governance. This is not just a timeline — it’s a transformation.
          </p>
        </motion.div>
      )}
    </div>
  );
}


'use client';

import { useState, useEffect } from 'react';
import {
  FaCode,
  FaEthereum,
  FaRobot,
  FaSeedling,
  FaChalkboardTeacher,
  FaChartLine,
  FaHandshake,
  FaUserShield,
  FaCogs,
  FaComments,
  FaRocket,
  FaCompass,
  FaCoins,
} from 'react-icons/fa';

import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import FeaturedCard from '@/components/FeaturedCard';
import CategoryToggle from '@/components/CategoryToggle';
import ParticlesOverlay from '@/components/ParticlesOverlay';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

type Service = {
  title: string;
  icon: ReactNode;
  summary: string;
};

const groupedServices: Record<string, Service[]> = {
  Web3: [
    {
      title: 'Smart Contract Development',
      icon: <FaEthereum />,
      summary: 'Custom ERC20/ERC721 contracts with full deployment pipeline and gas optimization.',
    },
    {
      title: 'Token Escrow Systems',
      icon: <FaCoins />,
      summary: 'Blockchain-based escrow systems for digital goods, peer-to-peer platforms, and Web3 apps.',
    },
    {
      title: 'Crypto Token Creation (FLR, Elore)',
      icon: <FaRocket />,
      summary: 'Custom crypto token logic including minting, burning, rewards and on-chain metadata.',
    },
    {
      title: 'Discord Bot Engineering',
      icon: <FaRobot />,
      summary: 'Smart contract + Python/JS Discord bots for ticketing, moderation, and reward flows.',
    },
  ],
  AI: [
    {
      title: 'AI-Powered Chatbots',
      icon: <FaComments />,
      summary: 'Conversational assistants powered by GPT or custom-trained LLMs for support or education.',
    },
    {
      title: 'ML Dashboards & Automations',
      icon: <FaChartLine />,
      summary: 'Data pipelines, real-time visualizations, and alert triggers built in Python.',
    },
  ],
  Climate: [
    {
      title: 'LMS Platforms for Climate',
      icon: <FaChalkboardTeacher />,
      summary: 'Learning systems like Eco-Mentor built from scratch for carbon markets and sustainability.',
    },
    {
      title: 'Sustainable Web App Development',
      icon: <FaSeedling />,
      summary: 'Energy-efficient platforms with climate-conscious UX, green hosting, and accessibility.',
    },
  ],
  Trust: [
    {
      title: 'Trust & Reputation Systems',
      icon: <FaUserShield />,
      summary: 'FLR score systems, identity verification, and transparency tools for digital communities.',
    },
    {
      title: 'Freelance Platform Engineering',
      icon: <FaHandshake />,
      summary: 'Build fully verified freelance platforms with built-in scoring and secure workflows.',
    },
  ],
  'Dev & Mentorship': [
    {
      title: 'Fullstack App Builds',
      icon: <FaCode />,
      summary: 'Complete apps using Next.js, Tailwind, Prisma, Node.js and MongoDB — from MVP to launch.',
    },
    {
      title: 'Tech Recovery Mentorship',
      icon: <FaCompass />,
      summary: 'Coaching for creatives and devs recovering from burnout, overwhelm or existential panic.',
    },
    {
      title: 'Visionary Product Consulting',
      icon: <FaCogs />,
      summary: 'Product and architecture direction for bold, sustainable, mission-aligned ventures.',
    },
  ],
};

const allServicesFlat: (Service & { category: string })[] = Object.entries(groupedServices).flatMap(
  ([category, services]) => services.map((s) => ({ ...s, category }))
);

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isMobile, setIsMobile] = useState(false);
  const [showAllMobile, setShowAllMobile] = useState(false);

  const categories = Object.keys(groupedServices);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const filtered: (Service & { category: string })[] =
    selectedCategory === 'All'
      ? allServicesFlat
      : groupedServices[selectedCategory].map((s) => ({
          ...s,
          category: selectedCategory,
        }));

  const visible = isMobile && !showAllMobile ? filtered.slice(0, 3) : filtered;

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-gradient-to-br from-[#0b0f2f] to-[#091930] text-white relative overflow-hidden">
      <ParticlesOverlay />

      <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center text-blue-100 relative z-10">
        Visionary Services
      </h2>

      <CategoryToggle
        categories={categories}
        selected={selectedCategory}
        onSelect={(cat) => {
          setSelectedCategory(cat);
          setShowAllMobile(false); // reset on category change
        }}
      />

      {selectedCategory !== 'All' && (
        <FeaturedCard services={groupedServices[selectedCategory]} />
      )}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
        }}
        className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 z-10 relative"
      >
        <AnimatePresence>
          {visible.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                summary={service.summary}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Show More button */}
      {isMobile && !showAllMobile && filtered.length > 3 && (
        <div className="flex justify-center mt-8 z-10 relative">
          <button
            onClick={() => setShowAllMobile(true)}
            className="text-white bg-blue-600 px-5 py-2 rounded-full hover:bg-blue-700 transition shadow"
          >
            Show More
          </button>
        </div>
      )}

      <div className="mt-20 flex justify-center z-10 relative">
        <Link
          href="/contact"
          className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition font-medium shadow-lg"
        >
          Start a Project →
        </Link>
      </div>
    </section>
  );
};

export default Services;



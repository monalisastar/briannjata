'use client';

import { useState } from 'react';
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
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type Service = {
  title: string;
  icon: ReactNode;
  summary: string;
};

const groupedServices: Record<string, Service[]> = {
  Web3: [
    { title: 'Smart Contract Development', icon: <FaEthereum />, summary: 'Custom ERC20/ERC721 contracts with full deployment pipeline and gas optimization.' },
    { title: 'Token Escrow Systems', icon: <FaCoins />, summary: 'Blockchain-based escrow systems for digital goods, peer-to-peer platforms, and Web3 apps.' },
    { title: 'Crypto Token Creation (FLR, Elore)', icon: <FaRocket />, summary: 'Custom crypto token logic including minting, burning, rewards and on-chain metadata.' },
    { title: 'Discord Bot Engineering', icon: <FaRobot />, summary: 'Smart contract + Python/JS Discord bots for ticketing, moderation, and reward flows.' },
  ],
  AI: [
    { title: 'AI-Powered Chatbots', icon: <FaComments />, summary: 'Conversational assistants powered by GPT or custom-trained LLMs for support or education.' },
    { title: 'ML Dashboards & Automations', icon: <FaChartLine />, summary: 'Data pipelines, real-time visualizations, and alert triggers built in Python.' },
  ],
  Climate: [
    { title: 'LMS Platforms for Climate', icon: <FaChalkboardTeacher />, summary: 'Learning systems like Eco-Mentor built from scratch for carbon markets and sustainability.' },
    { title: 'Sustainable Web App Development', icon: <FaSeedling />, summary: 'Energy-efficient platforms with climate-conscious UX, green hosting, and accessibility.' },
  ],
  Trust: [
    { title: 'Trust & Reputation Systems', icon: <FaUserShield />, summary: 'FLR score systems, identity verification, and transparency tools for digital communities.' },
    { title: 'Freelance Platform Engineering', icon: <FaHandshake />, summary: 'Build fully verified freelance platforms with built-in scoring and secure workflows.' },
  ],
  'Dev & Mentorship': [
    { title: 'Fullstack App Builds', icon: <FaCode />, summary: 'Complete apps using Next.js, Tailwind, Prisma, Node.js and MongoDB — from MVP to launch.' },
    { title: 'Tech Recovery Mentorship', icon: <FaCompass />, summary: 'Coaching for creatives and devs recovering from burnout, overwhelm or existential panic.' },
    { title: 'Visionary Product Consulting', icon: <FaCogs />, summary: 'Product and architecture direction for bold, sustainable, mission-aligned ventures.' },
  ],
};

const categoryBanners = {
  Web3: {
    title: 'Web3 Innovation',
    tagline: 'Decentralize your future. Build trustless apps.',
  },
  AI: {
    title: 'AI & Automations',
    tagline: 'Empower your systems with intelligence.',
  },
  Climate: {
    title: 'Climate Tech',
    tagline: 'Code with conscience. Build for the planet.',
  },
  Trust: {
    title: 'Digital Trust Systems',
    tagline: 'Transparent, verified, secure.',
  },
  'Dev & Mentorship': {
    title: 'Build & Lead',
    tagline: 'From MVPs to mentorship — we ship.',
  },
};

type CategoryKey = keyof typeof categoryBanners;

const allServicesFlat: (Service & { category: string })[] = Object.entries(groupedServices).flatMap(
  ([category, services]) => services.map((s) => ({ ...s, category }))
);

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | CategoryKey>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const servicesPerPage = 6;
  const categories = Object.keys(groupedServices);

  const services = selectedCategory === 'All'
    ? allServicesFlat
    : groupedServices[selectedCategory].map((s) => ({ ...s, category: selectedCategory }));

  const filteredServices = services.filter(
    (s) =>
      s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredServices.length / servicesPerPage);
  const paginatedServices = filteredServices.slice(
    (currentPage - 1) * servicesPerPage,
    currentPage * servicesPerPage
  );

  const banner = selectedCategory !== 'All' ? categoryBanners[selectedCategory] : null;

  return (
    <section className="w-full text-white relative overflow-hidden bg-[#040c2c] min-h-screen">
      <ParticlesOverlay />

      <div className="relative z-10">
        <div className="bg-[#0a0f2c]/80 backdrop-blur-md border border-blue-400/20 shadow-lg rounded-2xl px-6 md:px-12 py-12 text-center mx-4 md:mx-12 mt-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-2">
            {banner ? banner.title : 'Visionary Services'}
          </h2>
          <p className="text-lg md:text-xl opacity-80">
            {banner ? banner.tagline : 'Explore our full offering across future disciplines.'}
          </p>
        </div>

        <div className="z-10 relative py-6 px-6 md:px-12">
          <CategoryToggle
            categories={categories}
            selected={selectedCategory}
            onSelect={(cat) => setSelectedCategory(cat as CategoryKey | 'All')}
          />

          <div className="mt-6 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full px-4 py-2 rounded-xl bg-[#0d183c] text-white border border-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {selectedCategory !== 'All' && (
          <div className="px-6 md:px-12 pb-10">
            <FeaturedCard services={groupedServices[selectedCategory]} />
          </div>
        )}

        <div className="bg-[#0a0f2c]/80 backdrop-blur-md border border-blue-400/20 shadow-xl rounded-2xl px-6 md:px-12 py-12 mt-10 mx-4 md:mx-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
            }}
            className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {paginatedServices.map((service, idx) => (
              <motion.div key={idx} variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 30 } }}>
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </motion.div>

          {filteredServices.length > servicesPerPage && (
            <div className="flex justify-center gap-4 mt-10">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-blue-600 rounded-lg disabled:opacity-40"
              >
                Prev
              </button>
              <span className="text-lg font-medium">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-blue-600 rounded-lg disabled:opacity-40"
              >
                Next
              </button>
            </div>
          )}
        </div>

        <div className="mt-20 flex justify-center px-6 md:px-12 pb-24">
          <Link
            href="/contact"
            className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition font-medium shadow-lg"
          >
            Start a Project →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;




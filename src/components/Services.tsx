'use client';

import { ReactNode } from 'react';
import {
  FaCode,
  FaChartLine,
  FaRobot,
  FaHandshake,
  FaCogs,
  FaEthereum,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ParticlesOverlay from '@/components/ParticlesOverlay';
import ServiceCard from '@/components/ServiceCard';

type Service = {
  title: string;
  icon: ReactNode;
  summary: string;
};

const services: Service[] = [
  {
    title: 'Production Web Applications',
    icon: <FaCode />,
    summary:
      'Design and build reliable, production-ready web applications using modern frameworks, clean architecture, and scalable data models.',
  },
  {
    title: 'Platforms & Internal Tools',
    icon: <FaChartLine />,
    summary:
      'Custom dashboards, admin panels, and internal tools built to improve operations, visibility, and decision-making.',
  },
  {
    title: 'Automation & AI-Assisted Systems',
    icon: <FaRobot />,
    summary:
      'Workflow automation and AI-assisted tools that reduce manual work, streamline processes, and improve efficiency.',
  },
  {
    title: 'Marketplace & Trust-Based Platforms',
    icon: <FaHandshake />,
    summary:
      'Engineering of platforms with user roles, messaging, trust mechanisms, and secure transaction workflows.',
  },
  {
    title: 'Technical Consulting & Architecture Guidance',
    icon: <FaCogs />,
    summary:
      'System design guidance, architectural reviews, and technical direction for founders and early-stage teams.',
  },
  {
    title: 'Smart Contract Development (Junior / Applied Practice)',
    icon: <FaEthereum />,
    summary:
      'Foundational smart contract development including ERC-20 tokens, local testing, and testnet deployments for low-risk projects and prototypes.',
  },
];

const Services = () => {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 bg-[#0B0F1C] text-white overflow-hidden">
      <ParticlesOverlay />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl md:text-5xl font-bold">
            Services
          </h2>
          <p className="mt-4 text-blue-100/80 max-w-2xl mx-auto">
            Focused engineering services for building dependable systems,
            from product foundations to scalable platforms.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                summary={service.summary}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="mt-20 flex justify-center">
          <Link
            href="/contact"
            className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-xl font-medium shadow-lg transition"
          >
            Start a Project →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;

'use client';

import { ReactNode } from 'react';
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaShieldAlt,
  FaEthereum,
  FaPython,
} from 'react-icons/fa';

type Capability = {
  title: string;
  icon: ReactNode;
  points: string[];
};

const capabilities: Capability[] = [
  {
    title: 'Frontend Engineering',
    icon: <FaCode />,
    points: [
      'React, Next.js, TypeScript',
      'Performance optimization & code splitting',
      'Responsive design & accessibility',
      'Animation & micro-interactions',
      'State management at scale',
    ],
  },
  {
    title: 'Backend Systems',
    icon: <FaServer />,
    points: [
      'RESTful & GraphQL APIs',
      'Authentication & authorization',
      'Real-time communication (WebSockets)',
      'Transaction handling & data integrity',
      'Background jobs & message queues',
      'Python services for automation, scripting, and workflows',
    ],
  },
  {
    title: 'Databases & Data Modeling',
    icon: <FaDatabase />,
    points: [
      'PostgreSQL, MySQL, MongoDB',
      'Schema design & normalization',
      'Query optimization & indexing',
      'Migrations & version control',
      'Caching strategies (Redis)',
    ],
  },
  {
    title: 'Security, Scalability & Maintainability',
    icon: <FaShieldAlt />,
    points: [
      'Security best practices (OWASP)',
      'Horizontal & vertical scaling',
      'Clean architecture & design patterns',
      'Testing strategies (unit, integration, e2e)',
      'CI/CD pipelines & deployment automation',
    ],
  },
  {
    title: 'Smart Contracts (Learning & Applied Practice)',
    icon: <FaEthereum />,
    points: [
      'Solidity fundamentals & contract structure',
      'ERC-20 token development (minting, transfers)',
      'Local testing environments (Hardhat)',
      'Deployment workflows & environment setup',
      'Awareness of common smart contract security risks',
    ],
  },
  {
    title: 'Python Automation & Data',
    icon: <FaPython />,
    points: [
      'Automation scripts & internal tools',
      'Data processing & ETL-style workflows',
      'Bots, background jobs, and schedulers',
      'APIs & backend utilities built with Python',
      'Used alongside web platforms and infrastructure',
    ],
  },
];

const EngineeringCapabilities = () => {
  return (
    <section className="w-full py-24 px-6 md:px-12 bg-gradient-to-br from-[#0B0F1C] via-[#101828] to-[#1B2735] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Engineering Capabilities
          </h2>
          <p className="mt-3 text-blue-100/70 max-w-2xl">
            Production-focused engineering across frontend, backend, data,
            automation, and emerging on-chain systems.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="
                rounded-2xl
                bg-white/5
                border border-blue-300/20
                backdrop-blur-md
                p-8
                transition
                hover:border-blue-300/40
                hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]
              "
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-500/15 text-blue-300">
                  {cap.icon}
                </div>
                <h3 className="text-xl font-semibold">
                  {cap.title}
                </h3>
              </div>

              <ul className="space-y-3 text-blue-100/75 text-sm">
                {cap.points.map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-blue-300/40">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringCapabilities;

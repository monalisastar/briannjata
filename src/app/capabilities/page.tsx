'use client';

import { motion } from 'framer-motion';
import {
  Layers,
  Globe,
  ShieldCheck,
  Bot,
  Database,
  Link as LinkIcon,
} from 'lucide-react';

const capabilities = [
  {
    title: 'Systems Architecture & Design',
    description:
      'Designing maintainable software systems with clear boundaries, predictable behavior, and long-term scalability.',
    scope: [
      'Service decomposition',
      'Data modeling',
      'API design',
      'Failure-aware architecture',
    ],
    icon: Layers,
  },
  {
    title: 'Production Web Applications',
    description:
      'End-to-end development of user-facing web platforms with authentication, state management, and performance constraints.',
    scope: [
      'Next.js / React',
      'Authentication & authorization',
      'Responsive UI',
      'Performance optimization',
    ],
    icon: Globe,
  },
  {
    title: 'Platforms & Internal Tools',
    description:
      'Operational dashboards, admin systems, and internal platforms designed for clarity, control, and reliability.',
    scope: [
      'Role-based access',
      'Admin workflows',
      'Audit visibility',
      'Operational tooling',
    ],
    icon: Database,
  },
  {
    title: 'Marketplace & Trust-Based Systems',
    description:
      'Multi-party platforms involving payments, escrow-style logic, moderation flows, and reputation mechanisms.',
    scope: [
      'Deal lifecycle logic',
      'Escrow-style flows',
      'Messaging per transaction',
      'Trust & dispute handling',
    ],
    icon: ShieldCheck,
  },
  {
    title: 'Automation & AI-Assisted Systems',
    description:
      'Background jobs, scheduled tasks, and AI-assisted tooling that reduce manual work and operational friction.',
    scope: [
      'Job queues',
      'Integrations',
      'Decision support',
      'AI-assisted workflows',
    ],
    icon: Bot,
  },
  {
    title: 'Selective Blockchain Integration',
    description:
      'Careful use of smart contracts where decentralization adds value, with most complexity kept off-chain.',
    scope: [
      'Wallet interactions',
      'Smart contract integration',
      'On-chain boundaries',
      'Off-chain validation',
    ],
    icon: LinkIcon,
  },
];

export default function CapabilitiesPage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-[#0B0F1C] via-[#101828] to-[#1B2735] px-6 md:px-12 py-24 text-white">
      <section className="max-w-7xl mx-auto space-y-24">

        {/* Intro */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Capabilities
          </h1>
          <p className="text-lg text-blue-100/90 leading-relaxed">
            This outlines the scope of systems I design and bring to production,
            from foundational architecture to deployed platforms. Each capability
            reflects hands-on involvement in system design, integration, and delivery.
          </p>
        </motion.section>

        {/* Capability Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-blue-400/40 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-400/20">
                    <Icon className="w-6 h-6 text-blue-300" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {cap.title}
                  </h3>
                </div>

                <p className="text-sm text-blue-100/80 leading-relaxed mb-5">
                  {cap.description}
                </p>

                <ul className="space-y-2 text-sm text-blue-100/70">
                  {cap.scope.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </section>

      </section>
    </main>
  );
}

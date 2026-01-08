'use client';

import { motion } from 'framer-motion';

export default function SystemsPage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-[#0B0F1C] via-[#101828] to-[#1B2735] px-6 md:px-12 py-24 text-white">
      <section className="max-w-7xl mx-auto space-y-24">

        {/* Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Systems
          </h1>
          <p className="text-lg text-blue-100/90 leading-relaxed">
            I design and build software systems with a focus on reliability,
            clarity, and long-term maintainability. My work spans user-facing
            applications, backend services, data workflows, automation, and
            early-stage on-chain components — with careful attention to how
            parts interact under real-world conditions.
          </p>
        </motion.section>

        {/* Core System Types */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: 'Production Web Applications',
              desc: 'User-facing systems with authentication, state management, performance constraints, and accessibility considerations.',
            },
            {
              title: 'Platforms & Internal Tools',
              desc: 'Admin systems, dashboards, and operational tools with role-based access and controlled workflows.',
            },
            {
              title: 'Automation & AI-Assisted Systems',
              desc: 'Background jobs, integrations, scheduled tasks, and decision-support tooling to reduce manual work.',
            },
            {
              title: 'Marketplace & Trust-Based Systems',
              desc: 'Platforms involving payments, escrow concepts, moderation flows, and reputation signals.',
            },
            {
              title: 'On-Chain Experiments (Junior)',
              desc: 'Token contracts, local testing environments, and selective smart contract usage with most logic kept off-chain.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-sm text-blue-100/80 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </section>

        {/* Architecture Diagram — System Overview */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">
            System Architecture Overview
          </h2>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 overflow-x-auto">
            <svg
              viewBox="0 0 800 260"
              className="w-full min-w-[700px] h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Boxes */}
              {[
                { x: 40, label: 'User' },
                { x: 180, label: 'Frontend\n(Web / Mobile)' },
                { x: 360, label: 'Backend API' },
                { x: 540, label: 'Data Layer' },
                { x: 680, label: 'Workers /\nIntegrations' },
              ].map((b, i) => (
                <g key={i}>
                  <rect
                    x={b.x}
                    y={80}
                    width={120}
                    height={60}
                    rx={10}
                    stroke="rgba(59,130,246,0.6)"
                    fill="transparent"
                  />
                  <text
                    x={b.x + 60}
                    y={110}
                    textAnchor="middle"
                    fill="rgba(255,255,255,0.85)"
                    fontSize="12"
                  >
                    {b.label}
                  </text>
                </g>
              ))}

              {/* Arrows */}
              {[100, 260, 440, 620].map((x, i) => (
                <line
                  key={i}
                  x1={x}
                  y1={110}
                  x2={x + 80}
                  y2={110}
                  stroke="rgba(59,130,246,0.5)"
                  strokeDasharray="6 8"
                />
              ))}
            </svg>
          </div>
        </section>

        {/* Marketplace / Trust Flow */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">
            Marketplace & Trust Flow
          </h2>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 overflow-x-auto">
            <svg
              viewBox="0 0 700 260"
              className="w-full min-w-[600px] h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              {[
                { x: 40, label: 'User A' },
                { x: 200, label: 'Platform' },
                { x: 380, label: 'Escrow /\nRules' },
                { x: 560, label: 'User B' },
              ].map((b, i) => (
                <g key={i}>
                  <rect
                    x={b.x}
                    y={90}
                    width={120}
                    height={60}
                    rx={10}
                    stroke="rgba(59,130,246,0.6)"
                    fill="transparent"
                  />
                  <text
                    x={b.x + 60}
                    y={120}
                    textAnchor="middle"
                    fill="rgba(255,255,255,0.85)"
                    fontSize="12"
                  >
                    {b.label}
                  </text>
                </g>
              ))}

              {[160, 340, 520].map((x, i) => (
                <line
                  key={i}
                  x1={x}
                  y1={120}
                  x2={x + 80}
                  y2={120}
                  stroke="rgba(59,130,246,0.5)"
                  strokeDasharray="6 8"
                />
              ))}
            </svg>
          </div>
        </section>

        {/* On-chain Boundary */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">
            On-Chain Boundary (Selective Use)
          </h2>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 overflow-x-auto">
            <svg
              viewBox="0 0 700 260"
              className="w-full min-w-[600px] h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              {[
                { x: 40, label: 'Wallet' },
                { x: 200, label: 'Frontend' },
                { x: 360, label: 'Backend\n(Validation)' },
                { x: 540, label: 'Smart Contract\n(Limited Scope)' },
              ].map((b, i) => (
                <g key={i}>
                  <rect
                    x={b.x}
                    y={90}
                    width={140}
                    height={60}
                    rx={10}
                    stroke="rgba(59,130,246,0.6)"
                    fill="transparent"
                  />
                  <text
                    x={b.x + 70}
                    y={120}
                    textAnchor="middle"
                    fill="rgba(255,255,255,0.85)"
                    fontSize="12"
                  >
                    {b.label}
                  </text>
                </g>
              ))}

              {[180, 340, 520].map((x, i) => (
                <line
                  key={i}
                  x1={x}
                  y1={120}
                  x2={x + 60}
                  y2={120}
                  stroke="rgba(59,130,246,0.5)"
                  strokeDasharray="6 8"
                />
              ))}
            </svg>
          </div>
        </section>

        {/* Trade-offs */}
        <section className="bg-white/5 border border-white/10 rounded-2xl p-10">
          <h2 className="text-2xl font-semibold mb-6">
            Trade-offs & Decisions
          </h2>
          <ul className="space-y-3 text-blue-100/85 text-sm">
            <li>• Choosing simplicity over premature abstraction</li>
            <li>• Keeping critical business logic off-chain when appropriate</li>
            <li>• Shipping iteratively instead of over-designing early</li>
            <li>• Prioritizing clarity and debuggability over cleverness</li>
            <li>• Avoiding automation when it increases fragility</li>
          </ul>
        </section>

        {/* Closing */}
        <section className="max-w-3xl">
          <p className="text-blue-100/90 leading-relaxed">
            I treat systems as living structures. I revisit architecture as
            usage grows, refactor when complexity increases, and evolve designs
            based on real constraints rather than assumptions. My goal is not
            novelty — it’s software that continues to work as requirements change.
          </p>
        </section>

      </section>
    </main>
  );
}

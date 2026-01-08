'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutClient() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-[#0B0F1C] via-[#101828] to-[#1B2735] px-6 md:px-12 py-24 text-white">
      <section className="max-w-6xl mx-auto space-y-20">

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          <Image
            src="/brian.jpg"
            alt="Brian Njata"
            width={140}
            height={140}
            className="rounded-full border border-white/20 object-cover"
          />

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About Brian
            </h1>
            <p className="text-lg text-blue-100/90 leading-relaxed">
              I’m an <span className="font-medium text-blue-300">AI-Native Product Builder</span>
              focused on designing and shipping dependable software systems.
              My work spans frontend interfaces, backend services, data models,
              and automation workflows, with a strong emphasis on clarity,
              scalability, and long-term maintainability.
            </p>
          </div>
        </motion.div>

        {/* How I Work */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-2xl font-semibold mb-4">
            How I Work
          </h2>
          <p className="text-blue-100/90 leading-relaxed mb-4">
            I care deeply about clarity, maintainability, and systems that behave
            predictably under real-world conditions. My approach emphasizes
            architectural intent, sensible trade-offs, and building systems that
            can evolve without unnecessary complexity.
          </p>
          <p className="text-blue-100/80 leading-relaxed">
            I contribute across the stack — from data modeling and APIs to
            frontend delivery and deployment workflows — while using AI-assisted
            development to accelerate iteration and execution.
          </p>
        </motion.div>

        {/* Systems */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-3">
              Systems I Build
            </h3>
            <ul className="space-y-2 text-blue-100/85 text-sm">
              <li>• Production web applications</li>
              <li>• Platforms and internal tools</li>
              <li>• Automation and AI-assisted systems</li>
              <li>• Marketplace and trust-based platforms</li>
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-3">
              Emerging Focus
            </h3>
            <p className="text-blue-100/85 text-sm leading-relaxed">
              I’m currently studying smart contract development and Web3 system
              design, with a junior, applied focus on safe integration patterns
              and understanding where decentralization adds real value.
            </p>
          </div>
        </motion.div>

      </section>
    </main>
  );
}

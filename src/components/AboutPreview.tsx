'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const AboutPreview = () => {
  return (
    <section className="relative w-full bg-[#0B0F1C] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-24">

        {/* Section label */}
        <div className="mb-10 text-sm uppercase tracking-widest text-blue-300/60">
          About
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="
            relative
            bg-white/5
            border border-blue-400/20
            backdrop-blur-md
            rounded-2xl
            p-8 md:p-12
            flex flex-col md:flex-row
            items-center gap-12
            shadow-[0_0_40px_rgba(59,130,246,0.25)]
          "
        >
          {/* Ambient glow */}
          <div
            aria-hidden
            className="
              absolute -inset-1
              rounded-2xl
              bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20
              blur-2xl
              opacity-60
              pointer-events-none
            "
          />

          {/* Profile image */}
          <div className="relative z-10 w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border border-blue-300/30 shadow-[0_0_25px_rgba(59,130,246,0.35)] shrink-0">
            <Image
              src="/brian.jpg"
              alt="Brian Njata"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Text content */}
          <div className="relative z-10 text-center md:text-left max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 leading-tight">
              Hi, I’m Brian Njata
            </h2>

            <p className="text-sm uppercase tracking-widest text-blue-400/70 mb-4">
              AI-Native Product Builder
            </p>

            <p className="text-lg text-blue-100/90 leading-relaxed">
              I enjoy turning ideas into dependable software people can actually use.
              My work spans websites, web applications, mobile apps, and automation
              systems, with a strong focus on clarity, scalability, and long-term
              maintainability.
            </p>

            <p className="text-lg text-blue-100/80 leading-relaxed mt-4">
              Beyond building products, I’m deeply interested in how technology can be
              applied responsibly—particularly in areas like digital infrastructure,
              sustainability, and blockchain systems. I’m currently studying smart
              contract development, with a focus on understanding how decentralized
              technologies can be designed safely and applied in real-world contexts.
            </p>

            <Link
              href="/about"
              className="inline-block mt-6 text-blue-400 hover:text-blue-300 transition font-medium"
            >
              Read more about my background →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;

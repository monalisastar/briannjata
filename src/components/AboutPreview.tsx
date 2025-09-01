'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const AboutPreview = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12 flex justify-center relative overflow-hidden bg-gradient-to-br from-[#0b0f2f] to-[#091930]">
      {/* Floating identity badge */}
      <div className="absolute top-6 left-6 z-10 bg-blue-500/10 text-blue-100 border border-blue-300/20 backdrop-blur-md px-4 py-1 rounded-full text-sm shadow-md">
        Visionary Engineer · FLR | Eco-Mentor | Freelancers Palace
      </div>

      {/* Motion wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-blue-500/10 backdrop-blur-2xl border border-blue-300/20 shadow-[0_0_60px_#3b82f6] rounded-3xl p-8 w-full max-w-5xl flex flex-col md:flex-row items-center gap-10 z-10"
      >
        {/* Profile Photo with glow */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-blue-300/30 shadow-[0_0_30px_#3b82f6] hover:shadow-[0_0_50px_#60a5fa] transition"
        >
          <Image
            src="/brian.jpg"
            alt="Brian Njata profile photo"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Text content */}
        <div className="text-center md:text-left text-blue-100">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Meet Brian Njata
          </h2>

          <p className="text-md md:text-lg text-blue-100/90 leading-relaxed max-w-2xl">
            I’m Brian Njata — a full-stack engineer, founder, and visionary building sustainable digital systems at the intersection of
            <span className="font-semibold text-white"> AI, Climate Tech, and Web3.</span> With roots in
            <span className="font-medium"> Project Management (JKUAT)</span> and
            <span className="font-medium"> Law (MKU)</span>, I use code as a bridge between innovation and impact — crafting scalable tools that serve people and planet.
          </p>

          <Link
            href="/about"
            className="mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded-xl hover:bg-blue-600 transition font-medium shadow-md"
          >
            Read More
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutPreview;


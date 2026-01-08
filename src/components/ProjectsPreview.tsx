'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ParticleBackground from '@/components/ParticlesOverlay';

const projects = [
  {
    title: 'Freelancers Palace',
    description:
      'End-to-end freelance platform with integrated escrow, reputation logic, and role-based workflows.',
    tech: ['Next.js', 'MongoDB', 'Prisma', 'Smart Contracts'],
    category: 'Web Platform',
    live: 'https://www.freelancersverse.com',
    code: 'https://github.com/monalisastar/freelancepalace.com',
    image: '/freelancers-palace.png',
    status: 'live',
  },
  {
    title: 'Eco-Mentor LMS',
    description:
      'Learning management system designed for structured climate and carbon-market education.',
    tech: ['Next.js', 'TailwindCSS', 'LMS Engine'],
    category: 'Education Platform',
    live: 'https://ecomentor.green',
    code: '',
    image: '/eco-mentor.png',
    status: 'live',
  },
  {
    title: 'FLR Escrow',
    description:
      'Escrow system combining smart-contract logic with API-driven transaction workflows.',
    tech: ['Solidity', 'Next.js', 'Node.js'],
    category: 'Escrow System',
    live: '',
    code: '',
    image: '/flr-escrow.png',
    status: 'coming-soon',
  },
];

export default function ProjectsPreview() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'free-snap',
    slides: { perView: 1, spacing: 16 },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 2, spacing: 24 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 28 },
      },
    },
  });

  return (
    <section className="relative w-full py-24 px-6 md:px-12 bg-[#0e1629] text-white overflow-hidden">
      <ParticleBackground />

      {/* Grid texture */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle,_rgba(255,255,255,0.04)_1px,_transparent_1px)] [background-size:20px_20px]" />

      {/* Badge */}
      <div className="absolute top-6 left-6 z-10 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1 rounded-full text-sm shadow">
        End-to-end product engineering
      </div>

      <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center relative z-10">
        Production systems I’ve designed and built
      </h2>

      {/* Slider */}
      <div ref={sliderRef} className="keen-slider z-10 relative">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="keen-slider__slide"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-[440px] bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 flex flex-col justify-between shadow-lg">

              {/* Coming Soon badge */}
              {project.status === 'coming-soon' && (
                <div className="absolute top-4 right-4 z-20 bg-yellow-400/90 text-black text-xs font-semibold px-3 py-1 rounded-full">
                  Coming Soon
                </div>
              )}

              {/* Image */}
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={`object-cover ${
                    project.status === 'coming-soon' ? 'opacity-60' : ''
                  }`}
                />
              </div>

              {/* Meta */}
              <div>
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="text-xs text-white/60 mt-1">
                  {project.category}
                </p>

                <p className="text-sm text-white/80 mt-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-white/20 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4 mt-6">
                {project.status === 'live' && project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    className="text-sm text-blue-400 hover:underline"
                  >
                    View platform
                  </Link>
                )}

                {project.status === 'coming-soon' && (
                  <span className="text-sm text-yellow-300">
                    Launch in progress
                  </span>
                )}

                {project.code && (
                  <Link
                    href={project.code}
                    target="_blank"
                    className="text-sm text-green-400 hover:underline"
                  >
                    View code
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-16 z-10 relative">
        <Link
          href="/projects"
          className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-xl font-medium shadow-md transition"
        >
          View all projects
        </Link>
      </div>
    </section>
  );
}

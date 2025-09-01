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
    description: 'Futuristic freelance platform with blockchain escrow and FLR reputation tokens.',
    tech: ['Next.js', 'MongoDB', 'Prisma', 'Smart Contracts'],
    category: 'Web3 Platform',
    live: 'https://www.freelancersverse.com',
    code: 'https://github.com/monalisastar/freelancepalace.com',
    image: '/freelancers-palace.png',
  },
  {
    title: 'Eco-Mentor LMS',
    description: 'Education platform for GHG accounting and carbon market literacy.',
    tech: ['Next.js', 'TailwindCSS', 'LMS Engine'],
    category: 'Climate LMS',
    live: 'https://ecomentor.green',
    code: '',
    image: '/eco-mentor.png',
  },
  {
    title: 'FLR Escrow',
    description: 'Trustless escrow with smart contract automation and real-time APIs.',
    tech: ['Solidity', 'Next.js', 'Node.js'],
    category: 'Web3 Escrow',
    live: 'https://www.freelancersverse.com/escrow',
    code: '',
    image: '/flr-escrow..png',
  },
];

export default function ProjectsPreview() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'free-snap',
    slides: {
      perView: 1,
      spacing: 16,
    },
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

      <div className="absolute inset-0 z-0 pointer-events-none animate-pulse bg-[radial-gradient(circle,_rgba(255,255,255,0.04)_1px,_transparent_1px)] [background-size:20px_20px]" />

      <div className="absolute top-6 left-6 z-10 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1 rounded-full text-sm text-white shadow">
        Web3 · Education · Trust Systems
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center z-10 relative">
        Featured Projects
      </h2>

      <div ref={sliderRef} className="keen-slider z-10 relative">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="keen-slider__slide group perspective"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="card3d w-full h-[440px]">
              <div className="front bg-white/5 backdrop-blur-md border border-white/10 rounded-xl absolute inset-0 p-4 flex flex-col justify-start shadow-lg">
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-bold text-white">{project.title}</h3>
                <p className="text-xs text-white/60 mt-1">{project.category}</p>
              </div>

              <div className="back bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl absolute inset-0 p-6 flex flex-col justify-between shadow-lg">
                <div>
                  <p className="text-sm text-white mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      className="text-sm text-blue-400 hover:underline"
                    >
                      🔗 Live
                    </Link>
                  )}
                  {project.code && (
                    <Link
                      href={project.code}
                      target="_blank"
                      className="text-sm text-green-400 hover:underline"
                    >
                      💻 Code
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-16 z-10 relative">
        <Link
          href="/projects"
          className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-medium shadow-md transition"
        >
          View All Projects
        </Link>
      </div>
    </section>
  );
}


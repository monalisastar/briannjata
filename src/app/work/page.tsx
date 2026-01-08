'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';

import { projects, categories, Project } from '@/data/projects';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';

const ITEMS_PER_PAGE = 6;

export default function ProjectsPage() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchFilter = filter === 'All' || p.category === filter;
      const matchSearch =
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.tech.join(' ').toLowerCase().includes(search.toLowerCase());

      return matchFilter && matchSearch;
    });
  }, [filter, search]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  return (
    <main className="relative min-h-screen w-full bg-gradient-to-br from-[#0B0F1C] via-[#101828] to-[#1B2735] text-white px-6 md:px-12 py-20 overflow-hidden">
      <Particles
        className="absolute inset-0 z-0"
        init={particlesInit}
        options={{
          fullScreen: false,
          particles: {
            number: { value: 40 },
            size: { value: 2 },
            move: { enable: true, speed: 0.4 },
            links: {
              enable: true,
              distance: 140,
              color: '#3b82f6',
              opacity: 0.3,
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'repulse' },
            },
          },
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Selected Systems & Production Work
        </h1>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8">
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setVisibleCount(ITEMS_PER_PAGE);
            }}
            placeholder="Search systems, tools, or technologies…"
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setVisibleCount(ITEMS_PER_PAGE);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-1.5 text-sm rounded-full transition ${
                filter === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <ProjectCard
              key={`${project.title}-${project.category}`}
              project={project}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>

        {/* Load more */}
        {visibleProjects.length < filteredProjects.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() =>
                setVisibleCount((prev) => prev + ITEMS_PER_PAGE)
              }
              className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              Load more
            </button>
          </div>
        )}
      </div>

      {selected && (
        <ProjectModal
          project={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </main>
  );
}

'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
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

  const particlesInit = async (main: Engine) => {
    await loadFull(main);
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

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  return (
    <main className="relative min-h-screen w-full bg-gradient-to-br from-[#030e3d] via-[#05174f] to-[#071e64] text-white px-4 md:px-8 py-16 overflow-hidden print:bg-white print:text-black print:px-4 print:py-8 print:shadow-none print:max-w-[900px] print:mx-auto">
      <Particles
        className="absolute inset-0 z-0 print:hidden"
        init={particlesInit}
        options={{
          fullScreen: false,
          particles: {
            number: { value: 50 },
            size: { value: 2 },
            move: { enable: true, speed: 0.6 },
            links: { enable: true, distance: 130, color: '#3b82f6' }, // subtle blue
          },
          interactivity: {
            events: { onHover: { enable: true, mode: 'repulse' } },
          },
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 print:text-center print:mb-6">
          Projects & Ventures
        </h1>

        {/* Search Input */}
        <div className="max-w-md mx-auto mb-6">
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setVisibleCount(ITEMS_PER_PAGE);
            }}
            placeholder="Search projects..."
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10 print:hidden">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setVisibleCount(ITEMS_PER_PAGE);
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-1.5 text-xs md:text-sm font-medium rounded-full transition-all duration-200 ${
                filter === cat
                  ? 'bg-blue-700 text-white'
                  : 'bg-white/20 hover:bg-white/30 text-white'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>

        {/* Load More */}
        {visibleProjects.length < filteredProjects.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={handleLoadMore}
              className="px-6 py-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </main>
  );
}


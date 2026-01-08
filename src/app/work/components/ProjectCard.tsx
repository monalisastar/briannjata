'use client';

import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className="relative bg-blue-900/40 border border-blue-400/30 backdrop-blur-md rounded-2xl p-5 shadow-lg cursor-pointer transition-all hover:shadow-2xl print:cursor-default"
      onClick={onClick}
    >
      {project.comingSoon && (
        <div className="absolute top-2 right-2 text-[10px] bg-yellow-500 text-white px-2 py-0.5 rounded-full uppercase">
          Coming Soon
        </div>
      )}

      <div className="relative w-full h-40 md:h-48 rounded-xl overflow-hidden mb-4 shadow-md">
        <Image
          src={Array.isArray(project.banner) ? project.banner[0] : project.banner}
          alt={`${project.title} banner`}
          fill
          className="object-cover"
          priority
        />
      </div>

      <span className="text-xs bg-white/10 text-white px-3 py-1 rounded-full uppercase tracking-wide inline-block mb-2">
        {project.category}
      </span>

      <h2 className="text-lg md:text-xl font-semibold mb-1">{project.title}</h2>
      <p className="text-sm text-white/80 line-clamp-3">{project.description}</p>
    </motion.div>
  );
};

export default ProjectCard;

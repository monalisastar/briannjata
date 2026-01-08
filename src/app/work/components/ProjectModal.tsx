'use client';

import { FC } from 'react';
import Image from 'next/image';
import { Project } from '@/data/projects';
import { motion } from 'framer-motion';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: FC<ProjectModalProps> = ({ project, onClose }) => {
  const banners = Array.isArray(project.banner) ? project.banner : [project.banner];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4 sm:px-6 print:hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="bg-white max-w-lg w-full rounded-xl shadow-2xl p-6 relative overflow-y-auto max-h-[90vh]"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
        >
          ✕
        </button>

        {/* Carousel or Static Banner */}
        <div className="relative w-full h-52 rounded-lg overflow-hidden mb-4">
          {banners.length > 1 ? (
            <div className="flex overflow-x-auto space-x-4 snap-x snap-mandatory scroll-smooth scrollbar-hide">
              {banners.map((src, i) => (
                <div
                  key={i}
                  className="relative min-w-full h-52 rounded-lg overflow-hidden snap-center shrink-0"
                >
                  <Image src={src} alt={`Slide ${i + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          ) : (
            <Image src={banners[0]} alt={`${project.title} banner`} fill className="object-cover" />
          )}
        </div>

        <span className="text-xs bg-black text-white px-3 py-1 rounded-full uppercase tracking-wide inline-block mb-3">
          {project.category}
        </span>

        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
        <p className="text-sm text-gray-800 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 text-xs mb-4">
          {project.tech.map((tech, i) => (
            <span key={i} className="bg-black text-white px-2 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-2 flex-wrap">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white px-4 py-2 text-xs rounded-full hover:bg-blue-800 transition"
            >
              View Live
            </a>
          )}
          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-4 py-2 text-xs rounded-full hover:bg-black transition"
            >
              View Code
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectModal;

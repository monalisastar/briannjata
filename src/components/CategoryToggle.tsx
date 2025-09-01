'use client';

import { motion } from 'framer-motion';

type CategoryToggleProps = {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
};

const CategoryToggle = ({ categories, selected, onSelect }: CategoryToggleProps) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12 z-10 relative">
      {['All', ...categories].map((category) => (
        <motion.button
          key={category}
          onClick={() => onSelect(category)}
          whileTap={{ scale: 0.95 }}
          className={`px-5 py-2 rounded-full border text-sm font-medium backdrop-blur-md transition
            ${
              selected === category
                ? 'bg-blue-500 text-white border-blue-500'
                : 'bg-blue-500/10 text-blue-100 border-blue-300/30 hover:bg-blue-500/20'
            }`}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
};

export default CategoryToggle;


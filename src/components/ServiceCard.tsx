'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  summary: string;
};

const ServiceCard = ({ icon, title, summary }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-blue-500/10 backdrop-blur-xl border border-blue-300/20 p-6 rounded-2xl shadow-[0_0_40px_#3b82f6] hover:shadow-[0_0_60px_#60a5fa] transition duration-300 flex flex-col"
    >
      <motion.div
        whileHover={{ rotateY: 360 }}
        transition={{ duration: 1.2 }}
        className="text-3xl text-blue-300 mb-4"
      >
        {icon}
      </motion.div>
      <h4 className="text-xl font-semibold mb-2 text-white">{title}</h4>
      <p className="text-blue-100/90 text-sm">{summary}</p>
    </motion.div>
  );
};

export default ServiceCard;



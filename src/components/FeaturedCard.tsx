'use client';

import { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

type Service = {
  icon: React.ReactNode;
  title: string;
  summary: string;
};

type FeaturedCardProps = {
  services: Service[];
};

const FeaturedCard = ({ services }: FeaturedCardProps) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [paused, services.length]);

  const current = services[index];

  return (
    <div
      className="max-w-md mx-auto mb-12 cursor-pointer"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <ServiceCard icon={current.icon} title={current.title} summary={current.summary} />
    </div>
  );
};

export default FeaturedCard;


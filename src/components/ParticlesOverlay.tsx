// components/ParticlesOverlay.tsx
'use client';

import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim'; // lightweight
import { useCallback } from 'react';

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="section-particles"
      init={particlesInit}
      className="absolute inset-0 z-0 pointer-events-none" // ✅ Fix applied here
      options={{
        fullScreen: false,
        background: { color: 'transparent' },
        fpsLimit: 60,
        particles: {
          number: { value: 60, density: { enable: true, area: 800 } },
          color: { value: '#3b82f6' },
          links: {
            enable: true,
            distance: 130,
            color: '#60a5fa',
            opacity: 0.2,
            width: 1,
          },
          shape: { type: 'circle' },
          opacity: { value: 0.3 },
          size: { value: { min: 1, max: 3 } },
          move: { enable: true, speed: 0.6 },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
            resize: true,
          },
          modes: {
            repulse: { distance: 80 },
          },
        },
      }}
    />
  );
};

export default ParticleBackground;


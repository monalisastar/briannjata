'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const RouteLogger = () => {
  const pathname = usePathname();

  useEffect(() => {
    console.log(`[Analytics] Page View: ${pathname}`);
    // 🔁 Optional: send to PostHog, Plausible, etc.
  }, [pathname]);

  return null;
};

export default RouteLogger;


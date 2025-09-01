export type Project = {
  title: string;
  description: string;
  tech: string[];
  category: string;
  banner: string | string[];
  link?: string;
  code?: string;
  comingSoon?: boolean;
};

export const categories = [
  'All',
  'Web3 & Work',
  'Climate & Education',
  'Digital Trust & Payments',
  'Automation & Bots',
  'Community Tools',
  'Fintech & Automation',
  'Web Platforms',
];

export const projects: Project[] = [
  {
    title: 'HireATutor Online',
    description:
      'A tutoring platform enabling clients to hire experts in real-time. Features include payment integration, dashboards, and order tracking.',
    tech: ['Next.js', 'MongoDB', 'Stripe', 'JWT', 'Discord Bot'],
    category: 'Web Platforms',
    banner: '/images/hireatutor.jpg',
    link: 'https://www.hireatutornow.com',
    code: 'https://github.com/monalisastar/hireatutoronline',
  },
  {
    title: 'Freelancers Palace',
    description:
      'A futuristic freelance platform powered by blockchain escrow, FLR trust tokens, and real-time dashboards for clients and freelancers.',
    tech: ['Next.js', 'MongoDB', 'Prisma', 'Smart Contracts'],
    category: 'Web3 & Work',
    banner: '/freelancers-palace.png',
    code: 'https://github.com/monalisastar/freelancepalcebot',
  },
  {
    title: 'FLR Escrow (Smart Contract)',
    description:
      'A blockchain-based escrow protocol for digital goods and peer-to-peer payments, integrating smart contracts and Web3 logic.',
    tech: ['Solidity', 'Node.js', 'Web3', 'API'],
    category: 'Digital Trust & Payments',
    banner: '/images/flr-escrow.png',
    comingSoon: true,
  },
  {
    title: 'Freelancer Bot (Discord)',
    description:
      'A Discord bot that automates order management, freelancer assignment, and support notifications.',
    tech: ['Python', 'Firebase', 'Discord API'],
    category: 'Automation & Bots',
    banner: '/images/discord-ticket-system.png',
    code: 'https://github.com/monalisastar/freelancepalcebot',
  },
  {
    title: 'Eco-Mentor LMS',
    description:
      'An educational platform for GHG accounting and climate action, built to empower the next generation of carbon developers.',
    tech: ['Next.js', 'Tailwind CSS', 'Custom LMS'],
    category: 'Climate & Education',
    banner: '/eco-mentor.png',
  },
  {
    title: 'Order Management Bot',
    description:
      'A Python-powered bot to automate order tracking, customer updates, and workflow coordination.',
    tech: ['Python', 'Firebase', 'Discord API'],
    category: 'Automation & Bots',
    banner: '/images/order-management-bot.png',
  },
  {
    title: 'Discord Ticket System & Moderation Bot',
    description:
      'A scalable Discord bot for managing tickets, rewards, and moderation tools in large communities.',
    tech: ['Python', 'Firebase', 'Discord.js'],
    category: 'Community Tools',
    banner: '/images/discord-ticket-system.png',
  },
  {
    title: 'Vacation Findr',
    description:
      'A vacation booking platform designed for mobile users, featuring search, listings, and a clean modern layout.',
    tech: ['Next.js', 'MongoDB', 'Prisma'],
    category: 'Web Platforms',
    banner: '/images/vacation-findr.png',
    link: 'https://vacation-booking-site.vercel.app',
    code: 'https://github.com/monalisastar/vacation',
    comingSoon: true,
  },
  {
    title: 'Kilimofresh',
    description:
      'A B2B food stock exchange for farmers and vendors to list produce, track prices, and manage logistics and deals.',
    tech: ['Next.js', 'MongoDB', 'Prisma', 'Tailwind'],
    category: 'Web3 & Work',
    banner: '/images/kilimofresh.jpg',
    code: 'https://github.com/monalisastar/kilimofresh',
    comingSoon: true,
  },
  {
    title: 'Trading Bot',
    description:
      'A Binance trading bot with AI signals, live chart dashboards, and automated execution logic.',
    tech: ['Python', 'Streamlit', 'Firebase', 'Binance API'],
    category: 'Fintech & Automation',
    banner: [
      '/images/tradingbot1.jpg',
      '/images/tradingbot2.jpg',
      '/images/tradingbothero.jpg',
    ],
    code: 'https://github.com/monalisastar/tradingbot',
    comingSoon: true,
  },
  {
    title: 'Supacare Website',
    description:
      'A clean sustainability platform for composting and waste management services, built mobile-first.',
    tech: ['Next.js', 'Tailwind CSS'],
    category: 'Climate & Education',
    banner: '/images/supacare.jpg',
    code: 'https://github.com/monalisastar/supacare-website',
  },
];

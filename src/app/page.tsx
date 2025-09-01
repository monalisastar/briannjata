import Hero from '@/components/Hero';
import AboutPreview from '@/components/AboutPreview';
import ProjectsPreview from '@/components/ProjectsPreview';
import BlogPreview from '@/components/BlogPreview';
import Services from '@/components/Services';

export const metadata = {
  title: 'Brian Njata – Portfolio, Projects & Vision',
  description:
    'Explore Brian Njata’s work in AI, Climate, Web3, and Digital Trust. Projects, blog, business ventures, and recovery story.',
  keywords: [
    'Brian Njata',
    'Eco-Mentor',
    'Freelancers Palace',
    'FLR Trust',
    'Web3 developer',
    'Climate tech',
    'AI ethics',
    'Smart escrow',
    'briannjata.org',
    'Kilimofresh',
    'Supacare Solutions',
  ],
  openGraph: {
    title: 'Brian Njata – Visionary Developer & Builder',
    description:
      'Founder of Eco-Mentor, Freelancers Palace, and FLR Trust Labs. Explore his work and writing.',
    url: 'https://briannjata.org',
    siteName: 'briannjata.org',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-[#0B0F1C] via-[#101828] to-[#1B2735] text-white px-4 md:px-8 py-8">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="bg-[#1E263B]/60 backdrop-blur-md shadow-2xl rounded-2xl p-6 md:p-12">
          <Hero />
        </div>
        <div className="bg-[#1E263B]/60 backdrop-blur-md shadow-2xl rounded-2xl p-6 md:p-12">
          <AboutPreview />
        </div>
        <div className="bg-[#1E263B]/60 backdrop-blur-md shadow-2xl rounded-2xl p-6 md:p-12">
          <ProjectsPreview />
        </div>
        <div className="bg-[#1E263B]/60 backdrop-blur-md shadow-2xl rounded-2xl p-6 md:p-12">
          <Services />
        </div>
        <div className="bg-[#1E263B]/60 backdrop-blur-md shadow-2xl rounded-2xl p-6 md:p-12">
          <BlogPreview />
        </div>
      </div>
    </main>
  );
}


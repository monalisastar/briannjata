import Hero from '@/components/Hero';
import AboutPreview from '@/components/AboutPreview';
import EngineeringCapabilities from '@/components/EngineeringCapabilities';
import ProjectsPreview from '@/components/ProjectsPreview';
import Services from '@/components/Services';
import BlogPreview from '@/components/BlogPreview';

export const metadata = {
  title: 'Brian Njata – AI-Native Product Builder',
  description:
    'Brian Njata is an AI-native product builder designing and shipping dependable software systems using modern web frameworks, systems-first thinking, and responsible technology practices.',

  openGraph: {
    title: 'Brian Njata – AI-Native Product Builder',
    description:
      'Designing and shipping dependable software systems using systems-first thinking, modern web frameworks, and AI-assisted development.',
    type: 'website',
    locale: 'en_US',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Brian Njata – AI-Native Product Builder',
    description:
      'AI-native product builder focused on systems design, real-world software delivery, and responsible technology.',
  },
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <Hero />

      {/* ABOUT */}
      <section id="about">
        <AboutPreview />
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities">
        <EngineeringCapabilities />
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <ProjectsPreview />
      </section>

      {/* SERVICES */}
      <section id="services">
        <Services />
      </section>

      {/* WRITING */}
      <section id="blog">
        <BlogPreview />
      </section>
    </>
  );
}

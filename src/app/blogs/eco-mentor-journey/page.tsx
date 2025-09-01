'use client';

// src/app/blogs/eco-mentor-journey/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { useEffect } from 'react';

export default function EcoMentorJourney() {
  useEffect(() => {
    const handleScroll = (e: any) => {
      const href = e.target.getAttribute("href");
      if (href?.startsWith("#")) {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
    };
    document.querySelectorAll("a[href^='#']").forEach((link) =>
      link.addEventListener("click", handleScroll)
    );
    return () => {
      document.querySelectorAll("a[href^='#']").forEach((link) =>
        link.removeEventListener("click", handleScroll)
      );
    };
  }, []);

  const currentUrl = typeof window !== 'undefined' ? window.location.href : "";

  return (
    <>
      <Head>
        <title>Eco-Mentor: Pan-African Climate Education for All | Brian Njata</title>
        <meta name="description" content="Eco-Mentor is a bold movement to make climate education accessible, local, and visionary — starting in Africa. Learn why it matters and where we’re headed." />
        <meta name="keywords" content="Eco-Mentor, Climate Learning, GHG Courses, Carbon Projects, MRV, Africa Sustainability, Green Jobs, Climate Justice, Brian Njata" />
      </Head>

      <main className="min-h-screen w-full bg-gradient-to-br from-green-100 via-lime-200 to-green-300 px-6 md:px-12 py-16">
        <article className="max-w-3xl mx-auto bg-white/30 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20 relative">

          {/* Tag */}
          <div className="absolute top-0 right-0 mt-4 mr-4 bg-black text-white text-xs px-4 py-1 rounded-full shadow">
            Climate Action
          </div>

          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Launching Eco-Mentor: The Climate Learning Revolution
            </h1>
            <p className="text-sm text-gray-600">June 12, 2025</p>
          </div>

          {/* Table of Contents */}
          <nav className="mb-10 bg-white/50 p-4 rounded-lg border border-white/30">
            <h3 className="text-lg font-semibold mb-3 text-green-900">📘 Table of Contents</h3>
            <ul className="list-disc list-inside space-y-1 text-green-800 text-sm">
              <li><a href="#why">Why I Built It</a></li>
              <li><a href="#offers">What Eco-Mentor Offers</a></li>
              <li><a href="#continent">For the Continent. For the Future.</a></li>
              <li><a href="#next">Where We Go From Here</a></li>
            </ul>
          </nav>

          <div className="space-y-8 text-gray-800">
            <Image
              src="/eco-mentor.png"
              alt="Eco-Mentor Platform"
              width={1000}
              height={600}
              className="rounded-xl shadow-lg"
            />

            <p>Eco-Mentor was born from one conviction: climate education shouldn’t feel overwhelming — it should feel <strong>empowering</strong>.</p>

            <p>For too long, greenhouse gas (GHG) accounting and carbon project literacy have been trapped behind paywalls, wrapped in jargon, and restricted to Western frameworks. But what about African practitioners? What about frontline youth trying to build green careers in the very places most affected by climate chaos?</p>

            <p>Eco-Mentor is a response to that injustice. It’s more than an LMS. It’s a <strong>movement for radical accessibility, applied learning, and decolonized sustainability education</strong>.</p>

            <h2 id="why" className="text-2xl font-semibold mt-6">Why I Built It</h2>
            <p>During my recovery journey, I found purpose through clarity. One truth kept rising: <strong>climate action must be local, accessible, and rooted in justice</strong>. I wanted a space where someone in Nairobi, Lagos, Kigali, or Kisumu could master carbon literacy — not as a technicality, but as a <em>calling</em>.</p>

            <p>Eco-Mentor is not academic fluff. It’s <strong>visual, bilingual (coming soon), standards-aligned</strong>, and built for the realities of our continent. From students to startup founders to policy advocates — we all deserve a seat at the climate table.</p>

            <h2 id="offers" className="text-2xl font-semibold mt-6">What Eco-Mentor Offers</h2>
            <ul className="list-disc pl-5">
              <li>Core courses on GHG accounting, carbon standards, MRV, and offsets</li>
              <li>Real-world project simulations and calculator tools</li>
              <li>Bilingual and visual formats for wider access</li>
              <li>Mentorship + peer learning communities</li>
              <li>Public learner profiles to connect with employers and carbon programs</li>
            </ul>

            <h2 id="continent" className="text-2xl font-semibold mt-6">For the Continent. For the Future.</h2>
            <p>This isn’t just tech. It’s a <strong>Panafrican climate vision</strong>. Built in Kenya. Rooted in impact. Designed to scale. If climate change is the defining crisis of our time, then <strong>climate education is the first act of resistance</strong>.</p>

            <h2 id="next" className="text-2xl font-semibold mt-6">Where We Go From Here</h2>
            <p>We’ll expand into sectoral pathways (cookstoves, transport, waste), build tools for project developers, and create jobs through certified micro-consultants. But we’ll never forget the soul of Eco-Mentor:</p>

            <blockquote className="italic border-l-4 pl-4 border-green-500">“Climate education must be empowering — and Africa must lead its own revolution.”</blockquote>

            <p className="text-sm text-gray-600 italic text-center mt-4">— Brian Njata, Founder of Eco-Mentor</p>

            {/* Share Bar */}
            <div className="mt-10 flex flex-wrap justify-center items-center gap-4 border-t pt-6 border-white/20">
              <h4 className="text-sm text-gray-700 font-medium w-full text-center">Share This Post</h4>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=Launching Eco-Mentor: The Climate Learning Revolution`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                🐦 Twitter/X
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 hover:underline"
              >
                💼 LinkedIn
              </a>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline"
              >
                📱 WhatsApp
              </a>
              <button
                className="text-gray-600 hover:underline"
                onClick={() => {
                  navigator.clipboard.writeText(currentUrl);
                  alert("Link copied to clipboard!");
                }}
              >
                🔗 Copy Link
              </button>
            </div>

            {/* Read More */}
            <div className="mt-12 text-center">
              <Link href="/blog">
                <a className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
                  Read More Blogs
                </a>
              </Link>
            </div>
          </div>

          {/* Recommended Reads */}
          <div className="mt-16 border-t border-white/20 pt-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Recommended Reads</h3>
            <ul className="space-y-3 text-green-800">
              <li>
                <Link href="/blogs/flr-token-trust">
                  <a className="hover:underline">🌍 The FLR Token: Trust Infrastructure for Web3</a>
                </Link>
              </li>
              <li>
                <Link href="/blogs/founder-reflections">
                  <a className="hover:underline">🧠 Reflections on Founding Vision and Purpose</a>
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </main>
    </>
  );
}


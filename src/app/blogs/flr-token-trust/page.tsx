'use client';

// src/app/blogs/flr-token-trust/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export default function FLRTokenTrust() {
  return (
    <>
      <Head>
        <title>FLR Token – Building Digital Trust in Web3 | Brian Njata</title>
        <meta name="description" content="Discover why I created the FLR Token – a Web3 trust engine designed to reward verified work, fair collaboration, and ethical digital reputation." />
        <meta name="keywords" content="FLR Token, Web3 Trust, Brian Njata, Freelancers Palace, Digital Reputation, Fair Labor, Blockchain, Ethics, Trust Layer, Verified Work" />
      </Head>

      <main className="min-h-screen w-full bg-gradient-to-br from-purple-100 via-indigo-200 to-purple-300 px-6 md:px-12 py-16">
        <article className="max-w-3xl mx-auto bg-white/30 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20 relative">

          {/* Tag Indicator */}
          <div className="absolute top-0 right-0 mt-4 mr-4 bg-black text-white text-xs px-4 py-1 rounded-full shadow">
            Web3 & Ethics
          </div>

          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              The FLR Token: Why I Built a Trust Engine, Not Just a Coin
            </h1>
            <p className="text-sm text-gray-600">June 24, 2025</p>
          </div>

          <div className="space-y-8 text-gray-800">
            <Image
              src="/freelancepalace-banner.png"
              alt="FLR Token Banner"
              width={1000}
              height={600}
              className="rounded-xl shadow-lg"
            />

            <p>I’ve been part of this digital world long enough to witness something dangerous: people losing faith in systems that were supposed to empower them. Payments go missing. Reviews are faked. Platforms disappear when things go wrong. I wanted to build something different.</p>

            <p>That’s how the FLR Token was born. But this isn’t just another token. FLR is a <strong>trust engine</strong> — a system designed from the ground up to reward honest work, transparent payments, and ethical collaboration in a world full of noise and manipulation.</p>

            <h2 className="text-2xl font-semibold mt-6">What Makes FLR Different?</h2>
            <p>FLR stands for <strong>Fair Labor Reputation</strong>. It's more than a label — it’s proof that you kept your word. That you showed up, delivered value, and acted with integrity. In Web3, where identity is often anonymous, FLR becomes your <strong>proof of character</strong>.</p>

            <p>FLR is not speculative. It’s historical. Every time you complete a deal without dispute, your trust footprint grows — on-chain, visible, and portable.</p>

            <h2 className="text-2xl font-semibold mt-6">How the Trust System Works</h2>
            <ul className="list-disc pl-5">
              <li>Every successful project on Freelancers Palace earns both parties FLR</li>
              <li>Dispute-free deals strengthen your FLR Trust Score</li>
              <li>Scores are stored transparently on-chain and updated in real time</li>
              <li>FLR can be used to unlock perks, stake for influence, or access premium services</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6">Why It’s Needed</h2>
            <p>We live in a world where people still get scammed every day. Star ratings can be faked. Crypto wallets have no face. Reputation is the missing infrastructure in Web3 — and FLR is my contribution to fixing that.</p>

            <p>This isn't about making something go viral. It’s about making something last. <strong>Ethical design is long-term design.</strong></p>

            <h2 className="text-2xl font-semibold mt-6">Forged During My Healing</h2>
            <p>I built FLR during one of the most vulnerable periods of my life — recovering from burnout and spiritual disconnection. In that silence, I asked myself: <em>What would a truly just system look like?</em> The answer wasn’t profit. It was <strong>proof</strong>. Trust. Memory.</p>

            <p>That’s why every part of FLR — from tokenomics to score mechanics — reflects human fairness. I didn’t build this to impress investors. I built it to empower creators, coders, clients, and communities.</p>

            <h2 className="text-2xl font-semibold mt-6">Beyond Freelancing</h2>
            <p>The vision doesn’t end at Freelancers Palace. FLR will integrate into carbon markets, ethical AI agents, and dispute resolution platforms. Any ecosystem that requires <strong>verifiable credibility</strong> can use FLR as a backbone.</p>

            <p>This is the infrastructure of digital trust — modular, interoperable, and humane.</p>

            <h2 className="text-2xl font-semibold mt-6">A New Kind of Currency</h2>
            <p>In the future of work, your most valuable asset won’t be your resume. It will be your <strong>reputation trail</strong> — every promise kept, every transaction honored. That’s the future FLR is building for.</p>

            <p className="text-sm text-gray-600 italic text-center mt-4">— Brian Njata, Founder of Freelancers Palace & FLR Trust Labs</p>

            <div className="mt-10 text-center">
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
            <ul className="space-y-3 text-indigo-800">
              <li>
                <Link href="/blogs/founder-reflections">
                  <a className="hover:underline">🌱 Founder Reflections: Building in the Dark</a>
                </Link>
              </li>
              <li>
                <Link href="/blogs/ethical-design-future">
                  <a className="hover:underline">🔐 Ethical Design Principles for the Next Web</a>
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </main>
    </>
  );
}


'use client';

import Image from 'next/image';
import Link from 'next/link';

const TAGS = ['Web3', 'Trust Systems', 'Reputation'];

export default function FLRTokenTrust() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-[#0B0F1C] via-[#101828] to-[#1B2735] px-6 md:px-12 py-20 text-white">
      <article className="max-w-3xl mx-auto bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 md:p-10 shadow-lg">

        {/* Tags */}
        <div className="flex gap-2 mb-4">
          {TAGS.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-blue-500/10 border border-blue-400/20 px-3 py-1 rounded-full text-blue-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          FLR Token: Designing a Trust Layer for Digital Work
        </h1>
        <p className="text-sm text-blue-100/60 mb-8">
          June 24, 2025 · Systems design · Web3
        </p>

        {/* Hero image */}
        <Image
          src="/freelancepalace-banner.png"
          alt="FLR Trust System"
          width={1000}
          height={600}
          className="rounded-xl shadow-md mb-8"
        />

        {/* Content */}
        <section className="space-y-8 text-blue-100/90 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold mb-2">
              The Problem: Reputation Does Not Scale Well
            </h2>
            <p>
              Most digital platforms rely on reputation signals that are easy to
              manipulate, difficult to verify, and tightly coupled to the
              platform itself. Star ratings, reviews, and badges rarely survive
              outside the systems that generate them.
            </p>
            <p>
              In distributed and freelance-driven environments, this creates
              friction: participants lack portable trust, disputes become
              subjective, and platforms act as centralized arbiters.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              FLR as a Reputation Primitive
            </h2>
            <p>
              FLR (Fair Labor Reputation) was designed as a lightweight trust
              primitive — not a speculative asset. Its purpose is to record
              verifiable participation in completed, dispute-free interactions.
            </p>
            <p>
              Rather than attempting to encode every business rule on-chain,
              FLR focuses on *outcomes*: successful collaboration, consistency,
              and reliability over time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              System Design Principles
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Trust signals must be difficult to fake but easy to verify</li>
              <li>Reputation should be portable across platforms</li>
              <li>On-chain logic should remain minimal and auditable</li>
              <li>Most enforcement should stay off-chain for flexibility</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              How FLR Is Used in Practice
            </h2>
            <p>
              In systems like Freelancers Palace, FLR is earned through
              successful engagements. Both parties receive reputation credit
              only when predefined conditions are met and no dispute is raised.
            </p>
            <p>
              The token does not replace identity or contracts. It supplements
              them by providing a durable signal of past behavior.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              Beyond Freelancing
            </h2>
            <p>
              The same trust primitive can be applied to other domains:
              community governance, climate reporting, AI agent coordination,
              and any environment where credibility matters but centralized
              enforcement is weak.
            </p>
            <p>
              FLR is intentionally modular so it can integrate into broader
              systems without forcing full platform lock-in.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              A Conservative Approach to Web3
            </h2>
            <p>
              FLR is not an attempt to “put everything on-chain.” It reflects a
              conservative Web3 philosophy: use blockchain only where it
              meaningfully improves transparency, auditability, or coordination.
            </p>
            <p>
              Trust infrastructure should be boring, predictable, and resistant
              to hype. Longevity matters more than novelty.
            </p>
          </section>

          {/* Closing */}
          <p className="italic text-center text-blue-200/80 mt-12">
            Trust is not created by platforms. It is accumulated through
            consistent, verifiable behavior.
          </p>

          <div className="text-center mt-10">
            <Link
              href="/blog"
              className="inline-block text-sm text-blue-400 hover:underline"
            >
              ← Back to blog
            </Link>
          </div>
        </section>

        {/* Recommended */}
        <section className="mt-16 border-t border-white/10 pt-10">
          <h3 className="text-lg font-semibold mb-6 text-blue-200">
            Related Reading
          </h3>

          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/blogs/system-stability-lessons" className="hover:underline">
                What Panic Taught Me About System Stability
              </Link>
            </li>
            <li>
              <Link href="/blogs/future-ecosystems" className="hover:underline">
                Building Future-Proof Ecosystems
              </Link>
            </li>
          </ul>
        </section>

      </article>
    </main>
  );
}

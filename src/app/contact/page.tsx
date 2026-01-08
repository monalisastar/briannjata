'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import toast from 'react-hot-toast';
import { Github, Linkedin } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    message: '',
    company: '', // honeypot
  });

  const [loading, setLoading] = useState(false);
  const [aiReply, setAiReply] = useState('');

  const iconRef = useRef<HTMLDivElement | null>(null);
  const iconInView = useInView(iconRef, { once: true });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateSmartReply = (message: string): string => {
    const lower = message.toLowerCase();
    if (lower.includes('price') || lower.includes('cost'))
      return 'Thanks for asking about pricing. I’ll follow up with details shortly.';
    if (lower.includes('collab'))
      return 'Happy to explore collaboration opportunities.';
    if (lower.includes('hire') || lower.includes('recruit'))
      return 'Thanks for reaching out regarding a role. I’ll get back to you soon.';
    if (lower.includes('portfolio') || lower.includes('projects'))
      return 'I’ll be glad to share relevant work examples.';
    return 'Thanks for your message. I’ll respond shortly.';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, message } = formData;
    if (!name || !email || !message) {
      toast.error('Please fill in all required fields.');
      return;
    }

    setLoading(true);
    setAiReply('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed to send message');

      toast.success('Message sent successfully.');
      setFormData({
        name: '',
        email: '',
        category: '',
        message: '',
        company: '',
      });

      setAiReply(generateSmartReply(message));
    } catch {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0B0F1C] via-[#101828] to-[#1B2735] px-6 py-20 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* CONTACT FORM */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-xl"
        >
          <h1 className="text-3xl font-bold mb-2">Contact</h1>
          <p className="text-sm text-blue-100/70 mb-6">
            Reach out for projects, collaboration, or opportunities.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Honeypot — must remain hidden */}
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-xl bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-xl bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Category — aligned with backend routing */}
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full rounded-xl bg-[#0B0F1C] px-4 py-3 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select inquiry type</option>
              <option value="general">General inquiry</option>
              <option value="collaboration">Collaboration</option>
              <option value="project">Project proposal</option>
              <option value="hire">Hiring / role discussion</option>
            </select>

            <textarea
              name="message"
              rows={5}
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-xl bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <motion.button
              type="submit"
              whileTap={{ scale: 0.97 }}
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-xl font-semibold"
            >
              {loading ? 'Sending…' : 'Send message'}
            </motion.button>

            {aiReply && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 rounded-xl bg-blue-500/10 border border-blue-400/30 p-4 text-sm"
              >
                {aiReply}
              </motion.div>
            )}
          </form>

          {/* SOCIALS */}
          <div ref={iconRef} className="flex gap-5 mt-8">
            {iconInView && (
              <>
                <motion.a
                  href="https://github.com/monalisastar"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="hover:text-blue-400 transition"
                >
                  <Github size={22} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/brian-njata-30700125b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="hover:text-blue-400 transition"
                >
                  <Linkedin size={22} />
                </motion.a>
              </>
            )}
          </div>
        </motion.div>

        {/* MAP */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-4 shadow-xl"
        >
          <iframe
            className="w-full h-[420px] rounded-2xl"
            src="https://maps.google.com/maps?q=Downtown%20San%20Francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </main>
  );
}

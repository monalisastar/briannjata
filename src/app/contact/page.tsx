'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import toast from 'react-hot-toast'
import { Github, Linkedin } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', category: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [aiReply, setAiReply] = useState('')
  const iconRef = useRef(null)
  const iconInView = useInView(iconRef, { once: true })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const { name, email, message } = formData
    if (!name || !email || !message) return toast.error('Please fill in all fields.')

    setLoading(true)
    setAiReply('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (res.ok) {
        toast.success('Message sent!')
        setFormData({ name: '', email: '', category: '', message: '' })
        setAiReply(generateSmartReply(message))
      } else {
        toast.error(data.message || 'Failed to send.')
      }
    } catch {
      toast.error('Server error.')
    } finally {
      setLoading(false)
    }
  }

  const generateSmartReply = (message: string): string => {
    const lower = message.toLowerCase()
    if (lower.includes('price') || lower.includes('cost')) return 'Thanks for asking about pricing! We’ll email you our rates shortly.'
    if (lower.includes('collab')) return 'We’d love to collaborate! Let’s explore the idea further.'
    if (lower.includes('hire') || lower.includes('recruit')) return 'Excited to hear about hiring! We’ll get back to you soon.'
    if (lower.includes('portfolio') || lower.includes('projects')) return 'We’ll be happy to share our portfolio. Stay tuned!'
    return 'Thanks for your message. You’ll hear from us shortly.'
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex items-center justify-center p-6">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-6">
        {/* CONTACT FORM */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#0b1c35]/60 backdrop-blur-xl rounded-3xl p-8 border border-blue-700 text-white shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-2">Contact Me</h2>
          <p className="text-sm text-gray-300 mb-6">Let’s create something impactful.</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white/10 p-3 rounded-xl placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white/10 p-3 rounded-xl placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full bg-white/10 p-3 rounded-xl text-white/80 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Inquiry Type</option>
              <option value="general">✨ General Inquiry</option>
              <option value="collaboration">🤝 Collaboration</option>
              <option value="project">💼 Project Proposal</option>
              <option value="hire">📈 Hire Me</option>
              <option value="other">❓ Other</option>
            </select>
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-white/10 p-3 rounded-xl placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <motion.button
              type="submit"
              whileTap={{ scale: 0.95 }}
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold transition-all"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </motion.button>

            {aiReply && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 rounded-xl bg-blue-500/20 text-white border border-blue-300"
              >
                💬 {aiReply}
              </motion.div>
            )}
          </form>

          {/* SOCIAL ICONS */}
          <div ref={iconRef} className="flex gap-4 mt-8">
            {iconInView && (
              <>
                <motion.a
                  href="https://github.com/monalisastar/monalisastar"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="hover:scale-110 hover:text-blue-400 transition-all"
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/brian-njata-30700125b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="hover:scale-110 hover:text-blue-400 transition-all"
                >
                  <Linkedin size={24} />
                </motion.a>
              </>
            )}
          </div>
        </motion.div>

        {/* MAP */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#0b1c35]/60 backdrop-blur-lg rounded-3xl p-4 border border-blue-700 shadow-xl"
        >
          <div className="w-full h-full rounded-2xl overflow-hidden">
            <iframe
              className="w-full h-96 rounded-2xl border-none"
              src="https://maps.google.com/maps?q=Downtown%20San%20Francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </main>
  )
}


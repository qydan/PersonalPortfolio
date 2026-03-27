import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'

export default function About() {
  return (
    <SectionWrapper id="about" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          About Me
        </h2>
        <div className="w-16 h-1 bg-red-500 rounded mb-12" />

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex-shrink-0"
          >
            <img
              src="/profile.jpg"
              alt="Aydan Eng, Software Engineering student"
              className="w-48 h-48 rounded-full object-cover border-4 border-red-500"
            />
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              I&apos;m a 3rd-year Software Engineering student at Carleton University with a passion
              for building clean, user-focused software. I love working across the full stack —
              from designing intuitive UIs to architecting scalable backends. When I&apos;m not
              coding, you&apos;ll find me contributing to open source, exploring new technologies,
              or hiking.
            </p>

            <div className="mt-2">
              <span className="inline-flex items-center bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/30 px-3 py-1 rounded-full text-sm">
                🟢 Open to internships &amp; co-op opportunities
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}

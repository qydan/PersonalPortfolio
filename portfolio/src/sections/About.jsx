import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import useGitHubProfile from '../hooks/useGitHubProfile'

const GITHUB_USERNAME = 'qydan'

export default function About() {
  const { data, loading } = useGitHubProfile(GITHUB_USERNAME)
  const avatarSrc = data?.avatarUrl ?? '/profile.jpg'

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
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex-shrink-0"
          >
            {loading ? (
              <div className="w-48 h-48 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse border-4 border-red-500" />
            ) : (
              <img
                src={avatarSrc}
                alt="Aydan, Software Engineering student"
                className="w-48 h-48 rounded-full object-cover border-4 border-red-500 shadow-lg"
              />
            )}
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              I&apos;m a 3rd-year Software Engineering student at Carleton University (GPA 3.97)
              with hands-on experience building full-stack systems, mobile apps, and cloud
              infrastructure at Raven Connected and Remsoft. I love working across the stack,
              from React frontends to serverless AWS backends. When I&apos;m not coding you&apos;ll
              find me at hackathons, contributing to open source, hiking or watching Spider-Man.
            </p>

            <div className="mt-2">
              <span className="inline-flex items-center bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/30 px-3 py-1 rounded-full text-sm">
                🟢 Open to Fall 2026 co-op opportunities
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}

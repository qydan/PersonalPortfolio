import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function ProjectCard({ project }) {
  const { title, description, tags, githubUrl, liveUrl } = project

  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
      transition={{ duration: 0.2 }}
      className="rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col h-full"
    >
      <div className="p-6 flex flex-col flex-1 gap-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3 flex-1">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-2">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors"
          >
            <FaGithub className="text-base" />
            <span>GitHub</span>
          </a>

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors"
            >
              <FaExternalLinkAlt className="text-sm" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

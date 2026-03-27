import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import FilterBar from '../components/projects/FilterBar'
import ProjectCard from '../components/projects/ProjectCard'
import projects from '../data/projects'

const uniqueTags = [...new Set(projects.flatMap((p) => p.tags))]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter))

  return (
    <SectionWrapper id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Projects
        </h2>
        <div className="w-16 h-1 bg-red-500 rounded mb-8" />

        <div className="mb-8">
          <FilterBar
            tags={uniqueTags}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>

        <AnimatePresence mode="popLayout">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </SectionWrapper>
  )
}

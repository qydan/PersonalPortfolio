import { motion } from 'framer-motion'
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'
import SectionWrapper from '../components/SectionWrapper'
import experience from '../data/experience'

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Experience
        </h2>
        <div className="w-16 h-1 bg-red-500 rounded mb-12" />

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical center line — desktop only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 -translate-x-1/2" />
          {/* Vertical left line — mobile */}
          <div className="block md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />

          <div className="flex flex-col gap-10">
            {experience.map((entry, index) => {
              const isLeft = index % 2 === 0
              const Icon = entry.type === 'work' ? FaBriefcase : FaGraduationCap
              const dotColor =
                entry.type === 'work' ? 'bg-red-500' : 'bg-blue-500'

              return (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative flex items-start md:items-center gap-4 md:gap-0 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Card — takes up ~half width on desktop */}
                  <div
                    className={`ml-10 md:ml-0 w-full md:w-[calc(50%-2rem)] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm rounded-xl p-6 ${
                      isLeft ? 'md:mr-8' : 'md:ml-8'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Icon
                        className={
                          entry.type === 'work'
                            ? 'text-red-500'
                            : 'text-blue-500'
                        }
                        size={16}
                      />
                      <h3 className="text-base font-bold text-gray-900 dark:text-white leading-snug">
                        {entry.title}
                      </h3>
                    </div>
                    <p className="text-red-500 font-medium text-sm mb-1">
                      {entry.organization}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">
                      {entry.dateRange}
                    </p>
                    {entry.location && (
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                        {entry.location}
                      </p>
                    )}
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {entry.description}
                    </p>
                  </div>

                  {/* Timeline dot — centered on the line */}
                  <div
                    className={`absolute left-4 md:left-1/2 top-6 md:top-1/2 -translate-y-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full ${dotColor} border-2 border-white dark:border-gray-900 z-10 flex items-center justify-center`}
                  />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

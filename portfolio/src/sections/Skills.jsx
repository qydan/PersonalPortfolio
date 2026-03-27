import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import skills from '../data/skills'

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Skills &amp; Technologies
        </h2>
        <div className="w-16 h-1 bg-red-500 rounded mb-12" />

        <div className="flex flex-col gap-10">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-red-500 mb-4">
                {group.category}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
                {group.items.map((skill, index) => {
                  const Icon = skill.icon
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                      className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-red-500/10 dark:hover:bg-red-500/10 transition-colors cursor-default"
                    >
                      <Icon className="text-3xl text-gray-700 dark:text-gray-200" />
                      <span className="text-xs text-gray-600 dark:text-gray-300 text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

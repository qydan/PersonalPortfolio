import { motion, useReducedMotion } from 'framer-motion'

export default function SectionWrapper({ id, className, children }) {
  const reducedMotion = useReducedMotion()

  const variants = reducedMotion
    ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } }
    : { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } }

  return (
    <motion.section
      id={id}
      className={className}
      initial={variants.initial}
      whileInView={variants.animate}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  )
}

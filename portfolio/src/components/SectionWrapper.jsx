import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function SectionWrapper({ id, className, children }) {
  const reducedMotion = useReducedMotion()
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Fade in as section enters from bottom, fade out as it exits top
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [40, 0, 0, -40])

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      style={reducedMotion ? {} : { opacity, y }}
    >
      {children}
    </motion.section>
  )
}

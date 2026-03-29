import { motion, useReducedMotion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiChevronDown } from 'react-icons/fi'
import ParticleCanvas from '../components/ParticleCanvas'

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  const reducedMotion = useReducedMotion()

  const container = {
    hidden: {},
    show: {
      transition: reducedMotion
        ? {}
        : { staggerChildren: 0.15 },
    },
  }

  const item = reducedMotion
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }

  const bounceAnim = reducedMotion
    ? {}
    : { animate: { y: [0, 8, 0] }, transition: { duration: 1.4, repeat: Infinity, ease: 'easeInOut' } }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <ParticleCanvas />

      {/* Subtle radial glow behind content */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[500px] h-[300px] bg-red-500/5 blur-3xl rounded-full pointer-events-none"
      />

      {/* Main content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-6 gap-5"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Heading */}
        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight
                     text-gray-900 dark:text-white"
        >
          Hi, I&apos;m{' '}
          <span className="text-red-500">Aydan</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-base sm:text-lg text-gray-500 dark:text-gray-400"
        >
          <span className="font-medium text-gray-800 dark:text-gray-200">Software Developer</span>
          <span className="text-red-500 font-bold">@</span>
          <a
            href="https://ravenconnected.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-red-500 underline decoration-red-500/40 underline-offset-2 hover:decoration-red-500 transition-all"
          >Raven Connected</a>
          <span className="text-gray-300 dark:text-gray-600 select-none">|</span>
          <span className="font-medium text-gray-800 dark:text-gray-200">SWE Student</span>
          <span className="text-red-500 font-bold">@</span>
          <a
            href="https://carleton.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-red-500 underline decoration-red-500/40 underline-offset-2 hover:decoration-red-500 transition-all"
          >Carleton University</a>
        </motion.p>

        {/* Typewriter */}
        <motion.div
          variants={item}
          className="text-xl sm:text-2xl font-medium text-red-500 h-8"
        >
          <TypeAnimation
            sequence={[
              'Software Engineer', 1500,
              'Full-Stack Developer', 1500,
              'Open Source Enthusiast', 1500,
              'Problem Solver', 1500,
            ]}
            speed={50}
            deletionSpeed={30}
            repeat={Infinity}
          />
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-3 mt-2"
        >
          <button
            onClick={() => scrollTo('projects')}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg
                       font-medium transition-all hover:scale-105 cursor-pointer"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white
                       px-6 py-3 rounded-lg font-medium transition-all cursor-pointer"
          >
            Get in Touch
          </button>
          <a
            href="/AydanEng_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg font-medium transition-all
                       text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-500
                       border border-gray-300 dark:border-gray-700 hover:border-red-500"
          >
            Download CV
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          variants={item}
          className="flex items-center gap-5 mt-1"
        >
          <a
            href="https://github.com/qydan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-2xl text-gray-600 dark:text-gray-400 hover:text-red-500 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/aydaneng"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-2xl text-gray-600 dark:text-gray-400 hover:text-red-500 transition-colors"
          >
            <FaLinkedin />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll-down indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 dark:text-gray-600"
        {...bounceAnim}
        aria-hidden="true"
      >
        <FiChevronDown className="text-3xl" />
      </motion.div>
    </section>
  )
}

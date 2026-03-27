import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa'
import useScrollProgress from '../hooks/useScrollProgress'

export default function Footer() {
  const progress = useScrollProgress()
  const showBackToTop = progress > 20

  function scrollToTop() {
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="py-8 text-center text-gray-500 dark:text-gray-400 relative">
      <div className="flex justify-center gap-6 mb-4 text-xl">
        <a href="https://github.com/qydan" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-red-500 transition-colors">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/qydan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-red-500 transition-colors">
          <FaLinkedin />
        </a>
        <a href="mailto:aydaneng@cmail.carleton.ca" aria-label="Email" className="hover:text-red-500 transition-colors">
          <FaEnvelope />
        </a>
      </div>
      <p className="mb-2 text-sm">© 2025 Aydan Eng. Built with React &amp; Tailwind CSS.</p>

      {/* Back to Top — fixed bottom-right, visible after scrolling 20% */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-red-500 text-white shadow-lg hover:bg-red-600 hover:scale-110 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  )
}

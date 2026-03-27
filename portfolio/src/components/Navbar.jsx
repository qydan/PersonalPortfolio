import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import ThemeToggle from './ThemeToggle'
import useActiveSection from '../hooks/useActiveSection'

const NAV_LINKS = [
  { label: 'Home', id: 'hero' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
]

const SECTION_IDS = NAV_LINKS.map((l) => l.id)

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeSection = useActiveSection(SECTION_IDS)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function handleNavClick(id) {
    scrollToSection(id)
    setMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <span className="text-red-500 font-bold text-xl select-none">AE</span>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-6" role="list">
          {NAV_LINKS.map(({ label, id }) => (
            <li key={id}>
              <button
                onClick={() => handleNavClick(id)}
                className={`text-sm font-medium transition-colors hover:text-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded ${
                  activeSection === id
                    ? 'text-red-500'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right side: ThemeToggle + Resume (desktop) + Hamburger (mobile) */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Resume button — desktop only */}
          <a
            href="/resume.pdf"
            download
            className="hidden md:inline-flex items-center px-3 py-1.5 text-sm font-medium border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
          >
            Resume
          </a>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden p-2 rounded transition-colors hover:bg-gray-200 dark:hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden w-full bg-white/95 dark:bg-gray-950/95 backdrop-blur-md shadow-md"
        >
          <ul className="flex flex-col py-2" role="list">
            {NAV_LINKS.map(({ label, id }) => (
              <li key={id}>
                <button
                  onClick={() => handleNavClick(id)}
                  className={`w-full text-left px-6 py-3 text-sm font-medium transition-colors hover:text-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-red-500 ${
                    activeSection === id
                      ? 'text-red-500'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

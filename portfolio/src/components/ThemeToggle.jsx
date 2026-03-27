import { FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="p-2 rounded-full transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </button>
  )
}

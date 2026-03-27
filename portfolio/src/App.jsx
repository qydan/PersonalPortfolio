import './index.css'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import ScrollProgressBar from './components/ScrollProgressBar'
import Footer from './components/Footer'
import CursorSpotlight from './components/CursorSpotlight'
import PageTransition from './components/PageTransition'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'

function App() {
  return (
    <ThemeProvider>
      <CursorSpotlight />
      <ScrollProgressBar />
      <Navbar />
      <AnimatePresence mode="wait">
        <PageTransition key="main">
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </main>
        </PageTransition>
      </AnimatePresence>
      <Footer />
    </ThemeProvider>
  )
}

export default App

import './index.css'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import ScrollProgressBar from './components/ScrollProgressBar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'

function App() {
  return (
    <ThemeProvider>
      <ScrollProgressBar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default App

import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

const MAX_PARTICLES = 40
const PARTICLE_LIFE = 80  // frames a particle lives
const SPAWN_RATE = 1       // particles spawned per mouse move event

export default function CursorSpotlight() {
  const canvasRef = useRef(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    const particles = []
    const mouse = { x: -1000, y: -1000 }

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    function onMouseMove(e) {
      mouse.x = e.clientX
      mouse.y = e.clientY
      for (let i = 0; i < SPAWN_RATE; i++) {
        if (particles.length >= MAX_PARTICLES) break
        const angle = Math.random() * Math.PI * 2
        const speed = Math.random() * 1.2 + 0.3
        particles.push({
          x: mouse.x + (Math.random() - 0.5) * 10,
          y: mouse.y + (Math.random() - 0.5) * 10,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.5, // slight upward drift
          life: PARTICLE_LIFE,
          maxLife: PARTICLE_LIFE,
          r: Math.random() * 2 + 1,
        })
      }
    }

    window.addEventListener('mousemove', onMouseMove)

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const isDark = document.documentElement.classList.contains('dark')
      const rgb = isDark ? '239,68,68' : '220,38,38'

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.02  // gentle gravity
        p.vx *= 0.99
        p.life--

        if (p.life <= 0) {
          particles.splice(i, 1)
          continue
        }

        const alpha = (p.life / p.maxLife) * 0.6
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${rgb}, ${alpha})`
        ctx.fill()
      }

      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 60) {
            const alpha = (1 - dist / 60) *
              (particles[i].life / particles[i].maxLife) *
              (particles[j].life / particles[j].maxLife) * 0.3
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(${rgb}, ${alpha})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [reducedMotion])

  if (reducedMotion) return null

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    />
  )
}

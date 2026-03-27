import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

const PARTICLE_COUNT = 120
const CONNECTION_DISTANCE = 160
const MOUSE_REPEL_RADIUS = 140
const MOUSE_REPEL_STRENGTH = 6
const BASE_SPEED = 0.6

function randomBetween(a, b) {
  return a + Math.random() * (b - a)
}

export default function ParticleCanvas() {
  const canvasRef = useRef(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    const mouse = { x: null, y: null }

    function resize() {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Track mouse relative to canvas — use window coords since canvas is fixed to section
    function onMouseMove(e) {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    function onMouseLeave() {
      mouse.x = null
      mouse.y = null
    }
    // Listen on the parent section so mouse works over text too
    const section = canvas.parentElement
    section.addEventListener('mousemove', onMouseMove)
    section.addEventListener('mouseleave', onMouseLeave)

    // Init particles
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: randomBetween(0, canvas.width),
      y: randomBetween(0, canvas.height),
      vx: randomBetween(-BASE_SPEED, BASE_SPEED),
      vy: randomBetween(-BASE_SPEED, BASE_SPEED),
      r: randomBetween(1.5, 3),
    }))

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Detect dark mode from html class
      const isDark = document.documentElement.classList.contains('dark')
      const particleColor = isDark ? '239,68,68' : '220,38,38' // red-500 / red-600

      for (const p of particles) {
        // Mouse repulsion
        if (mouse.x !== null) {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MOUSE_REPEL_RADIUS && dist > 0) {
            const force = (MOUSE_REPEL_RADIUS - dist) / MOUSE_REPEL_RADIUS
            p.vx += (dx / dist) * force * MOUSE_REPEL_STRENGTH * 0.05
            p.vy += (dy / dist) * force * MOUSE_REPEL_STRENGTH * 0.05
          }
        }

        // Dampen velocity so it doesn't explode
        p.vx *= 0.99
        p.vy *= 0.99

        // Clamp speed
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy)
        if (speed > BASE_SPEED * 4) {
          p.vx = (p.vx / speed) * BASE_SPEED * 4
          p.vy = (p.vy / speed) * BASE_SPEED * 4
        }
        // Restore minimum drift
        if (speed < BASE_SPEED * 0.2) {
          p.vx += randomBetween(-0.05, 0.05)
          p.vy += randomBetween(-0.05, 0.05)
        }

        p.x += p.vx
        p.y += p.vy

        // Wrap edges
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${particleColor}, 0.85)`
        ctx.fill()
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECTION_DISTANCE) {
            const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.5
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(${particleColor}, ${alpha})`
            ctx.lineWidth = 1
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
      section.removeEventListener('mousemove', onMouseMove)
      section.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [reducedMotion])

  if (reducedMotion) return null

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'none' }}
    />
  )
}

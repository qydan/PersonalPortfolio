import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

export default function CursorSpotlight() {
  const spotRef = useRef(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) return
    const el = spotRef.current
    if (!el) return

    let raf
    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight / 2
    let currentX = targetX
    let currentY = targetY

    function onMouseMove(e) {
      targetX = e.clientX
      targetY = e.clientY
    }

    function animate() {
      // Smooth lerp so the glow lags slightly behind the cursor
      currentX += (targetX - currentX) * 0.08
      currentY += (targetY - currentY) * 0.08
      el.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`
      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMouseMove)
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(raf)
    }
  }, [reducedMotion])

  if (reducedMotion) return null

  return (
    <div
      ref={spotRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-0 w-[350px] h-[350px] rounded-full
                 bg-red-500/[0.07] dark:bg-red-500/[0.11] blur-[60px]"
      style={{ willChange: 'transform' }}
    />
  )
}

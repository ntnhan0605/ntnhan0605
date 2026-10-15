import { useReducedMotion, useSpring } from 'motion/react'
import { useEffect } from 'react'

const SPRING = { stiffness: 80, damping: 20, mass: 0.6 }

export function useParallax() {
  const reduce = useReducedMotion()
  const x = useSpring(0, SPRING)
  const y = useSpring(0, SPRING)

  useEffect(() => {
    if (reduce || window.matchMedia('(pointer: coarse)').matches) return
    const onMove = (e: PointerEvent) => {
      x.set((e.clientX / window.innerWidth - 0.5) * 2)
      y.set((e.clientY / window.innerHeight - 0.5) * 2)
    }

    window.addEventListener('pointermove', onMove)

    return () => window.removeEventListener('pointermove', onMove)
  }, [reduce, x, y])

  return { x, y }
}

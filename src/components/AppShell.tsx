import { useSystem } from '#/stores/system'
import type { FC, PropsWithChildren } from 'react'
import { ParallaxWallpaper } from './ui/ParallaxWallpaper'
import { motion, useTransform } from 'motion/react'
import { useParallax } from '#/hooks/useParallax'

const HELLO_STRENTH = 30

export const AppShell: FC<PropsWithChildren> = ({ children }) => {
  const wallpaper = useSystem((s) => s.wallpaper)
  const { x, y } = useParallax()
  const hx = useTransform(x, (v) => -v * HELLO_STRENTH)
  const hy = useTransform(y, (v) => -v * HELLO_STRENTH)

  return (
    <div className="relative z-0 w-screen h-screen overflow-hidden">
      <ParallaxWallpaper wallpaper={wallpaper} />
      <motion.div
        style={{ x: hx, y: hy }}
        className="absolute z-[-1] inset-[-6%] pl-[calc(6%+120px)] pt-50 bg-transparent pointer-events-none"
      >
        <div className="hello flex flex-col gap-4.5 max-w-137.5">
          <div className="k font-mono text-accent-light">
            ~/nolan — software engineer
          </div>
          <h1 className="text-6xl text-transparent leading-[1.2] font-bold tracking-[-.03em] bg-clip-text bg-linear-120  from-paper-white via-70% via-water to-cyan">
            Calm surface.
            <br />
            Deep engineering.
          </h1>
          <p className="text-cool shadow-2xl">
            I build widgets, dashboards and interactive layers for IoT products.
            Open a window below to look around.
          </p>
        </div>
      </motion.div>
      {children}
    </div>
  )
}

import { useParallax } from '#/hooks/useParallax'
import { motion, useTransform } from 'motion/react'
import type { FC } from 'react'

export type ParallaxWallpaperProps = {
  wallpaper: string
}

const BG_STRENGTH = 10

export const ParallaxWallpaper: FC<ParallaxWallpaperProps> = ({
  wallpaper,
}) => {
  const { x, y } = useParallax()
  const tx = useTransform(x, (v) => -v * BG_STRENGTH)
  const ty = useTransform(y, (v) => -v * BG_STRENGTH)

  return (
    <motion.div
      style={{ backgroundImage: `url(${wallpaper})`, x: tx, y: ty }}
      className="absolute -z-10 inset-[-6%] bg-cover bg-center bg-no-repeat pointer-events-none"
    >
      <div className="w-full h-full backdrop-brightness-30 backdrop-blur-[1px]" />
    </motion.div>
  )
}

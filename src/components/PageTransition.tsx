import { motion } from 'motion/react'
import type { FC, PropsWithChildren } from 'react'

export const PageTransition: FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.div
      className="w-full h-full"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

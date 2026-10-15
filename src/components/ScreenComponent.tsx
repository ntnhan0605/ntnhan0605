import { cn } from '#/lib/cn'
import { motion, type HTMLMotionProps } from 'motion/react'
import type { FC } from 'react'

export type ScreenComponentProps = HTMLMotionProps<'div'>

export const ScreenComponent: FC<ScreenComponentProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <motion.div
      className={cn(
        'flex items-center justify-center w-full h-full text-slate-soft text-sm select-none',
        className,
      )}
      initial={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

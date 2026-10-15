import { useEffect } from 'react'
import { motion, useReducedMotion } from 'motion/react'

import { Icon } from '#/components/ui/Icon'

type Props = { onDone: () => void }

// Lấy từ @keyframes boot và .power trong file HTML gốc
const BOOT_DURATION = 1.5
const BOOT_EASE = [0.4, 0.1, 0.3, 1] as const
const BOOT_TIMES = [0, 0.35, 0.55, 1]
const BOOT_WIDTHS = ['0%', '42%', '48%', '100%']

export function BootScreen({ onDone }: Props) {
  const reduce = useReducedMotion()

  // Người dùng bật "giảm chuyển động": bỏ qua animation
  useEffect(() => {
    if (reduce) onDone()
  }, [reduce, onDone])

  return (
    <motion.div
      className="fixed inset-0 z-4000 flex flex-col items-center justify-center gap-6.5 bg-black"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Icon name="logo" size={72} className="text-slate-50" />
      <div className="h-1.25 w-45 overflow-hidden rounded-full bg-slate-800">
        <motion.div
          className="h-full rounded-[inherit] bg-slate-50"
          initial={{ width: '0%' }}
          animate={reduce ? undefined : { width: BOOT_WIDTHS }}
          transition={{
            duration: BOOT_DURATION,
            times: BOOT_TIMES,
            ease: BOOT_EASE,
          }}
          onAnimationComplete={onDone}
        />
      </div>
    </motion.div>
  )
}

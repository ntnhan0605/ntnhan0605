import { ButtonIcon } from '#/components/ButtonIcon'
import { useSystem } from '#/stores/system'
import { motion } from 'motion/react'
import { useCallback } from 'react'

export function PowerScreen() {
  const setStatus = useSystem((s) => s.setStatus)
  const onLocked = useCallback(() => setStatus('locked'), [])
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-6.5 flex-wrap w-full h-full text-slate-soft text-sm select-none"
      animate="visible"
      initial={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
    >
      <ButtonIcon
        name="poweroff"
        size="lg"
        onClick={onLocked}
        className="text-cool [&_.ButtonIcon--icon\_container]:bg-navy! [&_.ButtonIcon--icon\_container]:border-slate-line!"
      />
      <small>Click to power on</small>
    </motion.div>
  )
}

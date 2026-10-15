import { useSystem } from '#/stores/system'
import { motion } from 'motion/react'
import { useCallback } from 'react'

export function SleepScreen() {
  const setStatus = useSystem((s) => s.setStatus)
  const onLocked = useCallback(() => setStatus('locked'), [])
  return (
    <motion.div
      className="flex items-center justify-center w-full h-full text-slate-soft text-sm select-none"
      animate="visible"
      initial={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      onClick={onLocked}
      onKeyPress={onLocked}
    >
      <small>Sleep - click or press any key to awake</small>
    </motion.div>
  )
}

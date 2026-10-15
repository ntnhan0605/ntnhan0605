import { ScreenComponent } from '#/components/ScreenComponent'
import { useSystem } from '#/stores/system'
import { useCallback } from 'react'

export function SleepScreen() {
  const setStatus = useSystem((s) => s.setStatus)
  const onBooting = useCallback(() => setStatus('booting'), [])

  return (
    <ScreenComponent onClick={onBooting}>
      <small>Sleep - click or press any key to awake</small>
    </ScreenComponent>
  )
}

import { ScreenComponent } from '#/components/ScreenComponent'
import { ButtonIcon } from '#/components/ui/ButtonIcon'
import { useSystem } from '#/stores/system'
import { useCallback } from 'react'

export function PowerScreen() {
  const setStatus = useSystem((s) => s.setStatus)
  const onBooting = useCallback(() => setStatus('booting'), [])
  return (
    <ScreenComponent>
      <ButtonIcon
        name="poweroff"
        size="lg"
        onClick={onBooting}
        className="text-cool gap-6.5 [&_.ButtonIcon--icon\_container]:bg-navy! [&_.ButtonIcon--icon\_container]:border-slate-line!"
      >
        Click to power on
      </ButtonIcon>
    </ScreenComponent>
  )
}

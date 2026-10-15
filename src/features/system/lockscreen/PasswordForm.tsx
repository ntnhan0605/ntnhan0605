import { useState, type FormEvent } from 'react'
import { useAnimate } from 'motion/react'

import { Icon } from '#/components/Icon'

// Lấy từ file HTML gốc
const PASSWORDS = ['water', '水', 'nham thuy', 'nhâm thủy', 'nhamthuy']
export const PASSWORD_HINT = 'Hint: my element — the one in the palette 💧'

type Props = {
  onUnlock: () => void
  onGuest: () => void
  onCancel: () => void
}

export function PasswordForm({ onUnlock, onGuest, onCancel }: Props) {
  const [value, setValue] = useState('')
  const [msg, setMsg] = useState('')
  const [tries, setTries] = useState(0)
  const [scope, animate] = useAnimate()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (PASSWORDS.includes(value.trim().toLowerCase())) {
      setMsg('')
      onUnlock()
      return
    }

    const next = tries + 1
    setTries(next)
    setValue('')
    setMsg(next >= 2 ? PASSWORD_HINT : 'Incorrect password')
    animate(scope.current, { x: [0, -9, 9, -9, 9, 0] }, { duration: 0.45 })
  }

  return (
    <div className="flex flex-col items-center gap-2.5">
      <form
        ref={scope}
        onSubmit={handleSubmit}
        autoComplete="off"
        className="flex h-9 w-57.5 items-center rounded-full border border-slate-50/28 bg-slate-50/18 pr-1 pl-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,.15)]"
      >
        <input
          type="password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter Password"
          aria-label="Password"
          autoFocus
          className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-50/70"
        />
        <button
          type="submit"
          aria-label="Log in"
          className="grid size-7 flex-none place-items-center rounded-full bg-slate-50/22"
        >
          <Icon name="log-in" size={15} />
        </button>
      </form>

      <div className="min-h-[1.2em] text-center text-[.8rem] opacity-90 [text-shadow:0_1px_6px_rgba(11,18,32,.6)]">
        {msg}
      </div>

      <div className="flex gap-4 text-[.78rem] text-sky-100/85 underline underline-offset-[3px]">
        <button type="button" onClick={() => setMsg(PASSWORD_HINT)}>
          Show hint
        </button>
        <button type="button" onClick={onGuest}>
          Continue as Guest
        </button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  )
}

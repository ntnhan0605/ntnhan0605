import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'

import { Icon } from '#/components/Icon'
import { writeSession } from '#/lib/session'
import { useSystem } from '#/stores/system'

import { PasswordForm } from './PasswordForm'

const WALLPAPER = '/images/wallpaper.webp'
const AVATAR = '/images/avatar-nolan.webp'

type Mode = 'pick' | 'pw'

function useClock() {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 10_000)
    return () => clearInterval(id)
  }, [])
  return now
}

export function LockScreen() {
  const setStatus = useSystem((s) => s.setStatus)
  const now = useClock()
  const reduce = useReducedMotion()
  const [mode, setMode] = useState<Mode>('pick')

  const date = now.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  })
  const time = now
    .toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
    .replace(/\s?[AP]M$/, '')

  // Escape quay về danh sách người dùng
  useEffect(() => {
    if (mode !== 'pw') return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMode('pick')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [mode])

  function unlock(user: string) {
    writeSession(user)
    setStatus('running')
  }

  return (
    <motion.div
      className="fixed inset-0 z-3000 flex flex-col items-center justify-between px-5 pt-[7vh] pb-[5vh] text-slate-50 select-none"
      style={{
        backgroundImage: `url(${WALLPAPER})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.08 }}
      transition={{ duration: 0.6 }}
    >
      {/* Lớp kính mờ phủ lên wallpaper */}
      <div className="absolute inset-0 bg-[rgba(11,18,32,0.28)] backdrop-blur-[26px] backdrop-saturate-125" />

      {/* Đồng hồ */}
      <div className="relative text-center [text-shadow:0_2px_24px_rgba(11,18,32,.45)]">
        <div className="text-[clamp(1rem,2.2vw,1.35rem)] font-semibold opacity-90">
          {date}
        </div>
        <div className="mt-1 bg-linear-to-b from-slate-50 to-sky-200 bg-clip-text text-[clamp(4.6rem,13vw,8.6rem)] leading-none font-bold tracking-[-0.045em] text-transparent">
          {time}
        </div>
      </div>

      {/* Người dùng, mật khẩu, gợi ý */}
      <div className="relative flex w-full flex-col items-center gap-4.5">
        {mode === 'pick' ? (
          <div className="flex justify-center gap-11">
            <button
              type="button"
              onClick={() => setMode('pw')}
              className="flex flex-col items-center gap-2.5 rounded-2xl p-1.5 transition-transform hover:-translate-y-0.75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
            >
              <img
                src={AVATAR}
                alt=""
                className="size-22 rounded-full border-3 border-slate-50/55 object-cover shadow-[0_12px_34px_-10px_rgba(2,6,23,.7)]"
              />
              <b className="text-base font-semibold [text-shadow:0_1px_8px_rgba(11,18,32,.5)]">
                Nolan
              </b>
            </button>

            <button
              type="button"
              onClick={() => unlock('guest')}
              className="flex flex-col items-center gap-2.5 rounded-2xl p-1.5 transition-transform hover:-translate-y-0.75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
            >
              <Icon name="guest" size={88} className="shadow-[0_12px_34px_-10px_rgba(2,6,23,.7)]" />
              <b className="text-base font-semibold [text-shadow:0_1px_8px_rgba(11,18,32,.5)]">
                Guest
              </b>
            </button>
          </div>
        ) : (
          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            {/* Avatar người đang chọn, giữ nguyên khi nhập mật khẩu */}
            <div className="flex flex-col items-center gap-2.5 p-1.5">
              <img
                src={AVATAR}
                alt=""
                className="size-22 rounded-full border-3 border-slate-50/55 object-cover shadow-[0_12px_34px_-10px_rgba(2,6,23,.7)]"
              />
              <b className="text-base font-semibold [text-shadow:0_1px_8px_rgba(11,18,32,.5)]">
                Nolan
              </b>
            </div>
            <PasswordForm
              onUnlock={() => unlock('nolan')}
              onGuest={() => unlock('guest')}
              onCancel={() => setMode('pick')}
            />
          </motion.div>
        )}

        {mode === 'pick' && (
          <div className="text-[.78rem] opacity-75 [text-shadow:0_1px_6px_rgba(11,18,32,.6)]">
            Choose a user — Guest opens the desktop right away
          </div>
        )}
      </div>

      {/* Nút nguồn góc dưới phải */}
      <div className="absolute right-7 bottom-[calc(26px+env(safe-area-inset-bottom,0px))] flex gap-5.5">
        <PowerButton label="Sleep" icon="sleep" onClick={() => setStatus('sleep')} />
        <PowerButton label="Restart" icon="restart" onClick={() => setStatus('booting')} />
        <PowerButton label="Shut Down" icon="poweroff" onClick={() => setStatus('off')} />
      </div>
    </motion.div>
  )
}

function PowerButton({
  label,
  icon,
  onClick,
}: {
  label: string
  icon: 'sleep' | 'restart' | 'poweroff'
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex flex-col items-center gap-1.5 text-[.72rem] opacity-85 hover:opacity-100"
    >
      <span className="grid size-10 place-items-center rounded-full border border-slate-50/22 bg-slate-50/16">
        <Icon name={icon} size={18} />
      </span>
      {label}
    </button>
  )
}

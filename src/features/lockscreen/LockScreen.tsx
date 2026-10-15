import { ButtonIcon } from '#/components/ui/ButtonIcon'
import { Icon } from '#/components/ui/Icon'
import { useClock } from '#/hooks/useClock'
import { writeSession } from '#/lib/session'
import { useSystem } from '#/stores/system'
import { motion, useReducedMotion } from 'motion/react'
import { useEffect, useState } from 'react'
import { PasswordForm } from './PasswordForm'

const AVATAR = '/images/avatar-nolan.webp'

type Mode = 'pick' | 'pw'

export function LockScreen() {
  const now = useClock()
  const wallpaper = useSystem((s) => s.wallpaper)
  const setStatus = useSystem((s) => s.setStatus)
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
        backgroundImage: `url(${wallpaper})`,
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
      <div className="relative flex w-full flex-col items-center gap-4.5 max-md:mt-auto max-md:mb-4.5">
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
              <Icon
                name="guest"
                size={88}
                className="shadow-[0_12px_34px_-10px_rgba(2,6,23,.7)] rounded-full"
              />
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
      <div className="md:absolute md:right-7 md:bottom-[calc(26px+env(safe-area-inset-bottom,0px))] flex gap-5.5">
        <ButtonIcon name="sleep" onClick={() => setStatus('sleep')}>
          Sleep
        </ButtonIcon>
        <ButtonIcon name="restart" onClick={() => setStatus('booting')}>
          Restart
        </ButtonIcon>
        <ButtonIcon name="poweroff" onClick={() => setStatus('off')}>
          Shut Down
        </ButtonIcon>
      </div>
    </motion.div>
  )
}

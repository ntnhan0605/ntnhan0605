import { useSystem } from '#/stores/system'
import { createRootRoute, Outlet, useRouterState } from '@tanstack/react-router'
import { AnimatePresence, motion, MotionConfig } from 'motion/react'

import { TanStackDevtools } from '@tanstack/react-devtools'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'

import '../styles.css'
import { BootScreen } from '#/features/system/BootScreen'
import { LockScreen } from '#/features/system/lockscreen/LockScreen'
import { SleepScreen } from '#/features/system/SleepScreen'
import { PowerScreen } from '#/features/system/PowerScreen'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const status = useSystem((s) => s.status)
  const setStatus = useSystem((s) => s.setStatus)
  const pathname = useRouterState({ select: (s) => s.location.pathname })

  return (
    <MotionConfig reducedMotion="user">
      <div className="w-screen h-screen overflow-hidden bg-black">
        {/* Lớp 1: màn hình hệ thống, tối đa một màn tại một thời điểm */}
        <AnimatePresence mode="wait">
          {status === 'booting' && (
            <BootScreen key="booting" onDone={() => setStatus('locked')} />
          )}
          {status === 'locked' && <LockScreen key="locked" />}
          {status === 'sleep' && <SleepScreen key="sleep" />}
          {status === 'off' && <PowerScreen key="off" />}
        </AnimatePresence>
        {/* Lớp 2: nội dung route, chỉ hiện khi đang chạy */}
        <AnimatePresence>
          {status === 'running' && (
            <motion.div
              key={pathname}
              className="w-full h-full"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <Outlet />
            </motion.div>
          )}
        </AnimatePresence>
        <TanStackDevtools
          config={{ position: 'bottom-right' }}
          plugins={[
            {
              name: 'TanStack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
      </div>
    </MotionConfig>
  )
}

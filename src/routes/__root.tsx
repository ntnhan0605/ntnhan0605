import { PageTransition } from '#/components/PageTransition'
import { BootScreen } from '#/features/boot/BootScreen'
import { LockScreen } from '#/features/lockscreen/LockScreen'
import { PowerScreen } from '#/features/power/PowerScreen'
import { SleepScreen } from '#/features/power/SleepScreen'
import { useSystem } from '#/stores/system'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { createRootRoute, Outlet, useRouterState } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { AnimatePresence, MotionConfig } from 'motion/react'
import '../styles.css'
import { AppShell } from '#/components/AppShell'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const status = useSystem((s) => s.status)
  const setStatus = useSystem((s) => s.setStatus)
  const pathname = useRouterState({ select: (s) => s.location.pathname })

  return (
    <MotionConfig reducedMotion="user">
      <div className="w-screen h-screen overflow-hidden bg-black relative">
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
            <AppShell>
              <PageTransition key={pathname}>
                <Outlet />
              </PageTransition>
            </AppShell>
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

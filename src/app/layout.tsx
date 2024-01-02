import { LayoutClient } from '@/components/Layout/LayoutClient'
import { AppProgressBar } from '@/components/ProgressBar/AppProgressBar'
import { PropsWithChildren } from 'react'

import '@/styles/global.scss'
import '@/styles/index.scss'

export default function RootLayout(props: PropsWithChildren) {
  const { children } = props
  return (
    <html lang="en">
      <body>
        <AppProgressBar />
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  )
}

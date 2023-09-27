import '@/styles/global.scss'
import '@/styles/index.scss'
import { PropsWithChildren } from 'react'

export default function RootLayout(props: PropsWithChildren) {
  const { children } = props
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

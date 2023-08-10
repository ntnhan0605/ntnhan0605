import { ReactNode } from 'react'

export default function AdminLayout(props: { children: ReactNode }) {
  const { children } = props
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}

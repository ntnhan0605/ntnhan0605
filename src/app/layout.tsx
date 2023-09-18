import '@/styles/global.scss'

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  )
}

import '@/styles/global.scss'
import '@/styles/index.scss'
import { customGenerateMetadata } from '@/utils/metadata'
import { PropsWithChildren } from 'react'

export const generateMetadata = customGenerateMetadata({})

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="en">
      <body>{props.children}</body>
    </html>
  )
}

import { FooterClient } from '@/components/Footer/FooterClient'
import { HeaderClient } from '@/components/Header/HeaderClient'
import { ReactNode } from 'react'

export type LayoutClientProps = {
  children: ReactNode
}

export const LayoutClient = (props: LayoutClientProps) => {
  const { children } = props

  return (
    <>
      <HeaderClient />
      {children}
      <FooterClient />
    </>
  )
}

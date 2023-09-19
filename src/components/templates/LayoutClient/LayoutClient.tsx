import { Footer } from '@/components/molecules/Footer'
import { Header } from '@/components/molecules/Header'
import { Main } from '@/components/molecules/Main'
import { FC, ReactNode } from 'react'

export type LayoutClientProps = { children: ReactNode }
export const LayoutClient: FC<LayoutClientProps> = (props) => {
  const { children } = props
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

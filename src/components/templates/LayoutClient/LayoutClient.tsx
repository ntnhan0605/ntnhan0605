import { Footer } from '@/components/molecules/footer'
import { Header } from '@/components/molecules/header'
import { Main } from '@/components/molecules/main'
import { FC, ReactNode } from 'react'

export type LayoutProps = { children: ReactNode }
export const Layout: FC<LayoutProps> = (props) => {
  const { children } = props
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

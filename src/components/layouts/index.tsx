import { FC, ReactNode } from 'react'
import { Footer } from '../templates/footer'
import { Header } from '../templates/header'
import { Main } from '../templates/main'

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

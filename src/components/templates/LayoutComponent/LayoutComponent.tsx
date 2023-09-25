import { Footer } from '@/components/molecules/Footer'
import { HeaderComponent } from '@/components/molecules/HeaderComponent'
import { Main } from '@/components/molecules/Main'
import { FC, ReactNode } from 'react'

export type LayoutComponentProps = { children: ReactNode }

export const LayoutComponent: FC<LayoutComponentProps> = (props) => {
  const { children } = props
  return (
    <>
      <HeaderComponent />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

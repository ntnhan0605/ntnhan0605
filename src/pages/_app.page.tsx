import { ReactNode } from 'react'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ThemeMuiContextComponent } from '@/contexts/ThemeMuiContext'
import './index.css'

export type NextPageWithLayout<P = any, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactNode) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App(props: AppPropsWithLayout) {
  const { Component, pageProps } = props
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <ThemeMuiContextComponent>
      {getLayout(<Component {...pageProps} />)}
    </ThemeMuiContextComponent>
  )
}

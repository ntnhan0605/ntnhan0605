import { ReactNode } from 'react'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ThemeMuiContextComponent } from '@/contexts/ThemeMuiContext'
import { ZustandStore, useHydrate } from '@/zustand/store'
import { StoreProvider } from '@/zustand/zustandProvider'
import './fonts.css'
import './index.css'

export type NextPageWithLayout<P = any, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactNode) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
  pageProps: AppProps['pageProps'] & {
    initialZustandState?: Partial<ZustandStore>
  }
}

export default function App(props: AppPropsWithLayout) {
  const { Component, pageProps } = props
  const store = useHydrate(pageProps.initialZustandState)
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <StoreProvider store={store}>
      <ThemeMuiContextComponent>
        {getLayout(<Component {...pageProps} />)}
      </ThemeMuiContextComponent>
    </StoreProvider>
  )
}

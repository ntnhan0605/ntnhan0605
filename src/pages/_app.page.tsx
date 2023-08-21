import { ThemeMui } from '@/utils/ThemeMui'
import createEmotionCache from '@/utils/createEmotionCache'
import { ZustandStore, useHydrate } from '@/zustand/store'
import { StoreProvider } from '@/zustand/zustandProvider'
import { EmotionCache } from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { StyledEngineProvider } from '@mui/material'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactNode } from 'react'

import './fonts.css'
import './index.css'

export type NextPageWithLayout<P = any, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactNode) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
  emotionCache?: EmotionCache
  pageProps: AppProps['pageProps'] & {
    initialZustandState?: Partial<ZustandStore>
  }
}

const clientSideEmotionCache = createEmotionCache()

export default function App(props: AppPropsWithLayout) {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props
  const store = useHydrate(pageProps.initialZustandState)
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <StoreProvider store={store}>
      <StyledEngineProvider injectFirst>
        <CacheProvider value={emotionCache}>
          <ThemeMui>{getLayout(<Component {...pageProps} />)}</ThemeMui>
        </CacheProvider>
      </StyledEngineProvider>
    </StoreProvider>
  )
}

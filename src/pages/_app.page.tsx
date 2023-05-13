import type { AppProps } from 'next/app'
import { ThemeContextMUIComponent } from '@/contexts/ThemeContextMUI'
import '@/styles/index.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextMUIComponent>
      <Component {...pageProps} />
    </ThemeContextMUIComponent>
  )
}

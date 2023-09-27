'use client'
import { FooterComponent } from '@/components/Footer'
import { HeaderComponent } from '@/components/Header'
import { MainComponent, MainComponentProps } from '@/components/Main'
import {
  FC,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState
} from 'react'

type LayoutContextProps = {
  isShowHeader: boolean
  isShowFooter: boolean
  mainProps?: MainComponentProps
  onChangeLayout?: (value: LayoutContextProps) => void
}
const initLayoutContext: LayoutContextProps = {
  isShowHeader: true,
  isShowFooter: true
}
const LayoutContext = createContext(initLayoutContext)

export const useLayoutContext = () => useContext(LayoutContext)

export type LayoutComponentProps = { children: ReactNode }

export const LayoutComponent: FC<LayoutComponentProps> = (props) => {
  const { children } = props
  const [layoutValue, setLayoutValue] =
    useState<LayoutContextProps>(initLayoutContext)
  const onChangeLayout = useCallback((value: LayoutContextProps) => {
    setLayoutValue({ ...layoutValue, ...value })
  }, Object.values(layoutValue))
  return (
    <LayoutContext.Provider value={{ ...layoutValue, onChangeLayout }}>
      {layoutValue.isShowHeader && <HeaderComponent />}
      <MainComponent {...layoutValue.mainProps}>{children}</MainComponent>
      {layoutValue.isShowFooter && <FooterComponent />}
    </LayoutContext.Provider>
  )
}

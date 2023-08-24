import { FC, ReactNode } from 'react'
import { StyledMain } from './Main.styled'

export type MainProps = {
  children: ReactNode
}
export const Main: FC<MainProps> = (props) => {
  const { children } = props
  return <StyledMain>{children}</StyledMain>
}

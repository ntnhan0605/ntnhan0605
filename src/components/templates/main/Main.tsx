import { FC, ReactNode } from 'react'

export type MainProps = {
  children: ReactNode
}
export const Main: FC<MainProps> = (props) => {
  const { children } = props
  return <main>{children}</main>
}

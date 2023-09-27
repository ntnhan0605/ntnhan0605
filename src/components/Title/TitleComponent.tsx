import { FC, ReactNode } from 'react'

export type TitleProps = {
  children?: ReactNode
}

export const TitleComponent: FC<TitleProps> = (props) => {
  const { children } = props
  return <h1>{children}</h1>
}

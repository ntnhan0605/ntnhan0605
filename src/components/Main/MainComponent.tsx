import { CSSProperties, FC, PropsWithChildren } from 'react'

export type MainComponentProps = PropsWithChildren & {
  className?: string
  style?: CSSProperties
}
export const MainComponent: FC<MainComponentProps> = (props) => {
  const { children, className, style } = props
  return (
    <main className={className} style={style}>
      {children}
    </main>
  )
}

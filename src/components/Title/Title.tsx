import { Size } from '@/utils/variables'
import clsx from 'clsx'
import { CSSProperties, FC, ReactNode } from 'react'
import styles from './Title.module.scss'

export type TitleProps = {
  children?: ReactNode
  size?: Size
  htmlType?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  className?: string
  style?: CSSProperties
}

export const Title: FC<TitleProps> = (props) => {
  const { children, size = 'md', htmlType = 'h1', className, style } = props

  const TitleComp = htmlType
  const classNames = clsx(styles.title, styles[`title-${size}`], className)

  return (
    <TitleComp className={classNames} style={style}>
      {children}
    </TitleComp>
  )
}

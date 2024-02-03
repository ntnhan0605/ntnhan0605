import { CSSProperties, ReactNode } from 'react'

export type MenuItem = {
  key?: string
  title?: string
  icon?: ReactNode
  onClick?: () => void
  className?: string
  style?: CSSProperties
}

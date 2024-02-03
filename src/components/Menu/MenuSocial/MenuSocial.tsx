import { CSSProperties } from 'react'
import styles from './MenuSocial.module.scss'
import clsx from 'clsx'
import { MenuItem } from '@/interfaces'
export type MenuSocialProps = {
  items: MenuItem[]
  layout?: 'horizontal' | 'vertial'
  style?: CSSProperties
  className?: string
}

export const MenuSocial = (props: MenuSocialProps) => {
  const { items, layout = 'horizontal', className, style } = props

  if (!items.length) {
    return null
  }

  return (
    <ul
      className={clsx(styles.list, 'menu--list', styles[layout], className)}
      style={style}>
      {items.map((item) => {
        return (
          <li
            key={item.key}
            className={clsx(styles.item, 'menu--item', item.className)}
            style={style}
            onClick={item.onClick}>
            {item.icon}
          </li>
        )
      })}
    </ul>
  )
}

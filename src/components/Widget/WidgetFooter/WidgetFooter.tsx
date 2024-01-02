import { CSSProperties, ReactNode } from 'react'
import styles from './WidgetFooter.module.scss'
import Link from 'next/link'
import clsx from 'clsx'

type WidgetMenuItem = {
  label?: ReactNode
  link?: string
}

export type WidgetFooterProps = {
  title?: string
  items?: WidgetMenuItem[]
  className?: string
  style?: CSSProperties
}

export const WidgetFooter = (props: WidgetFooterProps) => {
  const { title, items, className, style } = props

  return (
    <div className={clsx(styles.widget, className)} style={style}>
      <h3 className={styles.widgetTitle}>{title}</h3>
      <ul className={styles.widgetMenu}>
        {items?.map((item, index) => {
          return (
            <li key={`${index}`} className={styles.item}>
              <Link href={item?.link || ''} className={styles.link}>
                {item.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

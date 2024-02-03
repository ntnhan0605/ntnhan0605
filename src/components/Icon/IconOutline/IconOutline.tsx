import clsx from 'clsx'
import { Icon, IconName } from '../Icon'
import styles from './IconOutline.module.scss'
import { CSSProperties } from 'react'

export type IconOutlineProps = {
  name: IconName
  className?: string
  style?: CSSProperties
}

export const IconOutline = (props: IconOutlineProps) => {
  const { name, className, style } = props

  return (
    <span className={clsx(styles.iconContainer, className)} style={style}>
      <svg
        width="1em"
        height="1em"
        className={clsx(styles.svgCircle, 'circle')}>
        <circle cx="50%" cy="50%" r="49%"></circle>
      </svg>
      <Icon name={name} className={clsx(styles.icon, 'icon')} />
    </span>
  )
}

import { CSSProperties, FC } from 'react'
import { Icon, IconName } from '../Icon'
import styles from './IconNumber.module.scss'
import clsx from 'clsx'

export type IconNumberProps = {
  name: IconName
  number?: number
  className?: string
  style?: CSSProperties
}
export const IconNumber: FC<IconNumberProps> = (props) => {
  const { name, number, className, style } = props
  return (
    <span className={clsx(styles.iconNumber, className)} style={style}>
      <Icon name={name} className={styles.icon} />
      {typeof number !== 'undefined' && (
        <span className={styles.number}>{number}</span>
      )}
    </span>
  )
}

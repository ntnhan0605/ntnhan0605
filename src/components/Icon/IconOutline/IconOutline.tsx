import { Icon, IconName } from '../Icon'
import styles from './IconOutline.module.scss'

export type IconOutlineProps = {
  name: IconName
}

export const IconOutline = (props: IconOutlineProps) => {
  const { name } = props

  return (
    <span className={styles.icon}>
      <Icon name={name} />
    </span>
  )
}

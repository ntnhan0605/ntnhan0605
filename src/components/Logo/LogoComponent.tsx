import Link from 'next/link'
import { FC } from 'react'
import { Icon } from '../Icon'
import clsx from 'clsx'
import styles from './LogoComponent.module.scss'

export type LogoProps = {
  href?: string
  className?: string
}
export const LogoComponent: FC<LogoProps> = (props) => {
  const { href, className } = props
  return (
    <Link href={href || '/'} className={clsx(styles.container, className)}>
      {/* <IconComponent name="logo" className={clsx(styles.logoSvg, 'logo-svg')} /> */}
      <img
        src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/07/logo_mainpng.png"
        alt=""
        className={clsx(styles.logoSvg, 'logo-svg')}
      />
    </Link>
  )
}

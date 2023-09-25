import clsx from 'clsx'
import { CSSProperties, MouseEventHandler, ReactNode, forwardRef } from 'react'
import styles from './ButtonComponent.module.scss'
import Link from 'next/link'

type LinkProps = {
  href: string
  useLink: true
}

type ButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>
  useLink?: false
}

export type ButtonComponentProps = {
  children?: ReactNode
  loading?: boolean
  disabled?: boolean
  type?: 'outline' | 'primary' | 'default'
  size?: 'small' | 'medium' | 'large'
  className?: string
  style?: CSSProperties
} & (LinkProps | ButtonProps)
export const ButtonComponent = forwardRef(function (
  props: ButtonComponentProps,
  ref: React.ForwardedRef<any>
) {
  const {
    children,
    loading,
    disabled,
    type = 'primary',
    size = 'medium',
    className,
    style,
    ...restProps
  } = props
  const classNames = clsx(
    styles.button,
    {
      [styles.outline]: type === 'outline',
      [styles.primary]: type === 'primary',
      [styles.small]: size === 'small',
      [styles.medium]: size === 'medium',
      [styles.large]: size === 'large',
      [styles.disabled]: disabled,
      [styles.loading]: loading
    },
    className
  )

  const childrenElement = type !== 'primary' ? <>{children}</> : <>{children}</>

  if (restProps.useLink) {
    return (
      <Link href={restProps.href} className={classNames} style={style}>
        {childrenElement}
      </Link>
    )
  }

  return (
    <button {...restProps} ref={ref} className={classNames} style={style}>
      {childrenElement}
    </button>
  )
})

import { Size } from '@/utils/variables'
import clsx from 'clsx'
import Link from 'next/link'
import { CSSProperties, MouseEventHandler, ReactNode, forwardRef } from 'react'
import styles from './Button.module.scss'
import { IconName } from '../Icon'

type LinkProps = {
  href: string
  useLink: true
  passHref?: boolean
}

type ButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>
  useLink?: false
}

export type ButtonComponentProps = {
  children?: ReactNode
  loading?: boolean
  disabled?: boolean
  startIcon?: IconName
  type?: 'primary' | 'default' | 'link' | 'outline' | 'outline-border'
  size?: Size
  className?: string
  style?: CSSProperties
} & (LinkProps | ButtonProps)
const ButtonComponentWithoutRef = (
  props: ButtonComponentProps,
  ref: React.Ref<
    ButtonComponentProps['useLink'] extends true
      ? HTMLAnchorElement
      : HTMLButtonElement
  >
) => {
  const {
    children,
    loading,
    disabled,
    type = 'primary',
    size = 'md',
    className,
    style,
    ...restProps
  } = props
  const classNames = clsx(
    styles.button,
    styles[type],
    styles[size],
    {
      [styles.disabled]: disabled,
      [styles.loading]: loading
    },
    className
  )

  const childrenElement =
    type !== 'outline-border' ? (
      <>{children}</>
    ) : (
      <>
        <span className={styles.border}>
          <span className={styles.borderTop} />
          <span className={styles.borderRight} />
          <span className={styles.borderBottom} />
          <span className={styles.borderLeft} />
        </span>
        {children}
      </>
    )

  if (restProps.useLink) {
    const { useLink, ...linkRestProps } = restProps
    return (
      <Link
        {...linkRestProps}
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={restProps.href}
        className={classNames}
        style={style}>
        {childrenElement}
      </Link>
    )
  }

  return (
    <button
      {...restProps}
      ref={ref}
      className={classNames}
      style={style}
      disabled={!!disabled}>
      {childrenElement}
    </button>
  )
}

export const Button = forwardRef(ButtonComponentWithoutRef)

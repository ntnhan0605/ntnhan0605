'use client'
import { FC } from 'react'
import styles from './LoadingPageComponent.module.scss'
import clsx from 'clsx'

export type LoadingPageComponentProps = {
  loading?: boolean
}
export const LoadingPageComponent: FC<LoadingPageComponentProps> = (props) => {
  const { loading } = props
  return (
    <div className={clsx(styles.container, { [styles.loading]: loading })}>
      <div className={clsx(styles.wrapper)}>
        <div className={clsx(styles.inner)}>Loading...</div>
      </div>
    </div>
  )
}

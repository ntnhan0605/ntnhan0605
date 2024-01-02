import clsx from 'clsx'
import { CSSProperties, ReactNode, useMemo } from 'react'
import styles from './InputComponent.module.scss'

export type InputComponentProps = {
  children?: ReactNode
  error?: string | string[]
  containerClass?: string
  containerStyle?: CSSProperties
}

export const InputComponent = (props: InputComponentProps) => {
  const { error, containerClass, containerStyle, children } = props
  const errors = useMemo(() => {
    if (typeof error === 'string' && !!error) {
      return [error]
    }
    if (Array.isArray(error) && error?.every(String)) {
      return error
    }
    return []
  }, [error])
  const isError = useMemo(() => {
    return Boolean(errors.length)
  }, [errors])

  return (
    <label
      className={clsx(styles.container, { error: isError }, containerClass)}
      style={containerStyle}>
      {children}
      <div className={clsx(styles.errorContainer)}>
        {errors.map((err, i) => {
          return (
            <span key={`${i}`} className={styles.errorItem}>
              {err}
            </span>
          )
        })}
      </div>
    </label>
  )
}

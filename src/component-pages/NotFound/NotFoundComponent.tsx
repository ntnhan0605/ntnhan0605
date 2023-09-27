'use client'
import { ButtonComponent } from '@/components/Button'
import { FC, ReactNode } from 'react'
import styles from './NotFoundComponent.module.scss'

export type NotFoundComponentProps = {
  url?: string
  title?: string
  description?: ReactNode
}
export const NotFoundComponent: FC<NotFoundComponentProps> = (props) => {
  const { title, description, url = '/' } = props

  const handleClick = () => {
    window.location.href = url
  }

  return (
    <div className="container">
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.description}>{description}</div>
        <div className={styles.buttonContainer}>
          <ButtonComponent className={styles.button} onClick={handleClick}>
            Back To Home
          </ButtonComponent>
        </div>
      </div>
    </div>
  )
}

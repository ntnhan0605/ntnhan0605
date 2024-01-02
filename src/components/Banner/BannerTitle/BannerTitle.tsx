import { Title } from '@/components/Title'
import styles from './BannerTitle.module.scss'
import Image from 'next/image'

export type BannerTitleProps = {
  title?: string
  bgImage?: string
}

export const BannerTitle = (props: BannerTitleProps) => {
  const { title, bgImage } = props

  return (
    <div className={styles.container}>
      <div className={styles.bg}>
        <img src={bgImage} alt="" />
      </div>
      <div className={styles.wrapper}>
        <div className="container">
          <Title size="lg" className={styles.title}>
            {title}
          </Title>
        </div>
      </div>
    </div>
  )
}

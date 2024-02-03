'use client'
import { BannerTitle } from '@/components/Banner/BannerTitle/BannerTitle'
import { FormContactUs } from '@/components/Form/FormContactUs'
import { FC } from 'react'
import styles from './ContactUsComponent.module.scss'
import { Title } from '@/components/Title'
import { WidgetFooter } from '@/components/Widget/WidgetFooter'

export type ContactUsComponentProps = {
  d?: string
}

export const ContactUsComponent: FC<ContactUsComponentProps> = () => {
  return (
    <>
      <BannerTitle title="CONTACT US" bgImage="/images/Contact-us.jpg" />
      <div className={styles.container}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <p className={styles.tagline}>Contact Us</p>
              <Title size="md" htmlType="h2" className={styles.title}>
                GOT ANY QUESTIONS?
              </Title>
              <div className={styles.description}>
                Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non
                mauris vitae erat consequat auctor eu in elit.
              </div>
              <div className={styles.storeContainer}>
                <div className="row">
                  <div className="col-lg-6">
                    <WidgetFooter
                      title="OFFICE"
                      items={[
                        { label: '1316 Abbot Kinney Blvd.', link: '/' },
                        { label: 'Copenhagen CA 90291', link: '/' },
                        { label: '+112 345 6789', link: 'tel:+112 345 6789' },
                        {
                          label: 'konsept@example.com',
                          link: 'tel:konsept@example.com'
                        }
                      ]}
                    />
                  </div>
                  <div className="col-lg-6">
                    <WidgetFooter
                      title="STORE"
                      items={[
                        { label: '1316 Abbot Kinney Blvd.', link: '/' },
                        { label: 'Copenhagen CA 90291', link: '/' },
                        { label: '+112 345 6789', link: 'tel:+112 345 6789' },
                        {
                          label: 'konsept@example.com',
                          link: 'tel:konsept@example.com'
                        }
                      ]}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.iconsContainer}></div>
            </div>
            <div className="col-lg-6">
              <FormContactUs />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

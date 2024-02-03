'use client'
import { Icon } from '@/components/Icon'
import { IconOutline } from '@/components/Icon/IconOutline/IconOutline'
import { MenuSocial } from '@/components/Menu'
import { WidgetFooter } from '@/components/Widget/WidgetFooter'
import clsx from 'clsx'

import { FC } from 'react'
import styles from './FooterClient.module.scss'
import { useRouter } from 'next/navigation'

const contactMenuItems = [
  { label: '+84 987 527 544', link: 'tel:+84987527544' },
  {
    label: 'ntnhan0605@gmail.com',
    link: 'mailto:ntnhan0605@gmail.com'
  },
  { label: 'Số 5 đường 35, phường 10, Quận 6', link: '' }
]

const helpMenuItems = [
  { label: 'FAQs', link: '/faqs' },
  { label: 'Pricing Plans', link: '/pricing-plans' },
  { label: 'Track', link: '/track' },
  { label: 'Your Order', link: '/your-order' }
]

const aboutUsMenuItems = [
  { label: 'Our Story', link: '/our-story' },
  { label: 'Job Opportunities', link: '/job-opportunities' },
  { label: 'Store Locator', link: '/store-locator' },
  { label: 'Contact Us', link: '/contact-us' }
]

const customerServicesMenuItems = [
  {
    label: 'My Account',
    link: '/account'
  },
  {
    label: 'Terms of Use',
    link: '/terms-of-use'
  },
  {
    label: 'Deliveries & Returns',
    link: '/deliveries-returns'
  },
  {
    label: 'Gift Card',
    link: '/gift-card'
  }
]

const paymentItems = [
  {
    label: <Icon name="visa" />
  },
  {
    label: <Icon name="paypal" />
  },
  {
    label: <Icon name="discover" />
  },
  {
    label: <Icon name="diners-club" />
  },
  {
    label: <Icon name="amex" />
  },
  {
    label: <Icon name="mastercard" />
  }
]

export const FooterClient: FC = () => {
  const router = useRouter()
  return (
    <footer className={clsx(styles.footer, 'footer')}>
      <div className={styles.footerTop}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <WidgetFooter
                title="CONTACT"
                items={contactMenuItems}
                className={clsx(styles.widget, 'widgetContact')}
              />
              <MenuSocial
                items={[
                  {
                    key: 'facebook',
                    icon: <IconOutline name="facebook" />,
                    onClick: () => router.replace('/facebook')
                  },
                  {
                    key: 'instagram',
                    icon: <IconOutline name="instagram" />,
                    onClick: () => router.replace('/instagram')
                  },
                  {
                    key: 'twitter',
                    icon: <IconOutline name="twitter" />,
                    onClick: () => router.replace('/twitter')
                  },
                  {
                    key: 'youtube',
                    icon: <IconOutline name="youtube" />,
                    onClick: () => router.replace('/youtube')
                  }
                ]}
                className={styles.menuSocial}
              />
            </div>
            <div className="col-lg-3 col-md-6">
              <WidgetFooter
                title="HELP"
                items={helpMenuItems}
                className={styles.widget}
              />
            </div>
            <div className="col-lg-3 col-md-6">
              <WidgetFooter
                title="ABOUT US"
                items={aboutUsMenuItems}
                className={styles.widget}
              />
            </div>
            <div className="col-lg-3 col-md-6">
              <WidgetFooter
                title="CUSTOMER SERVICE"
                items={customerServicesMenuItems}
                className={styles.widget}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className={styles.copyrightText}>
                © 2020 Qode Interactive, All Rights Reserved
              </p>
            </div>
            <div className="col-md-6">
              <ul className={styles.paymentList}>
                {paymentItems.map((item, index) => {
                  return (
                    <li className={styles.item} key={`${index}`}>
                      {item.label}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

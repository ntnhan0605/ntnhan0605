import { FC } from 'react'
import styles from './FooterClient.module.scss'
import Link from 'next/link'
import clsx from 'clsx'
import { Icon } from '@/components/Icon'

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
  return (
    <footer className={clsx(styles.footer, 'footer')}>
      <div className={styles.footerTop}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className={clsx(styles.widget, 'widgetContact')}>
                <h3 className={styles.widgetTitle}>CONTACT</h3>
                <ul className={styles.widgetMenu}>
                  {contactMenuItems.map((item, index) => {
                    return (
                      <li key={`${index}`} className={styles.item}>
                        <Link href={item.link} className={styles.link}>
                          {item.label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className={styles.widget}>
                <h3 className={styles.widgetTitle}>HELP</h3>
                <ul className={styles.widgetMenu}>
                  {helpMenuItems.map((item, index) => {
                    return (
                      <li key={`${index}`} className={styles.item}>
                        <Link href={item.link} className={styles.link}>
                          {item.label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className={styles.widget}>
                <h3 className={styles.widgetTitle}>ABOUT US</h3>
                <ul className={styles.widgetMenu}>
                  {aboutUsMenuItems.map((item, index) => {
                    return (
                      <li key={`${index}`} className={styles.item}>
                        <Link href={item.link} className={styles.link}>
                          {item.label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className={styles.widget}>
                <h3 className={styles.widgetTitle}>CUSTOMER SERVICE</h3>
                <ul className={styles.widgetMenu}>
                  {customerServicesMenuItems.map((item, index) => {
                    return (
                      <li key={`${index}`} className={styles.item}>
                        <Link href={item.link} className={styles.link}>
                          {item.label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
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

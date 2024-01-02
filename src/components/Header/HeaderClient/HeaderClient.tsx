import { FormSearch } from '@/components/Form/FormSearch'
import { IconNumber } from '@/components/Icon/IconNumber'
import { LogoComponent } from '@/components/Logo'
import Link from 'next/link'
import { FC } from 'react'
import styles from './HeaderClient.module.scss'
import clsx from 'clsx'

export type HeaderClientProps = {}
export const HeaderClient: FC<HeaderClientProps> = () => {
  return (
    <header className={clsx(styles.header, 'header')}>
      <div className={styles.headerTop}>
        <div className="container">
          <div className="row gtx-12">
            <div className="col-md-6">
              Miễn phí ship cho đơn hàng trên 500.000đ
            </div>
            <div className="col-md-6">
              <ul className={styles.nav}>
                <li>
                  <Link href="/faq">FAQ</Link>
                </li>
                <li>
                  <Link href="/contact-us">Liên hệ</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.headerMiddle}>
        <div className="container">
          <div className={styles.container}>
            <div className={styles.side}>
              <FormSearch />
            </div>
            <div className={styles.center}>
              <LogoComponent />
            </div>
            <div className={styles.side}>
              <div className={styles.iconGroup}>
                <IconNumber name="account" className={styles.icon} />
                <IconNumber name="heart" className={styles.icon} number={0} />
                <IconNumber name="cart" className={styles.icon} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.headerBottom}>
        <div className="container">
          <div className={styles.container}>
            <ul className={styles.menu}>
              <li className={styles.menuItem}></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

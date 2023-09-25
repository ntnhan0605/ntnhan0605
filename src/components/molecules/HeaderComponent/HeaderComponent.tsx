import { FormSearch } from '@/components/atoms/Form/FormSearch'
import { LogoComponent } from '@/components/atoms/LogoComponent'
import Link from 'next/link'
import { FC } from 'react'
import styles from './HeaderComponent.module.scss'

export const HeaderComponent: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <div className="container">
          <div className="row gtx-12">
            <div className="col-lg-6">
              Miễn phí ship cho đơn hàng trên 500.000đ
            </div>
            <div className="col-lg-6">
              <ul className={styles.nav}>
                <li>
                  <Link href="/faq">FAQ</Link>
                </li>
                <li>
                  <Link href="/contact">Liên hệ</Link>
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
            <div className={styles.side}></div>
          </div>
        </div>
      </div>
    </header>
  )
}

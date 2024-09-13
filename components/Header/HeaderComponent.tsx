'use client';
import { Cart, Heart, User } from '@/icons';
import clsx from 'clsx';
import { CSSProperties } from 'react';
import { FormSearchComponent } from '../Form';
import { LogoComponent } from '../Logo';
import { MenuComponent, MenuUserComponent } from '../Menu';
import styles from './HeaderComponent.module.scss';

export type HeaderComponentProps = {
  className?: string;
  style?: CSSProperties;
};
export const HeaderComponent = (props: HeaderComponentProps) => {
  const { className, style } = props;
  return (
    <header className={clsx(styles.header, 'header', className)} style={style}>
      <div className={styles.headerTop}>
        <div className="container">
          <div className={styles.headerTopRow}>
            <div className={styles.headerTopCol}>Free shipping for orders over $59!</div>
            <div className={styles.headerTopCol}>
              <ul className={styles.headerTopMenu}>
                <li>
                  <a href="/faq">FAQ</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.headerMiddle}>
        <div className="container">
          <div className={styles.headerCenterRow}>
            <div className={styles.headerCenterCol1}>
              <FormSearchComponent />
            </div>
            <div className={styles.headerCenterCol2}>
              <LogoComponent href="/" />
            </div>
            <div className={styles.headerCenterCol1}>
              <MenuUserComponent
                items={[
                  {
                    key: 'user',
                    icon: User,
                  },
                  {
                    key: 'fav',
                    icon: Heart,
                    label: '0',
                  },
                  {
                    key: 'cart',
                    icon: Cart,
                    label: '0',
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.headerBottom}>
        <div className="container">
          <div className={styles.headerCenterRow}>
            <div className={styles.headerCenterCol1}></div>
            <div className={styles.headerCenterCol2}>
              <MenuComponent items={[{ key: '/', label: 'Homepage' }]} />
            </div>
            <div className={styles.headerCenterCol1}></div>
          </div>
        </div>
      </div>
    </header>
  );
};

'use client';
import { BurgerSvg } from '@/icons';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { CSSProperties, useEffect, useState } from 'react';
import { ButtonComponent } from '../ButtonComponent';
import { CartMiniComponent } from '../CartMiniComponent';
import { InputSearchComponent } from '../InputSearchComponent';
import { LogoComponent } from '../LogoComponent';
import { MenuComponent, MenuItem } from '../MenuComponent';
import { UserMiniComponent } from '../UserMiniComponent';
import { WishlistMiniComponent } from '../WishlistMiniComponent';

import styles from './HeaderComponent.module.scss';

export type HeaderComponentProps = {
  topMenuItems?: MenuItem[];
  mainMenuItems?: MenuItem[];
  className?: string;
  style?: CSSProperties;
};
export const HeaderComponent = (props: HeaderComponentProps) => {
  const {
    topMenuItems = [
      { key: '/faq', label: 'FAQ' },
      { key: '/contact', label: 'Contact' },
    ],
    mainMenuItems = [
      {
        key: '/',
        label: 'HOME',
        children: [
          { key: '/main-home', label: 'Main Home' },
          { key: '/main-home-1', label: 'Main Home 1' },
        ],
      },
      {
        key: '/#home',
        label: 'HOME',
        children: [
          { key: '/main-home-1-1', label: 'Main Home' },
          { key: '/main-home-1-2', label: 'Main Home 1' },
        ],
      },
      { key: '/pages', label: 'PAGES' },
      { key: '/shop', label: 'SHOP' },
      { key: '/store', label: 'STORE' },
      { key: '/portforlio', label: 'PORTFOLIO' },
    ],
    className,
    style,
  } = props;
  const [activeKeys, setActiveKeys] = useState<string[]>([]);
  const [openHeaderMenu, setOpenHeaderMenu] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    setActiveKeys([pathName]);
  }, [pathName]);

  return (
    <header className={clsx(styles.header, 'header', className)} style={style}>
      <div className={styles.headerDiscountContainer}>
        <div className="container max-md:max-w-full">
          <div className={styles.headerDiscountWrapper}>
            <div className={styles.headerDiscount}>Free shipping for orders over $59!</div>
            <MenuComponent items={topMenuItems} className={styles.headerDiscountMenu} />
          </div>
        </div>
      </div>
      <div className={styles.headerContent}>
        <div className="container max-md:max-w-full">
          <div className={styles.headerWrapper}>
            <div className={styles.headerSearch}>
              <div className={styles.headerSearchInput}>
                <InputSearchComponent />
              </div>
            </div>
            <div className={styles.headerLogo}>
              <LogoComponent href="/" className={styles.headerLogoWrapper} />
            </div>
            <div className={styles.headerNavAction}>
              <UserMiniComponent className={styles.headerNavUser} />
              <WishlistMiniComponent className={styles.headerNavFav} />
              <CartMiniComponent className={styles.headerNavCart} />
              <ButtonComponent
                icon={BurgerSvg}
                className={styles.headerNavBurger}
                onClick={() => setOpenHeaderMenu(!openHeaderMenu)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={clsx(styles.headerMenu, { [styles.headerMenuOpen]: openHeaderMenu })}>
        <div className="container max-md:max-w-full">
          <div className={styles.headerNavMenu}>
            <MenuComponent
              activeKeys={activeKeys}
              items={mainMenuItems}
              className={styles.headerMainMenu}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

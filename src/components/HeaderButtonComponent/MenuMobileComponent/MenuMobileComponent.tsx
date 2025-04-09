import BurgerSvg from 'src/icons/BurgerSvg';
import { CSSProperties, FC, MouseEventHandler, useState } from 'react';
import { HeaderButtonComponent } from '../HeaderButtonComponent';

import clsx from 'clsx';
import styles from './MenuMobileComponent.module.scss';

export type MenuMobileComponentProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  style?: CSSProperties;
};
export const MenuMobileComponent: FC<MenuMobileComponentProps> = ({
  onClick,
  className,
  style,
}) => {
  return (
    <HeaderButtonComponent
      icon={BurgerSvg}
      className={clsx(className, styles.headerNavBurger)}
      style={style}
      onClick={onClick}
    />
  );
};

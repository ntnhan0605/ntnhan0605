import { FC, PropsWithChildren } from 'react';
import { ButtonComponent, ButtonComponentProps } from 'src/components/ButtonComponent';
import clsx from 'clsx';

import styles from './HeaderButtonComponent.module.scss';

export type HeaderButtonComponentProps = Pick<
  ButtonComponentProps,
  'href' | 'icon' | 'onClick' | 'className' | 'style'
>;
export const HeaderButtonComponent: FC<PropsWithChildren<HeaderButtonComponentProps>> = (props) => {
  const { href, icon, onClick, className, style, children } = props;
  return (
    <ButtonComponent
      variant="link"
      size="sm"
      icon={icon}
      href={href}
      onClick={onClick}
      className={clsx(className, styles.button)}
      style={style}
    >
      {children}
    </ButtonComponent>
  );
};

import { IconComponent } from '@/interface';
import clsx from 'clsx';
import { CSSProperties, MouseEventHandler, PropsWithChildren } from 'react';
import styles from './ButtonIconComponnet.module.scss';
import Link from 'next/link';

export type ButtonIconComponentProps = {
  href?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  icon?: IconComponent;
  suffixIcon?: IconComponent;
  className?: string;
  style?: CSSProperties;
};
export const ButtonIconComponent = (props: PropsWithChildren<ButtonIconComponentProps>) => {
  const { href, onClick, icon: Icon, suffixIcon: SuffixIcon, children, className, style } = props;

  const iconComp = !!Icon && (
    <span className={clsx('buttonIcon--icon', styles.icon)}>
      <Icon />
    </span>
  );
  const childrenComp = !!children && (
    <span className={clsx('buttonIcon--label', styles.label)}>{children}</span>
  );
  const suffixIconComp = !!SuffixIcon && (
    <span className={clsx('buttonIcon--icon', styles.icon)}>
      <SuffixIcon />
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={clsx(className, 'buttonIcon', styles.buttonIcon)} style={style}>
        {iconComp}
        {childrenComp}
        {suffixIconComp}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={clsx(className, 'buttonIcon', styles.buttonIcon)}
      style={style}
    >
      {iconComp}
      {childrenComp}
      {suffixIconComp}
    </button>
  );
};

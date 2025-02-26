import { CSSProperties, FC, MouseEventHandler, PropsWithChildren } from 'react';

import { IconComponent } from '@/interface';
import clsx from 'clsx';
import Link from 'next/link';

import styles from './ButtonComponnet.module.scss';

const PREFIX = 'ButtonComponent';

export type ButtonComponentProps = {
  href?: string;
  htmlType?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  animated?: boolean;
  icon?: IconComponent;
  className?: string;
  style?: CSSProperties;
};
export const ButtonComponent: FC<PropsWithChildren<ButtonComponentProps>> = ({
  href,
  htmlType,
  variant = 'primary',
  size = 'md',
  loading,
  disabled,
  onClick,
  animated = false,
  icon: Icon,
  children,
  className,
  ...props
}) => {
  const iconComp = loading ? <>Loading...</> : Icon && <Icon />;
  const borderComp = !!animated && ['outline', 'ghost'].includes(variant) && (
    <span className={clsx(styles.outlineAnimate, `${PREFIX}_outline`)}>
      <span className={clsx(styles.outlineAnimateTop, `${PREFIX}_outline_top`)}></span>
      <span className={clsx(styles.outlineAnimateRight, `${PREFIX}_outline_right`)}></span>
      <span className={clsx(styles.outlineAnimateBottom, `${PREFIX}_outline_bottom`)}></span>
      <span className={clsx(styles.outlineAnimateLeft, `${PREFIX}_outline_left`)}></span>
    </span>
  );
  const childrenComp = (
    <>
      {borderComp}
      {iconComp}
      {children}
    </>
  );
  const classNameButton = clsx(
    className,
    `${PREFIX} ${PREFIX}_${size} ${PREFIX}_${variant}`,
    styles.button,
    {
      [styles.sm]: size === 'sm',
      [styles.md]: size === 'md',
      [styles.lg]: size === 'lg',
      [styles.primary]: variant === 'primary',
      [styles.secondary]: variant === 'secondary',
      [styles.ghost]: variant === 'ghost',
      [styles.outline]: variant === 'outline',
      [styles.link]: variant === 'link',
      [styles.icon]: !!Icon,
    },
  );

  if (href && !disabled) {
    return (
      <Link {...props} href={href} className={classNameButton}>
        {childrenComp}
      </Link>
    );
  }
  return (
    <button
      {...props}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      type={htmlType}
      className={classNameButton}
    >
      {childrenComp}
    </button>
  );
};

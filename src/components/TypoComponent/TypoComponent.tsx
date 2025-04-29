import clsx from 'clsx';
import { CSSProperties, PropsWithChildren } from 'react';
import { DataAttributes, Size } from 'src/interface/index';

import styles from './TypoComponent.module.scss';

const PREFIX = 'Typo';

export type TypoComponentProps = {
  as?: keyof JSX.IntrinsicElements;
  variant?: 'title' | 'subTitle' | 'beautyTitle' | 'paragraph';
  size?: Size;
  className?: string;
  styles?: CSSProperties;
} & DataAttributes;
export const TypoComponent = (props: PropsWithChildren<TypoComponentProps>) => {
  const { as = 'p', variant = 'paragraph', size = 'md', className, children, ...restProps } = props;

  const Comp = as;
  const compClassName = clsx(
    className,
    `${PREFIX}_${variant}`,
    `${PREFIX}_${size}`,
    styles[variant],
    styles[size],
  );

  return (
    <Comp {...restProps} className={compClassName}>
      {children}
    </Comp>
  );
};

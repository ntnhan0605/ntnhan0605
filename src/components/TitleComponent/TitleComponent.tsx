import clsx from 'clsx';
import { CSSProperties, PropsWithChildren } from 'react';

import styles from './TitleComponent.module.scss';
import { DataAttributes } from 'src/interface/index';

export type TitleComponentProps = {
  component?: keyof JSX.IntrinsicElements;
  family?: 'calligraphy' | 'serif' | 'sans-serif';
  className?: string;
  styles?: CSSProperties;
} & DataAttributes;
export const TitleComponent = (props: PropsWithChildren<TitleComponentProps>) => {
  const { component = 'h3', family = 'sans-serif', className, children, ...restProps } = props;

  const Comp = component;
  const compClassName = clsx(className, styles[family]);

  return (
    <Comp {...restProps} className={compClassName}>
      {children}
    </Comp>
  );
};

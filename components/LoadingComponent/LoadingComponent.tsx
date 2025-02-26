import clsx from 'clsx';
import { CSSProperties } from 'react';
import styles from './LoadingComponent.module.scss';

export type LoadingComponentProps = {
  className?: string;
  style?: CSSProperties;
};
export const LoadingComponent = (props: LoadingComponentProps) => {
  const { className, style } = props;
  return (
    <div className={clsx(className, styles.container)} style={style}>
      Loading
    </div>
  );
};

import clsx from 'clsx';
import { CSSProperties, ReactNode } from 'react';
import styles from './EmptyComponent.module.scss';

export type EmptyComponentProps = {
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export const EmptyComponent = (props: EmptyComponentProps) => {
  const { title, description, className, style } = props;

  return (
    <div className={clsx('EmptyComponent', styles.container, className)} style={style}>
      {!!title && <h2 className={clsx('EmptyComponent--title', styles.title)}>{title}</h2>}
      {!!description && (
        <p className={clsx('EmptyComponent--description', styles.description)}>{title}</p>
      )}
    </div>
  );
};

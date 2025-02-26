import clsx from 'clsx';
import { CSSProperties, PropsWithChildren } from 'react';
import styles from './EmptyComponent.module.scss';

export type EmptyComponentProps = {
  title?: string;
  description?: string;

  className?: string;
  style?: CSSProperties;
};

export const EmptyComponent = (props: PropsWithChildren<EmptyComponentProps>) => {
  const { title, description, children, className, style } = props;
  return (
    <div className={clsx('EmptyComponent', styles.container, className)} style={style}>
      {!!title && <h2 className={clsx('EmptyComponent--title', styles.title)}>{title}</h2>}
      {!!description && (
        <p className={clsx('EmptyComponent--description', styles.description)}>{description}</p>
      )}
      {!!children && <div className={clsx('EmptyComponent--inner', styles.inner)}>{children}</div>}
    </div>
  );
};

import HeartSvg from '@/icons/HeartSvg';
// import styles from './WishlistMiniComponent.module.scss';
import { ButtonComponent } from '../ButtonComponent';
import { CSSProperties } from 'react';

export type FavMiniComponentProps = {
  className?: string;
  style?: CSSProperties;
};

export const WishlistMiniComponent = (props: FavMiniComponentProps) => {
  const { className, style } = props;

  return (
    <ButtonComponent
      href="asdfasdf"
      icon={HeartSvg}
      variant="link"
      className={className}
      style={style}
    >
      0
    </ButtonComponent>
  );
};

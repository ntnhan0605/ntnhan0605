import HeartSvg from '@/icons/HeartSvg';
// import styles from './WishlistMiniComponent.module.scss';
import { ButtonIconComponent } from '../ButtonIconComponent';
import { CSSProperties } from 'react';

export type FavMiniComponentProps = {
  className?: string;
  style?: CSSProperties;
};

export const FavMiniComponent = (props: FavMiniComponentProps) => {
  const { className, style } = props;

  return (
    <ButtonIconComponent icon={HeartSvg} className={className} style={style}>
      0
    </ButtonIconComponent>
  );
};

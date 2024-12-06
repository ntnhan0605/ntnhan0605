import CartSvg from '@/icons/CartSvg';
// import styles from './CartMiniComponent.module.scss';
import { ButtonIconComponent } from '../ButtonIconComponent';
import { CSSProperties } from 'react';

export type CartMiniComponentProps = {
  className?: string;
  style?: CSSProperties;
};

export const CartMiniComponent = (props: CartMiniComponentProps) => {
  const { className, style } = props;

  return (
    <ButtonIconComponent icon={CartSvg} className={className} style={style}>
      0
    </ButtonIconComponent>
  );
};

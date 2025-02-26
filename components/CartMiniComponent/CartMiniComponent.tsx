import CartSvg from '@/icons/CartSvg';
// import styles from './CartMiniComponent.module.scss';
import { ButtonComponent } from '../ButtonComponent';
import { CSSProperties } from 'react';

export type CartMiniComponentProps = {
  className?: string;
  style?: CSSProperties;
};

export const CartMiniComponent = (props: CartMiniComponentProps) => {
  const { className, style } = props;

  return (
    <ButtonComponent icon={CartSvg} variant="link" className={className} style={style}>
      0
    </ButtonComponent>
  );
};

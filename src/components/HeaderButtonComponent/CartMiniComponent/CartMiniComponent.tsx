import CartSvg from 'src/icons/CartSvg';
import { CSSProperties } from 'react';
import { HeaderButtonComponent } from '../HeaderButtonComponent';

export type CartMiniComponentProps = {
  className?: string;
  style?: CSSProperties;
};

export const CartMiniComponent = (props: CartMiniComponentProps) => {
  const { className, style } = props;

  return (
    <HeaderButtonComponent icon={CartSvg} className={className} style={style}>
      0
    </HeaderButtonComponent>
  );
};

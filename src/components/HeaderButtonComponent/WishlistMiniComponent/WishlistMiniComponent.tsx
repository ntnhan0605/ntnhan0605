import HeartSvg from 'src/icons/HeartSvg';
import { CSSProperties } from 'react';
import { HeaderButtonComponent } from '../HeaderButtonComponent';

export type FavMiniComponentProps = {
  className?: string;
  style?: CSSProperties;
};

export const WishlistMiniComponent = (props: FavMiniComponentProps) => {
  const { className, style } = props;

  return (
    <HeaderButtonComponent icon={HeartSvg} className={className} style={style}>
      0
    </HeaderButtonComponent>
  );
};

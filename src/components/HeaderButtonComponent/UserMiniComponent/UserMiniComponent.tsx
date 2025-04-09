import UserSvg from 'src/icons/UserSvg';
import { CSSProperties, FC, PropsWithChildren, useState } from 'react';
import { HeaderButtonComponent } from '../HeaderButtonComponent';

export type UserMiniComponentProps = {
  isLogin?: boolean;
  className?: string;
  style?: CSSProperties;
};
export const UserMiniComponent: FC<PropsWithChildren<UserMiniComponentProps>> = (props) => {
  const { isLogin, className, style, children } = props;
  const [open, setOpen] = useState(false);

  const onClick = () => {
    if (isLogin) {
      return;
    }
    setOpen(true);
  };

  return (
    <>
      <HeaderButtonComponent onClick={onClick} icon={UserSvg} className={className} style={style}>
        {children}
      </HeaderButtonComponent>
    </>
  );
};

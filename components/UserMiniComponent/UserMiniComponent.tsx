import UserSvg from '@/icons/UserSvg';
// import styles from './UserMiniComponent.module.scss';
import { CSSProperties } from 'react';
import { ButtonIconComponent } from '../ButtonIconComponent';

export type UserMiniComponentProps = {
  className?: string;
  style?: CSSProperties;
};
export const UserMiniComponent = (props: UserMiniComponentProps) => {
  const { className, style } = props;
  return <ButtonIconComponent icon={UserSvg} className={className} style={style} />;
};

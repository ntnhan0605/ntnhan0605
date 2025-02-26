import UserSvg from '@/icons/UserSvg';
// import styles from './UserMiniComponent.module.scss';
import { CSSProperties } from 'react';
import { ButtonComponent } from '../ButtonComponent';

export type UserMiniComponentProps = {
  className?: string;
  style?: CSSProperties;
};
export const UserMiniComponent = (props: UserMiniComponentProps) => {
  const { className, style } = props;
  return <ButtonComponent icon={UserSvg} variant="link" className={className} style={style} />;
};

import { IconComponent } from '@/interface';
import { CSSProperties } from 'react';

export type MenuItem = {
  key: string;
  label?: string;
  icon?: IconComponent;
  src?: string;
  className?: string;
  style?: CSSProperties;
  children?: MenuItem[];
};

export * from './MenuComponent';
export * from './MenuUserComponent';

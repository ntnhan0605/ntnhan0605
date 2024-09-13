'use client';
import clsx from 'clsx';
import { CSSProperties, MouseEvent } from 'react';
import { MenuItem } from '..';
import styles from './MenuUserComponent.module.scss';

export type MenuUserComponentProps = {
  items?: MenuItem[];
  onClickItem?: (item: MenuItem, event?: MouseEvent<HTMLLIElement>) => void;
  className?: string;
  style?: CSSProperties;
};
export const MenuUserComponent = (props: MenuUserComponentProps) => {
  const { items, onClickItem, className, style } = props;
  const handleOnClick = (item: MenuItem) => {
    return (event: MouseEvent<HTMLLIElement>) => {
      onClickItem?.(item, event);
    };
  };
  if (!items?.length) {
    return null;
  }
  return (
    <ul className={clsx('menuUser--container', styles.list, className)} style={style}>
      {items?.map((item, key) => {
        const Icon = item.icon;
        return (
          <li
            key={`${key}`}
            style={item?.style}
            className={clsx('menuUser--item', styles.item, item?.className)}
            onClick={handleOnClick(item)}
          >
            {!!Icon && (
              <span className={clsx('menuUser--item_icon', styles.icon)}>
                <Icon />
              </span>
            )}
            {!!item?.label && (
              <span className={clsx('menuUser--item_label', styles.label)}>{item.label}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
};

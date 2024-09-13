'use client';
import { CSSProperties, MouseEvent, MouseEventHandler } from 'react';
import { MenuItem } from '..';
import styles from './MenuComponent.module.scss';
import clsx from 'clsx';

export type MenuComponentProps = {
  isChildren?: boolean;
  items?: MenuItem[];
  onClickItem?: (item: MenuItem, event: MouseEvent<HTMLLIElement>) => void;
  className?: string;
  style?: CSSProperties;
};

export const MenuComponent = (props: MenuComponentProps) => {
  const { isChildren, items, onClickItem, className, style } = props;

  if (!items || !items.length) {
    return null;
  }

  return (
    <ul className={clsx(styles.list, className, { submenu: isChildren })} style={style}>
      {items.map((item) => {
        const Icon = item.icon;
        const handleClickItem: MouseEventHandler<HTMLLIElement> = (event) => {
          onClickItem?.(item, event);
        };
        const hasChildren = !!item?.children;
        return (
          <li
            key={item.key}
            className={clsx(styles.item, item.className)}
            style={item.style}
            onClick={handleClickItem}
          >
            <span className={clsx(styles.itemWrapper, 'menuItem-wrapper')}>
              {!!Icon && (
                <span className={clsx(styles.itemIcon, 'menuItem-icon')}>
                  <Icon />
                </span>
              )}
              <span className={clsx(styles.itemLabel, 'menuItem-label')}>{item.label}</span>
            </span>
            {hasChildren && (
              <MenuComponent isChildren items={item.children} onClickItem={onClickItem} />
            )}
          </li>
        );
      })}
    </ul>
  );
};

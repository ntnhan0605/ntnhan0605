'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { CSSProperties, MouseEvent, MouseEventHandler, ReactNode, useCallback } from 'react';
import styles from './MenuComponent.module.scss';

export type MenuItem = {
  key: string;
  label?: ReactNode;
  icon?: ReactNode;
  onClick?: (item: MenuItem) => void;
  className?: string;
  style?: CSSProperties;
  children?: MenuItem[];
};

export type MenuComponentProps = {
  isChildren?: boolean;
  activeKeys?: string[];
  items?: MenuItem[];
  onClickItem?: (item: MenuItem, event: MouseEvent<HTMLLIElement>) => void;
  className?: string;
  style?: CSSProperties;
};

export const MenuComponent = (props: MenuComponentProps) => {
  const { isChildren, activeKeys, items, onClickItem, className, style } = props;

  if (!items || !items?.length) {
    return null;
  }

  return (
    <ul
      className={clsx(
        className,
        'menu',
        isChildren && 'subMenu',
        styles.menu,
        isChildren && styles.subMenu,
      )}
      style={style}
    >
      {items.map((item) => {
        return (
          <MenuItemComponent
            key={item.key}
            item={item}
            activeKeys={activeKeys}
            onClickItem={onClickItem}
          />
        );
      })}
    </ul>
  );
};

type MenuItemComponentProps = Pick<MenuComponentProps, 'onClickItem' | 'activeKeys'> & {
  item: MenuItem;
};
const MenuItemComponent = (props: MenuItemComponentProps) => {
  const { item, activeKeys, onClickItem: onClickItemProps } = props;
  const hasChildren = !!item?.children;
  const onClickItem: MouseEventHandler<HTMLLIElement> = useCallback(
    (event) => {
      onClickItemProps?.(item, event);
    },
    [item, onClickItemProps],
  );

  const menuItemActive =
    activeKeys?.includes(item.key) ||
    item?.children?.some((item) => activeKeys?.includes(item.key));
  const LinkComp = hasChildren ? 'span' : Link;

  return (
    <li
      style={item.style}
      className={clsx(
        'menuItem',
        { hasChildren, menuItemActive },
        item.className,
        styles.menuItem,
        menuItemActive && styles.menuItemActive,
        hasChildren && styles.menuItemHasChildren,
      )}
      onClick={onClickItem}
    >
      <LinkComp href={item.key} className={clsx('menuItem--wrapper', styles.menuItemWrapper)}>
        {!!item?.icon && (
          <span className={clsx('menuItem--icon', styles.menuItemIcon)}>{item.icon}</span>
        )}
        <span className={clsx('menuItem--label', styles.menuItemLabel)}>{item.label}</span>
      </LinkComp>
      {hasChildren && (
        <MenuComponent
          isChildren
          activeKeys={activeKeys}
          items={item.children}
          onClickItem={onClickItemProps}
        />
      )}
    </li>
  );
};

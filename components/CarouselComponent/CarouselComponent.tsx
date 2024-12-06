import useEmblaCarousel from 'embla-carousel-react';
import { CSSProperties, FC, ReactNode, useCallback } from 'react';
import { Carousel, CarouselItem } from '../ui/carousel';
import clsx from 'clsx';

import styles from './CarouselComponent.module.scss';

type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];
export type CarouselComponentItem = {} | any;
export type CarouselComponentProps = CarouselOptions & {
  items?: CarouselComponentItem[];
  renderItem?: (item: CarouselComponentItem, index: number) => ReactNode;
  plugins?: CarouselPlugin;
  className?: string;
  style?: CSSProperties;
};

export const CarouselComponent: FC<CarouselComponentProps> = (props) => {
  const { items, renderItem: renderItemProps, className, style, ...restProps } = props;

  const renderItem = useCallback(
    (item: CarouselComponentItem, index: number) => {
      if (renderItemProps) {
        return renderItemProps(item, index);
      }
      return <></>;
    },
    [renderItemProps],
  );

  if (!items || !items.length) {
    return null;
  }

  return (
    <Carousel {...restProps} className={className} style={style}>
      {items.map((item, index) => {
        return (
          <CarouselItem key={`${index}`} className={clsx(styles.carouselItem)}>
            {renderItem(item, index)}
          </CarouselItem>
        );
      })}
    </Carousel>
  );
};

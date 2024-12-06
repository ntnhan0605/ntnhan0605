import { FC } from 'react';
import { CarouselComponent } from '../CarouselComponent';

export type HomeCarouselItem = {
  //
};

export type HomeCarouselComponentProps = {
  items?: HomeCarouselItem[];
};

export const HomeCarouselComponent: FC<HomeCarouselComponentProps> = (props) => {
  const { items } = props;

  if (!items || items?.length) {
    return null;
  }

  return (
    <CarouselComponent
      items={[{ image: './', bigTitle: 'big title', title: 'title' }]}
      renderItem={(item) => {
        return (
          <div>
            <p>{item.bigTitle}</p>
            <h3>{item.title}</h3>
          </div>
        );
      }}
    />
  );
};

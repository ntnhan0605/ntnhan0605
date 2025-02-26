import { ButtonComponent } from '@/components/ButtonComponent';
import { HomeCarouselComponent } from '@/components/HomeCarouselComponent';

export const HomeComponent = () => {
  return (
    <>
      {/* Home Carousel */}
      <HomeCarouselComponent />

      <div className="flex gap-4 items-start">
        <ButtonComponent variant="primary">Primary</ButtonComponent>
        <ButtonComponent variant="secondary">Secondary</ButtonComponent>
        <ButtonComponent variant="outline" animated>
          Outline
        </ButtonComponent>
        <div className="p-3 bg-gray800">
          <ButtonComponent variant="ghost" animated>
            Ghost
          </ButtonComponent>
        </div>
        <ButtonComponent variant="link">Link</ButtonComponent>
      </div>
    </>
  );
};

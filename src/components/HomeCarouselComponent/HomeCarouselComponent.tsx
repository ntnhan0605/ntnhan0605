'use client';
import clsx from 'clsx';
import { FC } from 'react';
import ChevronLeftSvg from 'src/icons/ChevronLeftSvg';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';

import { ButtonComponent } from '../ButtonComponent';
import { TypoComponent } from '../TypoComponent/TypoComponent';
import styles from './HomeCarouselComponent.module.scss';

export const HomeCarouselComponent: FC = () => {
  return (
    <Swiper
      modules={[EffectFade, Navigation, Pagination]}
      effect="fade"
      navigation={{
        enabled: true,
        prevEl: '.homeSliderPrev',
        nextEl: '.homeSliderNext',
      }}
      pagination={{
        el: '.swiperPagination',
        clickable: true,
        renderBullet(index, className) {
          return `<span key="${index}" className="${clsx(styles.swiperBullet, className, 'swiperBullet')}"><svg class="${(styles.bulletCircle, 'bulletCircle')}"><circle cx="50%" cy="50%" r="45%"></circle></svg></span>`;
        },
      }}
      on={{}}
      onSetTransition={(e, transition) => {
        const $beautyTitle = e.slides[e.activeIndex].querySelector('.beauty-title');
        const $title = e.slides[e.activeIndex].querySelector('.title');
        const $buttons = e.slides[e.activeIndex].querySelector('.buttons');

        console.log(
          '** RYAN HomeCarouselComponent.tsx 37 $beautyTitle, $title, $buttons : ',
          $beautyTitle,
          $title,
          $buttons,
        );
        console.log('** RYAN HomeCarouselComponent.tsx 34 e,transition : ', e, transition);
      }}
      className={styles.homeSliderContainer}
    >
      <SwiperSlide>
        <div className={styles.homeSlider}>
          <img src="/images/Home1_rev1.jpg" alt="Home 1" className={styles.homeSliderBgImg} />
          <div className={styles.homeSliderContent}>
            <TypoComponent
              as="p"
              variant="beautyTitle"
              size="lg"
              className="beauty-title animate-none"
            >
              We love Handmade
            </TypoComponent>
            <TypoComponent
              as="h2"
              variant="title"
              size="lg"
              className="title animate-none animate-delay-100"
            >
              INTERIOR DECORATION
            </TypoComponent>
            <div className="buttons animate-none animate-delay-200">
              <ButtonComponent variant="ghost" animated className="button">
                Get Concept
              </ButtonComponent>
              <ButtonComponent variant="ghost" animated className="button">
                Read More
              </ButtonComponent>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.homeSlider}>
          <img src="/images/Home1_rev2.jpg" alt="Home 2" className={styles.homeSliderBgImg} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.homeSlider}>
          <img src="/images/Home1_rev3.jpg" alt="Home 3" className={styles.homeSliderBgImg} />
        </div>
      </SwiperSlide>
      <div className={clsx(styles.swiperNavigation, 'homeSliderNav')}>
        <div className={clsx(styles.swiperNavigationBtn, 'homeSliderPrev')}>
          <ChevronLeftSvg />
        </div>
        <div className={clsx(styles.swiperNavigationBtn, 'homeSliderNext')}>
          <ChevronLeftSvg />
        </div>
      </div>
      <div className={clsx(styles.swiperPagination, 'swiperPagination')}></div>
    </Swiper>
  );
};

'use client';
import ChevronLeftSvg from 'src/icons/ChevronLeftSvg';
import clsx from 'clsx';
import { FC, useCallback } from 'react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';

import styles from './HomeCarouselComponent.module.scss';
import { ButtonComponent } from '../ButtonComponent';

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
        console.log('** RYAN HomeCarouselComponent.tsx 34 e,transition : ', e, transition);
      }}
      className={styles.homeSliderContainer}
    >
      <SwiperSlide>
        <div className={styles.homeSlider}>
          <img src="/images/Home1_rev1.jpg" alt="Home 1" className={styles.homeSliderBgImg} />
          <div className={styles.homeSliderContent}>
            <p className="titleScript">We love Handmade</p>
            <h3 className="title">INTERIOR DECORATION</h3>
            <div className="buttonGroup">
              <ButtonComponent variant="ghost" animated>
                Get Concept
              </ButtonComponent>
              <ButtonComponent variant="ghost" animated>
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

'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

export default function HeroSlider() {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      loop={true}
      className="slider-2"
      style={{ position: 'absolute', inset: 0, zIndex: -1 }}
    >
      <SwiperSlide className="slide-2">
        <img
          src="https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a361afea7cf5b1f6f93329_Snapinst.app_279165118_349328237174877_229976237247672591_n_1080.jpg"
          loading="lazy"
          sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
          srcSet="https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a361afea7cf5b1f6f93329_Snapinst.app_279165118_349328237174877_229976237247672591_n_1080-p-500.jpg 500w, https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a361afea7cf5b1f6f93329_Snapinst.app_279165118_349328237174877_229976237247672591_n_1080-p-800.jpg 800w, https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a361afea7cf5b1f6f93329_Snapinst.app_279165118_349328237174877_229976237247672591_n_1080.jpg 1080w"
          alt="MORE Coffee interior"
          className="image-2"
        />
      </SwiperSlide>
      <SwiperSlide className="slide-2">
        <img
          src="https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a401d3ee69d14fd93bd1da_Snapinst.app_449289701_494310276443973_919945982624711639_n_1080%20(1).jpg"
          loading="lazy"
          sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
          srcSet="https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a401d3ee69d14fd93bd1da_Snapinst.app_449289701_494310276443973_919945982624711639_n_1080%20(1)-p-500.jpg 500w, https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a401d3ee69d14fd93bd1da_Snapinst.app_449289701_494310276443973_919945982624711639_n_1080%20(1)-p-800.jpg 800w, https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a401d3ee69d14fd93bd1da_Snapinst.app_449289701_494310276443973_919945982624711639_n_1080%20(1).jpg 1017w"
          alt="MORE Coffee space"
          className="image-2"
        />
      </SwiperSlide>
      <SwiperSlide className="slide-2">
        <img
          src="https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a403e4d87414e2cce945c7_Snapinst.app_241668237_138910701774689_4665688277024405154_n_1080.jpg"
          loading="lazy"
          sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
          srcSet="https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a403e4d87414e2cce945c7_Snapinst.app_241668237_138910701774689_4665688277024405154_n_1080-p-500.jpg 500w, https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a403e4d87414e2cce945c7_Snapinst.app_241668237_138910701774689_4665688277024405154_n_1080-p-800.jpg 800w, https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a403e4d87414e2cce945c7_Snapinst.app_241668237_138910701774689_4665688277024405154_n_1080.jpg 1080w"
          alt="MORE Coffee atmosphere"
          className="image-2"
        />
      </SwiperSlide>
    </Swiper>
  );
}

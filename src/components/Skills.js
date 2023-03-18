import React, { useRef, useState } from 'react';
import { ProgressBar } from './ProgressBar.js';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../styles/Skills.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper';

export default function Skills() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'3'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className='mySwiper'
      >

        <SwiperSlide>
          <ProgressBar
            skillName='Full-Stack Web Development'
            startValue={0}
            endValue={13}
          />
        </SwiperSlide>

        <SwiperSlide>
          <ProgressBar
            skillName='Corporate Comms/Admin'
            startValue={0}
            endValue={90}
          />
        </SwiperSlide>

        <SwiperSlide>
          <ProgressBar
            skillName='Social Media Marketing'
            startValue={0}
            endValue={85}
          />
        </SwiperSlide>

        <SwiperSlide>
          <ProgressBar
            skillName='Journalism + Storytelling'
            startValue={0}
            endValue={80}
          />
        </SwiperSlide>

        <SwiperSlide>
          <ProgressBar
            skillName='Non-Profit Development & Management'
            startValue={0}
            endValue={80}
          />
        </SwiperSlide>

      </Swiper>
    </>
  );
}

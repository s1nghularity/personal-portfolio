import React, { useRef, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
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
    <section className='skill' id='skills'>
      <Container>
        <Row className='justify-content-center'>
          <div className='skill-bx'>
            <h2>Skills</h2>
            <p>
              They say 10,000 hours reflects complete mastery over a skillset.
              <br /> My pivot towards web development has been supercharged by
              over a decade of experience: <br />
              <br />
              Journalism | Corporate Communications |<br /> Non-Profit
              Development & Management | Social Media Marketing
            </p>
            <br />

            <>
              <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
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

            <p>
              ^Percentage of 'mastering' a field according to Malcolm Gladwell.^
            </p>
          </div>
        </Row>
      </Container>
    </section>
  );
}

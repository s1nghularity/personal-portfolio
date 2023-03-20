import React, { useRef, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { ProgressBar } from './ProgressBar.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../styles/Skills.css';
import { EffectCoverflow, Pagination } from 'swiper';

export default function Skills() {

  const [startAnimation, setStartAnimation] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const skillsElement = skillsRef.current;

    const handleScroll = () => {
      const offsetTop = skillsElement.offsetTop;
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      if (scrollTop > offsetTop - windowHeight + 500) {
        setStartAnimation(true);
      } else {
        setStartAnimation(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className='skill' id='skills'>
      <Container>
        <Row className='justify-content-center'>
          <div className='skill-bx' ref={skillsRef}>
            <br/>
            <h2>Skills</h2>
            <p>
              Pop culture says 10,000 hours of solid work reflects mastery over a skillset.
              <br /> My pivot towards web development has been supercharged by
              over a decade of communications experience.           
            </p>

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
                    skillName='Corporate Comms/Admin'
                    startValue={0}
                    endValue={90}
                    startAnimation={startAnimation}
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <ProgressBar
                    skillName='Social Media Marketing'
                    startValue={0}
                    endValue={85}
                    startAnimation={startAnimation}
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <ProgressBar
                    skillName='Full-Stack Web Development'
                    startValue={0}
                    endValue={13}
                    startAnimation={startAnimation}
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <ProgressBar
                    skillName='Journalism + Storytelling'
                    startValue={0}
                    endValue={80}
                    startAnimation={startAnimation}
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <ProgressBar
                    skillName='Non-Profit Development & Management'
                    startValue={0}
                    endValue={80}
                    startAnimation={startAnimation}
                  />
                </SwiperSlide>
              </Swiper>
            </>

            <p className='skill-tag'>
              ^Percentage of 'mastering' a field according to Malcolm Gladwell.^
            </p>
          </div>
        </Row>
      </Container>
    </section>
  );
}

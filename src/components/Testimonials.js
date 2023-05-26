import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/Testimonials.css';
import vani from '../assets/img/vani.jpg';
import loren from '../assets/img/loren.jpg';
import tousi from '../assets/img/tousi.jpg';

export const Testimonials = () => {
  return (
    <section className='testimonials-container'>
      <Carousel
        showStatus={false}
        showThumbs={false}
        swipeable
        emulateTouch
        showArrows={false}
        showIndicators
        infiniteLoop
        autoPlay
        stopOnHover
        interval={10000}
        transitionTime={500}
        className='custom-carousel'
      >
  

        <div className='testimonial-wrapper'>
          <div className='testimonial'>
            <div className='testimonial-image-wrapper'>
              <img
                className='testimonial-img'
                src={vani}
                alt='Founder of Design Spinners, Vani Gundara'
              />
            </div>
            <div className='testimonial-content'>
              <blockquote>
                <p className='testimonial-text'>
                  “Vikram is a team player, and always goes above and beyond
                  what the job entails to get it right. His attention to detail
                  is excellent and he is easy to work with. I would highly
                  recommend Vikram to any firm who is looking for a creative
                  content writer!”
                </p>
              </blockquote>
              <p className='testimonial-author'>Vani Gundara</p>
              <p className='testimonial-position'>Founder, Design Spinners</p>
            </div>
          </div>
        </div>

        <div className='testimonial-wrapper'>
          <div className='testimonial'>
            <div className='testimonial-image-wrapper'>
              <img
                className='testimonial-img'
                src={tousi}
                alt='Multidisciplinary artist, writer, and filmmaker Mahyad Tousi'
              />
            </div>
            <div className='testimonial-content'>
              <blockquote>
                <p className='testimonial-text'>
                "Vikram came on board for the founding of the non-profit Starfish Accelerator and worked with the team on several other projects. He is a solid social media manager who can produce engaging content to increase brand visibility across channels. I appreciated his journalistic tilt to creative copywriting, and valued his contribution to Starfish's brand identity development.""
                </p>
              </blockquote>
              <p className='testimonial-author'>Mahyad Tousi</p>
              <p className='testimonial-position'>Founder of Starfish Accelerator and Boomgen Studios, Executive Producer of CBS primetime comedy 'United States of Al'</p>
            </div>
          </div>
        </div>

        <div className='testimonial-wrapper'>
          <div className='testimonial'>
            <div className='testimonial-image-wrapper'>
              <img
                className='testimonial-img'
                src={loren}
                alt='COO of Barrel Bag Loren Quaglieri'
              />
            </div>
            <div className='testimonial-content'>
              <blockquote>
                <p className='testimonial-text'>
                  "As a small, scrappy organization it was such a relief to have
                  Vikram join us as a quick learner, self starter with
                  impeccable organizational skills. He will be a tremendous
                  asset to any team he joins and it was a sheer delight to have
                  had this opportunity to work with him."
                </p>
              </blockquote>
              <p className='testimonial-author'>Loren Quaglieri</p>
              <p className='testimonial-position'>COO, Barrel Bag</p>
            </div>
          </div>
        </div>




      </Carousel>
    </section>
  );
};

//credit devui.io for the code//

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";

import '../styles/Testimonials.css';
import vani from "../assets/img/vani.jpg";
import loren from "../assets/img/loren.jpg";

SwiperCore.use([Navigation]);

export const Testimonials = () => {
  return (
    <section className="testimonials-container">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        className="swiper-container"
      >
        <SwiperSlide>
          <div className="testimonial">
            <img
              className="testimonial-img"
              src={loren}
              alt="COO of Barrel Bag Loren Quaglieri"
            />
            <div className="testimonial-content">
              <blockquote>
                <p className="testimonial-text">
                  “As a small, scrappy organization it was such a relief to have Vikram join us as a quick learner, self starter with impeccable organizational skills. Vikram always came well prepared for meetings with thoughtful questions and suggestions. He took input well and was always adept at applying it to his work delivering exceptional results. Vikram is extremely dependable and hard working. His quality of work consistently improved throughout our time together and his follow through exceeded expectations. He will be a tremendous asset to any team he joins and it was a sheer delight to have had this opportunity to work with him.”
                  </p>
              </blockquote>
              <p className="testimonial-author">Loren Quaglieri</p>
              <p className="testimonial-position">COO, Barrel Bag</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial">
            <img
              className="testimonial-img"
              src={vani}
              alt="Founder of Design Spinners, Vani Gundara"
            />
            <div className="testimonial-content">
              <blockquote>
                <p className="testimonial-text">
                  “Vikram worked for my company Design Spinners for over three years. He assisted our clients with all aspects of creative copywriting and copyediting for website content as well as print media. He is professional, responsive and receptive to the clients needs. He attended several in person and virtual meetings where he was able to review the feedback from the clients directly and turn around the next draft in a timely manner. His attention to detail is excellent and he is easy to work with. He is a team player, and always goes above and beyond what the job entails to get it right. I would highly recommend Vikram to any firm who is looking for a creative content writer!”
                  </p>
              </blockquote>
              <p className="testimonial-author">Vani Gundara</p>
              <p className="testimonial-position">Founder, Design Spinners</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/Testimonials.css";
import vani from "../assets/img/vani.jpg";
import loren from "../assets/img/loren.jpg";

export const Testimonials = () => {
  return (
    <section className="testimonials-container">
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
        className="custom-carousel"
      >

      <div className="testimonial-wrapper">
        <div className="testimonial">
          <div className="testimonial-image-wrapper">
            <img
              className="testimonial-img"
              src={loren}
              alt="COO of Barrel Bag Loren Quaglieri"
            />
          </div>
          <div className="testimonial-content">
            <blockquote>
              <p className="testimonial-text">
                "As a small, scrappy organization it was such a relief to have Vikram join us as a quick learner, self starter with impeccable organizational skills. He will be a tremendous asset to any team he joins and it was a sheer delight to have had this opportunity to work with him."
              </p>
            </blockquote>
            <p className="testimonial-author">Loren Quaglieri</p>
            <p className="testimonial-position">COO, Barrel Bag</p>
          </div>
        </div>
      </div>

      <div className="testimonial-wrapper">
        <div className="testimonial">
          <div className="testimonial-image-wrapper">
            <img
              className="testimonial-img"
              src={vani}
              alt="Founder of Design Spinners, Vani Gundara"
            />
          </div>
          <div className="testimonial-content">
            <blockquote>
              <p className="testimonial-text">
                “Vikram is a team player, and always goes above and beyond what the job entails to get it right. His attention to detail is excellent and he is easy to work with. I would highly recommend Vikram to any firm who is looking for a creative content writer!”
              </p>
            </blockquote>
            <p className="testimonial-author">Vani Gundara</p>
            <p className="testimonial-position">Founder, Design Spinners</p>
          </div>
        </div>
      </div>
      </Carousel>
    </section>
  );
};

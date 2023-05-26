import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/Testimonials.css";
import vani from "../assets/img/vani.jpg";
import loren from "../assets/img/loren.jpg";
import tousi from "../assets/img/tousi.jpg";

const testimonials = [
  {
    img: vani,
    name: "Vani Gundara",
    position: "Founder, Design Spinners",
    quote:
      "“Vikram is a team player, and always goes above and beyond what the job entails to get it right. His attention to detail is excellent and he is easy to work with. I would highly recommend Vikram to any firm who is looking for a creative content writer!”",
  },
  {
    img: tousi,
    name: "Mahyad Tousi",
    position:
      "Founder of Starfish Accelerator and Boomgen Studios, Executive Producer of CBS primetime comedy 'United States of Al'",
    quote:
      "“Vikram came on board for the founding of the non-profit Starfish Accelerator and worked with the team on several other projects. He is a solid social media manager who can produce engaging content to increase brand visibility across channels. I appreciated his journalistic tilt to creative copywriting, and valued his contribution to Starfish's brand identity development.”",
  },
  {
    img: loren,
    name: "Loren Quaglieri",
    position: "COO, Barrel Bag",
    quote:
      "“As a small, scrappy organization it was such a relief to have Vikram join us as a quick learner, self starter with impeccable organizational skills. He will be a tremendous asset to any team he joins and it was a sheer delight to have had this opportunity to work with him.”",
  },
];

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
        {testimonials.map(({ img, name, position, quote }, index) => (
          <div className="testimonial-wrapper" key={index}>
            <div className="testimonial">
              <div className="testimonial-image-wrapper">
                <img className="testimonial-img" src={img} alt={name} />
              </div>
              <div className="testimonial-content">
                <blockquote>
                  <p className="testimonial-text">{quote}</p>
                </blockquote>
                <p className="testimonial-author">{name}</p>
                <p className="testimonial-position">{position}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

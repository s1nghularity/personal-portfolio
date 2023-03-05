import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Carousel.css';

import adobe from '../assets/img/tech-icons/adobe-illustrator.svg';
import bootstrap from '../assets/img/tech-icons/bootstrap.svg';
import css from '../assets/img/tech-icons/css-3.svg';
import es6 from '../assets/img/tech-icons/es6.svg';
import express from '../assets/img/tech-icons/express.svg';
import github from '../assets/img/tech-icons/github-icon.svg';
import heroku from '../assets/img/tech-icons/heroku.svg';
import jscript from '../assets/img/tech-icons/javascript.svg';
import jquery from '../assets/img/tech-icons/jquery.svg';
import mongodb from '../assets/img/tech-icons/mongodb-icon.svg';
import nodejs from '../assets/img/tech-icons/nodejs-icon.svg';
import npm from '../assets/img/tech-icons/npm.svg';
import react from '../assets/img/tech-icons/react.svg';
import strapi from '../assets/img/tech-icons/strapi.svg';
import vscode from '../assets/img/tech-icons/visual-studio-code.svg';

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 10,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      centerpadding: "100px",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    };

    return (
      <Slider {...settings} className="tech-icon">
        <div>
          <img src={adobe} alt='adobe illustrator' />
        </div>

        <div>
          <img src={bootstrap} alt='bootstrap' />
        </div>

        <div>
          <img src={css} alt='css3' />
        </div>

        <div>
          <img src={es6} alt='es6' />
        </div>

        <div>
          <img src={express} alt='express' />
        </div>

        <div>
          <img src={github} alt='github' />
        </div>

        <div>
          <img src={heroku} alt='heroku' />
        </div>

        <div>
          <img src={jscript} alt='javascript' />
        </div>

        <div>
          <img src={jquery} alt='jquery' />
        </div>

        <div>
          <img src={mongodb} alt='mongodb' />
        </div>

        <div>
          <img src={nodejs} alt='nodejs' />
        </div>

        <div>
          <img src={npm} alt='npm' />
        </div>

        <div>
          <img src={react} alt='react' />
        </div>

        <div>
          <img src={strapi} alt='strapi' />
        </div>

        <div>
          <img src={vscode} alt='visual studio code' />
        </div>

      </Slider>
    );
  }
}

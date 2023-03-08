import React from 'react';
import { Github, Linkedin, SignpostSplitFill } from 'react-bootstrap-icons';
import logo from '../assets/img/vlogowhite.svg';
import resume from '../assets/VikramSingh-Resume2023.docx';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='logo-container'>
        <img src={logo} alt='Logo' />
      </div>
      <div className='tagline'>
        <p>
          Looking for <i>great</i> people <br />
          building <i>great</i> things.
        </p>
      </div>
      <div className='download'>
        <a href={resume} download>
          <button className='btn btn-primary' >
            <i className='bi bi-download' style={{ fontSize: '1rem', color: 'white' }}>
            {' '}</i> Download Resume 
          </button>
        </a>
        <br />
        <br />
      </div>

      <div className='social-links'>
        <a
          href='https://github.com/s1nghularity/'
          target='https://github.com/s1nghularity/'
        >
          <Github />
        </a>
        <a href='https://www.linkedin.com/in/vikramsinghca/' target='https://www.linkedin.com/in/vikramsinghca/'>
          <Linkedin />
        </a>
        <a
          href='https://linktr.ee/theviksingh'
          target='https://linktr.ee/theviksingh'
        >
          {<SignpostSplitFill />}
        </a>
      </div>

      <div className='crafted-by'>
        <p>Crafted with care by me © S1nghularity</p>
      </div>
    </footer>
  );
};

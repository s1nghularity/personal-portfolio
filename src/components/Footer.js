import React from 'react';
import { Github, Linkedin, SignpostSplitFill } from 'react-bootstrap-icons';
import logo from '../assets/img/vlogowhite.svg';
import resume from '../assets/VikramSingh-Resume2024.docx';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='logo-container'>
        <img src={logo} alt='Logo' />
      </div>
      <div className='tagline'>
        <p>
          Open to new projects. <br />
          Partial to the ones that still have to work on <i>Monday</i>.
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
          target='_blank'
          rel='noopener noreferrer'
          aria-label='GitHub'
        >
          <Github />
        </a>
        <a
          href='https://www.linkedin.com/in/vikramsinghca/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn'
        >
          <Linkedin />
        </a>
        <a
          href='https://linktr.ee/theviksingh'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Linktree'
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

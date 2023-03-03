import React from 'react';
import { Twitter, Facebook, Instagram } from 'react-bootstrap-icons';
import logo from '../assets/img/vlogowhite.svg'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo-container">
        <img src={logo} alt="Logo" />
      </div>
      <div className="tagline">
        <p>Leaving this place better than I found it.</p>
      </div>
      <div className="social-links">
        <a href="#" target="_blank"><Facebook /></a>
        <a href="#" target="_blank"><Twitter /></a>
        <a href="#" target="_blank"><Instagram /></a>
      </div>
      <div className="crafted-by">
        <p>Crafted with care by me (c)S1nghularity</p>
      </div>
    </footer>
  );
};

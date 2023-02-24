import { useState, useEffect } from 'react';
import {Navbar, Container, Nav}  from 'react-bootstrap';
import logo from "../assets/img/logo.png";
import github from "../assets/img/github.svg";
import linkedin from "../assets/img/linkedin.svg"
import vLogoDark from "../assets/img/vlogodark.svg";
import vLogoWhite from "../assets/img/vlogowhite.svg";
import vs from "../assets/img/vs.png";
import vs2 from "../assets/img/vs2.png";


export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [logoSrc, setLogoSrc] = useState(vs2);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
        setLogoSrc(vs);
      } else {
        setScrolled(false);
        setLogoSrc(vs2);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logoSrc} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === 'skills'
                  ? 'active navbar-link'
                  : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === 'projects'
                  ? 'active navbar-link'
                  : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('projects')}
            >
              Projects
            </Nav.Link>
          </Nav>

          <span className="navbar-text">
            <div className="social-icon">
              <a href="#">
                {' '}
                <img src={github} alt="github" />
              </a>
              <a href="https://www.linkedin.com/in/vikramsinghca/">
                {' '}
                <img src={linkedin} alt="linkedin" />
              </a>
            </div>
            <button
              className="vvd"
              onClick={() => console.log('connect')}
            >
              <span> Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

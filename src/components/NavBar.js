import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import vLogoWhite from '../assets/img/vlogowhite.svg';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  // dark nav throughout — keep the white logo at all scroll positions
  const navbrand = vLogoWhite;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(document.documentElement.scrollTop > 25);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar className={`navbar-light ${scrolled ? 'scrolled' : ''}`}>
      <Container>
      <Navbar.Brand href='#home'>
        <img src={navbrand} alt='logo' className='logo' />
      </Navbar.Brand>

      <Navbar.Toggle
        aria-controls='basic-navbar-nav'
        data-bs-toggle='collapse'
        data-bs-target='#basic-navbar-nav'
      >
        <span className='navbar-toggler-icon'></span>
      </Navbar.Toggle>

        <Nav className='me-auto'>

          <Nav.Link
            href='#expertise'
            className={
              activeLink === 'expertise' ? 'active navbar-link' : 'navbar-link'
            }
            onClick={() => onUpdateActiveLink('expertise')}
          >
            What I Do
          </Nav.Link>
          <Nav.Link
            href='#projects'
            className={
              activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'
            }
            onClick={() => onUpdateActiveLink('projects')}
          >
            Work
          </Nav.Link>
        </Nav>

        <button
          className='navbar-connect'
          onClick={() =>
            document
              .querySelector('#contact')
              .scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
                duration: 5000,
              })
          }
        >
          <span> Let's talk</span>
        </button>
        </Container>
    </Navbar>
  );
};

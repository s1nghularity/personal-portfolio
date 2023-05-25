import { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import vLogoDark2 from '../assets/img/vlogodark2.svg';
import vLogoWhite from '../assets/img/vlogowhite.svg';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [navbrand, setNavbrand] = useState(vLogoWhite);
  const [menuClicked, setMenuClicked] = useState(false);
  const [navbarExpanded, setNavbarExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (document.documentElement.scrollTop > 25) {
        setScrolled(true);
        setNavbrand(vLogoDark2);
      } else {
        setScrolled(false);
        setNavbrand(vLogoWhite);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand='lg' className={`navbar-light ${scrolled ? 'scrolled' : ''} custom-navbar`}>

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

      <Navbar.Collapse
        id='basic-navbar-nav'
        className={`collapse ${navbarExpanded ? 'expanded' : ''}`}

        
      >
        <Nav className='me-auto'>
          <Nav.Link
            href='#home'
            className={
              activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
            }
            onClick={() => onUpdateActiveLink('home')}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href='#skills'
            className={
              activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
            }
            onClick={() => onUpdateActiveLink('skills')}
          >
            Skills
          </Nav.Link>
          <Nav.Link
            href='#projects'
            className={
              activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'
            }
            onClick={() => onUpdateActiveLink('projects')}
          >
            Projects
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
          <span> Let's Connect</span>
        </button>
      </Navbar.Collapse>
    </Navbar>
  );
};

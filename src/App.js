import { useEffect } from 'react';
import './App.css';
import {NavBar} from './components/NavBar.js';
import {Banner} from './components/Banner.js';
import {Journey} from './components/Journey.js';
import {About} from './components/About.js';
import Carousel from './components/Carousel.js';
import {Expertise} from './components/Expertise.js';
import {Projects} from './components/Projects.js';
import WorkTimeline from './components/Timeline.js';
import {Testimonials} from './components/Testimonials';
import {ContactForm} from './components/Contact.js';
import {Footer} from './components/Footer.js';
import { Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // global scroll-reveal: fade up .reveal elements as they enter view
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach((e) => e.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);

  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Journey/>
      <About/>
      <Carousel/>
      <Expertise/>
      <Projects/>
      <WorkTimeline/>

      <Container>
        <Testimonials/>
        <ContactForm/>
      </Container>

      <Footer/>
    </div>
  );
}

export default App;

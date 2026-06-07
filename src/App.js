import './App.css';
import {NavBar} from './components/NavBar.js';
import {Banner} from './components/Banner.js';
import {Journey} from './components/Journey.js';
import {Impact} from './components/Impact.js';
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
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Journey/>
      <Impact/>
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

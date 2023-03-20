import './App.css';
import {NavBar} from './components/NavBar.js';
import {Banner} from './components/Banner.js';
import {About} from './components/About.js';
import Skills from './components/Skills.js';
import Carousel from './components/Carousel.js';
import {Projects} from './components/Projects.js';
import WorkTimeline from './components/Timeline.js';
import {ContactForm} from './components/Contact.js';
import {Footer} from './components/Footer.js';


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <About/>
      <Skills/>
      <Carousel/>
      <Projects/>
      <WorkTimeline/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;

import './App.css';
import {NavBar} from './components/NavBar.js';
import {Banner} from './components/Banner.js';
import {About} from './components/About.js';
import {Skills} from './components/Skills.js';
import {Projects} from './components/Projects.js';
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
      <Projects/>
      <div className='contact-form-container'>
      <ContactForm/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

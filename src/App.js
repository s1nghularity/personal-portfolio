import { useEffect } from 'react';
import './App.css';
import { Banner } from './components/Banner.js';
import { Throughline } from './components/Throughline.js';
import { SelectedWork } from './components/SelectedWork.js';
import { Contact } from './components/Contact.js';

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
      <Banner />
      <Throughline />
      <SelectedWork />
      <Contact />
    </div>
  );
}

export default App;

import { useEffect } from 'react';
import './App.css';
import { Banner } from './components/Banner.js';
import { WhatIDo } from './components/WhatIDo.js';
import { RecentWork } from './components/RecentWork.js';
import { Throughline } from './components/Throughline.js';
import { WorkHistory } from './components/WorkHistory.js';
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
      <WhatIDo />
      <RecentWork />
      <Throughline />
      <WorkHistory />
      <Contact />
    </div>
  );
}

export default App;

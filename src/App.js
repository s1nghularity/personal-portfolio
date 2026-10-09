import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import './App.css';
import { Banner } from './components/Banner.js';
import { WhatIDo } from './components/WhatIDo.js';
import { RecentWork } from './components/RecentWork.js';
import { Services } from './components/Services.js';
import { Throughline } from './components/Throughline.js';
import { WorkHistory } from './components/WorkHistory.js';
import { Contact } from './components/Contact.js';

import 'bootstrap/dist/css/bootstrap.min.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  // Smooth scroll (Lenis) synced with GSAP ScrollTrigger, plus scroll-reveal.
  useEffect(() => {
    const reduce = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    // Reduced motion: no smooth scroll, no animation — just show everything.
    if (reduce) {
      gsap.set('.reveal', { opacity: 1, y: 0 });
      return;
    }

    // Lenis smooth scroll, driven by GSAP's ticker so ScrollTrigger stays in sync.
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    lenis.on('scroll', ScrollTrigger.update);
    const raf = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Scroll-reveal: fade + rise each .reveal element as it enters view.
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.reveal').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          }
        );
      });
    });

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="App">
      <Banner />
      <WhatIDo />
      <RecentWork />
      <Services />
      <Throughline />
      <WorkHistory />
      <Contact />
    </div>
  );
}

export default App;

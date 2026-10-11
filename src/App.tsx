import { MotionConfig } from 'motion/react';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { SiteNav } from '@/components/site-nav';
import { Hero } from '@/components/sections/hero';
import { WhatIDo } from '@/components/sections/what-i-do';
import { RecentWork } from '@/components/sections/recent-work';
import { Services } from '@/components/sections/services';
import { About } from '@/components/sections/about';
import { Experience } from '@/components/sections/experience';
import { Contact } from '@/components/sections/contact';

export default function App() {
  return (
    // Honour prefers-reduced-motion: Motion drops transform animations.
    <MotionConfig reducedMotion='user'>
      <ScrollProgress className='bg-accent h-0.5 bg-none' />
      <SiteNav />
      <main>
        <Hero />
        <WhatIDo />
        <RecentWork />
        <Services />
        <About />
        <Experience />
        <Contact />
      </main>
    </MotionConfig>
  );
}

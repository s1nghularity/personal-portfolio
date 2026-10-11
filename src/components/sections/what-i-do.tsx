import { Reveal } from '@/components/reveal';

const blocks = [
  {
    title: 'Strategy & words',
    body: 'Ten years in newsrooms and communications. I find the one thing a site has to say, then cut whatever gets in its way.',
  },
  {
    title: 'Design & build',
    body: "WordPress, React, or Shopify — whatever fits the business, not whatever's fashionable. I bring in specialist developers when the job calls for it, and I own the result either way.",
  },
  {
    title: 'Keep it running',
    body: "Software rots. Plugins update, browsers change, the contact form breaks on a Friday. I run upkeep for a fleet of sites serving California's community colleges. Launch is day one.",
  },
];

export const WhatIDo = () => (
  <section id='services' className='bg-muted section-y'>
    <div className='container-page'>
      <Reveal className='mb-[clamp(40px,6vw,64px)]'>
        <h2 className='section-title'>What I do</h2>
      </Reveal>

      <div className='grid md:grid-cols-3 md:gap-[clamp(28px,4vw,48px)]'>
        {blocks.map((b, i) => (
          <Reveal
            key={b.title}
            delay={i * 0.08}
            className='border-border border-t py-[22px] first:border-t-2 first:border-foreground md:border-foreground md:border-t-2 md:pb-0'
          >
            <h3 className='mb-3 text-[clamp(21px,2.2vw,25px)] leading-tight'>
              {b.title}
            </h3>
            <p className='m-0 leading-relaxed'>{b.body}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

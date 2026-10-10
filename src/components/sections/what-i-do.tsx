import { MagicCard } from '@/components/ui/magic-card';
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

      <div className='grid gap-5 md:grid-cols-3 md:gap-6'>
        {blocks.map((b, i) => (
          <Reveal key={b.title} delay={i * 0.08} className='h-full'>
            <MagicCard
              className='h-full rounded-md'
              gradientSize={240}
              gradientColor='#EFE9DE'
              gradientFrom='#8A3B2F'
              gradientTo='#C9A27A'
            >
              <div className='p-7'>
                <h3 className='mb-3 text-[clamp(21px,2.2vw,25px)] leading-tight'>
                  {b.title}
                </h3>
                <p className='m-0 leading-relaxed'>{b.body}</p>
              </div>
            </MagicCard>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

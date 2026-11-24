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
    body: "Software decays on its own: plugins update, browsers change, and the contact form breaks on a Friday. I run upkeep for a fleet of sites serving California's community colleges, where launch day is only the start.",
  },
];

export const WhatIDo = () => (
  <section id='services' className='bg-muted section-y'>
    <div className='container-page'>
      <h2 className='section-title mb-[clamp(32px,5vw,56px)]'>What I do</h2>

      <dl className='m-0'>
        {blocks.map((b) => (
          <div
            key={b.title}
            className='border-border grid gap-2 border-t py-[clamp(20px,3vw,28px)] last:border-b md:grid-cols-[1fr_1.6fr] md:gap-[clamp(20px,4vw,56px)]'
          >
            <dt className='font-display text-[clamp(21px,2.2vw,25px)] leading-tight font-medium'>
              {b.title}
            </dt>
            <dd className='m-0 max-w-[60ch] leading-relaxed'>{b.body}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

import { Container } from 'react-bootstrap';
import '../styles/WhatIDo.css';

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

export const WhatIDo = () => {
  return (
    <section className='what-i-do' id='services'>
      <Container>
        <div className='wid-head reveal'>
          <h2 className='section-title'>What I do</h2>
        </div>

        <div className='wid-grid'>
          {blocks.map((b, i) => (
            <article className='wid-block reveal' key={i}>
              <h3 className='wid-title'>{b.title}</h3>
              <p className='wid-body'>{b.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

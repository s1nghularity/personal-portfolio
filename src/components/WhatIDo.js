import { Container } from 'react-bootstrap';
import '../styles/WhatIDo.css';

const blocks = [
  {
    title: 'Strategy & words',
    body: 'Figure out what the site actually needs to say, then say it. A decade in newsrooms and comms taught me to cut to the point.',
  },
  {
    title: 'Design & build',
    body: "Make it — in WordPress, React, or Shopify — and bring in the right devs where it counts. I'm the one who holds the whole thing together.",
  },
  {
    title: 'Keep it running',
    body: "The part most people skip: updates, fixes, staying current. I do this day to day for a foundation that supports California's entire community college system — so launch is the start, not the finish.",
  },
];

export const WhatIDo = () => {
  return (
    <section className='what-i-do' id='services'>
      <Container>
        <div className='wid-head reveal'>
          <span className='section-eyebrow'>What I do</span>
          <h2 className='section-title'>Strategy, build, upkeep — one person across all three.</h2>
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

import { Container } from 'react-bootstrap';
import '../styles/Services.css';

const services = [
  {
    name: 'New websites',
    desc: 'Strategy, copy, design, and build, start to finish — in React, WordPress, or Shopify. Product photography when it\'s needed.',
    // price: '',  // e.g. 'From $X' — left empty until real figures
  },
  {
    name: 'Redesigns & refreshes',
    desc: "Bringing an existing site's design, UX, and words up to date without starting from scratch.",
  },
  {
    name: 'Ongoing care',
    desc: 'Updates, fixes, and keeping a site healthy and current long after launch.',
  },
];

export const Services = () => {
  return (
    <section className='services' id='offerings'>
      <Container>
        <div className='services-head reveal'>
          <h2 className='section-title'>Services</h2>
          <p className='services-lead'>
            Ways I work with clients — from a first site to the long-term upkeep.
          </p>
        </div>

        <ul className='services-list'>
          {services.map((s) => (
            <li className='services-row reveal' key={s.name}>
              <div className='services-main'>
                <h3 className='services-name'>{s.name}</h3>
                <p className='services-desc'>{s.desc}</p>
              </div>
              {s.price && <div className='services-price'>{s.price}</div>}
            </li>
          ))}
        </ul>

        <a className='link-accent services-cta' href='#contact'>
          Start a conversation →
        </a>
      </Container>
    </section>
  );
};

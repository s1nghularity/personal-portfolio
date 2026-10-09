import { Container } from 'react-bootstrap';
import '../styles/Services.css';

const services = [
  {
    name: 'New websites',
    desc: 'Strategy, copy, design, and build, start to finish. React, WordPress, or Shopify. Photography when the product deserves it.',
    // price: '',  // e.g. 'From $X' — left empty until real figures
  },
  {
    name: 'Redesigns & refreshes',
    desc: "Your site works, mostly. I fix the parts that don't — structure, UX, and copy — without tearing out what's still earning its keep.",
  },
  {
    name: 'Ongoing care',
    desc: 'Updates, security, fixes, and small improvements on a steady schedule — so the site you paid for stays the site you paid for.',
  },
];

export const Services = () => {
  return (
    <section className='services' id='offerings'>
      <Container>
        <div className='services-head reveal'>
          <h2 className='section-title'>Services</h2>
          <p className='services-lead'>
            Three ways to work together.
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

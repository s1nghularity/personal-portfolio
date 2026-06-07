import { Container } from 'react-bootstrap';

const chapters = [
  {
    meta: '01 · 2008–2014',
    title: 'Communicator',
    body: 'Newsrooms first, then comms desks. NDTV in New Delhi, then PayPal and SIS.',
  },
  {
    meta: '02 · 2016–2023',
    title: 'Brand builder',
    body: 'Building brands and running programs. Whitaker in LA, Starfish, Design Spinners, Boomgen.',
  },
  {
    meta: '03 · 2023–now',
    title: 'Builder & operator',
    body: 'Learned to code and shipped it. beechler.com, privateaffairband.com, and a 40+ site fleet I keep running.',
    current: true,
  },
];

export const Journey = () => {
  return (
    <section className='journey' id='path'>
      <Container>
        <div className='sec-head reveal'>
          <span className='eyebrow'>The throughline</span>
          <h2 className='section-title'>One path, start to now.</h2>
        </div>

        <ol className='trail'>
          {chapters.map((c, i) => (
            <li className={`tcol reveal${c.current ? ' now' : ''}`} key={i}>
              <span className='tdot' aria-hidden='true' />
              <span className='tmeta'>{c.meta}</span>
              <h3 className='tt'>{c.title}</h3>
              <p className='td'>{c.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
};

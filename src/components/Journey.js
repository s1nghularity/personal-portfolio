import { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';

const chapters = [
  {
    index: '01',
    title: 'Communicator',
    years: '2008 - 2014',
    body: 'Newsrooms first, then comms desks. NDTV in New Delhi, then PayPal and SIS.',
  },
  {
    index: '02',
    title: 'Brand builder',
    years: '2016 - 2023',
    body: 'Building brands and running programs. Whitaker in LA, Starfish, Design Spinners, Boomgen.',
  },
  {
    index: '03',
    title: 'Builder & operator',
    years: '2023 - now',
    body: 'Learned to code and shipped it. beechler.com, privateaffairband.com, and a 40+ site fleet I keep running.',
    current: true,
  },
];

export const Journey = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`journey${visible ? ' is-visible' : ''}`}
      aria-labelledby='journey-title'
      ref={ref}
    >
      <Container>
        <span className='kicker'>The throughline</span>
        <h2 id='journey-title' className='journey-title'>
          One path, start to now.
        </h2>

        <ol className='journey-track'>
          {chapters.map((chapter, i) => (
            <li
              className={`journey-chapter${chapter.current ? ' is-current' : ''}`}
              key={chapter.index}
              style={{ '--i': i }}
            >
              <span className='journey-node' aria-hidden='true' />
              <span className='journey-index'>{chapter.index}</span>
              <span className='journey-years'>{chapter.years}</span>
              <h3 className='journey-chapter-title'>{chapter.title}</h3>
              <p className='journey-desc'>{chapter.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
};

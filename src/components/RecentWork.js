import { Container } from 'react-bootstrap';
import '../styles/RecentWork.css';
import beechler from '../assets/img/proj-img/capstone/beechler.png';
import pabShot from '../assets/img/proj-img/placeholder-pab.svg';
import kavitaShot from '../assets/img/proj-img/placeholder-kavita.svg';

const projects = [
  {
    name: 'Beechler',
    href: 'https://beechler.com/',
    linkText: 'beechler.com',
    img: beechler,
    alt: 'The Beechler website',
    body: 'A High Desert business that needed its site to do one real job: get the phone to ring. I worked with the owner to figure out what it had to say, shot the product photography myself, designed it, and built it in React. Still keep it running.',
  },
  {
    name: 'Private Affair Band',
    href: 'https://privateaffairband.com/',
    linkText: 'privateaffairband.com',
    img: pabShot,
    alt: 'The Private Affair Band website',
    body: 'An L.A. R&B and funk band with years of packed dance floors and no real way to show it online. I built the booking site in WordPress, wrote the copy, and sat in on rehearsal to get what made them them. Now it does the work of a manager, quietly.',
  },
  {
    name: 'Kavita Studios',
    href: 'https://kavitastudios.com/',
    linkText: 'kavitastudios.com',
    img: kavitaShot,
    alt: 'The Kavita Studios storefront',
    body: 'A wearable-art label — hand-painted silk scarves and jackets, forty years of design behind them, Paris to California. I was the project manager: directed the design through Design Spinners, shot the photography myself, and got the Shopify storefront live and selling. It’s my mother’s label, out of Saratoga, where I grew up.',
  },
];

export const RecentWork = () => {
  return (
    <section className='recent-work' id='work'>
      <Container>
        <div className='rw-head reveal'>
          <span className='section-eyebrow'>Recent work</span>
          <h2 className='section-title'>Three sites, built and kept running.</h2>
        </div>

        <div className='rw-list'>
          {projects.map((p, i) => (
            <article
              className={`rw-block reveal${i % 2 === 1 ? ' rw-reverse' : ''}`}
              key={p.name}
            >
              <a className='rw-media' href={p.href} target='_blank' rel='noreferrer'>
                <img src={p.img} alt={p.alt} loading='lazy' />
              </a>
              <div className='rw-body'>
                <h3 className='rw-name'>{p.name}</h3>
                <p className='rw-desc'>{p.body}</p>
                <a
                  className='link-accent'
                  href={p.href}
                  target='_blank'
                  rel='noreferrer'
                >
                  {p.linkText}
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

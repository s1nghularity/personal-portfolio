import { Container } from 'react-bootstrap';
import '../styles/RecentWork.css';
import beechler from '../assets/img/proj-img/capstone/beechler.png';
import pabShot from '../assets/img/proj-img/private-affair.webp';
import kavitaShot from '../assets/img/proj-img/kavita.webp';
import { BeforeAfter } from './BeforeAfter';

// Before/after screenshots for the slider. Drop the images into
// src/assets/img/proj-img/ and uncomment, then add `compare` to the project.
// import beechlerBefore from '../assets/img/proj-img/beechler-before.png';
// import beechlerAfter from '../assets/img/proj-img/beechler-after.png';

const projects = [
  {
    name: 'Beechler',
    href: 'https://beechler.com/',
    linkText: 'beechler.com',
    img: beechler,
    alt: 'The Beechler website',
    body: 'Beechler has hand-finished saxophone and clarinet mouthpieces in Los Angeles since 1942, sold through dealers in 27 countries. Their catalog deserved better than the site it lived on. I sat down with the owners to work out what players and dealers needed to find, shot new product photography, and built the site in React on a server I set up and hardened myself. More engineering than a catalog needed, and nothing they can edit without me. I\'d build it differently today. It still runs.',
    // compare: { before: beechlerBefore, after: beechlerAfter },
  },
  {
    name: 'Private Affair Band',
    href: 'https://privateaffairband.com/',
    linkText: 'privateaffairband.com',
    img: pabShot,
    alt: 'The Private Affair Band website',
    body: 'A Los Angeles R&B and funk band with years of packed dance floors and an old site, timelesspab, that didn\'t show it. I sat down with the band to work out what bookers need to see, wrote the copy, and rebuilt it in WordPress as privateaffairband.com. Inquiries come through a proper contact form, and the band updates their own song list. No developer required.',
  },
  {
    name: 'Kavita Studios',
    href: 'https://kavitastudios.com/',
    linkText: 'kavitastudios.com',
    img: kavitaShot,
    alt: 'The Kavita Studios storefront',
    body: 'Hand-painted silk scarves and jackets — forty years of design, Paris to California. I project-managed the launch: directed design through Design Spinners, shot the photography, and got the Shopify store live and selling. It’s my mother’s label. No pressure.',
  },
];

export const RecentWork = () => {
  return (
    <section className='recent-work' id='work'>
      <Container>
        <div className='rw-head reveal'>
          <h2 className='section-title'>Recent work</h2>
        </div>

        <div className='rw-list'>
          {projects.map((p, i) => (
            <article
              className={`rw-block reveal${i % 2 === 1 ? ' rw-reverse' : ''}`}
              key={p.name}
            >
              {p.compare ? (
                <div className='rw-media rw-media-compare'>
                  <BeforeAfter
                    before={p.compare.before}
                    after={p.compare.after}
                    beforeAlt={`The ${p.name} site before the redesign`}
                    afterAlt={`The ${p.name} site after the redesign`}
                  />
                </div>
              ) : (
                <a className='rw-media' href={p.href} target='_blank' rel='noreferrer'>
                  <img src={p.img} alt={p.alt} loading='lazy' />
                </a>
              )}
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

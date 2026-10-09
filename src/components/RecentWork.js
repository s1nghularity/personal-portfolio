import { Container } from 'react-bootstrap';
import '../styles/RecentWork.css';
import beechler from '../assets/img/proj-img/capstone/beechler.png';
import pabShot from '../assets/img/proj-img/private-affair.webp';
import kavitaShot from '../assets/img/proj-img/kavita.webp';
import { Changes } from './Changes';

// Before/after screenshots, 16:10, cropped from the top of each page.
import beechlerBefore from '../assets/img/proj-img/beechler-before.jpg';
import beechlerAfter from '../assets/img/proj-img/beechler-after.jpg';
import beechlerDealersBefore from '../assets/img/proj-img/beechler-dealers-before.jpg';
import beechlerDealersAfter from '../assets/img/proj-img/beechler-dealers-after.jpg';
import pabBefore from '../assets/img/proj-img/pab-before.jpg';
import pabAfter from '../assets/img/proj-img/pab-after.jpg';
import pabSongsBefore from '../assets/img/proj-img/pab-songs-before.jpg';
import pabSongsAfter from '../assets/img/proj-img/pab-songs-after.jpg';

const projects = [
  {
    name: 'Beechler',
    href: 'https://beechler.com/',
    linkText: 'beechler.com',
    img: beechler,
    alt: 'The Beechler website',
    body: 'Beechler has hand-finished saxophone and clarinet mouthpieces in Los Angeles since 1942, sold through dealers in 27 countries. Their catalog deserved better than the site it lived on. I sat down with the owners to work out what players and dealers needed to find, shot new product photography, and built the site in React on a server I set up and hardened myself. More engineering than a catalog needed, and nothing they can edit without me. I\'d build it differently today. It still runs.',
    changes: [
      {
        label: 'Catalog',
        note: 'Was one page per material: a banner and bullet points. Now every mouthpiece in one place, filterable by instrument and type, with new product photography.',
        before: beechlerBefore,
        after: beechlerAfter,
      },
      {
        label: 'Dealers',
        note: 'Was a graphic in the sidebar that led to text lists. Now a searchable map of dealers in 27 countries.',
        before: beechlerDealersBefore,
        after: beechlerDealersAfter,
      },
    ],
  },
  {
    name: 'Private Affair Band',
    href: 'https://privateaffairband.com/',
    linkText: 'privateaffairband.com',
    img: pabShot,
    alt: 'The Private Affair Band website',
    body: 'A Los Angeles R&B and funk band with years of packed dance floors and an old site, timelesspab, that didn\'t show it. I sat down with the band to work out what bookers need to see, wrote the copy, and rebuilt it in WordPress as privateaffairband.com. Inquiries come through a proper contact form, and the band updates their own song list. No developer required.',
    changes: [
      {
        label: 'Song list',
        note: 'Was one long list in orange type. Now 200+ songs grouped by genre, and the band edits it themselves in WordPress.',
        before: pabSongsBefore,
        after: pabSongsAfter,
      },
      {
        label: 'Booking',
        note: 'Was name, email, message. Now event date, type, guest count, and venue: what a booker needs to send a quote.',
        before: pabBefore,
        after: pabAfter,
      },
    ],
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
          <p className='rw-lead'>What each site did before, what it does now, and what changed in between.</p>
        </div>

        <div className='rw-list'>
          {projects.map((p, i) => (
            <article className='rw-block reveal' key={p.name}>
              <div className='rw-body'>
                <h3 className='rw-name'>{p.name}</h3>
                <div>
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
              </div>
              {p.changes ? (
                <Changes changes={p.changes} name={p.name} />
              ) : (
                <a className='rw-media' href={p.href} target='_blank' rel='noreferrer'>
                  <img src={p.img} alt={p.alt} loading='lazy' />
                </a>
              )}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

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
import beechlerPhotosBefore from '../assets/img/proj-img/beechler-photos-before.jpg';
import beechlerPhotosAfter from '../assets/img/proj-img/beechler-photos-after.jpg';
import pabHomeBefore from '../assets/img/proj-img/pab-home-before.jpg';
import pabHomeAfter from '../assets/img/proj-img/pab-home-after.jpg';
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
    body: 'Saxophone and clarinet mouthpieces, hand-finished in Los Angeles since 1942, sold in 27 countries. The brief: make the catalog browsable. React, my photography, a server I set up myself. More build than a catalog needed. It still runs.',
    changes: [
      {
        label: 'Catalog',
        note: "Was one page per material. Now every mouthpiece, filterable by instrument and type.",
        before: beechlerBefore,
        after: beechlerAfter,
      },
      {
        label: 'Photography',
        note: "The Photos page said 'Coming Soon.' Now every mouthpiece has its own shot.",
        before: beechlerPhotosBefore,
        after: beechlerPhotosAfter,
      },
      {
        label: 'Dealers',
        note: "Was a sidebar graphic linking to text lists. Now a searchable map, 27 countries.",
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
    body: 'L.A. R&B and funk band, decades of packed dance floors, and an old site (timelesspab) that didn\'t show it. The brief: make them easy to book. WordPress, so the band updates the song list themselves.',
    changes: [
      {
        label: 'Homepage',
        note: "Was five paragraphs under a yellow headline. Now a photo, a line, a button.",
        before: pabHomeBefore,
        after: pabHomeAfter,
      },
      {
        label: 'Song list',
        note: "Was one long orange list. Now 200+ songs by genre, edited by the band.",
        before: pabSongsBefore,
        after: pabSongsAfter,
      },
      {
        label: 'Booking',
        note: "Was name, email, message. Now date, event type, guests, venue: enough to quote.",
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
    body: 'Hand-painted silk scarves and jackets, forty years of design, Paris to California. I project-managed the launch: design through Design Spinners, my photography, a Shopify store live and selling. My mother\'s label. No pressure.',
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

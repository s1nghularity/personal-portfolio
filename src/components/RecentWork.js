import { Container } from 'react-bootstrap';
import '../styles/RecentWork.css';
import beechler from '../assets/img/proj-img/capstone/beechler.png';
import pabShot from '../assets/img/proj-img/private-affair.webp';
import kavitaShot from '../assets/img/proj-img/kavita.webp';

const projects = [
  {
    name: 'Beechler',
    href: 'https://beechler.com/',
    linkText: 'beechler.com',
    img: beechler,
    alt: 'The Beechler website',
    body: 'A High Desert business whose website had one job: make the phone ring. I worked out the message with the owner, shot the product photography, designed the site, and built it in React. I still maintain it.',
  },
  {
    name: 'Private Affair Band',
    href: 'https://privateaffairband.com/',
    linkText: 'privateaffairband.com',
    img: pabShot,
    alt: 'The Private Affair Band website',
    body: 'A Los Angeles R&B and funk band with years of packed dance floors and nothing online to prove it. I sat in on rehearsal, wrote the copy, and built the booking site in WordPress. It now fields the inquiries a manager used to.',
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

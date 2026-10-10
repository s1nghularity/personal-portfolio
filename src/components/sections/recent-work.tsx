import { Safari } from '@/components/ui/safari';
import { Reveal } from '@/components/reveal';
import { cn } from '@/lib/utils';

import kavitaShot from '@/assets/img/proj-img/kavita.webp';
// Before/after screenshots, 16:10, cropped from the top of each page.
import beechlerBefore from '@/assets/img/proj-img/beechler-before.jpg';
import beechlerAfter from '@/assets/img/proj-img/beechler-after.jpg';
import beechlerPhotosBefore from '@/assets/img/proj-img/beechler-photos-before.jpg';
import beechlerPhotosAfter from '@/assets/img/proj-img/beechler-photos-after.jpg';
import pabHomeBefore from '@/assets/img/proj-img/pab-home-before.jpg';
import pabHomeAfter from '@/assets/img/proj-img/pab-home-after.jpg';
import pabSongsBefore from '@/assets/img/proj-img/pab-songs-before.jpg';
import pabSongsAfter from '@/assets/img/proj-img/pab-songs-after.jpg';

type Change = { label: string; note: string; before: string; after: string };
type Project = {
  name: string;
  href: string;
  linkText: string;
  body: string;
  img?: string;
  changes?: Change[];
};

const projects: Project[] = [
  {
    name: 'Beechler',
    href: 'https://beechler.com/',
    linkText: 'beechler.com',
    body: 'Saxophone and clarinet mouthpieces, hand-finished in Los Angeles since 1942, sold in 27 countries. The brief: make the catalog browsable. React, my photography, a server I set up myself. It still runs.',
    changes: [
      {
        label: 'Catalog',
        note: 'Was one page per material. Now every mouthpiece, filterable by instrument and type.',
        before: beechlerBefore,
        after: beechlerAfter,
      },
      {
        label: 'Photography',
        note: "The Photos page said 'Coming Soon.' Now every mouthpiece has its own shot.",
        before: beechlerPhotosBefore,
        after: beechlerPhotosAfter,
      },
    ],
  },
  {
    name: 'Private Affair Band',
    href: 'https://privateaffairband.com/',
    linkText: 'privateaffairband.com',
    body: "L.A. R&B and funk band, decades of packed dance floors, and an old site (timelesspab) that didn't show it. The brief: make them easy to book. WordPress, so the band updates the song list themselves.",
    changes: [
      {
        label: 'Homepage',
        note: 'Was five paragraphs under a yellow headline. Now a photo, a line, a button.',
        before: pabHomeBefore,
        after: pabHomeAfter,
      },
      {
        label: 'Song list',
        note: 'Was one long orange list. Now 200+ songs by genre, edited by the band.',
        before: pabSongsBefore,
        after: pabSongsAfter,
      },
    ],
  },
  {
    name: 'Kavita Studios',
    href: 'https://kavitastudios.com/',
    linkText: 'kavitastudios.com',
    img: kavitaShot,
    body: "Hand-painted silk and jackets, forty years of design, Paris to California. I project-managed the launch: design through Design Spinners, my photography, a Shopify store. My mother's label.",
  },
];

/** A screenshot in a Magic UI Safari frame, with a Before/After corner tag. */
const Shot = ({
  src,
  url,
  label,
  tag,
}: {
  src: string;
  url: string;
  label: string;
  tag: 'Before' | 'After';
}) => (
  <figure className='relative m-0'>
    <Safari url={url} imageSrc={src} role='img' aria-label={label} />
    <span
      aria-hidden='true'
      className={cn(
        'pointer-events-none absolute bottom-3 left-3 z-20 rounded-sm border px-2 py-1 text-xs leading-none font-medium tracking-[0.1em] uppercase',
        tag === 'After'
          ? 'bg-foreground text-background border-foreground'
          : 'bg-background/95 text-muted-foreground border-border'
      )}
    >
      {tag}
    </span>
  </figure>
);

const Changes = ({ project }: { project: Project & { changes: Change[] } }) => (
  <div className='border-border flex flex-col gap-[clamp(24px,3vw,36px)] border-t'>
    {project.changes.map((c) => (
      <div key={c.label} className='grid gap-3 pt-[clamp(16px,2.5vw,24px)]'>
        <div className='flex flex-wrap items-baseline gap-x-[18px] gap-y-1'>
          <h4 className='text-[clamp(20px,2vw,24px)] leading-tight'>{c.label}</h4>
          <p className='m-0 text-[17px] leading-normal'>{c.note}</p>
        </div>
        <div className='grid gap-[clamp(14px,1.8vw,24px)] sm:grid-cols-2'>
          <Shot
            src={c.before}
            url={project.linkText}
            tag='Before'
            label={`${project.name} ${c.label.toLowerCase()}, before`}
          />
          <Shot
            src={c.after}
            url={project.linkText}
            tag='After'
            label={`${project.name} ${c.label.toLowerCase()}, after`}
          />
        </div>
      </div>
    ))}
  </div>
);

export const RecentWork = () => (
  <section id='work' className='section-y'>
    <div className='container-page'>
      <Reveal className='mb-[clamp(40px,6vw,72px)]'>
        <h2 className='section-title'>Recent work</h2>
        <p className='mt-3.5 mb-0 max-w-[56ch] leading-relaxed'>
          What each site did before, what it does now, and what changed in
          between.
        </p>
      </Reveal>

      <div className='flex flex-col gap-[clamp(56px,8vw,96px)]'>
        {projects.map((p) => (
          <Reveal key={p.name}>
            <article className='grid gap-[clamp(18px,2.5vw,28px)]'>
              <div className='grid items-start gap-2.5 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] md:gap-[clamp(20px,4vw,56px)]'>
                <h3 className='mb-3.5 text-[clamp(24px,3vw,33px)] leading-[1.12]'>
                  {p.name}
                </h3>
                <div>
                  <p className='mt-0 mb-3 max-w-[64ch] leading-relaxed'>{p.body}</p>
                  <a className='link-ink' href={p.href} target='_blank' rel='noreferrer'>
                    {p.linkText}
                  </a>
                </div>
              </div>

              {p.changes ? (
                <Changes project={{ ...p, changes: p.changes }} />
              ) : (
                p.img && (
                  <a
                    href={p.href}
                    target='_blank'
                    rel='noreferrer'
                    className='block transition-transform duration-300 hover:-translate-y-1'
                  >
                    <Safari
                      url={p.linkText}
                      imageSrc={p.img}
                      role='img'
                      aria-label={`The ${p.name} website`}
                    />
                  </a>
                )
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

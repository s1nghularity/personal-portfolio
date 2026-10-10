import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BlurFade } from '@/components/ui/blur-fade';
import { InstagramIcon } from '@/components/icons';
import { Reveal } from '@/components/reveal';

type Role = {
  title: string;
  company: string;
  href?: string;
  icon?: 'instagram';
  dates: string;
  desc: string;
};

const roles: Role[] = [
  {
    title: 'Project Specialist',
    company: 'Foundation for California Community Colleges',
    href: 'https://foundationccc.org/',
    dates: "Apr '24 - Present",
    desc: 'First responder for a fleet of client WordPress sites: keeping them updated and running, fixing front-line issues, routing deep engineering to the devs, and managing the projects and vendors around the work.',
  },
  {
    title: 'Web Designer & Developer',
    company: 'S1nghularity · Freelance',
    href: 'https://github.com/s1nghularity',
    dates: "Jan '23 - Present",
    desc: 'Refreshing business sites with modern design and UX. Built and shipped beechler.com and privateaffairband.com.',
  },
  {
    title: 'Global Digital Strategist (and founding member)',
    company: 'Starfish Accelerator Foundation',
    href: 'https://www.instagram.com/thestarfishorg/',
    icon: 'instagram',
    dates: "Oct '19 - Present",
    desc: 'Joined as a founding member; now Global Digital Strategist — running brand, social, and digital for the nonprofit. Ongoing.',
  },
  {
    title: 'Marketing & Promotions',
    company: 'Boomgen Studios',
    href: 'https://www.boomgenstudios.com/',
    dates: "Jan '21 - 2023",
    desc: 'Promoted a CBS comedy, coordinated book promotion, and ran the social accounts.',
  },
  {
    title: 'Creative Copywriter',
    company: 'Design Spinners',
    href: 'https://designspinner.com/',
    dates: "Jan '19 - Jun '22",
    desc: 'Content and copywriting, social consulting, and marketing strategy; project-managed the Kavita Studios e-commerce launch.',
  },
  {
    title: 'Operations Lead, LA Headquarters',
    company: 'Whitaker Peace & Development Initiative',
    href: 'https://www.wpdi.org/',
    dates: "Aug '16 - Jan '19",
    desc: 'Ran day-to-day operations for the LA headquarters, coordinated international programs, and handled communications, content, payroll, and admin.',
  },
  {
    title: 'Internal Communications Specialist',
    company: 'Security Industry Specialists (PayPal)',
    href: 'https://sis.us/',
    dates: "Jul '13 - Jul '14",
    desc: 'Security briefings, real-time threat tracking, emergency response, and cross-department comms.',
  },
  {
    title: 'Content Writer',
    company: 'SFBay.ca',
    href: 'https://sfbayca.com/',
    dates: "Dec '12 - Jan '14",
    desc: 'Bay Area news and features, with an ongoing story archive.',
  },
  {
    title: 'English Output Editor',
    company: 'New Delhi Television (NDTV 24x7)',
    href: 'https://www.ndtv.com/',
    dates: "Mar '08 - May '10",
    desc: 'Newsroom operations, major-event coverage, and content editing.',
  },
];

const VISIBLE = 5;

const CompanyName = ({ role }: { role: Role }) => {
  if (!role.href) return <>{role.company}</>;
  const Icon = role.icon === 'instagram' ? InstagramIcon : ArrowUpRight;
  return (
    <a
      className='hover:text-accent group border-b border-transparent text-inherit no-underline transition-colors hover:border-current'
      href={role.href}
      target='_blank'
      rel='noreferrer'
    >
      {role.company}
      <Icon
        aria-hidden='true'
        className='ml-[0.2em] inline size-[0.72em] align-baseline opacity-65 group-hover:opacity-100'
      />
    </a>
  );
};

const Row = ({ role }: { role: Role }) => (
  <div className='grid gap-1.5 py-[clamp(20px,3vw,26px)] sm:grid-cols-[9.5rem_1fr] sm:gap-[clamp(12px,3vw,32px)]'>
    <div className='text-muted-foreground text-[15px] leading-normal font-medium tabular-nums sm:pt-[0.4em]'>
      {role.dates}
    </div>
    <div>
      <h3 className='mb-2 text-[clamp(19px,2vw,22px)] leading-tight'>
        {role.title}
        <span className='text-muted-foreground'>
          {' · '}
          <CompanyName role={role} />
        </span>
      </h3>
      <p className='m-0 max-w-[56ch] text-[17px] leading-relaxed'>{role.desc}</p>
    </div>
  </div>
);

export const Experience = () => {
  const [expanded, setExpanded] = useState(false);
  const shown = expanded ? roles : roles.slice(0, VISIBLE);

  return (
    <section id='experience' className='section-y'>
      <div className='container-page'>
        <Reveal className='mb-[clamp(32px,5vw,56px)]'>
          <h2 className='section-title'>Experience</h2>
        </Reveal>

        <ol className='m-0 list-none p-0'>
          {shown.map((role, i) => (
            <li key={role.title} className='border-border border-t last:border-b'>
              {i < VISIBLE ? (
                <Reveal delay={i * 0.04}>
                  <Row role={role} />
                </Reveal>
              ) : (
                // Rows revealed by "Show full history" fade in on mount.
                <BlurFade direction='up' delay={(i - VISIBLE) * 0.05}>
                  <Row role={role} />
                </BlurFade>
              )}
            </li>
          ))}
        </ol>

        {roles.length > VISIBLE && (
          <button
            className='hover:text-accent mt-7 cursor-pointer border-b border-current py-2.5 text-[15px] font-medium transition-colors'
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
          >
            {expanded ? 'Show less' : 'Show full history'}
          </button>
        )}
      </div>
    </section>
  );
};

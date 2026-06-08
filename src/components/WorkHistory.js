import { useState } from 'react';
import { Container } from 'react-bootstrap';
import '../styles/WorkHistory.css';

const roles = [
  {
    title: 'Project Specialist',
    company: 'Foundation for California Community Colleges',
    dates: "Apr '24 - Present",
    desc: 'First responder for a fleet of client WordPress sites: keeping them updated and running, fixing front-line issues, routing deep engineering to the devs, and managing the projects and vendors around the work.',
  },
  {
    title: 'Web Designer & Developer',
    company: 'S1nghularity · Freelance',
    dates: "Jan '23 - Present",
    desc: 'Refreshing business sites with modern design and UX. Built and shipped beechler.com and privateaffairband.com.',
  },
  {
    title: 'Global Digital Strategist (and founding member)',
    company: 'Starfish Accelerator Foundation',
    dates: "Oct '19 - Present",
    desc: 'Joined as a founding member; now Global Digital Strategist — running brand, social, and digital for the nonprofit. Ongoing.',
  },
  {
    title: 'Social Media Manager',
    company: 'Boomgen Studios',
    dates: "Jan '21 - 2023",
    desc: 'Promoted a CBS comedy, coordinated book promotion, and ran the social accounts.',
  },
  {
    title: 'Social Media Manager',
    company: 'Barrel Bag',
    dates: "Oct '21 - May '22",
    desc: 'Built and ran the monthly newsletter and social content.',
  },
  {
    title: 'Creative Copywriter',
    company: 'Design Spinners',
    dates: "Jan '19 - Jun '22",
    desc: 'Content and copywriting, social consulting, and marketing strategy; project-managed the Kavita Studios e-commerce launch.',
  },
  {
    title: 'Operations Lead, LA Headquarters',
    company: 'Whitaker Peace & Development Initiative',
    dates: "Aug '16 - Jan '19",
    desc: 'Ran day-to-day operations for the LA headquarters, coordinated international programs, and handled communications, content, payroll, and admin.',
  },
  {
    title: 'Internal Communications Specialist',
    company: 'Security Industry Specialists (PayPal)',
    dates: "Jul '13 - Jul '14",
    desc: 'Security briefings, real-time threat tracking, emergency response, and cross-department comms.',
  },
  {
    title: 'Content Writer',
    company: 'SFBay.ca',
    dates: "Dec '12 - Jan '14",
    desc: 'Bay Area news and features, with an ongoing story archive.',
  },
  {
    title: 'English Output Editor',
    company: 'New Delhi Television (NDTV 24x7)',
    dates: "Mar '08 - May '10",
    desc: 'Newsroom operations, major-event coverage, and content editing.',
  },
];

const VISIBLE = 5;

export const WorkHistory = () => {
  const [expanded, setExpanded] = useState(false);
  const shown = expanded ? roles : roles.slice(0, VISIBLE);

  return (
    <section className='work-history' id='experience'>
      <Container>
        <div className='history-head reveal'>
          <span className='section-eyebrow'>Where I've been</span>
          <h2 className='section-title'>The longer record.</h2>
        </div>

        <ol className='history-list'>
          {shown.map((role, i) => (
            <li className='history-row reveal' key={i}>
              <div className='history-dates'>{role.dates}</div>
              <div className='history-main'>
                <h3 className='history-role'>
                  {role.title}
                  <span className='history-co'> · {role.company}</span>
                </h3>
                <p className='history-desc'>{role.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        {roles.length > VISIBLE && (
          <button
            className='history-toggle'
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
          >
            {expanded ? 'Show less' : 'Show full history'}
          </button>
        )}
      </Container>
    </section>
  );
};

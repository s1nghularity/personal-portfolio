import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/Timeline.css';

const roles = [
  {
    title: 'Project Specialist',
    company: 'Foundation for California Community Colleges',
    dates: "Apr '24 - Present",
    desc: 'First responder for a fleet of ~40 client WordPress sites: keep them updated and running (ManageWP/Cloudways), triage and fix front-line issues, route deep engineering to devs, and manage the projects, budgets, and vendors around the work.',
  },
  {
    title: 'Full Stack Web Developer',
    company: 'S1nghularity · Freelance',
    dates: "Jan '23 - Present",
    desc: 'Refreshing business sites with modern design and UX. Built and shipped beechler.com and privateaffairband.com, start to finish.',
  },
  {
    title: 'Social Media Manager',
    company: 'Boomgen Studios',
    dates: "Jan '21 - Dec '22",
    desc: 'Promoted CBS comedy, coordinated book promotion, and ran the social accounts.',
  },
  {
    title: 'Social Media Manager',
    company: 'Barrel Bag',
    dates: "Oct '21 - May '22",
    desc: 'Built and ran the monthly newsletter and social content.',
  },
  {
    title: 'Communications Specialist',
    company: 'Starfish Accelerator Foundation',
    dates: "Oct '19 - Dec '22",
    desc: 'Brand and identity, social, and artist/activist community engagement on the founding team.',
  },
  {
    title: 'Creative Copywriter',
    company: 'Design Spinners',
    dates: "Jan '19 - Jun '22",
    desc: 'Content and copywriting, social consulting, and marketing strategy.',
  },
  {
    title: 'Communications Specialist',
    company: 'Whitaker Peace & Development Initiative',
    dates: "Aug '16 - Jan '19",
    desc: 'Internal communications and content, program highlight videos, design and copy, and digital marketing.',
  },
  {
    title: 'Catering Staff',
    company: '3CF Staffing',
    dates: "Jun '15 - Jun '16",
    desc: 'Barback and server at the Hollywood Bowl, Crypto.com Arena, and more.',
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
    title: 'Student Reporter',
    company: 'San Francisco Business Times',
    dates: "Jan '13 - Jun '13",
    desc: 'Reported business features as an editorial intern.',
  },
  {
    title: 'English Output Editor',
    company: 'New Delhi Television (NDTV 24x7)',
    dates: "Mar '08 - May '10",
    desc: 'Newsroom operations, major-event coverage, and content editing. Rapid advancement through the recession.',
  },
];

const WorkTimeline = () => {
  return (
    <section className='work-history' id='experience'>
      <Container>
        <div className='sec-head reveal'>
          <span className='eyebrow'>Where I've been</span>
          <h2 className='section-title'>How I got here.</h2>
        </div>

        <div className='jh-list'>
          {roles.map((role, i) => (
            <article className='job reveal' key={i}>
              <div className='job-dates'>{role.dates}</div>
              <div className='job-main'>
                <h3 className='job-title'>{role.title}</h3>
                <div className='job-co'>{role.company}</div>
                <p className='job-desc'>{role.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WorkTimeline;

import React from 'react';
import { Timeline as MuiTimeline } from '@mui/lab';
import { Container, Typography, Box } from '@mui/material';
import WorkTimelineItem from '../components/TimelineItem.js';

const workExperiences = [
  {
    title: 'Project Specialist',
    location: 'Foundation for California Community Colleges',
    href: 'https://foundationccc.org/',
    description: ['Leveraging tech to promote equity and access', 'Supporting the statewide community college system', 'Platform work and reporting'],
    dates: 'Apr \'24 - Present',
  },

  {
    title: 'Full Stack Web Developer',
    location: 'S1nghularity (Freelance)',
    href: 'https://github.com/s1nghularity/',
    description: ['Refreshing business sites with modern design and UX', 'Built and shipped beechler.com and privateaffairband.com', 'Maintains a 40+ WordPress fleet'],
    dates: 'Jan \'23 - Present',
  },

  {
    title: 'Social Media Manager',
    location: 'Boomgen Studios',
    href: 'https://www.boomgenstudios.com/',
    description: ['Promoted CBS comedy', 'Coordinated book promotion', 'Managed social media accounts'],
    dates: 'Jan \'21 - Dec \'22',
  },

  {
    title: 'Communications Specialist',
    location: 'Starfish Accelerator Foundation',
    href: 'https://starfishaccelerator.org/',
    description: ['Brand/identity creation', 'Social media', 'Founding team', 'Artist/Activist community engagement', 'Non-profit admin'],
    dates: 'Oct \'19 - Dec \'22',
  },

  {
    title: 'Copywriter',
    location: 'Design Spinners',
    href: 'https://designspinners.com/',
    description: ['Content creation', 'Social media consulting', 'Copywriting', 'Marketing strategy'],
    dates: 'Jan \'19 - Jun \'22',
  },

  {
    title: 'Communications Specialist',
    location: 'Whitaker Peace & Development Initiative',
    href: 'https://www.wpdi.org/',
    description: ['Internal communications and content', 'Program highlight videos', 'Design and copy', 'Digital marketing'],
    dates: 'Aug \'16 - Jan \'19',
  },
  {
    "title": "Catering Staff",
    "location": "3CF Staffing",
    "href": "https://www.3cfstaffing.com/",
    "description": [
      "Barback and server",
      "Event setup and breakdown",
      "Kitchen prep and cleanup",
      "Hollywood Bowl, Staples Center, and more",
    ],
    "dates": "2015 - 2016"
  },
  {
    "title": "Internal Communications Specialist",
    "location": "PayPal/Security Industry Specialists",
    "href": "https://www.paypal.com/",
    "description": [
      "Security briefing creation",
      "Real-time threat tracking",
      "Emergency response",
      "Cross-departmental communication",

    ],
    "dates": "2013 - 2014"
  },
  {
    "title": "English Output Editor",
    "location": "New Delhi Television 24x7",
    "href": "https://www.ndtv.com/",
    "description": [
      "Rapid advancement",
      "Newsroom operations",
      "Recession survival",
      "Major event coverage",
      "Content editing"
    ],
    "dates": "2008 - 2012"
  }
  

];

const WorkTimeline = () => {
  return (
    <Container
      maxWidth='none'
      sx={{
        backgroundImage: 'linear-gradient(to bottom, #246a45, #448a5d, #64ac76, #86ce8f, #a9f2a9)',
        color: '#A9F2A9',
        padding: '4rem 0',
      }}
    >
      <Typography variant="h4" textAlign="center">How I got here.</Typography>

      <Box
        sx={{
          width: '100%',
          maxWidth: '800px',
          margin: '0 auto',
 
        }}
      >
      <MuiTimeline position='alternate'>
        {workExperiences.map((experience, index) => (
          <WorkTimelineItem experience={experience} index={index} key={index} />
        ))}
      </MuiTimeline>
      </Box>
    </Container>
  );
};

export default WorkTimeline;

import React from 'react';
import { Timeline as MuiTimeline } from '@mui/lab';
import { Container, Typography, Box } from '@mui/material';
import WorkTimelineItem from '../components/TimelineItem.js';

const workExperiences = [
  {
    title: 'Social Media Manager',
    location: 'Boomgen Studios',
    href: 'https://www.boomgenstudios.com/',
    description: ['Promoted CBS comedy', 'Coordinated book promotion', 'Managed social media accounts'],
    dates: 'March \'21 - Jan \'23',
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
    title: 'Executive Assistant',
    location: 'Whitaker Peace & Development Initiative',
    href: 'https://www.wpdi.org/',
    description: ['Non-profit admin', 'Social media manager', 'Content designer', 'Payroll facilitator'],
    dates: 'Jun \'16 - Jan \'19',
  },
  {
    "title": "Technical Content Editor",
    "location": "SQA Services",
    "href": "https://www.sqaservices.com/",
    "description": [
      "Audit report review",
      "Localization editing",
      "Client engagement",
      "Technical content review",
      "Narrative tone maintenance"

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
      <Typography variant="h4" textAlign="center">Recent Work Experience
      
      <Typography textAlign="center" className='experience-tag'><i>Life before programming</i></Typography>
      </Typography>

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

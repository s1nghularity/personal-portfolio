import React, { useEffect, useRef, useState } from 'react';
import {
  TimelineItem as MuiTimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from '@mui/lab';
import { Typography, Card, CardContent } from '@mui/material';

import 'aos/dist/aos.css';
import AOS from 'aos';
import '../styles/Timeline.css';

const useVisible = (ref) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref]);

  return isVisible;
};

export default function WorkTimelineItem({ experience, index }) {
  const ref = useRef(null);
  const isVisible = useVisible(ref);
  AOS.init();
  const isMobile = window.innerWidth <= 768;
  
  return (
    
    <MuiTimelineItem ref={ref}>
      <TimelineSeparator>
        <TimelineDot
          variant='outlined'
          sx={{
            borderColor: isVisible ? '#A9F2A9' : 'white',
            width: '24px',
            height: '24px',
            borderWidth: '2px',
            backgroundColor: isVisible ? '#A9F2A9' : 'transparent',
          }}
          className={isVisible ? 'timeline-dot-visible' : ''}
          data-aos='zoom-in'
          data-aos-anchor-placement='top-bottom'
        />
        <TimelineConnector
          sx={{
            backgroundColor: isVisible ? '#A9F2A9' : 'white',
            borderColor: isVisible ? '#A9F2A9' : 'white',
            width: '1px',
          }}
          className={isVisible ? 'timeline-connector-visible' : ''}
        />
      </TimelineSeparator>
      <TimelineContent>
        <Card
          sx={{
            backgroundColor: 'white',
            borderColor: '#66BB6A',
            borderWidth: 2,
            borderStyle: 'solid',
            borderRadius: '12px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: 'calc(100% - 32px)',
            color: '#246a45',

          }}
          data-aos={isMobile ? 'fade-left' : (index % 2 === 0 ? 'fade-left' : 'fade-right')}
          data-aos-anchor-placement='top-bottom'
        >
          <CardContent
            sx={{
              padding: {
                xs: '0.5rem .25rem 0.5rem 0rem',
                sm: '.5rem',
              },
              '.timeline-card-title': {
                fontFamily: 'Phudu',
                fontWeight: 700,
              },

            }}
          >
            <Typography variant='h6' className='timeline-card-title'>
              {experience.title}
            </Typography>
            <Typography variant='subtitle' className='timeline-card-subtitle'>
              <a
                href={experience.href}
                target='_blank'
                rel='noopener noreferrer'
              >
                {experience.location}
              </a>
            </Typography>
            <Typography className='timeline-card-text'>
              {experience.description.join(', ')}
            </Typography>
            <Typography variant='caption' className='timeline-card-caption'>
              <b>{experience.dates}</b>
            </Typography>
          </CardContent>
        </Card>
      </TimelineContent>
    </MuiTimelineItem>
  );
}

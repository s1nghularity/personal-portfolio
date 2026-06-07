import React from 'react';
import { Container } from 'react-bootstrap';

const stats = [
  { figure: '40+', label: 'WordPress sites maintained day to day' },
  { figure: '100+', label: 'organizations served by one platform' },
  { figure: '18+', label: 'Jira boards standardized & reportable' },
  { figure: '0', label: 'downtime on the PHP 8.3 upgrade' },
];

export const Impact = () => {
  return (
    <section className='impact'>
      <Container>
        <ul className='impact-grid'>
          {stats.map((stat, index) => (
            <li className='impact-item' key={index}>
              <span className='impact-figure'>{stat.figure}</span>
              <span className='impact-label'>{stat.label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

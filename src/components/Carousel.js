import React from 'react';
import '../styles/Carousel.css';

const stack = [
  'WordPress',
  'WooCommerce',
  'PHP',
  'JavaScript',
  'Advanced Custom Fields',
  'GA4',
  'Looker Studio',
  'Jira',
  'Git',
  'PCI-DSS',
  'GeoJSON',
  'CSS',
];

export default function Carousel() {
  // duplicate the list so the marquee loops seamlessly
  const items = [...stack, ...stack];

  return (
    <div className='stack-marquee' aria-label='Tools and technologies I work with'>
      <ul className='stack-track'>
        {items.map((item, index) => (
          <li className='stack-item' key={index} aria-hidden={index >= stack.length}>
            {item}
            <span className='stack-dot'>·</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

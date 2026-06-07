import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/Expertise.css';

const capabilities = [
  {
    title: 'Platform ownership',
    description:
      'Run a 40+ site WordPress portfolio end to end: configuration, releases, security, performance, and ongoing maintenance across multiple hosting environments.',
  },
  {
    title: 'Delivery & project management',
    description:
      'Scope projects, author statements of work and budgets, run sprints across many concurrent projects, and coordinate internal teams alongside external and offshore developers. Certified Scrum Product Owner (CSPO).',
  },
  {
    title: 'Technical execution',
    description:
      'Hands-on with WordPress, PHP, and JavaScript when it counts: custom plugins, third-party integrations, troubleshooting, and performance work.',
  },
  {
    title: 'E-commerce & compliance',
    description:
      'Manage a WooCommerce platform: subscriptions, payments, SSO/identity, and an ongoing PCI-DSS compliance program.',
  },
  {
    title: 'Data & reporting',
    description:
      'GA4 and Looker Studio analytics; built interactive mapping and data-visualization tools.',
  },
];

const skillGroups = [
  {
    label: 'Platform & CMS',
    skills: [
      'WordPress (multi-site)',
      'WooCommerce',
      'Advanced Custom Fields',
      'Custom post types & taxonomies',
      'Theme & plugin development',
    ],
  },
  {
    label: 'Languages & build',
    skills: ['PHP', 'JavaScript', 'HTML', 'CSS', 'Git'],
  },
  {
    label: 'Delivery & PM',
    skills: [
      'Agile / Scrum (CSPO)',
      'Jira',
      'Asana',
      'Confluence',
      'SOW & budget authoring',
      'Vendor management',
    ],
  },
  {
    label: 'Analytics & data',
    skills: ['GA4', 'Looker Studio', 'GeoJSON / interactive mapping'],
  },
  {
    label: 'Ops & compliance',
    skills: [
      'PCI-DSS coordination',
      'WCAG accessibility',
      'Release management',
      'Hosting / DevOps fundamentals',
    ],
  },
];

const selectedWork = [
  {
    title: 'Multi-site platform ownership',
    description:
      'Own a 40+ site WordPress portfolio: releases, security, performance, and maintenance across multiple managed-hosting environments — keeping the whole estate stable and reportable.',
    tags: ['WordPress', 'Releases', 'Security'],
  },
  {
    title: 'Procurement web application',
    description:
      'Took over and re-architected a complex multi-vendor procurement application serving 100+ organizations, from requirements through production — designed to cut manual processing time substantially.',
    tags: ['Re-architecture', 'PHP', 'Vendors'],
  },
  {
    title: 'Project-tracking overhaul',
    description:
      'Restructured an 18+ board Jira estate into a standardized work-type taxonomy, reclassifying 70+ active issues and enabling cross-portfolio reporting by work type, site, and owner for the first time.',
    tags: ['Jira', 'Reporting', 'Process'],
  },
  {
    title: 'Zero-downtime platform upgrade',
    description:
      'Led a PHP 8.3 runtime upgrade across staging and production with no downtime, including compatibility remediation across critical workflows.',
    tags: ['PHP 8.3', 'Release mgmt'],
  },
  {
    title: 'PCI-DSS hardening',
    description:
      'Led security hardening on an e-commerce platform — security headers, transport enforcement, and credential handling — to pass external PCI vulnerability scans cleanly.',
    tags: ['PCI-DSS', 'WooCommerce', 'Security'],
  },
  {
    title: 'Interactive mapping tool',
    description:
      'Replaced a vendor-locked GIS tool with a client-editable WordPress mapping system (maps API + GeoJSON), removing a specialized-platform dependency and letting non-technical staff update content directly.',
    tags: ['Maps API', 'GeoJSON', 'WordPress'],
  },
];

export const Expertise = () => {
  return (
    <section className='expertise' id='expertise'>
      {/* WHAT I DO — magazine-style numbered index */}
      <Container>
        <span className='kicker'>What I do</span>
        <h2 className='section-title'>
          Five things I'm on the hook for.
        </h2>

        <ol className='xp-index'>
          {capabilities.map((item, index) => (
            <li className='xp-index-row' key={index}>
              <span className='xp-num'>
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className='xp-index-title'>{item.title}</h3>
              <p className='xp-index-text'>{item.description}</p>
            </li>
          ))}
        </ol>
      </Container>

      {/* SKILLS */}
      <Container>
        <div className='xp-skills'>
          <span className='kicker'>Skills</span>
          {skillGroups.map((group, index) => (
            <div className='xp-skill-group' key={index}>
              <h4 className='xp-skill-label'>{group.label}</h4>
              <ul className='xp-chip-list'>
                {group.skills.map((skill, i) => (
                  <li className='xp-chip' key={i}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      {/* SELECTED WORK — case-study index */}
      <div className='xp-work' id='work'>
        <Container>
          <span className='kicker'>Selected work</span>
          <h2 className='section-title'>
            What that looks like in production.
          </h2>

          <div className='xp-work-list'>
            {selectedWork.map((item, index) => (
              <article className='xp-work-row' key={index}>
                <span className='xp-work-num'>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className='xp-work-body'>
                  <h3 className='xp-work-title'>{item.title}</h3>
                  <p className='xp-work-text'>{item.description}</p>
                  <ul className='xp-tags'>
                    {item.tags.map((tag, i) => (
                      <li className='xp-tag' key={i}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};

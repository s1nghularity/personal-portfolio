import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/Expertise.css';

const capabilities = [
  {
    title: 'End-to-end builds',
    description:
      'I take a brand from a blank page to a live site: strategy, words, design, photography, and the code.',
  },
  {
    title: 'Fleet maintenance & triage',
    description:
      'First responder for a 40+ site WordPress fleet: keep them updated and running on ManageWP and Cloudways, triage and fix front-line issues, and route the deep engineering to the devs who live in it.',
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
    title: 'Multi-site fleet, kept running',
    description:
      'First responder for a 40+ site WordPress fleet across multiple managed-hosting environments: updates, uptime, and front-line triage, with the deep engineering routed to the devs.',
    tags: ['WordPress', 'ManageWP', 'Triage'],
  },
  {
    title: 'Procurement web application',
    description:
      'Took over and re-architected a complex multi-vendor procurement application serving 100+ organizations, from requirements through production, designed to cut manual processing time substantially.',
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
      'Led security hardening on an e-commerce platform: security headers, transport enforcement, and credential handling, to pass external PCI vulnerability scans cleanly.',
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
      {/* WHAT I DO */}
      <Container>
        <div className='reveal'>
          <span className='kicker'>What I do</span>
          <h2 className='section-title'>Six things I'm on the hook for.</h2>
        </div>

        <ol className='xp-index'>
          {capabilities.map((item, index) => (
            <li className='xp-index-row reveal' key={index}>
              <span className='xp-num'>
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className='xp-index-body'>
                <h3 className='xp-index-title'>{item.title}</h3>
                <p className='xp-index-text'>{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>

      {/* SKILLS */}
      <Container>
        <div className='xp-skills'>
          <span className='kicker'>Skills</span>
          {skillGroups.map((group, index) => (
            <div className='xp-skill-group reveal' key={index}>
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

      {/* SELECTED WORK */}
      <div className='xp-work' id='work'>
        <Container>
          <div className='reveal'>
            <span className='kicker'>Selected work</span>
            <h2 className='section-title'>What that looks like in production.</h2>
          </div>

          <div className='xp-work-list'>
            {selectedWork.map((item, index) => (
              <article className='xp-work-row reveal' key={index}>
                <span className='xp-work-num'>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className='xp-work-body'>
                  <h3 className='xp-work-title'>{item.title}</h3>
                  <p className='xp-work-text'>{item.description}</p>
                </div>
                <ul className='xp-tags'>
                  {item.tags.map((tag, i) => (
                    <li className='xp-tag' key={i}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};

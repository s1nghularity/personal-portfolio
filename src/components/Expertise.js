import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
  },
  {
    title: 'Procurement web application',
    description:
      'Took over and re-architected a complex multi-vendor procurement application serving 100+ organizations, from requirements through production — designed to cut manual processing time substantially.',
  },
  {
    title: 'Project-tracking overhaul',
    description:
      'Restructured an 18+ board Jira estate into a standardized work-type taxonomy, reclassifying 70+ active issues and enabling cross-portfolio reporting by work type, site, and owner for the first time.',
  },
  {
    title: 'Zero-downtime platform upgrade',
    description:
      'Led a PHP 8.3 runtime upgrade across staging and production with no downtime, including compatibility remediation across critical workflows.',
  },
  {
    title: 'PCI-DSS hardening',
    description:
      'Led security hardening on an e-commerce platform — security headers, transport enforcement, and credential handling — to pass external PCI vulnerability scans cleanly.',
  },
  {
    title: 'Interactive mapping tool',
    description:
      'Replaced a vendor-locked GIS tool with a client-editable WordPress mapping system (maps API + GeoJSON), removing a specialized-platform dependency and letting non-technical staff update content directly.',
  },
];

export const Expertise = () => {
  return (
    <section className="expertise" id="expertise">
      <Container>
        <h2 className="xp-heading">What I do</h2>
        <Row className="justify-content-center">
          {capabilities.map((item, index) => (
            <Col xs={12} md={6} lg={4} key={index} className="xp-col">
              <div className="xp-card">
                <h3 className="xp-card-title">{item.title}</h3>
                <p className="xp-card-text">{item.description}</p>
              </div>
            </Col>
          ))}
        </Row>

        <h2 className="xp-heading xp-heading-spaced">Skills</h2>
        <div className="xp-skills">
          {skillGroups.map((group, index) => (
            <div className="xp-skill-group" key={index}>
              <h4 className="xp-skill-label">{group.label}</h4>
              <ul className="xp-chip-list">
                {group.skills.map((skill, i) => (
                  <li className="xp-chip" key={i}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 className="xp-heading xp-heading-spaced">Selected work</h2>
        <Row className="justify-content-center">
          {selectedWork.map((item, index) => (
            <Col xs={12} md={6} lg={4} key={index} className="xp-col">
              <div className="xp-card">
                <h3 className="xp-card-title">{item.title}</h3>
                <p className="xp-card-text">{item.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

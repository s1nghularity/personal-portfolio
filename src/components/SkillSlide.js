// SkillSlide.js
import React from 'react';
import { Card, Image, Row, Col } from 'react-bootstrap';

export default function SkillSlide({ title, companyLogos, contributions, tools }) {
    return (
      <Card className="skill-slide">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <div className="company-logos">
            {companyLogos.map((logo, index) => (
              <Image key={index} src={logo} alt="Company Logo" />
            ))}
          </div>
          <ul className="contributions">
            {contributions.map((contribution, index) => (
              <li key={index}>{contribution}</li>
            ))}
          </ul>
          <Row>
            <Col>
              <h5>Tools</h5>
              <div className="tool-icons">
                {tools.map((icon, index) => (
                  <Image key={index} src={icon} alt="Tool Icon" />
                ))}
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
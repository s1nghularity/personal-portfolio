import { useState } from 'react';
import colorSharp from '../assets/img/color-sharp.png';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import { ProgressBar } from '../components/ProgressBar.js';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className='skill' id='skills'>
      <Container>
        <Row>
          <Col>
            <div className='skill-bx'>
              <h2>Skills</h2>
              <h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
                <br /> Lorem Ipsum has been the industry's standard dummy text.
              </h3>
              <Carousel
                responsive={responsive}
                infinite={true}
                className='skill-slider'
              >

                  <ProgressBar
                    skillName='Full-Stack Web Development'
                    startValue={0}
                    endValue={50}
                  />

                  <ProgressBar
                    skillName='Corporate Communications'
                    startValue={0}
                    endValue={90}
                  />

                  <ProgressBar
                    skillName='Social Media Marketing'
                    startValue={0}
                    endValue={75}
                  />

                  <ProgressBar
                    skillName='Journalistic Storytelling'
                    startValue={0}
                    endValue={90}
                  />

                  <ProgressBar
                    skillName='Non-Profit Management'
                    startValue={0}
                    endValue={80}
                  />
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

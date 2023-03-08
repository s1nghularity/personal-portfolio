import 'react-multi-carousel/lib/styles.css';
import { Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import { ProgressBar } from '../components/ProgressBar.js';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
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
    <Row className="justify-content-center">
      <div className='skill-bx'>
        <h2>Skills</h2>
        <p>
          My career pivot towards full-stack software development<br/> has been supercharged by over a decade and a half of experience: <br/><br/>
          Journalism | Corporate Communications |<br/> Non-Profit Development & Management | Social Media Marketing
        </p>
        <br/>

              <Carousel
                partialVisbile ={false}
                itemClass="skill-bx"
                responsive={responsive}
                infinite={true}
                containerClass='skill-slider'
                z-index='1'
              >
                <div>
                  <ProgressBar
                    skillName='Full-Stack Web Development'
                    startValue={0}
                    endValue={50}
                  /></div>
                  
                  <div>
                  <ProgressBar
                    skillName='Corporate Comms/Admin'
                    startValue={0}
                    endValue={90}
                  /></div>

                  <div>
                  <ProgressBar
                    skillName='Social Media Marketing'
                    startValue={0}
                    endValue={75}
                  /></div>

                  <div>
                  <ProgressBar
                    skillName='Journalism + Storytelling'
                    startValue={0}
                    endValue={90}
                  /></div>

                  <div>
                  <ProgressBar
                    skillName='Non-Profit Development & Management'
                    startValue={0}
                    endValue={80}
                  /></div>
                  
              </Carousel>
              <p>
                Assuming 10K hours reflects proficiency, the above percentages show time spent in each profession.
              </p> 
            </div>

        </Row>
      </Container>
    </section>
  );
};

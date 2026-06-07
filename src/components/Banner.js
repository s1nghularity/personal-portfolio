import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import avatar2 from '../assets/img/vs-avatar2.png';

export const Banner = () => {
  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col md={8} className='banner-copy'>
            <span className='kicker'>Vikram Singh</span>
            <h1>The whole website in one pair of hands.</h1>

            <button
              className='banner-cta'
              onClick={() =>
                document
                  .querySelector('#contact')
                  .scrollIntoView({ behavior: 'smooth' })
              }
            >
              Let's talk <ArrowRightCircle size={28} />
            </button>
          </Col>

          <Col md={4} className='banner-portrait'>
            <span className='available'>Open to new projects</span>
            <img src={avatar2} alt='Vikram Singh' />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

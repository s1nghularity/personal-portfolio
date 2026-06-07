import { Container } from 'react-bootstrap';
import avatar2 from '../assets/img/vs-avatar2.png';

export const Banner = () => {
  return (
    <section className='banner' id='home'>
      <Container>
        <div className='hero-main'>
          <h1 className='hero-title reveal'>
            The whole website in{' '}
            <span className='accent'>one pair of hands.</span>
          </h1>

          <div className='hero-side reveal'>
            <span className='badge'>
              <span className='dot' />
              Open to new projects
            </span>
            <div className='avatar'>
              <img src={avatar2} alt='Vikram Singh' />
            </div>
            <button
              className='banner-cta'
              onClick={() =>
                document
                  .querySelector('#contact')
                  .scrollIntoView({ behavior: 'smooth' })
              }
            >
              Let's talk →
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

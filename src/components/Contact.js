import { Container } from 'react-bootstrap';
import '../styles/Contact.css';

export const Contact = () => {
  return (
    <section className='contact' id='contact'>
      <Container>
        <div className='contact-inner reveal'>
          <div className='contact-head'>
            <span className='section-eyebrow'>Get in touch</span>
            <p className='contact-line'>
              Open to new projects. Partial to the ones that still have to work
              on Monday.
            </p>
          </div>

          <div className='contact-actions'>
            <a className='contact-mail' href='mailto:vikpremsingh@pm.me'>
              vikpremsingh@pm.me
            </a>
            <p className='contact-socials'>
              GitHub —{' '}
              <a
                href='https://github.com/s1nghularity'
                target='_blank'
                rel='noreferrer'
              >
                github.com/s1nghularity
              </a>
              <br />
              LinkedIn —{' '}
              <a
                href='https://www.linkedin.com/in/vikramsinghca/'
                target='_blank'
                rel='noreferrer'
              >
                linkedin.com/in/vikramsinghca
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

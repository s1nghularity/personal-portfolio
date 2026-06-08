import { Container } from 'react-bootstrap';
import '../styles/Contact.css';

export const Contact = () => {
  return (
    <section className='contact' id='contact'>
      <Container>
        <div className='contact-inner reveal'>
          <span className='section-eyebrow'>Get in touch</span>
          <p className='contact-line'>
            Open to new projects. Partial to the ones that still have to work on
            Monday.
          </p>
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
            <span className='contact-sep' aria-hidden='true'> · </span>
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
      </Container>
    </section>
  );
};

import { Container } from 'react-bootstrap';
import '../styles/Contact.css';

export const Contact = () => {
  return (
    <section className='contact' id='contact'>
      <Container>
        <div className='contact-inner reveal'>
          <p className='contact-line'>
            Open to new projects. Partial to the ones that still have to work on
            Monday.
          </p>
          <a className='contact-mail' href='mailto:vikpremsingh@pm.me'>
            vikpremsingh@pm.me
          </a>
          <p className='contact-socials'>
            <a
              href='https://github.com/s1nghularity/'
              target='_blank'
              rel='noreferrer'
            >
              GitHub
            </a>
            <span aria-hidden='true'> · </span>
            <a
              href='https://www.linkedin.com/in/vikramsinghca/'
              target='_blank'
              rel='noreferrer'
            >
              LinkedIn
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
};

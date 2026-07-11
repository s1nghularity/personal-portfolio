import { Container } from 'react-bootstrap';

export const Banner = () => {
  return (
    <section className='banner' id='home'>
      <Container>
        <div className='hero-copy'>
          <p className='hero-name'>Vikram Singh</p>
          <h1 className='hero-title'>A digital strategist who builds.</h1>
          <p className='hero-subhead'>
            I take a company's web presence end to end — strategy, words, design,
            and build — then stay on to keep it running. A decade in newsrooms
            and communications shaped how I do it: clear, fast, and built to
            last.
          </p>
          <p className='hero-availability'>
            Currently with the Foundation for California Community Colleges and
            Starfish. Open to more.
          </p>
          <div className='hero-ctas'>
            <a className='btn-accent' href='#work'>
              See the work
            </a>
            <a className='btn-outline' href='#contact'>
              Get in touch
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

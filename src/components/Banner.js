import { Container } from 'react-bootstrap';
import SplitText from './SplitText';

export const Banner = () => {
  return (
    <section className='banner' id='home'>
      <Container>
        <div className='hero-copy'>
          <p className='hero-name'>Vikram Singh</p>
          <SplitText
            tag='h1'
            className='hero-title'
            text='A digital strategist who builds.'
            splitType='chars'
            delay={22}
            duration={1}
            ease='power3.out'
            from={{ opacity: 0, y: 44 }}
            to={{ opacity: 1, y: 0 }}
            textAlign='left'
          />
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

import { Container } from 'react-bootstrap';

export const Banner = () => {
  return (
    <section className='banner' id='home'>
      <Container>
        <div className='hero-copy'>
          <p className='hero-name'>Vikram Singh</p>
          <h1 className='hero-title'>A digital strategist who builds.</h1>
          <p className='hero-subhead'>
            I grew up in the dot-com boom, the generation that crossed from no
            internet to all of it — and I've been closing the gap between people
            and their tech ever since. End to end: strategy, words, design,
            build, then the upkeep after launch.
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

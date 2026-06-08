import { Container } from 'react-bootstrap';

export const Banner = () => {
  return (
    <section className='banner' id='home'>
      <Container>
        <div className='hero-copy'>
          <h1 className='hero-title'>
            Vikram Singh — websites, with the people who'll live in them.
          </h1>
          <p className='hero-lede'>
            Ten years in newsrooms and comms taught me to ask the dumb question
            early. The last few have been spent shipping small websites with the
            teams that have to keep them running.
          </p>
        </div>
      </Container>
    </section>
  );
};

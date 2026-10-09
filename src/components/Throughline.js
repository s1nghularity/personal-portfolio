import { Container } from 'react-bootstrap';
import '../styles/Throughline.css';

export const Throughline = () => {
  return (
    <section className='throughline' id='about'>
      <Container>
        <div className='throughline-inner reveal'>
          <div className='throughline-head'>
            <h2 className='section-title'>About</h2>
          </div>

          <div className='throughline-body'>
            <p>
              I've spent my career in the gap between people and the technology
              that's supposed to serve them. It started in newsrooms — the output
              desk at NDTV in New Delhi, then Bay Area news — and turned into a
              decade of communications work: writing for executives, building
              brands for nonprofits, promoting a CBS comedy. Somewhere along the
              way I started building the websites myself, because someone had to.
            </p>
            <p>
              Today I look after a fleet of program websites for the Foundation
              for California Community Colleges, and I'm Global Digital
              Strategist for the Starfish Accelerator Foundation. I also write
              sketch comedy, which turns out to be useful training. A joke and a
              homepage fail the same way: too much setup, not enough clarity.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

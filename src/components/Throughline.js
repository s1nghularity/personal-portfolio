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
              Strategist for the Starfish Accelerator Foundation. In between, I
              take on a few client projects a year — small businesses that need
              a site that works and someone who'll still answer the phone after
              it launches.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

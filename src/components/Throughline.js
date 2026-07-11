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
              Vikram Singh is a digital strategist and builder. He takes a
              company's web presence end to end — strategy, words, design, and
              build — then stays on to keep it running. He does this today for
              the Foundation for California Community Colleges and as Starfish's
              Global Digital Strategist, alongside select client work through his
              own practice.
            </p>
            <p>
              His background is in communications and journalism: a decade
              writing for executives, building brand identity for nonprofits, and
              running campaigns before moving into web development. That newsroom
              training — clarity, speed, and getting to the point — is what he
              brings to every build, from the first strategy call to the upkeep
              long after launch.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

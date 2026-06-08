import { Container } from 'react-bootstrap';
import '../styles/Throughline.css';

export const Throughline = () => {
  return (
    <section className='throughline' id='throughline'>
      <Container>
        <div className='throughline-inner reveal'>
          <h2 className='throughline-title'>How I got here</h2>
          <p className='throughline-body'>
            I started in a Delhi newsroom and spent a decade in comms — writing
            for executives, building brand identity for small nonprofits, running
            social for a CBS show during the fall of Kabul. I came to web
            development the slow way, by needing the sites I was writing about to
            actually work. Now I build them and stick around for the boring parts.
          </p>
          <p className='throughline-body'>
            These days that means small websites: the design and the words, then
            the quieter work of keeping them online and current. It's the same
            instinct as the newsroom — make the thing clear, make it work, and
            stick around for what happens after launch.
          </p>
        </div>
      </Container>
    </section>
  );
};

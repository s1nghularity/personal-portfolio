import { Container } from 'react-bootstrap';
import '../styles/Throughline.css';

export const Throughline = () => {
  return (
    <section className='throughline' id='about'>
      <Container>
        <div className='throughline-inner reveal'>
          <div className='throughline-head'>
            <span className='section-eyebrow'>How I got here</span>
            <h2 className='section-title'>From the newsroom to the build.</h2>
          </div>

          <div className='throughline-body'>
            <p>
              I came up through newsrooms and comms — a Delhi TV desk, then a
              decade writing for executives, building brand identity for
              nonprofits, and running social for a CBS comedy. Learning to build
              the sites myself was a short step: I'm from Saratoga, grew up with
              half my friends' parents working in tech, and was always the kid
              tinkering on whatever software was around.
            </p>
            <p>
              These days that means small websites and the digital strategy
              around them: the design and the words, then the quieter work of
              keeping them online and current. Same instinct as the newsroom —
              make the thing clear, make it work, and stick around for what
              happens after launch.
            </p>
            <p>
              Off the clock: new dad as of April 2026, which rearranged
              everything. Californian down to the bone — L.A., the Bay, SF,
              family scattered across all of it, and a backyard I'm in no hurry
              to leave. I'd tell you I read a ton and play a lot of games, but
              I'd be lying — I love both more than I do them. What I actually do:
              stand-up, sci-fi, good drama, anything with real storytelling, and
              turning up for the arts.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

import { Container } from 'react-bootstrap';
import '../styles/SelectedWork.css';
import beechler from '../assets/img/proj-img/capstone/beechler.png';

export const SelectedWork = () => {
  return (
    <section className='selected-work' id='work'>
      <Container>
        <div className='work-inner'>
          <h2 className='work-title reveal'>A couple of recent ones</h2>

          <article className='work-block reveal'>
            <div className='work-media'>
              <img src={beechler} alt='The Beechler website' />
            </div>
            <h3 className='work-name'>Beechler</h3>
            <p className='work-body'>
              A High Desert business needed a site that did its real job: get the
              phone to ring. I worked with the owner to figure out what it had to
              say, shot the product photography, designed it, and built it. Still
              keep it running. (React, with devs who knew the back end better than
              I did.)
            </p>
            <a
              className='work-link'
              href='https://beechler.com/'
              target='_blank'
              rel='noreferrer'
            >
              beechler.com
            </a>
          </article>

          <article className='work-block reveal'>
            <h3 className='work-name'>Private Affair Band</h3>
            <p className='work-body'>
              A working R&amp;B and funk band with years of packed dance floors
              and no real way to show it online. I built the booking site, wrote
              the copy, and sat in on rehearsal to figure out what made them them.
              Now it does the work of a manager, quietly.
            </p>
            <a
              className='work-link'
              href='https://privateaffairband.com/'
              target='_blank'
              rel='noreferrer'
            >
              privateaffairband.com
            </a>
          </article>
        </div>
      </Container>
    </section>
  );
};

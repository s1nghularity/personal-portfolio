import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import avatar2 from '../assets/img/vs-avatar2.png';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ['scope the work.', 'direct the build.', 'keep it running.'];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 1500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum((loopNum) => loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col md={8} className='banner-copy'>
            <span className='kicker'>Vikram Singh</span>
            <h1>
              Technical Project &amp; <br className='d-none d-md-block' />
              Product Owner
            </h1>
            <p className='banner-role'>
              I <span className='typed'>{text}</span>
              <span className='cursor'>
                <b>|</b>
              </span>
            </p>
            <p className='banner-tag'>
              I own web platforms end to end — scoping the work, directing the
              build, and making sure it ships and keeps running.
            </p>

            <button
              className='banner-cta'
              onClick={() =>
                document
                  .querySelector('#contact')
                  .scrollIntoView({ behavior: 'smooth' })
              }
            >
              Let's talk <ArrowRightCircle size={28} />
            </button>
          </Col>

          <Col md={4} className='banner-portrait'>
            <span className='available'>Open to new projects</span>
            <img src={avatar2} alt='Vikram Singh' />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import avatar2 from '../assets/img/vs-avatar2.png';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ['Web Developer', 'Storyteller', 'Full-Stack N00b'];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [period, setPeriod] = useState(1500);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    // update cursor visibility based on text length and whether text is being typed or deleted
    let cursorVisible = !isDeleting && text.length < fullText.length;
    if (text.length === 0) {
      cursorVisible = true;
    }
    document.querySelector('.cursor').style.visibility = cursorVisible
      ? 'visible'
      : 'hidden';

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
        <Col>
          <Row>
            <h1 style={{ height: '100px' }}>
              <span> {text} </span>
              <span
                className='cursor'
                style={{ visibility: isDeleting ? 'visible' : 'hidden' }}
              >
                <b>|</b>
              </span>
            </h1>

            <p>
              I build and code pretty useful things, <br /> and love to tell
              stories.
            </p>

            <span>
              <img src={avatar2} alt='banner character' />
            </span>

            <button
              onClick={() =>
                document
                  .querySelector('#contact')
                  .scrollIntoView({ behavior: 'smooth' })
              }
            >
              Let's Connect <ArrowRightCircle size={35} />
            </button>
          </Row>
        </Col>
      </Container>
    </section>
  );
};

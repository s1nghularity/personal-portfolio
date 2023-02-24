import { useState, useEffect } from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import dude from '../assets/img/dude.png'
import singhular from '../assets/img/singhular.png'


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ['Web Developer', 'Storyteller', 'Full-Stack N00b'];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300-Math.random()*100)
  const [period, setPeriod] = useState(2000)

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta)

    return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      }

  }

  return (
    <section className="banner" >
      <Container>
        <Col>
        <Row>
          <h1><span className="wrap"> {text}</span></h1>
          <p>
            Thanks for visiting my site! I am a Winter 2022 graduate of MIT's MERN coding bootcamp. Currently searching for a great company
          </p>
        </Row>
        
        <Row>
          <img src={singhular} size='25%' alt ="banner character"/>
        </Row>

        <Row>
        <button onClick={() => console.log('connect')}> 
          Let's Connect <ArrowRightCircle size={35}/>
        </button>
        </Row>
        </Col>
      </Container>

    </section>
  )
}


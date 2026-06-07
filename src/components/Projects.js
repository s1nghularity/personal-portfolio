import { Container, Row, Col } from "react-bootstrap";
import { FileCodeFill, BoxArrowUpRight } from "react-bootstrap-icons";
import { ProjectCard } from "./ProjectCard.js";
import projImg3 from "../assets/img/proj-img/medium/bus.png";
import projImg4 from "../assets/img/proj-img/medium/ndtv.png";
import projImg6 from "../assets/img/proj-img/capstone/beechler.png";

export const Projects = () => {

  // Where the hands-on part started: small builds from learning to code.
  const earlyBuilds = [
    {
      title: 'A Past Life',
      description: 'Maps my old commute through South Delhi to the NDTV newsroom with Mapbox. Looking back, it is the same story-on-a-map thing I still like making.',
      imgUrl: projImg4,
      codeLink: 'https://github.com/s1nghularity/personal-portfolio/blob/acd0638fbbf135aa2ea02ae99c7b5637c4ae6897/src/assets/projects/ndtv-route/README-ndtv.md',
      liveLink:'https://s1nghularity.github.io/ndtv-route/index.html',
    },
    {
      title: 'Bus Tracker',
      description: 'My first real go at APIs: live tracking north/southbound buses in the MIT/Harvard area.',
      imgUrl: projImg3,
      codeLink: 'https://github.com/s1nghularity/personal-portfolio/blob/acd0638fbbf135aa2ea02ae99c7b5637c4ae6897/src/assets/projects/bus-tracker/README-bus-tracker.md',
      liveLink:'https://s1nghularity.github.io/bus-tracker/index.html',
    },
  ];

  return (
    <section className ="project" id="projects">
      <Container>
        <Row>
          <Col>
            <span className="kicker">Featured work</span>
            <h2>Things I've built</h2>
            <p className="project-intro">The real builds first, then a couple of small ones from back when I was first learning to code.</p>
          </Col>
        </Row>

        {/* flagship build */}
        <article className="feature">
          <div className="feature-media">
            <img src={projImg6} alt="The Beechler website I designed and built" />
          </div>
          <div className="feature-body">
            <span className="feature-label">Real build</span>
            <h3 className="feature-title">Beechler</h3>
            <p className="feature-desc">A custom React site I designed and built from scratch. I shot the product photography too. Start to finish, solo.</p>
            <div className="feature-links">
              <a className="feature-link feature-link-primary" href="https://beechler.com/" target="_blank" rel="noreferrer">
                <BoxArrowUpRight /> Visit site
              </a>
              <a className="feature-link" href="https://github.com/s1nghularity/" target="_blank" rel="noreferrer">
                <FileCodeFill /> View code
              </a>
            </div>
          </div>
        </article>

        {/* second real build, no screenshot yet */}
        <p className="feature-also">
          Also shipped <a href="https://privateaffairband.com/" target="_blank" rel="noreferrer">privateaffairband.com</a>, a multipage site for the band, designed and built end to end.
        </p>

        {/* learning-era builds */}
        <h4 className="project-subhead">Where it started</h4>
        <Row>
          {earlyBuilds.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </Row>
      </Container>
    </section>
  )
}

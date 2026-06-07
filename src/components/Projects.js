import { Container, Row, Nav, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard.js";
import projImg3 from "../assets/img/proj-img/medium/bus.png";
import projImg4 from "../assets/img/proj-img/medium/ndtv.png";
import projImg6 from "../assets/img/proj-img/capstone/beechler.png";

export const Projects = () => {

  // Real builds, shipped end to end.
  // TODO: add Private Affair (privateaffairband.com) once a screenshot asset
  // is available, and confirm the Beechler live URL below.
  const realBuilds = [
    {
      title: 'Beechler',
      description: 'A custom React site I designed and built from scratch. I shot the product photography too. Start to finish, solo.',
      imgUrl: projImg6,
      codeLink: 'https://github.com/s1nghularity/',
      liveLink: 'https://beechler.com/',
    },
  ];

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
            <p>The real builds first, then a couple of small ones from back when I was first learning to code.</p>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Real builds</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Where it started</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          realBuilds.map((project, index) => {
                            return (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          earlyBuilds.map((project, index) => {
                            return (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
              </Tab.Content>

            </Tab.Container>
          </Col>
        </Row>
      </Container>

    </section>
  )
}

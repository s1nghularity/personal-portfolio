import { Container, Row, Nav, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./OLDProjectCard.js";
import projImg1 from "../assets/img/proj-img/intro/pacman.png";
import projImg2 from "../assets/img/proj-img/intro/panopticon.png";
import projImg3 from "../assets/img/proj-img/medium/bus.png";
import projImg4 from "../assets/img/proj-img/medium/ndtv.png";
import projImg5 from "../assets/img/proj-img/capstone/bank.png";

export const Projects = () => {

  const introProjects = [
    {
      title: 'Pacmen Factory',
      description: 'A creative way to engage with DOM and DIV manipulation. This resulted in an event driven, dynamic display of flying pacmen.',
      imgUrl: projImg1,
      codeLink: 'https://github.com/s1nghularity/personal-portfolio/blob/acd0638fbbf135aa2ea02ae99c7b5637c4ae6897/src/assets/projects/pacmen-factory/',
      liveLink:'https://s1nghularity.github.io/pacmen-factory/index.html',
    },

    {
      title: 'The Panopticon',
      description: 'A quick example of tracking mouse movements via the DOM, using onmouse to generate the movement of the pupils.',
      imgUrl: projImg2,
      codeLink: 'https://github.com/s1nghularity/personal-portfolio/blob/acd0638fbbf135aa2ea02ae99c7b5637c4ae6897/src/assets/projects/eyes-solution/README-eye-movement.md',
      liveLink:'https://s1nghularity.github.io/eyes-solution/index.html',
    },
    ];
  
  const mediumProjects = [
    {
      title: 'Boston Bus Tracker',
      description: 'Finally harnessing the power of APIs! Live tracking north/southbound busses in the MIT/Harvard area.',
      imgUrl: projImg3,
      codeLink: 'https://github.com/s1nghularity/personal-portfolio/blob/acd0638fbbf135aa2ea02ae99c7b5637c4ae6897/src/assets/projects/bus-tracker/README-bus-tracker.md',
      liveLink:'https://s1nghularity.github.io/bus-tracker/index.html',
    },

    {
      title: 'A Past Life',
      description: 'Mapping all the bus stops going from Sainik Farms to New Delhi Television in South New Delhi using a for loop with Mapbox.',
      imgUrl: projImg4,
      codeLink: 'https://github.com/s1nghularity/personal-portfolio/blob/acd0638fbbf135aa2ea02ae99c7b5637c4ae6897/src/assets/projects/ndtv-route/README-ndtv.md',
      liveLink:'https://s1nghularity.github.io/ndtv-route/index.html',
    },

    
  ];

  const capstoneProjects = [

    {
      title: 'Bad Bank App',
      description: 'A full stack MERN mock bank app built on a REST API designed to allow the user to register, login/out, withdraw/deposit money and even delete user accounts.',
      imgUrl: projImg5,
      codeLink: 'https://github.com/s1nghularity/bb-server/blob/main/README.md',
      liveLink:'https://bb-client-r4iq.onrender.com/',
    },

  ]

  return (
    <section className ="project" id="projects">
      <Container>

        <Row>
          <Col>
            <h2>Projects</h2>
            <p><i>Sharpening the axe.</i></p>
            
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Warm-Up</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Sprints</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Marathon</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          introProjects.map((project, index) => {
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
                          mediumProjects.map((project, index) => {
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
                    
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          capstoneProjects.map((project, index) => {
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
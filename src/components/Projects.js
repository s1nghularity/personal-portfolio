import { Container, Row, Nav, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "../components/ProjectCard.js";
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
      liveLink:'./assets/projects/pacmen-factory/index.html',
    },

    {
      title: 'Beware the Panopticon',
      description: 'A quick example of tracking mouse movements via the DOM and using onmouse movements to generate the movement of the pupils.',
      imgUrl: projImg2,
      codeLink: 'https://github.com/s1nghularity/personal-portfolio/blob/acd0638fbbf135aa2ea02ae99c7b5637c4ae6897/src/assets/projects/eyes-solution/',
      liveLink:'./assets/projects/eyes-solution/index.html',
    },
    ];
  
  const mediumProjects = [
    {
      title: 'Boston Bus Tracker',
      description: 'Finally interacting with live data and harnessing the power of APIs! A challenging but fun exercise in live tracking busses going north and south in the MIT/Harvard area.',
      imgUrl: projImg3,
      codeLink: 'https://github.com/s1nghularity/personal-portfolio/blob/acd0638fbbf135aa2ea02ae99c7b5637c4ae6897/src/assets/projects/bus-tracker/',
      liveLink:'./assets/projects/bus-tracker/index.html',
    },

    {
      title: 'A Past Life',
      description: 'Mapping all the bus stops going from Sainik Farms to New Delhi Television in South New Delhi. As an in-house gopher for the newsdesk I rode this route every day (sometimes multiple times a day) from 2009 to 2012. Using a for loop to run through all the coordinates, Mapbox for everything else, with a button borrowed and modified from UIverse.',
      imgUrl: projImg4,
      codeLink: 'https://github.com/s1nghularity/personal-portfolio/blob/acd0638fbbf135aa2ea02ae99c7b5637c4ae6897/src/assets/projects/ndtv-route/',
      liveLink:'./assets/projects/ndtv-route/index.html',
    },
  ];

  const capstoneProjects = [

    {
      title: 'Full Stack Banking App',
      description: 'While this portfolio website could be considered a capstone CSS project itself, this is the real deal. A full stack MERN banking app. A very simple yet functional REST API built to allow one to register, login (and out), withdraw/deposit money and even delete user accounts.',
      imgUrl: projImg5,
      codeLink: '',
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
                  <Nav.Link eventKey="first">Intro</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Intermediate</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Capstone</Nav.Link>
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
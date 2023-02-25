import { Container, Row, Nav, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "../components/ProjectCard.js";
import colorSharp from "../assets/img/color-sharp.png";
import projImg1 from "../assets/img/proj-img/proj-img1.png";
import projImg2 from "../assets/img/proj-img/proj-img2.png";
import projImg3 from "../assets/img/proj-img/proj-img3.png";
import projImg4 from "../assets/img/proj-img/proj-img4.png";
import projImg5 from "../assets/img/proj-img/proj-img5.png";
import projImg6 from "../assets/img/proj-img/proj-img6.png";



export const Projects = () => {

  const projects = [
    {
      title: 'Project 1',
      description: 'This is my portfolio website. I have used React.js for frontend and Bootstrap for styling. I have used React-Bootstrap for navbar and other components. I have used React-Router for routing.',
      imgUrl: projImg1,
    },

    {
      title: 'Project 2',
      description: 'This is my portfolio website. I have used React.js for frontend and Bootstrap for styling. I have used React-Bootstrap for navbar and other components. I have used React-Router for routing.',
      imgUrl: projImg2,
    },

    {
      title: 'Project 3',
      description: 'This is my portfolio website. I have used React.js for frontend and Bootstrap for styling. I have used React-Bootstrap for navbar and other components. I have used React-Router for routing.',
      imgUrl: projImg3,
    },

    {
      title: 'Project 4',
      description: 'This is my portfolio website. I have used React.js for frontend and Bootstrap for styling. I have used React-Bootstrap for navbar and other components. I have used React-Router for routing.',
      imgUrl: projImg4,
    },

    {
      title: 'Project 5',
      description: 'This is my portfolio website. I have used React.js for frontend and Bootstrap for styling. I have used React-Bootstrap for navbar and other components. I have used React-Router for routing.',
      imgUrl: projImg5,
    },

    {
      title: 'Portfolio 6',
      description: 'This is my portfolio website. I have used React.js for frontend and Bootstrap for styling. I have used React-Bootstrap for navbar and other components. I have used React-Router for routing.',
      imgUrl: projImg6,
    }
  ];

  return (
    <section className ="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>lorem ipsum is simply dummy text</p>
            
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
                      projects.map((project, index) => {
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
                  <p>lorem ipsum is simply dummy text</p>
                </Tab.Pane>
                
                <Tab.Pane eventKey="third">
                <p>lorem ipsum is simply dummy text</p>
                </Tab.Pane>


              </Tab.Content>

            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp} alt="background" />
    </section>
  )
}
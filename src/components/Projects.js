import React from "react";
import { Container, Row, Col, Nav ,Tab, TabContainer} from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from '../assets/img/color-sharp2.png'
import proImg1 from '../assets/img/project-img1.png'
import proImg2 from '../assets/img/project-img2.png'
import proImg3 from '../assets/img/project-img3.png'

export const Projects = () => {
  // we make an array that contain info about these three variables
  const projects1 = [
    {
      title: "Currency Convertor",
      description: "It converts the given currency to all the other currencies present with the real time values",
      imgUrl: proImg1,
    },
    {
      title: "Bussiness Startup",
      description: "Design & Devolopment",
      imgUrl: proImg2,
    },
    {
      title: "Bussiness Startup",
      description: "Design & Devolopment",
      imgUrl: proImg3,
    },
  ];

  const projects2=[
    {
      title: "Bussiness Startup",
      description: "Design & Devolopment",
      imgUrl: proImg1,
    },
    {
      title: "Bussiness Startup",
      description: "Design & Devolopment",
      imgUrl: proImg2,
    },
    {
      title: "Bussiness Startup",
      description: "Design & Devolopment",
      imgUrl: proImg3,
    },
  ]
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
              earum molestiae, ut recusandae perferendis corporis, quam quod
              adipisci ex rerum ipsam optio sequi? Illum, dolores dolore!
              Obcaecati rem error inventore!
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                 
                 <Nav.Item>
                <Nav.Link eventKey="first">Tab One</Nav.Link>
              </Nav.Item>
             
               
               <Nav.Item>
                <Nav.Link eventKey="second">Tab Two</Nav.Link>
              </Nav.Item>
              
              
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey="first">
                    <Row>
                        {
                            projects1.map((project,index)=>{
                                return (
                                   <ProjectCard key={index} {...project} />
                                )
                            })
                        }
                    </Row>
                </Tab.Pane>
                 <Tab.Pane eventKey="second"><Row>
                        {
                            projects2.map((project,index)=>{
                                return (
                                   <ProjectCard key={index} {...project} />
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
      {/* <img className="background-image-right" src={colorSharp2} />*/}
      
    </section>
  );
};
export default Projects;

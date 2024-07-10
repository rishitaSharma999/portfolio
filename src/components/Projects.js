import React from "react";
import { Container, Row, Col, Nav ,Tab, TabContainer} from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from '../assets/img/color-sharp2.png'
import proImg1 from '../assets/img/shopping-store.png'
import proImg2 from '../assets/img/text-utils.png'
import proImg3 from '../assets/img/chess-1.png'
import proImg4 from '../assets/img/currency-convertor.png'
import proImg5 from '../assets/img/tic-tac-toe.png'

export const Projects = () => {
  // we make an array that contain info about these three variables
  const projects1 = [
    {
      title: "Shopping-Store",
      description: "This full stack e-commerce store project combines React, Bootstrap, Node, Express, and MongoDB . Featuring authenticated login ,signup, contact and  secure payment integration. ",
      imgUrl: proImg1,
      link: "https://new-repo-front.vercel.app/",
    },
    {
      title: "Text-utils",
      description: "Text-Utils App is a React and Bootstrap-based tool that offers a range of text manipulation features, including case conversion, dark mode, and text summary.",
      imgUrl: proImg2,
      link: "https://text-utils-dusky-three.vercel.app/",
    },
    {
      title: "Chess",
      description: "A console-based game built from scratch in Java,  comprehensive implementation of game logic using Object-Oriented Programming (OOP) concepts ",
      imgUrl: proImg3,
      link:"https://github.com/rishitaSharma999/chess-java",
    },
  ];

  const projects2=[
    {
      title: "Currency-Convertor",
      description: "A responsive  application built using HTML, CSS, JavaScript, fetching real-time data/currencies with the Exchange Rate API ",
      imgUrl: proImg4,
      link:"https://currency-convertor-drab-mu.vercel.app/",
    },
    {
      title: "Tic-Tac-Toe",
      description: "A responsive  game built using HTML, CSS, and JavaScript. This game allows two players to compete against each other, with a functional game logic and a visually appealing interface.",
      imgUrl: proImg5,
      link:"https://tic-tac-toe-roan-alpha.vercel.app/",
    },
   
  ]
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              
            This project portfolio showcases my most recent and impactful work, spanning a range of initiatives that leverage my full-stack skills, from front-end user experiences to backend architecture.
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

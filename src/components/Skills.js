import React from 'react'; //this was imported from 'https://www.npmjs.com/package/react-multi-carousel'
import { Container,Row,Col } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/img/ggb36ie4.png'
import meter2 from '../assets/img/327vi3yu.png'
import meter3 from '../assets/img/github.png'
import meter4 from '../assets/img/codechef-icon.png'
import meter5 from '../assets/img/OIP.jpg'
import colorSharp from  '../assets/img/color-sharp.png'

export const Skills=()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
          partialVisibilityGutter: 40
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          partialVisibilityGutter: 40
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
      <section className="skill" id="skills">
       <Container>
        <Row>
            <Col> 
            <div className="skills-bx">
               <h2>
                Skills
               </h2>
               <p>A showcase of my technical skills, with a focus on innovation, creativity, and results-driven solutions.</p>
               <Carousel responsive={responsive} infinite={true} className="skill-slider" autoPlay={true} autoPlaySpeed={3000} autoPlayTimeout={5000}>
                <div className="item">
                    <img src={meter1} alt="Image" />
                    <h5>Front-End</h5>
                    <p>
                      <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>Bootstrap</li>
                        <li>React</li>
                        <li>React-bootstarp</li>
                      </ul>
                    </p>
                </div>
                <div className="item">
                    <img src={meter2} alt="Image" />
                    <h5>Data Structures and Algorithms-JAVA</h5>
                    <p> 
                      <ul>
                        <li>Arrays</li>
                        <li>LinkedList</li>
                        <li>Stack,Queue</li>
                        <li>Recursion,Backtracking</li>
                        <li>Heaps</li>
                        <li>Binary tree,BST</li>
                        <li>Graph</li>
                        <li>Dynamic Programming</li>
                      </ul></p>
                </div>
                <div className="item">
                    <img src={meter3} alt="Image" />
                    <h5>Version Control</h5>
                    <p>
                    <ul>
                        <li>Git</li>
                        <li>Github</li>
                        <li>VS-Code</li>
                      </ul>
                    </p>
                </div>
                <div className="item">
                    <img src={meter4}  alt="Image" />
                    <h5>Competitve Programming</h5>
                    <p>
                      <ul>
                        <li>Highest score,codechef :1460</li>
                        
                      </ul>
                    </p>
                </div>
                <div className="item">
                    <img src={meter5} alt="Image" />
                    <h5>Back-End</h5>
                    <p>
                    <ul>
                        <li>Node-js</li>
                        <li>Express</li>
                        <li>Mongo-DB</li>
                      </ul>
                      </p>
                </div>
                
               </Carousel>
            </div>
            </Col>
        </Row>
       </Container>
       {/* <img className="background-img-left" src={colorSharp} />*/}
      </section>
    )
}

export default Skills;
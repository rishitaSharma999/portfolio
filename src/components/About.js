import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import headerImg from "../assets/img/profile-pic.jpeg";

export const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row className="align-item-center">
          <Col xs={12} md={6} xl={6}>
            <span className="tagline">Academic Timeline</span>
            {/* <h1>{`Hi I'm webcoded `} <span className="wrap">{text}</span> </h1> */}
            <p>
              <ListGroup className="listgroup">
                <ListGroup.Item style={{ backgroundColor: '#545454', color: '#a3bdd6' }}>
                    <h5>Graduation  </h5>
                    <ul>
                        <li> College: SGSITS,indore </li>
                        <li>Timeline: 2022-2026</li>
                        <li>cgpa: 8.50, till 2024</li>
                    </ul>
                </ListGroup.Item>
                <ListGroup.Item style={{ backgroundColor: '#545454', color: '#a3bdd6' }}>
                    <h5>Higher Secondary School</h5>
                    <ul>
                        <li>School Name: Sri Sathya Sai Vidhya Vihar,indore </li>
                        <li>Percentage: 94.2</li>
                    </ul>
                </ListGroup.Item>
                <ListGroup.Item style={{ backgroundColor: '#545454', color: '#a3bdd6' }}>
                    <h5> Secondary School</h5>
                    <ul>
                        <li>School Name: Indus World School </li>
                        <li>Percentage: 92.2</li>
                    </ul>
                </ListGroup.Item>
               
              </ListGroup>
            </p>
          </Col>
          <Col xs={12} md={6} xl={6}>
            <span className="tagline">Contact Information -Details</span>
            {/* <h1>{`Hi I'm webcoded `} <span className="wrap">{text}</span> </h1> */}
            <p>
            <ListGroup className="listgroup">
                <ListGroup.Item style={{ backgroundColor: '#545454', color: '#a3bdd6' }}>Name: Rishita Sharma</ListGroup.Item>
                <ListGroup.Item style={{ backgroundColor: '#545454', color: '#a3bdd6' }}>College: SGSITS,Indore,M.P.</ListGroup.Item>
                <ListGroup.Item style={{ backgroundColor: '#545454', color: '#a3bdd6' }}>Degree: B.tech, Computer Science</ListGroup.Item>
                <ListGroup.Item style={{ backgroundColor: '#545454', color: '#a3bdd6' }}>Phone Number: 9617541456</ListGroup.Item>
                <ListGroup.Item style={{ backgroundColor: '#545454', color: '#a3bdd6' }}>Email: rishita2004sharma@gmail.com</ListGroup.Item>
              </ListGroup>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;

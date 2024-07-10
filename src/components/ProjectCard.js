import React from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,link }) => {
  return (
    <Col sm={6} md={4} style={{paddingBottom: '70px'}}>
      <div className="proj-imgbx">
        <img src={imgUrl}  style={{ width: '100%', height: '100%' }}/>
        <div className="proj-txtx">
        <h4>
            <a href={link} target="_blank" rel="noopener noreferrer" style={{color:'white'}}>
              {title}
            </a>
            </h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;

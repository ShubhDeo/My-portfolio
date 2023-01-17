import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import digiShop from '../../Assets/Projects/digi-shop.png'
import devCommunity from '../../Assets/Projects/dev-comm.png'
import crowdFunding from '../../Assets/Projects/crowd-funding.png'
import blogger from '../../Assets/Projects/blogger.png'
import simployee from '../../Assets/Projects/simployee.png'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={digiShop}
              isBlog={false}
              title="Digi-Shop"
              description="An e-commerce website made with MERN stack and Redux. Easy to use and understand, simple UI with all the necessary features."
              ghLink="https://github.com/ShubhDeo/Digi-Shop"
              demoLink="https://dazzling-jalebi-af6ec5.netlify.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={devCommunity}
              isBlog={false}
              title="Dev Community"
              description="Web Application which is mainly used by the developer community to dicuss about the latest tools and technologies."
              ghLink="https://github.com/ShubhDeo/devCommunity"
              demoLink="https://dev-commun.netlify.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={crowdFunding}
              isBlog={false}
              title="Crowd Funding App"
              description="This project acts as a crowdfunding platform to NGOs. Simple UI based website made using Node.js, Express, Express Handlebars, Multer, GridFS and other packages."
              ghLink="https://github.com/ShubhDeo/CrowdFunding-App"
              demoLink=""              
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={simployee}
              isBlog={false}
              title="Simployee"
              description="A web application where employers can keep a check on their employees work done every particulay day."
              ghLink="https://github.com/ShubhDeo/simployee-frontend"
              demoLink="https://simployee.netlify.app/"              
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={blogger}
              isBlog={false}
              title="Blogger App"
              description="A web application that aims to provide a platform for individuals share their thoughts, ideas and experiences with a wider audience."
              ghLink="https://github.com/ShubhDeo/blog-website"
              demoLink="https://tangerine-cobbler-c4c620.netlify.app/"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

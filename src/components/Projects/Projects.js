import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import fitme from "../../Assets/Projects/fitme.png";
import enterpriseEcommerce from "../../Assets/Projects/enterpriseEcommerce.png";
import mernStore from "../../Assets/Projects/mernStore.png";
import blaban from "../../Assets/Projects/blaban.png";
import airHockey from "../../Assets/Projects/airHockey.png";

function Projects() {
  return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few key projects I've built recently across full-stack, enterprise Java, and AI systems.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

            {/* Project 1: Fit-Me */}
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={fitme}
                  isBlog={false}
                  title="Fit-Me (Smart Try-On Platform)"
                  description="An AI-powered virtual try-on shopping platform (team graduation project). Built the Node.js/Express backend — JWT auth, product/order logic, Hugging Face Kolors-Virtual-Try-On integration, and a Gemini-powered AI stylist — plus real-time Socket.io features for collaborative fitting rooms and live support chat. Diagnosed and fixed the perspective-warping bug in the team's MediaPipe glasses overlay."
                  ghLink="https://github.com/kareempogba0/Smart-Try-On-Shopping-Platform"
                  demoLink="https://smart-try-on-shopping-platform.vercel.app"
              />
            </Col>

            {/* Project 2: Multi-Module Enterprise E-Commerce */}
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={enterpriseEcommerce}
                  isBlog={false}
                  title="Enterprise E-Commerce Platform"
                  description="Solo-built a 3-module Maven application (core / persistence / web) in Java 11, Servlets, JSP, and JDBC. Custom data access layer supporting HikariCP, DBCP2, and C3P0 connection pooling; session-based auth with password strength validation; a support-ticket system; English/French i18n; and automated OWASP dependency-check scanning in the build."
                  ghLink="https://github.com/kareempogba0/online-store"
              />
            </Col>

            {/* Project 3: MERN Laptop Store */}
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={mernStore}
                  isBlog={false}
                  title="MERN E-Commerce Platform"
                  description="Full-stack laptop store web application built with React, Node.js, Express, and MongoDB. Includes custom JWT authentication, product search and filtering, a shopping cart, and RESTful API integration end-to-end."
                  ghLink="https://github.com/kareempogba0/CS309-Fall2024-Project"
              />
            </Col>

            {/* Project 4: B_Laban */}
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={blaban}
                  isBlog={false}
                  title="B_Laban (Dessert E-Commerce)"
                  description="A solo-built dessert e-commerce platform using React and Firebase. Features email/password plus Google and GitHub OAuth, a full cart-to-checkout flow, and automated order/shipping emails via the Resend API through Cloudflare Functions. Deployed live on Cloudflare Pages."
                  ghLink="https://github.com/kareempogba0/B_Laban"
                  demoLink="https://b-laban.pages.dev"
              />
            </Col>

            {/* Project 5: 2D Air Hockey Game */}
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={airHockey}
                  isBlog={false}
                  title="2D Air Hockey Game (Team Project)"
                  description="A Java/JOGL arcade game built with a 6-person team. Built the mouse-driven menu system and the player name-entry and score-persistence logic (saving scores to file); teammates built the physics engine, collision handling, and AI opponent."
                  ghLink="https://github.com/kareempogba0/mainProject_304"
              />
            </Col>

          </Row>
        </Container>
      </Container>
  );
}

export default Projects;
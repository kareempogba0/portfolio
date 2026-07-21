import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/formal.jpg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                I’m a Computer Science student at Cairo University who loves
                transforming complex ideas into reliable, production-ready software.
                <br />
                <br />
                I’m proficient in languages and frameworks like
                <i>
                  <b className="purple">
                    {" "}
                    Java, JavaScript, C++, Node.js, and Spring Boot{" "}
                  </b>
                </i>
                — with experience across both backend architectures and modern frontend stacks.
                <br />
                <br />
                My key focus areas include building scalable
                <i>
                  <b className="purple">
                    {" "}
                    Web & Mobile Applications, Full-Stack Systems,{" "}
                  </b>
                </i>
                and integrating machine learning models into real-world applications.
                <br />
                <br />
                I enjoy solving algorithmic problems and crafting seamless user experiences with
                <b className="purple"> React</b>, <b className="purple">React Native</b>, and enterprise backend services using <b className="purple">Spring Boot & Node.js</b>.
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img
                    src={myImg}
                    className="img-fluid"
                    alt="Kareem Abdullah"
                    style={{ borderRadius: "12px" }}
                />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
  );
}

export default Home2;
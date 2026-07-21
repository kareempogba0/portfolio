import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiSpringboot, SiExpress, SiOracle } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import C from "../../Assets/TechIcons/C++.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Redis from "../../Assets/TechIcons/Redis.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Redux from "../../Assets/TechIcons/Redux.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";

function Techstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {/* Languages */}
            <Col xs={4} md={2} className="tech-icons">
                <img src={Java} alt="Java" />
                <div className="tech-icons-text">Java</div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <img src={Javascript} alt="Javascript" />
                <div className="tech-icons-text">JavaScript</div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <img src={Typescript} alt="Typescript" />
                <div className="tech-icons-text">TypeScript</div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <img src={C} alt="C++" />
                <div className="tech-icons-text">C++</div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <img src={Python} alt="Python" />
                <div className="tech-icons-text">Python</div>
            </Col>

            {/* Backend & Frameworks */}
            <Col xs={4} md={2} className="tech-icons">
                <SiSpringboot fontSize={"24px"} />
                <div className="tech-icons-text">Spring Boot</div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <img src={Node} alt="Node.js" />
                <div className="tech-icons-text">Node.js</div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiExpress fontSize={"24px"} />
                <div className="tech-icons-text">Express.js</div>
            </Col>

            {/* Frontend & Mobile */}
            <Col xs={4} md={2} className="tech-icons">
                <img src={ReactIcon} alt="React" />
                <div className="tech-icons-text">React.js</div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <TbBrandReactNative fontSize={"24px"} />
                <div className="tech-icons-text">React Native</div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <img src={Redux} alt="Redux" />
                <div className="tech-icons-text">Redux</div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <img src={Tailwind} alt="Tailwind CSS" />
                <div className="tech-icons-text">Tailwind CSS</div>
            </Col>

            {/* Databases & Storage */}
            <Col xs={4} md={2} className="tech-icons">
                <img src={Mongo} alt="MongoDB" />
                <div className="tech-icons-text">MongoDB</div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <img src={SQL} alt="SQL" />
                <div className="tech-icons-text">SQL / MySQL</div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiOracle fontSize={"24px"} />
                <div className="tech-icons-text">Oracle SQL</div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <img src={Redis} alt="Redis" />
                <div className="tech-icons-text">Redis</div>
            </Col>

            {/* Tools & DevOps */}
            <Col xs={4} md={2} className="tech-icons">
                <img src={Git} alt="Git" />
                <div className="tech-icons-text">Git</div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <img src={Docker} alt="Docker" />
                <div className="tech-icons-text">Docker</div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <img src={Postman} alt="Postman" />
                <div className="tech-icons-text">Postman</div>
            </Col>
        </Row>
    );
}

export default Techstack;
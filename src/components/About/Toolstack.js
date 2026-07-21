import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiLinux, SiWindows11, SiVisualstudiocode, SiIntellijidea, SiPostman } from "react-icons/si";

function Toolstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {/* Operating Systems & Environments */}
            <Col xs={4} md={2} className="tech-icons">
                <SiLinux fontSize={"24px"} />
                <div className="tech-icons-text">Linux</div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiWindows11 fontSize={"24px"} />
                <div className="tech-icons-text">Windows / WSL</div>
            </Col>

            {/* Development & IDEs */}
            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudiocode fontSize={"24px"} />
                <div className="tech-icons-text">VS Code</div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiIntellijidea fontSize={"24px"} />
                <div className="tech-icons-text">IntelliJ IDEA</div>
            </Col>

            {/* Testing & API Tools */}
            <Col xs={4} md={2} className="tech-icons">
                <SiPostman fontSize={"24px"} />
                <div className="tech-icons-text">Postman</div>
            </Col>
        </Row>
    );
}

export default Toolstack;
import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
      <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
              Hi everyone! I’m <span className="purple">Kareem Abdullah</span>{" "}
              from <span className="purple">Cairo, Egypt</span>.
              <br />
              I’m a <span className="purple">Computer Science</span> student at{" "}
              <span className="purple">Cairo University</span> with a strong passion for full-stack software development and algorithmic problem solving.
              <br />
              <br />
              Outside of core development, here are a few activities that keep me inspired and continuously learning:
            </p>

            <ul>
              <li className="about-activity">
                <ImPointRight /> Competitive Programming & Problem Solving 🧠
              </li>
              <li className="about-activity">
                <ImPointRight /> Exploring New Tech Stacks & AI Tools 🚀
              </li>
            </ul>

            <p style={{ color: "rgb(155 126 172)" }}>
              "Think twice, code once."{" "}
            </p>
            <footer className="blockquote-footer">✌️</footer>
          </blockquote>
        </Card.Body>
      </Card>
  );
}

export default AboutCard;
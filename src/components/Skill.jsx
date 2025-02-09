import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Skill = () => {
  return (
    <section id="skill" className="py-5">
      <Container>
        <h1>Skills</h1>
        <Row className="py-4">
          <Col md={6}>
            <div className="pe-0 pe-md-4">
              <h3>Frontend: </h3>
              <div className="skill-bar">
                <label>HTML</label>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "95%" }}>
                    95%
                  </div>
                </div>
              </div>

              <div className="skill-bar">
                <label>CSS</label>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "90%" }}>
                    90%
                  </div>
                </div>
              </div>

              <div className="skill-bar">
                <label>Bootstrap 5</label>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "85%" }}>
                    85%
                  </div>
                </div>
              </div>

              <div className="skill-bar">
                <label>React.js</label>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "80%" }}>
                    80%
                  </div>
                </div>
              </div>

              <div className="skill-bar">
                <label>React Bootstrap</label>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "90%" }}>
                    90%
                  </div>
                </div>
              </div>
              <div className="skill-bar">
                <label>PHP Codeligniter 3</label>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "60%" }}>
                    60%
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} className="pt-5 pt-md-0">
            <div className="ps-0 ps-md-4">
              <h3>Backend: </h3>

              <div className="skill-bar">
                <label>MySQL</label>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "90%" }}>
                    90%
                  </div>
                </div>
              </div>
              <div className="skill-bar">
                <label>MongoDB</label>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "80%" }}>
                    90%
                  </div>
                </div>
              </div>
              <div className="skill-bar">
                <label>Node.js</label>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "90%" }}>
                    90%
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skill;

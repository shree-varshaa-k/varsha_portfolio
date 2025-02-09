import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Education = () => {
  return (
    <section id="education" className="py-5">
      <Container>
        <h1 className="text-center pb-3">Education</h1>
        <Row className="justify-content-center">
          <Col md={6} className="education-item">
            <div className="degree-card">
              <h2>M.Sc Computer Science</h2>
              <p>NMCC, Marthandam</p>
              <p>
                <b>CGPA:</b>9.2
              </p>
            </div>
          </Col>
          <Col md={6} className="education-item">
            <div className="degree-card">
              <h2>B.Sc Computer Science</h2>
              <p>NMCC, Marthandam</p>
              <p>
                <b>CGPA:</b> 8.9
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Education;

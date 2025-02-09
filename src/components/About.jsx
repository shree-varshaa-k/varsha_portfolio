import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <section id="about" className="about-section p-3 p-md-5">
  <Container>
    <Row className="align-items-center">
      <Col md={12}>
        <div className="about-content">
          <h1 className="pb-3">About</h1>
          <h4 className="py-4"><b>Who Am I?</b></h4>
          <p>
            I'm a dynamic developer with a strong foundation in both frontend
            and backend technologies. With a B.Sc. in Computer Science and
            M.Sc. also in the same field. I have honed my skills through
            hands-on projects and professional experiences. Currently, I'm
            working as a PHP Developer at Shadobooks in Marthandam, where I
            contribute to CRM and website development. My journey also includes
            a MERN Stack internship, where I mastered React.js and Redux,
            developing and deploying web applications.
          </p>
        </div>
      </Col>
    </Row>
  </Container>
</section>

  );
};

export default About;

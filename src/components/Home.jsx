import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import hero from "../assets/hero.png";

const Home = () => {
  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1>Welcome to My Portfolio!</h1>
            <h3>I'm a Full Stack Developer</h3>
            <p>
              I'm shree varshaa k, a passionate Front-End Developer in React.js
              and Back-End Developer in PHP and Node.js. I specialize in
              React.js, React Bootstrap, Node.js, Express.js, MongoDB, Tailwind
              CSS, and PHP, creating responsive and user-friendly web
              applications.
            </p>
          </Col>
          <Col md={6} className="hero-image">
            <img src={hero} alt="profile" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;

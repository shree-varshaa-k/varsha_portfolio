import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <Container>
        <div>
          <h1 className="text-center pb-4">Contact Me</h1>

          <Row className="align-items-center">
            <Col md={6} className="contact-info">
              <div className="pt-4">
                <div className="d-flex align-items-start mb-3">
                  <i className="fas fa-map-marker-alt contact-icon"></i>
                  <p className="ps-3">
                    Melpuram <br />
                    Alluvilai
                    <br /> Perai paacode(P.O).
                  </p>
                </div>
                <div className="d-flex align-items-start mb-3">
                  <i className="fas fa-phone contact-icon"></i>
                  <p className="ps-3">+91 820646813</p>
                </div>
                <div className="d-flex align-items-start mb-3">
                  <i className="fas fa-envelope contact-icon"></i>
                  <p className="ps-3">shreevarshaakumar@gmail.com</p>
                </div>
                <div className="d-flex align-items-start mb-3">
                  <i className="fab fa-linkedin contact-icon"></i>
                  <p className="ps-3">
                    <a
                      href="https://linkedin.com/in/shree-varshaa-6383aa2a5"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </p>
                </div>
                <div className="d-flex align-items-start">
                  <i className="fab fa-github contact-icon"></i>
                  <p className="ps-3">
                    <a
                      href="https://github.com/shree-varshaa-k"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </p>
                </div>
              </div>
            </Col>

            <Col md={6} className="pt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7895.215826160173!2d77.20546593120798!3d8.341698181118568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0454bf8f8dc263%3A0x9095d0214cc1dd94!2sMelpuram%2C%20Tamil%20Nadu%20629168!5e0!3m2!1sen!2sin!4v1733331020568!5m2!1sen!2sin"
                width="100%"
                height="300"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                title="Map to Thiruvattar"
              ></iframe>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Contact;

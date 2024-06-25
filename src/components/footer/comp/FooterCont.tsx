import React from "react";

//Bootstrap
import "../comp/FooterCont.css"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export default function FooterCont() {
  return (
    <Container>
      <Row>
        <Col>
          <div>Socials</div>
          <ul className="clean-list">
            <li>
              <i className="fa-brands fa-facebook m-2"></i>
              Facebook
            </li>
            <li>
              <i className="fa-brands fa-square-instagram m-2"></i>
              Instagram
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

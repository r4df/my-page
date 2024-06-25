import React from "react";
import Header from "../components/header/Header.tsx";
import Footer from "../components/footer/Footer.tsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import ProfileImg from "../images/IMG_6059.jpg";
import CompanyImg from "../images/densotechno.png";
export default function About() {
  return (
    <div>
      <Header />

      <Container>
        <main>
          <Container className="bg-body-tertiary m-3 p-5 rounded-3">
            <Row>
              <h1>About</h1>
            </Row>
            <Row>
              <div className="border-bottom m-3"></div>
            </Row>
            <Row>
              <Col md={3} lg={3} xl={3} xxl={3}>
                <Image src={ProfileImg} className="img-thumbnail" fluid />
              </Col>

              <Col>
                <p>
                  Software engineer for 10 years, with experience in coding
                  using various programming languages, validating, and testing.
                  Constantly finding improvement points in different parts of
                  the business process to stay competitive with other companies.
                </p>

                <p><i className="fa-solid fa-envelope"></i> delafuente.rodolfo4@gmail.com</p>
              </Col>
            </Row>
          </Container>

          <Container className="bg-body-tertiary m-3 p-5 rounded-3">
            <Row>
              <Col>
                <h1>Experience</h1>
              </Col>
            </Row>
            <Row>
              <div className="border-bottom m-3"></div>
            </Row>
            <Row>
              <Col>
                <Row className="mb-3">
                  <Col xxl={4} xl={4} lg={4} rounded>
                    <Image src={CompanyImg} fluid className="" />
                  </Col>
                  <Col>
                    <Container>
                      <h3>DENSO TECHNO PHILIPPINES</h3>
                      <p>Software Engineering Company for Automotive</p>
                    </Container>
                  </Col>
                </Row>
                <Row>
                  <Container>
                    <p>
                      <i className="fa-solid fa-location-dot"></i> Metro Manila,
                      Philippines
                    </p>
                    <p>
                      <i className="fa-solid fa-timeline"></i> Tenure: Jul 2012
                      ~ Jul 2017
                    </p>
                  </Container>
                </Row>
              </Col>
              <Col>
                <Row>
                  <h5>
                    <i className="fa-solid fa-gears"></i> Roles:
                  </h5>
                  <ul>
                    <li>
                      Analyzed requirements provided by suppliers to determine
                      what changes is needed in the ECU software.
                    </li>
                    <li>
                      Created implementation designs to understand changes in
                      the software based on requirements.
                    </li>
                    <li>
                      Written code in the ECU software based on supplier
                      requirements.
                    </li>
                    <li>Tested software to ensure quality.</li>
                  </ul>
                </Row>
                <Row>
                  <h5>
                    <i className="fa-solid fa-code"></i> Skills Learned:
                  </h5>
                  <ul>
                    <li>C Language </li>
                    <li>Functional Testing</li>
                    <li>Integrated Testing</li>
                    <li>MS Office (Word, Excel, PPT)</li>
                  </ul>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col></Col>
            </Row>
          </Container>
        </main>
        <aside></aside>
      </Container>

      <Footer />
    </div>
  );
}

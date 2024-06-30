import React from "react";

// Assets
import WorkHistoryList from "../About/WorkHistoryList.json"
import ProfileImg from "../About/image/IMG_6059.jpg";

// Component
import Header from "../../components/header/Header.tsx";
import Footer from "../../components/footer/Footer.tsx";
import WorkHistory from "../About/component/WorkHistory.tsx";
import MyLine from "../common/MyLine.tsx";
import MyBgImg from "../common/MyBgImg.tsx";

// BootStrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export default function About() {
  return (
    <div>
      <MyBgImg />
      <Header />

      <Container className="p-3">
        {/* About */}
        <Row
          className="bg-body-tertiary justify-content-center my-3 p-5 rounded-3"
        >
          <Row>
            <h1>About</h1>
          </Row>
          <Row>
            <MyLine />
          </Row>
          <Row>
            <Col md={3} lg={3} xl={3} xxl={3}>
              <Image src={ProfileImg} className="img-thumbnail"  />
            </Col>

            <Col>
              <p>
                Software engineer for 10 years, with experience in coding using
                various programming languages, validating, and testing.
                Constantly finding improvement points in different parts of the
                business process to stay competitive with other companies.
              </p>

              <p>
                <i className="fa-solid fa-envelope"></i>{" "}
                delafuente.rodolfo4@gmail.com
              </p>
            </Col>
          </Row>
        </Row>

        {/* Experience */}
        <Row className="bg-body-tertiary justify-content-center my-3 p-5 rounded-3">
          <Row>
            <Col>
              <h1>Experience</h1>
            </Col>
          </Row>
          <Row>
            <MyLine />
          </Row>
          <Row>
            <WorkHistory whlist={WorkHistoryList[0]} />
          </Row>
          <Row>
            <MyLine />
          </Row>
          <Row>
            <WorkHistory whlist={WorkHistoryList[1]} />
          </Row>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

import React from "react";

// Component
import Header from "../components/header/Header.tsx";
import Footer from "../components/footer/Footer.tsx";
import MyBgImg from "../pages/common/MyBgImg.tsx";

// BootStrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
  return (
    <div>
      <MyBgImg />
      <Header />

      <Container>
        <main>
          <Container className="m-3 p-5 rounded-3">
            <Row>
              <Col></Col>
              <Col className="bg-glass p-5">
                <h2 className="font-zxspect">Hi! I'm Rodolfo</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </Col>
            </Row>
          </Container>
        </main>
        <aside></aside>
      </Container>

      <Footer footerpost="fixed-bottom" />
    </div>
  );
}

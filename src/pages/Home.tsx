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
              <Col xxl={5} xl={5} lg={5} md={6} xs={10} className="bg-glass p-5">
                <h2 className="font-zxspect ">Hi!</h2>
                <h2 className="font-zxspect">I'm Dolfo</h2>
                <p className="font-zxspect">Software & Web Developer</p>
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

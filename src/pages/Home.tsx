import React from "react";
import "../pages/Home.css"

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
              <Col>
                <div className="myintro bg-glass">
                  <p className="mytitle">Hi!</p>
                  <p className="mytitle">I'm Dolfo</p>
                  <p className="mydescription">Software & Web Developer</p>
                </div>
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

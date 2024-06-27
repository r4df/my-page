import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../comp/NavBar.css";
import MyLine from "../pages/common/MyLine.tsx";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import SiteLogImg from "../comp/SiteLogo.jpeg";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <Navbar expand="lg" className="bg-mycolor-1" sticky="top">
        <Container>
          <Navbar.Brand>
            <Link to={"/"} className="nav-mybrand">
              <Row className="d-flex align-items-center">
                <Col>
                  <Image
                    src={SiteLogImg}
                    className="img-mysitelogo"
                    fluid
                    roundedCircle
                  ></Image>
                </Col>
                <Col>
                  <h1 className="m-0 font-zxspect">
                    R4DF
                  </h1>
                </Col>
              </Row>
            </Link>
          </Navbar.Brand>
          <Nav className="flex-row">
            <Nav.Item className="mx-2">
              <Link to={"/About"} className="btn btn-outline-mycolor-1">
                About <i className="fa-solid fa-user-astronaut"></i>
              </Link>
            </Nav.Item>
            <Nav.Item className="mx-2">
              <Link to={"/Contact"} className="btn btn-outline-mycolor-1">
                Contact <i className="fa-solid fa-at"></i>
              </Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;

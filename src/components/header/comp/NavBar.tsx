import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../comp/NavBar.css"
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

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
              <h1>R4DF <i className="fa-brands fa-react"></i></h1>
            </Link>
          </Navbar.Brand>
          <Nav>
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

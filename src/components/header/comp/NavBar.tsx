import React, { useState } from "react";
import { Link } from "react-router-dom";

// Assets
import "../comp/NavBar.css";
import SiteLogImg from "../comp/SiteLogo.jpeg";

function NavBar() {
  const [stateNavLink, setNavLink] = useState("");

  const toggleNavLink = () => {
    setNavLink(stateNavLink === "" ? "active" : "");
  };

  return (
    <>
      <nav className="nav-bar sticky-top">
        <div className="nav-title-menu">
          <div className="mybrand-title">
            <img src={SiteLogImg} alt="R4DF :)" />
            <h1>R4DF</h1>
          </div>

          <button onClick={toggleNavLink} className="btn nav-menu">
            <i className="fa-solid fa-bars"></i> Menu
          </button>
        </div>

        <div className={`nav-links ${stateNavLink}`}>
          <ul>
            <li>
              <Link to={"/"} className="btn">
                <i className="fa-solid fa-house"></i> Home
              </Link>
            </li>
            <li>
              <Link to={"/About"} className="btn">
                <i className="fa-solid fa-user-astronaut"></i> About
              </Link>
            </li>
            <li>
              <Link to={"/Contact"} className="btn">
                <i className="fa-solid fa-envelope"></i> Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

import React from "react";

// Component
import Header from "../../components/header/Header.tsx";
import Footer from "../../components/footer/Footer.tsx";
import MyBgImg from "../common/MyBgImg.tsx";
import AboutBoard from "./component/AboutBoard.tsx";
import ExperienceBoard from "./component/ExperienceBoard.tsx";

export default function About() {
  return (
    <>
      <MyBgImg />
      <Header />

      <div className="container p-3">
        {/* About */}
        <div className="row bg-body-tertiary justify-content-center my-3 p-5 rounded-3">
          <AboutBoard />
        </div>

        <div className="row bg-body-tertiary justify-content-center my-3 p-5 rounded-3">
          <ExperienceBoard />
        </div>
      </div>

      <Footer />
    </>
  );
}

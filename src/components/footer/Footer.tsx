import React from "react";
import Container from "react-bootstrap/Container";
import FooterCont from "./comp/FooterCont.tsx";

export default function Footer(props) {
  return (
    <div className={`bg-light ${props.footerpost}`}>
      <FooterCont />
    </div>
  );
}

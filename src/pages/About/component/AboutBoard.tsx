import React from "react";

import "../component/AboutBoard.css";
import ProfileImg from "../image/IMG_6059.jpg";
import MyLine from "../../common/MyLine.tsx";

export default function AboutBoard() {
  return (
    <div className="container">
      <div className="row">
        <h1>About</h1>
      </div>

      <div className="row">
        <MyLine />
      </div>

      <div className="row">
        <div className="col-sm-5 col-md-3">
          <img src={ProfileImg} className="my-profilepic img-thumbnail" />
        </div>

        <div className="col">
          <p>
            Hi! I'm Dolfo. I'm a software engineer at TechnoPro Engineering.
            Currently dispatched at Nissan Automotive. Right now, I am in charge
            of improving our workflows and creating tools and applications to
            improve efficiency. In my spare time, Im studying web development
            which I found interesting. Its a blend of logic and creativity which
            I really enjoy.
          </p>

          <p>
            <i className="fa-solid fa-envelope"></i>{" "}
            delafuente.rodolfo4@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}

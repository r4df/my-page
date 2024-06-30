import React from "react";
import "../component/WorkHistory.css";

export default function WorkHistory(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="container">
            <div className="row mb-3">
              <div className="col-5">
                <img
                  src={require(`../../About/image/${props.whlist.Company.Logo}`)}
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="col">
                <h2>{props.whlist.Company.Name}</h2>
              </div>
            </div>
            <div className="row">
              <div>
                <p>
                  <i className="fa-solid fa-circle-info"></i>{" "}
                  {props.whlist.Company.Description}
                </p>
                <p>
                  <i className="fa-solid fa-location-dot"></i>{" "}
                  {props.whlist.Company.Address}
                </p>
                <p>
                  <i className="fa-solid fa-timeline"></i> Tenure:{" "}
                  {props.whlist.Company.Tenure}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="row">
            <h5>
              <i className="fa-solid fa-gears fa-spin"></i> Roles:
            </h5>
            <ul>
              {props.whlist.Roles.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="row">
            <h5>
              <i className="fa-solid fa-code fa-fade"></i> Skills Learned:
            </h5>
            <div className="my-skillslist">
              {props.whlist.SkillsLearned.map((item, index) => (
                <div key={index} className="my-skills">
                    <p>{item.Name}</p>
                    <img src={require(`../../About/image/${item.Icon}`)} alt="" className="my-skillicon" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

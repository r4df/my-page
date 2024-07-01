import React from "react";

import WorkHistoryList from "../WorkHistoryList.json";
import WorkHistory from "../component/WorkHistory.tsx";
import MyLine from "../../common/MyLine.tsx";

export default function ExperienceBoard() {
  return (
    <div className="container">
      <div className="row">
        <h1>Experience</h1>
      </div>

      <div className="row">
        <div className="container">
          {WorkHistoryList.map((item, index) => (
            <div className="row" key={index}>
              <MyLine />
              <WorkHistory whlist={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

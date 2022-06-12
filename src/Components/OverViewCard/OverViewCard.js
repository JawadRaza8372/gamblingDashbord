import { CircularProgressbar } from "react-circular-progressbar";
import React from "react";
import "react-circular-progressbar/dist/styles.css";

import "./OverViewCard.scss";
function OverViewCard({ children }) {
  return (
    <div className="overviewcard">
      <div className="columndiv">
        <h1>heading</h1>
        <span>subheading</span>
      </div>
      <div className="seccolmn">
        <CircularProgressbar value={80} text="80%" />
      </div>
    </div>
  );
}

export default OverViewCard;

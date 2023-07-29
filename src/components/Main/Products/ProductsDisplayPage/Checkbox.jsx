import React from "react";
import ChairIcon from "@mui/icons-material/Chair";
function Checkbox() {
  return (
    <div className="checkbox_div">
      <div className="title">
        <div className="checkboxLabel">
          <input type="checkbox" name="seat" id="all" />
          <i className="fi fi-sr-apps" id="checkIcon"></i>
        </div>
        <span id="name">All</span>
        <span id="desc">3517 options</span>
      </div>
      <div className="title">
        <div className="checkboxLabel">
          <input type="checkbox" name="seat" id="sofa1" />
          <i className="fas fa-couch" id="checkIcon"></i>
        </div>
        <span id="name">3 seater sofas</span>
        <span id="desc">1226 options</span>
      </div>
      <div className="title">
        <div className="checkboxLabel">
          <input type="checkbox" name="seat" id="sofa2" />
          <ChairIcon id="checkIcon" />
        </div>
        <span id="name">1 seater sofas</span>
        <span id="desc">1085 options</span>
      </div>
    </div>
  );
}

export default Checkbox;

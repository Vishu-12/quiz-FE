import React from "react";

export default function SingleQues() {
  return (
    <div className="single-ques">
      <div className="countNtimer">
        <div>01/04</div>
        <div style={{ color: "#D60000" }}>00:10s</div>
      </div>
      <div className="ques-heading-container">
        <p className="ques-heading">
          Your question text comes here, its a sample text.
        </p>
        <div className="options-container">
          <div className="options">1</div>
          <div className="options">1</div>
          <div className="options">1</div>
          <div className="options">1</div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="next-button">NEXT</button>
        </div>
      </div>
    </div>
  );
}

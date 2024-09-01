import React from "react";
import congrats from "../../assets/congrats.png";

export default function Congrats() {
  return (
    <div
      className="congrats"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <div className="congrats-msg">Congrats Quiz is completed</div>
        <div style={{ textAlign: "center" }}>
          <img src={congrats} alt="" />
        </div>

        <div className="score">
          Your Score is <span style={{ color: "#60B84B" }}>03/04</span>
        </div>
      </div>
    </div>
  );
}

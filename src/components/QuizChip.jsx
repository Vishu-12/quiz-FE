import React from "react";
import eye from "../assets/eye_icon.png";

export default function QuizChip() {
  return (
    <div
      style={{
        background: "#FFFFFF",
        width: "70%",
        padding: ".5rem 1rem",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "15px",
        }}
      >
        <span style={{ fontSize: "24px" }}>Quiz 1</span>
        <span
          style={{ color: "#FF5D01", display: "flex", alignItems: "center " }}
        >
          667 <img src={eye} alt="" />
        </span>
      </div>
      <div style={{ color: "#60B84B", fontSize: "12px" }}>
        Created on : 04 Sep, 2023
      </div>
    </div>
  );
}

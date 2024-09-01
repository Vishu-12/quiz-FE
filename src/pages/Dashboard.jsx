import React from "react";
import QuizChip from "../components/QuizChip";

export default function Dashboard() {
  return (
    <div
      style={{
        backgroundColor: "#EDEDED",
        width: "100%",
        padding: "5rem",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            marginTop: "3rem",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              background: "#FFFFFF",
              color: "#FF5D01",
              borderRadius: "12px",
              width: "30%",
              textAlign: "center",
              padding: "1rem",
              height: "max-content",
            }}
          >
            <span style={{ fontSize: "60px" }}>12</span>
            <span style={{ fontSize: "30px", marginLeft: "1rem" }}>Quiz</span>
            <div style={{ fontSize: "30px" }}>Created</div>
          </div>
          <div
            style={{
              background: "#FFFFFF",
              color: "#60B84B",
              borderRadius: "12px",
              width: "30%",
              textAlign: "center",
              padding: "1rem",
              height: "max-content",
            }}
          >
            <span style={{ fontSize: "60px" }}>110</span>
            <span style={{ fontSize: "30px", marginLeft: "1rem" }}>
              questions
            </span>
            <div style={{ fontSize: "30px" }}>Created</div>
          </div>
          <div
            style={{
              background: "#FFFFFF",
              color: "#5076FF",
              borderRadius: "12px",
              width: "30%",
              textAlign: "center",
              padding: "1rem",
              height: "max-content",
            }}
          >
            <span style={{ fontSize: "60px" }}>1000</span>
            <span style={{ fontSize: "30px", marginLeft: "1rem" }}>Total</span>
            <div style={{ fontSize: "30px" }}>Impressions</div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "5rem" }}>
        <div style={{ marginBottom: "2rem" }}>
          <h1>Trending Quizs</h1>
        </div>
        <div style={{ padding: "1rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto auto auto auto",
              rowGap: "2rem",
              columnGap: "3rem",
            }}
          >
            <QuizChip />
            <QuizChip />
            <QuizChip />
            <QuizChip />
            <QuizChip />
            <QuizChip />
            <QuizChip />
            <QuizChip />
            <QuizChip />
            <QuizChip />
            <QuizChip />
            <QuizChip />
          </div>
        </div>
      </div>
    </div>
  );
}

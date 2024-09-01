import React from "react";

export default function AnalysisPoll() {
  return (
    <div
      style={{
        backgroundColor: "#EDEDED",
        width: "85%",
        padding: "5rem",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p style={{ fontSize: "50px", color: "#5076FF", marginBottom: "3rem" }}>
          Quiz 2 Question Analysis
        </p>
        <div style={{ color: "#FF5D01" }}>
          <p>Created on : 04 Sep, 2023</p>
          <p>Impressions : 667</p>
        </div>
      </div>
      <div>
        <p style={{ fontSize: "1.7rem", fontWeight: "500" }}>
          Q.1 Question place holder for analysis ?{" "}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            textAlign: "center",
            columnGap: "1rem",
            marginTop: "2rem",
            width: "70%",
          }}
        >
          <div
            style={{
              background: "white",
              padding: ".7rem 1rem",
              borderRadius: "10px",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "30px" }}>60</span>
            <span style={{ fontSize: "14px", marginLeft: "1.4rem" }}>
              Option 1
            </span>
          </div>
          <div
            style={{
              background: "white",
              padding: ".7rem 1rem",
              borderRadius: "10px",
            }}
          >
            <span style={{ fontSize: "30px" }}>60</span>
            <span style={{ fontSize: "14px", marginLeft: "1.4rem" }}>
              Option 1
            </span>
          </div>
          <div
            style={{
              background: "white",
              padding: ".7rem 1rem",
              borderRadius: "10px",
            }}
          >
            <span style={{ fontSize: "30px" }}>60</span>
            <span style={{ fontSize: "14px", marginLeft: "1.4rem" }}>
              Option 1
            </span>
          </div>
          <div
            style={{
              background: "white",
              padding: ".7rem 1rem",
              borderRadius: "10px",
            }}
          >
            <span style={{ fontSize: "30px" }}>60</span>
            <span style={{ fontSize: "14px", marginLeft: "1.4rem" }}>
              Option 1
            </span>
          </div>
        </div>
      </div>
      <hr
        style={{
          margin: "2rem 0",
          width: "72%",
          background: "#D7D7D7",
          height: "2px",
          border: "none",
        }}
      />
    </div>
  );
}

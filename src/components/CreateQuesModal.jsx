import React from "react";
import QuesForm from "./QuesForm";

export default function CreateQuesModal() {
  return (
    <div className="modal">
      <form className="modal-content" style={{ width: "35%", padding: "4rem" }}>
        <div style={{ width: "100%", textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#969696",
              }}
            >
              <p
                style={{
                  padding: ".5rem",
                  height: "30px",
                  width: "30px",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",

                  borderRadius: "50%",
                }}
              >
                1
              </p>
              <p
                style={{
                  padding: ".5rem",
                  height: "30px",
                  width: "30px",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
                  borderRadius: "50%",
                  marginLeft: "1rem",
                }}
              >
                2
              </p>
              <p
                style={{
                  borderRadius: "50%",
                  marginLeft: "1rem",
                  fontSize: "30px",
                }}
              >
                +
              </p>
            </div>
            <div style={{ color: "#9F9F9F" }}>Max 5 questions</div>
          </div>
          <div style={{ marginTop: "2rem" }}>
            <QuesForm />
          </div>
        </div>
      </form>
    </div>
  );
}

import React from "react";

export default function DeleteQuizModal() {
  return (
    <div className="modal">
      <form className="modal-content">
        <div style={{ width: "100%", textAlign: "center" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontSize: "39px",
                color: "#474444",
                width: "70%",
                fontWeight: "600",
              }}
            >
              Are you confirm you want to delete ?
            </p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "2rem",
            }}
          >
            <button
              // onClick={onConfirm}
              style={{
                background: "#FF4B4B",
                fontSize: "18px",
                color: "white",
                borderRadius: "10px",
                border: "none",
                padding: ".7rem 1rem",
                width: "43%",
              }}
            >
              Confirm Delete
            </button>
            <button
              // onClick={onClose}
              style={{
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
                background: "white",
                fontSize: "18px",
                borderRadius: "10px",
                border: "none",
                padding: ".7rem 1rem",
                width: "43%",
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

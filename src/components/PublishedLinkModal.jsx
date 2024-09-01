import React from "react";
import crossicon from "../assets/cross.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PublishedLinkModal({ onclose }) {
  function notify(e) {
    e.preventDefault();
    console.log("jkzkjdnh");
    toast.success("Link copied to Clipboard");
  }
  return (
    <div className="modal">
      <form className="modal-content" style={{ padding: "4rem" }}>
        <img
          onClick={onclose}
          src={crossicon}
          alt=""
          style={{
            position: "fixed",
            top: ".5rem",
            right: ".5rem",
            cursor: "pointer",
          }}
        />
        <div
          style={{
            width: "100%",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "90%" }}>
            <p
              style={{
                fontSize: "34px",
                color: "#474444",
                textAlign: "center",
                margin: "2rem 0",
                fontWeight: "600",
                alignItems: "center",
              }}
            >
              Congrats your Quiz is Published!
            </p>
            <div
              style={{
                width: "100%",
                fontSize: "20px",
                background: "#EDEDED",
                padding: ".4rem 1.3rem",
                borderRadius: "10px",
                textAlign: "left",
                fontWeight: "600",
              }}
            >
              your link is here
            </div>
            <button
              style={{
                background: "#60B84B",
                fontSize: "14px",
                color: "white",
                borderRadius: "10px",
                border: "none",
                padding: ".5rem 1rem",
                marginTop: "2rem",
                width: "43%",
              }}
              onClick={notify}
            >
              Share
            </button>
            <ToastContainer
              toastStyle={{
                height: "10px",
                fontSize: "14px",
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

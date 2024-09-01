import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import CreateQuizModal from "./CreateQuizModal";
import Modal from "react-modal";
import PublishedLinkModal from "./PublishedLinkModal";

export default function Sidebar() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("dashboard");
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div className="sidebar">
      <div style={{ padding: "1rem" }}>
        <h1
          style={{
            color: "#474444",
            fontFamily: "Jomhuria, serif",
            fontWeight: "400",
            textAlign: "center",
            fontSize: "55px",
          }}
        >
          QUIZZIE
        </h1>
        <div
          style={{
            fontSize: "1.3rem",
            display: "flex",
            height: "70vh",
            textAlign: "left",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Link
              onClick={() => setActiveItem("dashboard")}
              style={{
                padding: ".6rem 4rem",
                marginBottom: "2rem",
                borderRadius: "10px",
                width: "max-content",
                boxShadow:
                  activeItem === "dashboard"
                    ? "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)"
                    : "none",
                textDecoration: "none",
                color: "black",
              }}
              to={"/"}
            >
              Dashboard
            </Link>
            <Link
              onClick={() => setActiveItem("analytics")}
              style={{
                boxShadow:
                  activeItem === "analytics"
                    ? "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)"
                    : "none",
                padding: ".6rem 4rem",
                marginBottom: "2rem",
                borderRadius: "10px",
                width: "max-content",
                textDecoration: "none",
                color: "black",
              }}
              to={"/analysis"}
            >
              Analytics
            </Link>
            <Link
              onClick={openModal}
              style={{
                padding: ".6rem 4rem",
                marginBottom: "2rem",
                borderRadius: "10px",
                width: "max-content",
                textDecoration: "none",
                color: "black",
              }}
            >
              Create Quiz
            </Link>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Example Modal"
              className="modal"
              overlayClassName="overlay"
            >
              <CreateQuizModal />
              {/* <PublishedLinkModal onclose={closeModal} /> */}
            </Modal>
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <hr style={{ width: "70%" }} />
        </div>
        <div
          style={{
            fontWeight: "700",
            textAlign: "center",
            marginTop: "2rem",
            fontSize: "20px",
          }}
        >
          <Link
            to={"/login"}
            style={{ textDecoration: "none", color: "black" }}
            onClick={localStorage.clear()}
          >
            LOGOUT
          </Link>
        </div>
      </div>
    </div>
  );
}

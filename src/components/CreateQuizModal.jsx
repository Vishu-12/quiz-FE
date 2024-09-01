import React, { useEffect, useState } from "react";
import CreatePollModal from "./CreatePollModal";
import CreateQuesModal from "./CreateQuesModal";
import Modal from "react-modal";
import "./css/CreateQuizModal.css";
import { createQuiz } from "../services/quiz";
import { useNavigate } from "react-router-dom";

export default function CreateQuizModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    quizName: "",
    type: "",
  });
  const [data, setData] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);
  async function handleSubmit(e) {
    e.preventDefault();

    const response = await createQuiz(formData);
    console.log(response);
    if (response.status === 201) {
      console.log("hello");
      console.log(formData.type === "ques");
      setData(response.data.quiz._id);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function openModal(e) {
    e.preventDefault();
    handleSubmit(e);
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="modal">
      <form className="modal-content" style={{ width: "35%", padding: "4rem" }}>
        <div style={{ width: "100%", textAlign: "center" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <input
              type="text"
              placeholder="Quiz name"
              style={{
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
                background: "white",
                fontSize: "20px",
                borderRadius: "10px",
                border: "none",
                padding: ".7rem 1rem",
                width: "100%",
              }}
              name="quizName"
              value={formData.quizName}
              onChange={handleChange}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "2rem 1rem",
              color: "#9F9F9F",
            }}
          >
            <label htmlFor="" style={{ fontSize: "20px" }}>
              Quiz Type
            </label>

            <label
              className="labels"
              style={{
                background: "white",
                fontSize: "18px",
                border: "none",
              }}
            >
              <input
                type="radio"
                name="type"
                value="ques"
                checked={formData.type === "ques"}
                onChange={handleChange}
              />
              <span
                style={{
                  padding: ".7rem 4rem",
                  borderRadius: "10px",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
                }}
              >
                Q & A
              </span>
            </label>

            <label
              className="labels"
              style={{
                background: "white",
                fontSize: "18px",
                border: "none",
              }}
            >
              <input
                type="radio"
                name="type"
                value="poll"
                checked={formData.type === "poll"}
                onChange={handleChange}
              />
              <span
                style={{
                  padding: ".7rem 4rem",
                  borderRadius: "10px",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
                }}
              >
                Poll Type
              </span>
            </label>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "2rem",
            }}
          >
            <button
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
            <button
              style={{
                background: "#60B84B",
                fontSize: "18px",
                color: "white",
                borderRadius: "10px",
                border: "none",
                padding: ".7rem 1rem",
                width: "43%",
              }}
              onClick={openModal}
            >
              Continue
            </button>
          </div>
          {formData.type === "poll" ? (
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Example Modal"
              className="modal"
              overlayClassName="overlay"
            >
              <CreatePollModal quizID={data} />
            </Modal>
          ) : (
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Example Modal"
              className="modal"
              overlayClassName="overlay"
            >
              <CreateQuesModal quizID={data} />
            </Modal>
          )}
        </div>
      </form>
    </div>
  );
}

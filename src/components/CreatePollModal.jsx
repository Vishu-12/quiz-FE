import React, { useState } from "react";
import PollForm from "./PollForm";
import cross from "../assets/cross.png";

export default function CreatePollModal({ quizId }) {
  const [selectedQues, setSelectedQues] = useState(0);
  const [questions, setQuestions] = useState([
    {
      text: "",
      optionType: "",
      options: {
        op1: { text: "", url: "" },
        op2: { text: "", url: "" },
        op3: { text: "", url: "" },
        op4: { text: "", url: "" },
      },
    },
  ]);
  const handleAddQuestion = () => {
    setSelectedQues(questions.length);
    setQuestions([
      ...questions,
      {
        text: "",
        optionType: "Text",
        options: {
          op1: { text: "", url: "" },
          op2: { text: "", url: "" },
          op3: { text: "", url: "" },
          op4: { text: "", url: "" },
        },
      },
    ]);
  };

  const handleRemoveQuestion = (index) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };
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
              {questions.map((question, index) => (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
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
                      marginLeft: "1rem",
                    }}
                  >
                    {index + 1}
                  </p>
                  <img
                    src={cross}
                    alt=""
                    width={20}
                    style={{
                      color: "black",
                      position: "relative",
                      right: ".8rem",
                      bottom: "1.1rem",
                    }}
                    onClick={() => handleRemoveQuestion(index)}
                  />
                </div>
              ))}
              {questions.length < 6 && (
                <p
                  style={{
                    borderRadius: "50%",
                    marginLeft: "1rem",
                    fontSize: "30px",
                  }}
                  onClick={handleAddQuestion}
                >
                  +
                </p>
              )}
            </div>
            <div style={{ color: "#9F9F9F" }}>Max 5 questions</div>
          </div>

          <div style={{ marginTop: "2rem" }}>
            <PollForm question={questions[selectedQues]} />
          </div>
        </div>
      </form>
    </div>
  );
}

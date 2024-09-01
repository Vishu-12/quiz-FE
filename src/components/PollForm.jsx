import React, { useState } from "react";
import delete_icon from "../assets/delete_icon.png";

export default function PollForm({ question }) {
  const [inputRadioValues, setInputRadioValues] = useState("onlytext");

  function handleOnchange(e) {
    console.log(e.target.value);
    setInputRadioValues(e.target.value);
  }

  return (
    <div>
      {" "}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          placeholder="Poll Question"
          style={{
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
            background: "white",
            fontSize: "15px",
            borderRadius: "10px",
            border: "none",
            padding: ".7rem 1rem",
            width: "100%",
          }}
          value={question.text}
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
          Option Type
        </label>

        <div>
          <input
            type="radio"
            defaultChecked
            name="quesOptions"
            value={question.type}
            onChange={handleOnchange}
          />
          <label style={{ marginLeft: ".5rem" }}>Text</label>
        </div>
        <div>
          <input
            type="radio"
            name="quesOptions"
            value={question.type}
            onChange={handleOnchange}
          />
          <label style={{ marginLeft: ".5rem" }}>Image URL</label>
        </div>
        <div>
          <input
            type="radio"
            name="quesOptions"
            value={question.type}
            onChange={handleOnchange}
          />
          <label style={{ marginLeft: ".5rem" }}>Text & Image URL</label>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <div>
            {inputRadioValues === "onlytext" && (
              <div>
                <div style={{ marginBottom: "1rem" }}>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Text"
                    style={{
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
                      background: "white",
                      fontSize: "15px",
                      borderRadius: "10px",
                      border: "none",
                      padding: ".7rem 1rem",
                      width: "50%",
                    }}
                    value={question.options.op1.text}
                    required
                  />{" "}
                  <img
                    src={delete_icon}
                    alt=""
                    style={{
                      marginLeft: "2rem",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  />
                </div>{" "}
                <div style={{ marginBottom: "1rem" }}>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Text"
                    style={{
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
                      background: "white",
                      fontSize: "15px",
                      borderRadius: "10px",
                      border: "none",
                      padding: ".7rem 1rem",
                      width: "50%",
                    }}
                    value={question.options.op2.text}
                    required
                  />{" "}
                  <img
                    src={delete_icon}
                    alt=""
                    style={{
                      marginLeft: "2rem",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  />
                </div>{" "}
                <div style={{ marginBottom: "1rem" }}>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Text"
                    style={{
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
                      background: "white",
                      fontSize: "15px",
                      borderRadius: "10px",
                      border: "none",
                      padding: ".7rem 1rem",
                      width: "50%",
                    }}
                    value={question.options.op3.text}
                    required
                  />{" "}
                  <img
                    src={delete_icon}
                    alt=""
                    style={{
                      marginLeft: "2rem",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  />
                </div>{" "}
                <div style={{ marginBottom: "1rem" }}>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Text"
                    style={{
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
                      background: "white",
                      fontSize: "15px",
                      borderRadius: "10px",
                      border: "none",
                      padding: ".7rem 1rem",
                      width: "50%",
                    }}
                    value={question.options.op4.text}
                    required
                  />{" "}
                  <img
                    src={delete_icon}
                    alt=""
                    style={{
                      marginLeft: "2rem",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>
            )}
            {inputRadioValues === "onlyimage" && (
              <div>
                <div style={{ marginBottom: "1rem" }}>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Image URL"
                    style={{
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
                      background: "white",
                      fontSize: "15px",
                      borderRadius: "10px",
                      border: "none",
                      padding: ".7rem 1rem",
                      width: "50%",
                    }}
                    value={question.options.op1.url}
                    required
                  />{" "}
                  <img
                    src={delete_icon}
                    alt=""
                    style={{
                      marginLeft: "2rem",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Image URL"
                    style={{
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
                      background: "white",
                      fontSize: "15px",
                      borderRadius: "10px",
                      border: "none",
                      padding: ".7rem 1rem",
                      width: "50%",
                    }}
                    value={question.options.op2.url}
                    required
                  />{" "}
                  <img
                    src={delete_icon}
                    alt=""
                    style={{
                      marginLeft: "2rem",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Image URL"
                    style={{
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
                      background: "white",
                      fontSize: "15px",
                      borderRadius: "10px",
                      border: "none",
                      padding: ".7rem 1rem",
                      width: "50%",
                    }}
                    value={question.options.op3.url}
                    required
                  />
                  <img
                    src={delete_icon}
                    alt=""
                    style={{
                      marginLeft: "2rem",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  />
                </div>

                <div style={{ marginBottom: "1rem" }}>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Image URL"
                    style={{
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
                      background: "white",
                      fontSize: "15px",
                      borderRadius: "10px",
                      border: "none",
                      padding: ".7rem 1rem",
                      width: "50%",
                    }}
                    value={question.options.op4.url}
                    required
                  />{" "}
                  <img
                    src={delete_icon}
                    alt=""
                    style={{
                      marginLeft: "2rem",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>
            )}
            {inputRadioValues === "both" && (
              <div>
                <div
                  style={{
                    marginBottom: "1rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Text"
                    style={{
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
                      background: "white",
                      fontSize: "15px",
                      borderRadius: "10px",
                      border: "none",
                      padding: ".7rem 1rem",
                      width: "20%",
                    }}
                    value={question.options.op1.text}
                    required
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Image URL"
                    style={{
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
                      background: "white",
                      fontSize: "15px",
                      borderRadius: "10px",
                      border: "none",
                      padding: ".7rem 1rem",
                      width: "20%",

                      marginLeft: "1rem",
                    }}
                    value={question.options.op1.url}
                    required
                  />

                  <img
                    src={delete_icon}
                    alt=""
                    style={{
                      marginLeft: "2rem",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  />
                </div>
                <div
                  style={{
                    marginBottom: "1rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Text"
                    style={{
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
                      background: "white",
                      fontSize: "15px",
                      borderRadius: "10px",
                      border: "none",
                      padding: ".7rem 1rem",
                      width: "20%",
                    }}
                    value={question.options.op2.text}
                    required
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Image URL"
                    style={{
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
                      background: "white",
                      fontSize: "15px",
                      borderRadius: "10px",
                      border: "none",
                      padding: ".7rem 1rem",
                      width: "20%",

                      marginLeft: "1rem",
                    }}
                    value={question.options.op2.url}
                    required
                  />
                  <img
                    src={delete_icon}
                    alt=""
                    style={{
                      marginLeft: "2rem",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  />
                </div>{" "}
                <div
                  style={{
                    marginBottom: "1rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Text"
                    style={{
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
                      background: "white",
                      fontSize: "15px",
                      borderRadius: "10px",
                      border: "none",
                      padding: ".7rem 1rem",
                      width: "20%",
                    }}
                    value={question.options.op3.text}
                    required
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Image URL"
                    style={{
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
                      background: "white",
                      fontSize: "15px",
                      borderRadius: "10px",
                      border: "none",
                      padding: ".7rem 1rem",
                      width: "20%",

                      marginLeft: "1rem",
                    }}
                    value={question.options.op3.url}
                    required
                  />

                  <img
                    src={delete_icon}
                    alt=""
                    style={{
                      marginLeft: "2rem",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  />
                </div>{" "}
                <div
                  style={{
                    marginBottom: "1rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Text"
                    style={{
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
                      background: "white",
                      fontSize: "15px",
                      borderRadius: "10px",
                      border: "none",
                      padding: ".7rem 1rem",
                      width: "20%",
                    }}
                    value={question.options.op4.text}
                    required
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Image URL"
                    style={{
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
                      background: "white",
                      fontSize: "15px",
                      borderRadius: "10px",
                      border: "none",
                      padding: ".7rem 1rem",
                      width: "20%",

                      marginLeft: "1rem",
                    }}
                    value={question.options.op4.url}
                    required
                  />

                  <img
                    src={delete_icon}
                    alt=""
                    style={{
                      marginLeft: "2rem",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
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
            fontSize: "13px",
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
            fontSize: "13px",
            color: "white",
            borderRadius: "10px",
            border: "none",
            padding: ".7rem 1rem",
            width: "43%",
          }}
        >
          Create Quiz
        </button>
      </div>
    </div>
  );
}

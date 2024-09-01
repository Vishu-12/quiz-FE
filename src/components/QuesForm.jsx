import React, { useState } from "react";
import delete_icon from "../assets/delete_icon.png";

export default function QuesForm() {
  const [inputList, setInputList] = useState([{ field: "" }]);
  const [inputRadioValues, setInputRadioValues] = useState("onlytext");
  function handleOnchange(e) {
    console.log(e.target.value);
    setInputRadioValues(e.target.value);
  }

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleRemove = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAdd = () => {
    setInputList([...inputList, { field: "" }]);
  };
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
          placeholder="Question"
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
            name="quesOptions"
            value="onlytext"
            defaultChecked
            onChange={handleOnchange}
          />
          <label style={{ marginLeft: ".5rem" }}>Text</label>
        </div>
        <div>
          <input
            type="radio"
            name="quesOptions"
            value="onlyimage"
            onChange={handleOnchange}
          />
          <label style={{ marginLeft: ".5rem" }}>Image URL</label>
        </div>
        <div>
          <input
            type="radio"
            name="quesOptions"
            value="both"
            onChange={handleOnchange}
          />
          <label style={{ marginLeft: ".5rem" }}>Text & Image URL</label>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          {inputList.map((singleInput, index) => (
            <div key={index}>
              {inputRadioValues === "onlytext" && (
                <div style={{ marginBottom: "1rem" }}>
                  <input
                    type="radio"
                    name="quesType"
                    style={{
                      marginRight: "1rem",
                      fontSize: "1rem",
                      color: "green",
                    }}
                    onChange={(e) => handleInputChange(e, index)}
                    required
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    className="correctAns"
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
                    onChange={(e) => handleInputChange(e, index)}
                    required
                  />
                  {inputList.length > 2 && (
                    <img
                      src={delete_icon}
                      alt=""
                      onClick={() => handleRemove(index)}
                      style={{
                        marginLeft: "2rem",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    />
                  )}
                </div>
              )}
              {inputRadioValues === "onlyimage" && (
                <div style={{ marginBottom: "1rem" }}>
                  <input
                    type="radio"
                    name="quesType"
                    style={{
                      marginRight: "1rem",
                      fontSize: "1rem",
                      color: "green",
                    }}
                    onChange={(e) => handleInputChange(e, index)}
                    required
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    className="correctAns"
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
                    onChange={(e) => handleInputChange(e, index)}
                    required
                  />{" "}
                  {inputList.length > 2 && (
                    <img
                      src={delete_icon}
                      alt=""
                      onClick={() => handleRemove(index)}
                      style={{
                        marginLeft: "2rem",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    />
                  )}
                </div>
              )}
              {inputRadioValues === "both" && (
                <div
                  style={{
                    marginBottom: "1rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="radio"
                    name="quesType"
                    style={{
                      marginRight: "1rem",
                      fontSize: "1rem",
                      color: "green",
                    }}
                    onChange={(e) => handleInputChange(e, index)}
                    required
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    className="correctAns"
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
                    onChange={(e) => handleInputChange(e, index)}
                    required
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Image URL"
                    className="correctAns"
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
                    onChange={(e) => handleInputChange(e, index)}
                    required
                  />
                  {inputList.length > 2 && (
                    <img
                      src={delete_icon}
                      alt=""
                      onClick={() => handleRemove(index)}
                      style={{
                        marginLeft: "2rem",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    />
                  )}
                </div>
              )}
              {inputList.length - 1 === index && inputList.length < 4 && (
                <button
                  style={{
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
                    background: "white",
                    fontSize: "15px",
                    borderRadius: "10px",
                    border: "none",
                    padding: ".7rem 1rem",
                    width: "60%",
                    cursor: "pointer",
                  }}
                  onClick={handleAdd}
                >
                  Add Options
                </button>
              )}
            </div>
          ))}
        </div>

        <div style={{ width: "30%" }}>
          <p style={{ color: "#9F9F9F" }}>Timer</p>
          <div style={{ marginTop: "1rem" }}>
            {" "}
            <label
              className="timer-labels"
              style={{
                background: "white",
                fontSize: "13px",
                border: "none",
              }}
            >
              <input type="radio" name="quizType" value="OFF" />
              <span
                style={{
                  padding: ".7rem 1rem",
                  borderRadius: "10px",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
                }}
              >
                OFF
              </span>
            </label>
            <br />
            <br />
            <label
              className="timer-labels"
              style={{
                background: "white",
                fontSize: "13px",
                border: "none",
              }}
            >
              <input type="radio" name="quizType" value="5sec" />
              <span
                style={{
                  padding: ".7rem 1rem",
                  borderRadius: "10px",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
                }}
              >
                5 Sec
              </span>
            </label>
            <br />
            <br />
            <label
              className="timer-labels"
              style={{
                background: "white",
                fontSize: "13px",
                border: "none",
              }}
            >
              <input type="radio" name="quizType" value="10sec" />
              <span
                style={{
                  padding: ".7rem 1rem",
                  borderRadius: "10px",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
                }}
              >
                10 Sec
              </span>
            </label>
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

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/auth";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  function handleLogin(e) {
    e.preventDefault();
    if (form?.email !== "" && form?.password !== "") {
      login(form).then((response) => {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        navigate("/");
      });
    }
  }
  function handleChange(e) {
    if (e.target.name === "email") {
      setForm({ ...form, email: e.target.value });
    } else if (e.target.name === "password") {
      setForm({ ...form, password: e.target.value });
    }
  }
  return (
    <div className="login">
      <div
        style={{
          display: "flex",
          backgroundColor: "#FFFFFF",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignContent: "center",
          borderRadius: "10px",
          fontWeight: 600,
        }}
      >
        <div
          style={{
            alignContent: "center",
            width: "50%",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              color: "#474444",
              marginBottom: "2rem",
              fontFamily: "Jomhuria, serif",
              fontSize: "100px",
              fontWeight: "400",
            }}
          >
            QUIZZIE
          </h1>
          <Link
            to={"/signup"}
            style={{
              padding: ".1rem 3rem",
              background: "#FFFFFF",
              border: "none",
              fontSize: "1.4rem",
              fontWeight: 600,
              textDecoration: "none",
              color: "black",
            }}
          >
            Sign Up
          </Link>
          <button
            style={{
              padding: ".4rem 5rem",
              background: "#FFFFFF",
              border: "none",
              boxShadow:
                "-1px -1px 40px 1px rgba(0, 25, 255,0.1), 1px 2px 40px 1px rgba(0, 25, 255,0.19)",
              marginBottom: "4rem",
              fontSize: "1.3rem",
              borderRadius: "5px",
              fontWeight: "600",
              marginLeft: "6rem",
            }}
          >
            Log In
          </button>
          <form action="">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "right",
              }}
            >
              <div
                style={{
                  textAlign: "right",
                  width: "30%",
                  fontSize: "1.4rem",
                  marginRight: "2rem",
                }}
              >
                <label htmlFor="">Email</label>
              </div>
              <div>
                <input
                  style={{
                    background: "#F4F4F4",
                    border: "none",
                    padding: ".5rem 1rem",
                    width: "20vw",
                    fontSize: "1.4rem",
                    borderRadius: "10px 10px 0px 0px",
                  }}
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  name="email"
                  id=""
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "right",
              }}
            >
              <div
                style={{
                  textAlign: "right",
                  width: "30%",
                  fontSize: "1.4rem",
                  marginRight: "2rem",
                }}
              >
                <label htmlFor="">Password</label>
              </div>
              <div>
                <input
                  style={{
                    background: "#F4F4F4",
                    border: "none",
                    padding: ".5rem 1rem",
                    width: "20vw",
                    fontSize: "1.4rem",
                    borderRadius: "10px 10px 0px 0px",
                  }}
                  type="password"
                  name="password"
                  id=""
                  value={form.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button
              onClick={handleLogin}
              style={{
                background: "#A9BCFF",
                fontSize: "1.4rem",
                borderRadius: "10px",
                border: "none",
                padding: ".5rem 7rem",
                fontWeight: "600",
              }}
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

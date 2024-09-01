import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { register } from "../services/auth";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState();

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const response = await register(formData);

      // console.log(response);
      // response = await response.json();
      // navigate("/login");
      navigate("/login");

      console.log("Form submitted successfully!");
    } else {
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      console.log("Form submission failed due to validation errors.");
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.name.trim()) {
      errors.name = "name is required";
    } else if (data.name.length < 4) {
      errors.name = "Invalid Name";
    }

    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Invalid Email";
    }

    if (!data.password) {
      errors.password = "Password is required";
    } else if (data.password.length < 8) {
      errors.password = "Weak password";
    }

    if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "password doesn’t match";
    }

    return errors;
  };

  return (
    <div className="signup">
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
              fontSize: "100px",
              marginBottom: "2rem",
              fontFamily: "Jomhuria, serif",
              fontWeight: "400",
            }}
          >
            QUIZZIE
          </h1>
          <button
            style={{
              padding: ".4rem 5rem",
              background: "#FFFFFF",
              border: "none",
              boxShadow:
                "-1px -1px 40px 1px rgba(0, 25, 255,0.1), 1px 2px 40px 1px rgba(0, 25, 255,0.19)",
              marginBottom: "2rem",
              fontSize: "1.3rem",
              borderRadius: "5px",
              fontWeight: 600,
            }}
          >
            Sign Up
          </button>
          <Link
            to={"/login"}
            style={{
              padding: ".1rem 3rem",
              background: "#FFFFFF",
              fontSize: "1.4rem",
              marginLeft: "6rem",
              fontWeight: 600,
              textDecoration: "none",
              color: "black",
            }}
          >
            Log In
          </Link>
          <form action="">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
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
                <label htmlFor="">Name</label>
              </div>
              <div>
                <input
                  className="inputs placeholderColor"
                  style={{
                    background: "#F4F4F4",
                    border: errors.name ? "2px solid #D60000" : " none",
                    padding: ".5rem 1rem",
                    width: "20vw",
                    fontSize: "1.4rem",
                    borderRadius: "10px 10px 0px 0px",
                  }}
                  type="text"
                  name="name"
                  id=""
                  value={formData?.name}
                  onChange={handleChange}
                  placeholder={errors.name && errors.name}
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
                <label htmlFor="">Email</label>
              </div>
              <div>
                <input
                  className="inputs placeholderColor"
                  style={{
                    background: "#F4F4F4",
                    border: errors.email ? "2px solid #D60000" : " none",
                    padding: ".5rem 1rem",
                    width: "20vw",
                    fontSize: "1.4rem",
                    borderRadius: "10px 10px 0px 0px",
                  }}
                  type="email"
                  name="email"
                  id=""
                  value={formData?.email}
                  onChange={handleChange}
                  placeholder={errors.email && errors.email}
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
                  className="inputs placeholderColor"
                  style={{
                    background: "#F4F4F4",
                    border: errors.password ? "2px solid #D60000" : " none",
                    padding: ".5rem 1rem",
                    width: "20vw",
                    fontSize: "1.4rem",
                    borderRadius: "10px 10px 0px 0px",
                  }}
                  type="password"
                  name="password"
                  id=""
                  value={formData?.password}
                  onChange={handleChange}
                  placeholder={errors.password && errors.password}
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
                <label htmlFor="">Confirm Password</label>
              </div>
              <div>
                <input
                  className="inputs placeholderColor"
                  style={{
                    background: "#F4F4F4",
                    border: errors.confirmPassword
                      ? "2px solid #D60000"
                      : " none",
                    padding: ".5rem 1rem",
                    width: "20vw",
                    fontSize: "1.4rem",
                    borderRadius: "10px 10px 0px 0px",
                  }}
                  type="password"
                  name="confirmPassword"
                  id=""
                  value={confirmPassword}
                  onChange={handleChange}
                  placeholder={errors.confirmPassword && errors.confirmPassword}
                />
              </div>
            </div>
            <button
              style={{
                background: "#A9BCFF",
                fontSize: "1.4rem",
                borderRadius: "10px",
                border: "none",
                padding: ".5rem 7rem",
                fontWeight: 600,
              }}
              onClick={handleSubmit}
            >
              Sign-Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

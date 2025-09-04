import React, { useState } from "react";
import { styled } from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { Navigate, navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setshowPassword] = useState(false);
  const [formValues, setformValue] = useState({ email: "", password: "" });
  const handleFormChange = (event) => {
    setformValue({ ...formValues, [event.target.name]: event.target.value });
  };
  const nav = useNavigate();
  const handleLogIn = async () => {
    try {
      const { email, password } = formValues;
      await signInWithEmailAndPassword(auth, email, password);
      onAuthStateChanged(auth, (currentUser) => {
        console.log(currentUser);
        if (currentUser) {
          nav("/");
        }
      });
      setformValue({ email: "", password: "" });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header />
        <div className="form-container flex column a-center j-center">
          <div className="form flex column a-center j-center">
            <div className="title">
              <h3>Login</h3>
            </div>
            <div className="container flex column">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={formValues.email}
                onChange={(event) => handleFormChange(event)}
              />

              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formValues.password}
                onChange={(event) => handleFormChange(event)}
              />

              <button onClick={handleLogIn}>Log In</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    grid-template-rows: 15vh 85vh;
    .form-container {
      gap: 2rem;
      height: 85vh;
      .form {
        padding: 2rem;
        background-color: #000000b0;
        width: 25vw;
        gap: 2rem;
        color: white;
        .container {
          gap: 2rem;
          input {
            padding: 0.5rem 1rem;
            width: 15rem;
          }
          button {
            padding: 0.5rem 1rem;
            background-color: #e50914;
            border: none;
            cursor: pointer;
            color: white;
            border-radius: 0.2rem;
            font-weight: bolder;
            font-size: 1.05rem;
          }
        }
      }
    }
  }
`;

export default Login;

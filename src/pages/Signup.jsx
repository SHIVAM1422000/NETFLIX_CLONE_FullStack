import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { Navigate, navigate, useNavigate } from "react-router-dom";

const Signup = () => {
  const [showPassword, setshowPassword] = useState(false);
  const [formValues, setformValue] = useState({ email: "", password: "" });
  const handleFormChange = (event) => {
    setformValue({ ...formValues, [event.target.name]: event.target.value });
  };
  useEffect(() => {
    let unsuscribe;
    try {
      unsuscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log(currentUser);
        if (currentUser) {
          nav("/");
        }
      });

      return unsuscribe;
    } catch (error) {
      console.error(error);
    }
  }, []);

  const nav = useNavigate();
  const handleSignUp = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(auth, email, password);
      setformValue({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container showPassword={showPassword}>
      <BackgroundImage />
      <div className="content">
        <Header login />
        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1> Unlimited movies, TV shows and more.</h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <h6>
              Ready to watch? Enter your email to create or restart membership.
            </h6>
          </div>
          <div className="form">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={formValues.email}
              onChange={(event) => handleFormChange(event)}
            />

            {showPassword && (
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formValues.password}
                onChange={(event) => handleFormChange(event)}
              />
            )}
            {!showPassword && (
              <button onClick={() => setshowPassword(true)}>Get Started</button>
            )}
          </div>
          <button onClick={handleSignUp}>Sign Up</button>
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
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body {
      gap: 1rem;
      .text {
        gap: 1rem;
        text-align: center;
        font-size: 2rem;
        h1 {
          padding: 0 25rem;
        }
      }
      .form {
        display: grid;
        grid-template-columns: ${({ showPassword }) =>
          showPassword ? "1fr 1fr" : "2fr 1fr"};
        width: 60%;
        input {
          color: black;
          border: none;
          padding: 1.5rem;
          font-size: 1.2rem;
          border: 1px solid black;
          &:focus {
            outline: none;
          }
        }

        button {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: white;
          font-weight: bolder;
          font-size: 1.05rem;
        }
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
`;
export default Signup;

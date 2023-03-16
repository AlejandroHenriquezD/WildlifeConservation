import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

const endpoint = "https://wildlifeconservationapp.000webhostapp.com/api/login";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    await axios.post(endpoint, {
      email: email,
      password: password,
    });
    navigate("/");
  };

  return (
    <>
      <form onSubmit={login}>
        <div class="container">
          <h2>SIGN IN</h2>
          <p>Sign in and start helping endangered species today!</p>

          <label for="Email">
            <b>Email</b>
          </label>
          <div className="signIn-form">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email"
              name="Email"
              required
            />

            <label for="psw">
              <b>CPassword</b>
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              placeholder="Password"
              name="Password"
              required
            />
          </div>
          <div class="clearfix">
            <button type="submit" class="signupbtn">
              SIGN IN
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignInForm;

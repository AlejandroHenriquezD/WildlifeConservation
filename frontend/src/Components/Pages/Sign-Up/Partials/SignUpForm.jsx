// const SignUpForm = () => {
//     return (
//       <>
// <form action="action_page.php">
//   <div class="container">
//     <h2>SIGN UP!</h2>
//     <p>Sign up and start helping endagered species today!</p>

//     <label for="Name"><b>Name</b></label>
//     <input type="text" placeholder="Name" name="Name" required />

//     <label for="Username"><b>Choose a Username</b></label>
//     <input type="Username" placeholder="Username" name="Username" required />

//     <label for="psw"><b>Choose a Password</b></label>
//     <input type="password" placeholder="Password" name="psw" required />

//     <div class="clearfix">
//       <button type="submit" class="signupbtn">SIGN UP!</button>
//     </div>
//   </div>
// </form>
//       </>
//     )
//   }

//   export default SignUpForm


import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./SignUpForm";

const endpoint2 =
  "https://wildlifeconservationapp.000webhostapp.com/api/register";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm] = useState("");

  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    await axios.post(endpoint2, {
      name: name,
      password: password,
      confirm_password: confirm_password,
      email: email,
    });

    navigate("/Sign-in");
  };
  return (
    <>
      <form onSubmit={register}>
        <div class="container">
          <h2>SIGN UP!</h2>
          <p>Sign up and start helping endagered species today!</p>
          <div className="signIn-form">
            <label for="Name">
              <b>Name</b>
            </label>
            <div className="signUp-form">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
                name="Name"
                required
              />

              <label for="Username">
                <b>Choose an Email</b>
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="Username"
                placeholder="Username"
                name="Username"
                required
              />

              <label for="psw">
                <b>Choose a Password</b>
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                name="psw"
                required
              />

              <label for="psw">
                <b>Confirm Password</b>
              </label>
              <input
                value={confirm_password}
                onChange={(e) => setConfirm(e.target.value)}
                type="password"
                placeholder="Password"
                name="confirmpsw"
                required
              />
            </div>
          </div>
          <div class="clearfix">
            <button type="submit" class="signupbtn">
              SIGN UP!
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignUpForm;

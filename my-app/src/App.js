import React, { useState } from "react";
import "./App.css";

const App = () => {
  // register state
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPass, setRegisterPass] = useState("");

  // login state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");

  // REGISTER USER
  const registerUser = async () => {};

  // LOGIN USER
  const loginUser = async () => {};

  // LOGOUT
  const logout = async () => {};

  return (
    <>
      <div className="main_form">
        <h1 style={{ textAlign: "center" }}>Firebase authentication</h1>

        <hr />

        <div
          style={{ background: "#ddd", textAlign: "center", padding: "5rem" }}
        >
          <h1>Register User : </h1>

          <input
            type="email"
            placeholder="email.."
            onChange={(e) => {
              setRegisterEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="password.."
            onChange={(e) => {
              setRegisterPass(e.target.value);
            }}
          />

          <button onClick={registerUser}>Register User</button>
          <br />
          <br />
          <br />
          <br />

          <h1>Login User : </h1>

          <input
            type="email"
            placeholder="email.."
            onChange={(e) => {
              setLoginEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="password.."
            onChange={(e) => {
              setLoginPass(e.target.value);
            }}
          />

          <button onClick={loginUser}>Login User</button>

          <h4> User Logged In: </h4>
          <span style={{ color: "green" }}>user info</span>

          <button onClick={logout}>Logout</button>
        </div>
      </div>
    </>
  );
};

export default App;

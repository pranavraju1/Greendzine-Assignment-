import { useState } from "react";
import "./login.scss";
import validator from "validator";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();
  const handleInput = () => {
    console.log("email", email);
    console.log("password", password);
    if (!email) {
      return alert("Please enter email");
    } else if (!password) {
      return alert("Please enter password");
    }
    if (!validator.isEmail(email)) {
      return alert("Please enter valid email");
    }
    if (password.length <= 2 || password.length > 30) {
      return alert("Password length should be from 3 - 30");
    }
    history("/home");
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="login">
      <div className="logo"></div>
      <div className="logo-text">We are Electric</div>
      <div className="input-container">
        <input
          className="inputs"
          type="text"
          placeholder="E-mail"
          required
          onChange={handleEmail}
          value={email}
        />
        <input
          className="inputs"
          type="text"
          placeholder="Password"
          required
          onChange={handlePassword}
          value={password}
        />
      </div>
      <div className="login-btn" onClick={handleInput}>
        Login
      </div>
      <div className="forgot-px">Forgot Passwprd?</div>
    </div>
  );
};

export default Login;

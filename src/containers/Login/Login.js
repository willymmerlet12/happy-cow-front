import React, { useState } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import axios from "axios";
import LoginImage from "../../img/happycow-login.jpg";
import Logo from "../../img/happycow.png";
import "./Login.css";
const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const location = useLocation();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="color-back">
      <div className="signup-container">
        <form onSubmit={handleSubmit} className="signup-form">
          <h2>Login to your account</h2>

          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            placeholder="Email"
            className="input-login"
          />
          <input
            type="password"
            name="password"
            className="input-login"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            placeholder="Mot de passe"
          />

          <div className="but">
            <button
              className="button-login"
              type="submit"
              onClick={async () => {
                const response = await axios.post(
                  "http://localhost:3100/user/login",
                  {
                    email: email,
                    password: password,
                  }
                );
                if (response.data.token) {
                  setUser(response.data.token);
                  alert("got it");
                } else {
                  alert("Une erreur est survenue");
                }
              }}
            >
              Login
            </button>
          </div>
          <div className="title">
            <div className="line"></div>
            <h2>OR</h2>
            <div className="line"></div>
          </div>
          <div className="but">
            <button className="register">
              <Link to="/signup"> Register</Link>
            </button>
          </div>
          <div className="but">
            <img className="logo" src={Logo} alt="" />
          </div>
        </form>
        <div></div>
      </div>
    </div>
  );
};

export default Login;

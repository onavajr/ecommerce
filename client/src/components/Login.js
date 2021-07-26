import React, { useState } from "react";
import axios from "axios";
import { navigate } from '@reach/router';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const login = event => {
    event.preventDefault();
    axios.post("http://localhost:8000/api/users/login", { 
        email: email, 
        password: password,
      },
      {
        withCredentials: true
      })
      .then((res) => {
        console.log(res.cookie);
        console.log(res);
        console.log(res.data, 'is res data!');
        navigate("/productmanager/shop/");
      })
      .catch(err => {
        console.log(err.response);
        setErrorMessage(err.response.data.message);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <p className="error-text">{errorMessage ? errorMessage : ""}</p>
      <form onSubmit={login}>
        <div className="login">
          <label>Email: </label>< br />
          <input
            className="textBox"
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />< br />
          <label>Password: </label>< br />
          <input 
            className="textBox"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        
          <div className="center">
            <button 
              type="submit"
            >Sign In</button>
          </div>
          </div>
      </form>
    </div>
  );
};

export default Login;
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../reducers/users";
import "./css/login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(
      login({
        name: username,
        password: password,
        loggedIn: true,
      })
    );
  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={(e) => handleSubmit(e)}>
        <h1>Login Here</h1>
        <input
          type="name"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="submit_btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;

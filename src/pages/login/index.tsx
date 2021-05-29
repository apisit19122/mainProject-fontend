import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../reducers/authReducer";
import "./css/login.css";

const Login = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log("asd");

    const token = "1212312121";
    const newUsers = {
      id: username,
      username: username,
      password: password,
      firstName: username,
      lastName: username,
    };
    dispatch(login(token, { ...newUsers }));
  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={(e) => handleSubmit(e)}>
        <h1>Login Here</h1>
        <input
          type="username"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          autoComplete="on"
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

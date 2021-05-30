import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../../reducers/authReducer";
import { RootState } from "../../store";
import "./css/login.css";

const Login: React.FC<{ history: any; props: any }> = ({ history, props }) => {
  const dispatch = useDispatch();
  const authUser = useSelector((state: RootState) => state).user;
  const { user } = authUser;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  if (user) {
    history.push("/home");
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();

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

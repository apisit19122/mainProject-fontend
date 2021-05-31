import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "@apollo/react-hooks";
import { login } from "../../reducers/authReducer";
import { RootState } from "../../store";
import signinMutation from "./schema/signinMutation";
// import AllUsersQuery from "./schema/allUsers";
import "./css/login.css";

const Login: React.FC<{ history: any; props: any }> = ({ history, props }) => {
  const dispatch = useDispatch();
  const authUser = useSelector((state: RootState) => state).user;
  const { user } = authUser;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [signin] = useMutation(signinMutation, {
    variables: {
      username: username,
      password: password,
    },
  });

  if (user) {
    return <Redirect to="/home" />;
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();

    signin()
      .then((response) => {
        const { token, user } = response.data.signin;
        const newUsers = {
          id: user.id,
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
        };
        dispatch(login(token, { ...newUsers }));
      })
      .catch((e) => {
        alert(e.message);
      });
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

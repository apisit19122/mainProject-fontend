import React from "react";
import "./css/App.css";

import { useSelector } from "react-redux";
import { selectUser } from "./reducers/users";

import Login from "./pages/login";
import Logout from "./pages/login/logout";

const App = () => {
  const user = useSelector(selectUser);

  return <div>{user ? <Logout /> : <Login />}</div>;
};

export default App;

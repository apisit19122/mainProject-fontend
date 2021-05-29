import React from "react";
import "./css/App.css";
import { useSelector } from "react-redux";
import { RootState } from "./store";

import Login from "./pages/login";
import Logout from "./pages/login/logout";

const App = () => {
  const authUser = useSelector((state: RootState) => state).user;
  const { user } = authUser;

  return <div>{user ? <Logout /> : <Login />}</div>;
};

export default App;

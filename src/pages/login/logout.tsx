import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Redirect } from "react-router-dom";

import { RootState } from "../../store";
import { logout } from "../../reducers/authReducer";
import "./css/logout.css";

const Logout: React.FC<{ history: any }> = ({ history }) => {
  const dispatch = useDispatch();
  const authUser = useSelector((state: RootState) => state).user;
  const { user } = authUser;

  if (!user) {
    history.push("/");
  }

  const handleLogout = (e: any) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <div className="logout">
      <h1>
        Welcome <span className="user__name">{user?.username}</span>
      </h1>
      <button className="logout__button" onClick={(e) => handleLogout(e)}>
        Logout
      </button>
    </div>
  );
};

export default Logout;

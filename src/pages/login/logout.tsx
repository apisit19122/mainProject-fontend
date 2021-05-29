import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../reducers/users";
import "./css/logout.css";

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = (e: any) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <div className="logout">
      <h1>
        Welcome <span className="user__name">OaT</span>
      </h1>
      <button className="logout__button" onClick={(e) => handleLogout(e)}>
        Logout
      </button>
    </div>
  );
};

export default Logout;

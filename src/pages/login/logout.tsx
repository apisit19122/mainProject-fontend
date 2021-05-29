import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { logout } from "../../reducers/authReducer";
import "./css/logout.css";

const Logout = () => {
  const dispatch = useDispatch();
  const authUser = useSelector((state: RootState) => state).user;
  const { user } = authUser;

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

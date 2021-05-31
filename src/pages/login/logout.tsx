import React from "react";
import { Redirect } from "react-router-dom";
import gql from "graphql-tag";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@apollo/react-hooks";

import { RootState } from "../../store";
import { logout } from "../../reducers/authReducer";
import "./css/logout.css";

const USER_ALL_QUERY = gql`
  query {
    allUsers {
      id
      username
      firstName
      lastName
    }
  }
`;

const Logout: React.FC<{ history: any }> = ({ history }) => {
  const dispatch = useDispatch();
  const authUser = useSelector((state: RootState) => state).user;
  const { data, loading } = useQuery(USER_ALL_QUERY);

  const { user } = authUser;

  if (!user) {
    return <Redirect to="/" />;
  }

  if (loading) return <div>Loading..</div>;

  console.log("data -> ", data);

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

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { createBrowserHistory as createHistory } from "history";
import Login from "../pages/login";
import Logout from "../pages/login/logout";

// const history = createHistory();
const Routers: React.FC<{}> = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Logout} />
      </Switch>
    </Router>
  );
};

export default Routers;

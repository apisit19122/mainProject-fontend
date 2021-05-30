import React from "react";
import "./css/App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store";

// import { useSelector } from "react-redux";
// import { RootState } from "./store";
import Router from "./config/routers";
// import Login from "./pages/login/";
// import Logout from "./pages/login/logout";

const App: React.FC<{}> = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

// const App = () => {
//   const authUser = useSelector((state: RootState) => state).user;
//   const { user } = authUser;

//   return <div>{user ? <Logout /> : <Login />}</div>;
// };

export default App;

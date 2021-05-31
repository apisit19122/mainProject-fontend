import React from "react";
import "./css/App.css";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { client } from "./config/client";
import store, { persistor } from "./store";
import Router from "./config/routers";

const App: React.FC<{}> = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ApolloProvider>
  );
};

export default App;

import { combineReducers } from "redux";
import localforage from "localforage";
import { persistReducer } from "redux-persist";

import authReducer from "./authReducer";

// Non-secure (AsyncStorage) storage
const authPersistConfig = {
  key: "auth",
  storage: localforage,
};

const AppReducer = combineReducers({
  user: persistReducer(authPersistConfig, authReducer),
});

export default AppReducer;

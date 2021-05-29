import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";
import rootReducer from "./reducers";

const composedEnhancers = composeWithDevTools();

const store = createStore(rootReducer, composedEnhancers);
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;
export default store;

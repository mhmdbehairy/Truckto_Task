import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import RootReducer from "./Reducers/RootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    RootReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware))
);
export default store;
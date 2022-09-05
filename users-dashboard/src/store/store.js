import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { compose } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import allReducers from "./allReducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = configureStore(
    { reducer: allReducers },
    composeEnhancers(applyMiddleware(thunk))
)

export default store;
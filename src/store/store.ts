import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import connectionsReducer from "./connections/reducer";

const reducers = combineReducers({
  connections: connectionsReducer
});

const store = configureStore({ reducer: reducers });

export default store;

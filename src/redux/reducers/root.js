import { combineReducers } from "redux";
import taskReducer from "./taskreducer";

export default combineReducers({
  tasks: taskReducer,
});

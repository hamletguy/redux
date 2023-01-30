import { combineReducers } from "redux";
import taskReducer from "./redux/reducers/taskreducer";

export default combineReducers({
  tasks: taskReducer,
});

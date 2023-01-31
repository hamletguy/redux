// import type
import {
  ADD_TASK,
  DELETE_TASK,
  FILTER_TASKS,
  SET_CURRENT_TASK,
  TOGGLE_COMPLETED_TASK,
  UPDATE_TASK,
} from "./type";

// add task
export const addTask = (payload) => {
  return { type: ADD_TASK, payload };
};

// update task
export const updateTask = (payload) => {
  return {
    type: UPDATE_TASK,
    payload,
  };
};

// delete task
export const deleteTask = (id) => {
  return { type: DELETE_TASK, payload: id };
};

// set current task
export const setCurrentTask = (payload) => {
  return { type: SET_CURRENT_TASK, payload };
};

// filter tasks
export const filterTask = (payload) => {
  return { type: FILTER_TASKS, payload };
};

// toggle completed task
export const toggleCompletedTask = (id) => {
  return { type: TOGGLE_COMPLETED_TASK, payload: id };
};

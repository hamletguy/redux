import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteTask,
  toggleCompletedTask,
  setCurrentTask,
} from "../redux/actions/ToDoActions";

const Task = ({ todo }) => {
  const { id, description, isDone } = todo;
  const dispatch = useDispatch();

  const onClick = (e) => {
    if (e.target.id === "completed") {
      dispatch(toggleCompletedTask(id));
    }

    if (e.target.id === "edit") {
      dispatch(setCurrentTask(todo));
    }

    if (e.target.id === "delete") {
      dispatch(deleteTask(id));
    }
  };

  return (
    <li
      className={`list-group-item ${isDone && "list-group-item-success"}
        d-flex align-items-center justify-content-between`}
    >
      <div className={isDone ? "completed" : ""}>{description}</div>
      <div className="btn-group" role="group">
        <i id="completed" className="bi bi-check-circle" onClick={onClick}></i>
        <i
          id="edit"
          className="bi bi-pencil"
          data-bs-toggle="modal"
          data-bs-target="#editTask"
          onClick={onClick}
        ></i>
        <i id="delete" className="bi bi-trash3" onClick={onClick}></i>
      </div>
    </li>
  );
};

export default Task;

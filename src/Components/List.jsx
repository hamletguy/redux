import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const TaskList = () => {
  const { todos, filteredTodos } = useSelector((state) => state.tasks);

  if (filteredTodos.length > 0) {
    return (
      <ul className="list-group mt-3">
        {filteredTodos.map((todo) => (
          <Task key={todo.id} todo={todo} />
        ))}
      </ul>
    );
  }

  return (
    <ul className="list-group mt-3">
      {todos.map((todo) => (
        <Task key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TaskList;

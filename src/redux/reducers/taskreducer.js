// import types
import {
  ADD_TASK,
  DELETE_TASK,
  FILTER_TASKS,
  SET_CURRENT_TASK,
  TOGGLE_COMPLETED_TASK,
  UPDATE_TASK,
} from "../actions/type";

const initialState = {
  todos: [],
  current: null,
  filteredTodos: [],
};

const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return {
        ...state,
        todos: [...state.todos, payload],
      };

    case UPDATE_TASK:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload.id
            ? { ...todo, description: payload.description }
            : todo
        ),
      };

    case DELETE_TASK:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };

    case SET_CURRENT_TASK:
      return {
        ...state,
        current: payload,
      };

    case TOGGLE_COMPLETED_TASK:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };

    case FILTER_TASKS:
      return {
        ...state,
        filteredTodos:
          payload === "completed"
            ? state.todos.filter((todo) => todo.isDone)
            : payload === "uncompleted"
            ? state.todos.filter((todo) => !todo.isDone)
            : [],
      };

    default:
      return state;
  }
};

export default taskReducer;

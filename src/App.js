import AddTask from "./Components/Add";
import EditTask from "./Components/edit";
import TaskList from "./Components/List";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 bg-light text-dark mt-5 p-3 shadow">
          <h1 className="text-center mb-3" style={{ color: "purple" }}>
            MY TODO'S
          </h1>
          <AddTask />
          <TaskList />
          <EditTask />
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTask } from "../redux/actions/ToDoActions";

const EditTask = () => {
  const dispatch = useDispatch();
  const current = useSelector((state) => state.tasks.current);
  const [text, setText] = useState("");

  const onClick = () => {
    const updTask = {
      id: current.id,
      description: text,
    };
    dispatch(updateTask(updTask));
  };

  useEffect(() => {
    console.log("run useEffect");
    if (current !== null) {
      setText(current.description);
    }
  }, [current]);

  return (
    <div
      className="modal fade"
      id="editTask"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Edit Task
            </h5>
            <div className="modal-body">
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={onClick}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTask;

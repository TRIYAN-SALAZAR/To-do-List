import { useState, useEffect } from "react";
import axios from "axios";

import "../css/CreateCollectionForm.css";

export default function CreateCollection({ setShowForm }) {
  const [tasks, setTasks] = useState([]);
  const [tasksSelected, setTaskSelected] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:3000/tasks");

      if (response.data === undefined) return;

      setTasks(response.data);
    };

    getData();
  }, []);

  const handleCheckBoxChange = (event, { _id }) => {
    const isChecked = event.target.checked;

    setTaskSelected((prevTask) => {
      if (isChecked) {
        return [...prevTask, _id];
      } else {
        return prevTask.filter((taskId) => taskId != _id);
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    console.log("--------------------------------");
    console.log(form);
    console.log("--------------------------------");

    console.log("+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+");
    console.log(form["Title Collection"].value);
    console.log("+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+");

    console.log(tasksSelected);
  };

  if (tasks !== undefined) {
    const renderListOfTasks = tasks.map((t) => {
      return (
        <TaskForAdd
          title={t.title}
          key={t._id}
          _id={t._id}
          onCheckBoxChange={handleCheckBoxChange}
          isSelected={tasksSelected.includes(t._id)}
        />
      );
    });

    return (
      <section className="CreateCollectionForm">
        <h3>Create Collection</h3>

        <form onSubmit={handleSubmit}>
          <section className="createCollection">
            <label htmlFor="Title Collection">Title Collection</label>
            <input type="text" name="Title Collection" />
            <input type="submit" value="create" />
          </section>

          <section className="addTasksToCollectionOptional">
            <label htmlFor="Add Tasks" id="add-tasks">
              Add Tasks
            </label>
            <section className="listTasksForAdd">{renderListOfTasks}</section>
          </section>
        </form>

        <section
          className="Close-Form-Collection-Create"
          onClick={() => setShowForm(false)}
        >
          <p>x</p>
        </section>
      </section>
    );
  }
}

function TaskForAdd({ _id, title, onCheckBoxChange, isSelected }) {
  return (
    <section className="taskForAdd">
      <label htmlFor={"task = " + _id}>{title}</label>
      <input
        type="checkbox"
        name={_id}
        value={_id}
        onChange={(event) => onCheckBoxChange(event, {_id})}
        checked={isSelected}
      />
    </section>
  );
}

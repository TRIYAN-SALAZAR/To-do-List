import { useState, useEffect } from "react";
import axios from "axios";

import "../css/ShowTask.css";

export default function ShowTask({ taskId, setHiddenTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [task, setTask] = useState({});

  const handledTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handledDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  useEffect(() => {
    const getTask = async () => {
      const { data } = await axios.get('http://127.0.0.1:3000/tasks/' + taskId);
      if (data === undefined) return;
      console.log(data);
      setTask(data.task);
      setTitle(data.task.title);
      setDescription(data.task.description);
    };

    getTask();
  }, [taskId]);

  const updateTask = async (event) => {
    event.preventDefault();
    const title = event.target['title-task'].value;
    const description = event.target['description'].value;

    await axios.put('http://127.0.0.1:3000/tasks/', {
      id: taskId,
      title: title,
      description: description,
      completed: false
    })


  }

  return (
    <section className="container-main">
      <form onSubmit={updateTask}>
        <label htmlFor="title-task"></label>
        <input
          type="text"
          name="title-task"
          id=""
          value={title}
          onChange={handledTitleChange}
        />

        <label htmlFor="description"></label>
        <textarea
          name="description"
          id=""
          value={description}
          onChange={handledDescriptionChange}
        ></textarea>

        <section className="btn-confirmar-o-cancelar">
          <input type="submit" value="Confirmar" className="confirm" />
          <input
            type="buttom"
            value="cancelar"
            className="cancel"
            onClick={() => setHiddenTask(false)}
          />
        </section>
      </form>
    </section>
  );
}

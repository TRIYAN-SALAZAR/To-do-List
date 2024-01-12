import { useState, useEffect } from "react";
import axios from "axios";

import "../css/ShowTask.css";

export default function ShowTask({ taskId, setHiddenTask }) {
  const [title, setTitle] = useState("Title of Task");
  const [task, setTask] = useState({});

  const handledTitleChange = (event) => {
    setTitle(event.target.value);
  };

  useEffect(() => {
    const getTask = async () => {
      const { task } = await axios.get("http://127.0.0.1:3000/tasks/" + taskId);
      if (task === undefined) return;

      setTask(task);
    };

    getTask();
  }, []);

  console.log(task);
  return (
    <section className="container-main">
      <form>
        <label htmlFor="title-task"></label>
        <input
          type="text"
          name="title-task"
          id=""
          value={title}
          onChange={handledTitleChange}
        />

        <label htmlFor="description"></label>
        <textarea name="description" id="">
          This is a representation of description for task
        </textarea>

        <section className="btn-confirmar-o-cancelar">
          <input type="buttom" value="Confirmar" className="confirm" />
          <input type="buttom" value="cancelar" className="cancel" onClick={() => setHiddenTask(false)} />
        </section>
      </form>
    </section>
  );
}

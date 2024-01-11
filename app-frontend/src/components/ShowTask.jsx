import { useState } from "react";

import "../css/ShowTask.css";

export default function ShowTask({ id, setHiddenTask }) {
  const [title, setTitle] = useState("Title of Task");

  const handledTitleChange = (event) => {
    setTitle(event.target.value);
  };
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
          <input type="submit" value="Confirmar cambios" />
          <input type="buttom" value="Descartar cambios" />
        </section>
      </form>
    </section>
  );
}

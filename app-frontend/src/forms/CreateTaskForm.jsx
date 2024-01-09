import axios from "axios";

import "../css/CreateTaskForm.css";

export default function CreateTask({ setShowForm }) {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const title = form.Title.value;
    const description = form["Description Task"].value;

    await axios.post("http://localhost:3000/tasks", {
      title,
      description,
    });

    setShowForm(false);

    form.reset();
    window.location.reload();
  };

  return (
    <section className="CreateTaskForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="Title">Title</label>
        <input type="text" name="Title" />

        <label htmlFor="Description Task">Description</label>
        <textarea
          name="Description Task"
          id="Description Task"
          cols="30"
          rows="10"
        ></textarea>

        <input type="submit" />
      </form>
      <input
        type="button"
        value="x"
        className="cancelCreateTask"
        onClick={() => setShowForm(false)}
      />
    </section>
  );
}

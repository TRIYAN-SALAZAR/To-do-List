import "../css/CreateCollectionForm.css";

export default function CreateCollection() {
  return (
    <section className="CreateCollectionForm">
        <h3>Create Collection</h3>
      <form action="">
        <section className="createCollection">
          <label htmlFor="Title Collection">Title Collection</label>
          <input type="text" />
          <input type="submit" value="create" />
        </section>
        <section className="addTasksToCollectionOptional">
          <label htmlFor="Add Tasks" id="add-tasks">Add Tasks</label>
          <section className="listTasksForAdd">
          </section>
        </section>
      </form>
      <section className="Close-Form-Collection-Create"><p>x</p></section>
    </section>
  );
}

function TaskForAdd({id}) {
  return (
    <section className="taskForAdd">
      <label htmlFor="task1">Title Task, {id}</label>
      <input type="checkbox" name="task" id="" />
    </section>
  );
}

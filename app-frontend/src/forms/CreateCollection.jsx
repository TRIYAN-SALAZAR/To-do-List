import "../css/CreateCollection.css";

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
          <label htmlFor="Add Tasks">Add Tasks</label>
          <section className="listTasksForAdd">
            <TaskForAdd />
            <TaskForAdd />
            <TaskForAdd />
            <TaskForAdd />
            <TaskForAdd />
            <TaskForAdd />
            <TaskForAdd />
            <TaskForAdd />
            <TaskForAdd />
            <TaskForAdd />
            <TaskForAdd />
            <TaskForAdd />
            <TaskForAdd />
            <TaskForAdd />
            <TaskForAdd />
            <TaskForAdd />
            <TaskForAdd />
            <TaskForAdd />
            <TaskForAdd />
            <TaskForAdd />
            <TaskForAdd />
            <TaskForAdd />
            <TaskForAdd />
            <TaskForAdd />
            <TaskForAdd />
            <TaskForAdd />
            <TaskForAdd />
            <TaskForAdd />
            <TaskForAdd />
            <TaskForAdd />
          </section>
        </section>
      </form>
    </section>
  );
}

function TaskForAdd() {
  return (
    <section className="taskForAdd">
      <label htmlFor="task1">Title Task</label>
      <input type="checkbox" name="task" id="" />
    </section>
  );
}

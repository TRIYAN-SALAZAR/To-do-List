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
            <TaskForAdd id={0}/>
            <TaskForAdd id={1}/>
            <TaskForAdd id={2}/>
            <TaskForAdd id={3}/>
            <TaskForAdd id={4}/>
            <TaskForAdd id={5}/>
            <TaskForAdd id={6}/>
            <TaskForAdd id={7}/>
            <TaskForAdd id={8}/>
            <TaskForAdd id={9}/>
            <TaskForAdd id={9}/>
            <TaskForAdd id={9}/>
            <TaskForAdd id={3}/>
            <TaskForAdd id={3}/>
            <TaskForAdd id={3}/>
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

import { useState } from "react";
import CreateCollection from "../forms/CreateCollectionForm";
import CreateTask from "../forms/CreateTaskForm";

import "../css/nav-Bar.css";

export default function NavBar() {
  const [showTask, setTask] = useState(false);
  const [showCollection, setCollection] = useState(false);

  return (
    <>
      <nav>
        <section id="options">
          <button
            onClick={() => {
              setTask(true);
              setCollection(false);
            }}
          >
            Create Task
          </button>
          <button
            onClick={() => {
              setCollection(true);
              setTask(false);
            }}
          >
            Create Collection
          </button>
        </section>
        <section id="collections">
          <DefaultRenderAll />
          <CollectionsForNav />
        </section>
      </nav>

      {showTask && <CreateTask setShowForm={setTask}/>}
      {showCollection && <CreateCollection setShowForm={setCollection}/>}
    </>
  );
}

function CollectionsForNav() {
  return (
    <>
      <hr />
      <section className="collection">
        <h3>title for collection</h3>
      </section>
    </>
  );
}

function DefaultRenderAll() {
  return (
    <>
      <hr />
      <section className="collection">
        <h3>Show All</h3>
      </section>
    </>
  );
}

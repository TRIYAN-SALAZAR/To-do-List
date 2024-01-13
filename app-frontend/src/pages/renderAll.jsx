import axios from "axios";
import { useState, useEffect } from "react";

import Tasks from "../components/Tasks";
import Collection from "../components/Collections";

import "../css/RenderAll.css";

export default function RenderAll() {
  const [dataServer, setDataServer] = useState(undefined);

  useEffect(() => {
    const getData = async () => {
      const tasksResponse = await axios.get("http://localhost:3000/");
      if (tasksResponse.data === undefined) {
        return;
      }

      setDataServer(tasksResponse.data);
    };

    getData();
  }, []);

  if (dataServer === undefined) {
    return <div>Loading...</div>;
  }

  if (dataServer !== undefined) {
    const renderTasks = dataServer.tasks.map((task) => {
      return <Tasks title={task.title} key={task._id} taskId={task._id} />;
    });

    const renderCollections = dataServer.collections.map((collection) => {
      return (
        <Collection
          title={collection.title}
          key={collection._id}
          collectionId={collection._id}
        />
      );
    });

    return (
      <>
        <section className="RenderAll">
          {renderTasks}
          {renderCollections}
        </section>
      </>
    );
  }
}

import Tasks from "../components/Tasks";
import Collection from "../components/Collections";
import CreateCollection from "../forms/CreateCollectionForm";
import CreateTask from "../forms/CreateTaskForm";

import "../css/RenderAll.css";

export default function RenderAll() {
  return (
    <>
      <section id="render-all">
        <Tasks />
        <Collection title={"joseee"} />
        <Collection title={"fiedooo"} />
        <RenderTasks />
        <Collection title={"Increible la posada de ayer"} />
        <Collection title={"Hola mundooooo"} />
        <RenderTasks />
        <RenderTasks />
        <Collection title={"que weba me da el frontend"} />
        <Collection title={"excelente"} />
        <Tasks />
        <Tasks />
        <Collection title={"laaaaaaaaaaaaaaaaaaargoooooooo"} />
        <RenderTasks />
        <RenderTasks />
        <Collection title={"laaaaaaaaaaaaaaaaaaargoooooooo"} />

        <RenderTasks />
        <Collection title={"tunomaaaamaauoOouO"} />
        <Collection title={"sipo"} />
        <Collection title={"no"} />
      </section>

        <CreateCollection />
        <CreateTask />
    </>
  );
}

function RenderTasks() {
  return (
    <>
      <Tasks title={"Lo mismo 1"} />
      <Tasks title={"Lo mismo 2"} />
      <Tasks title={"Lo mismo 3"} />
      <Tasks title={"Lo mismo 4"} />
      <Tasks title={"Lo mismo 5"} />
    </>
  );
}

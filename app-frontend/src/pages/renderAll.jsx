import Tasks from "../components/Tasks";
import Collection from "../components/Collections";
import CreateCollection from "../forms/CreateCollectionForm";
import CreateTask from "../forms/CreateTaskForm";
import MessegeWarning from "../components/MessageWarning";

import "../css/RenderAll.css";

export default function RenderAll() {
  return (
    <>
      <section id="render-all">
        <RenderTasks />
        <RenderCollections />        
      </section>

        <CreateCollection />
        <CreateTask />
        <MessegeWarning 
          Messege={"Example"}
          typeMessage={"si"}
        />
    </>
  );
}

function RenderTasks() {
  return (
    <>
      <Tasks />
      <Tasks />
      <Tasks />
      <Tasks />
      <Tasks />
      <Tasks />
      <Tasks />
      <Tasks />
      <Tasks />
      <Tasks />
      <Tasks />
      <Tasks />
      <Tasks />
      <Tasks />
      <Tasks />
      <Tasks />
      <Tasks />
      <Tasks />
    </>
  );
}

function RenderCollections() {
  return (
    <>
      <Collection title={'hpña'}/>
      <Collection title={'hpña'}/>
      <Collection />
      <Collection />
      <Collection title={'hpña'}/>
      <Collection />
    </>
  )
}
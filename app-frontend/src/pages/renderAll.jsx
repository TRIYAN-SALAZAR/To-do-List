import Tasks from "../components/Tasks";
import Collection from "../components/Collections";
import CreateCollection from "../forms/CreateCollectionForm";
import CreateTask from "../forms/CreateTaskForm";
import MessegeWarning from "../components/MessageWarning";

import axios from 'axios';

import "../css/RenderAll.css";

function getTasksAndCollections() {
  const data = axios.get('http://127.0.0.1:3000/')
    .then(response => console.table(response.data))
    .catch(err => console.log(err))

    return (data);
}
export default function RenderAll() {

  getTasksAndCollections()

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
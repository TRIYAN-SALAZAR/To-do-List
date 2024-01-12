import { useState } from "react";
import BtnEliminar from "./btn-eliminar";
import ShowTask from './ShowTask';

import "../css/Tasks.css";

export default function Tasks({ title = "default", taskId }) {
  const [active, setActive] = useState(false);
  const [showTask, setShowTask] = useState(false);

  return (
    <section
      className="Task"
      onMouseOver={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onClick={() => setShowTask(true)}
    >
      <h5>{title}</h5>
      {active && <BtnEliminar />}
      {showTask && <ShowTask taskId={taskId} setHiddenTask={setShowTask}/>}
    </section>
  );
}

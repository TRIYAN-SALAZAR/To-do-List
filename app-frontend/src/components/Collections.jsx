import { useState } from "react";

import BtnEliminar from "./btn-eliminar";

import "../css/Collections.css";

export default function Collection({ title, collectionId }) {
  const [active, setActive] = useState(false);

  return (
    <section
      className="Collection"
      onMouseOver={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div className="relleno"></div>
      <div className="relleno"></div>
      <div className="relleno"></div>
      <div className="relleno"></div>
      <h5>{title}</h5>
      {active && (
        <BtnEliminar
          idToEliminate={collectionId}
          taskOrCollection={"collections"}
        />
      )}
    </section>
  );
}

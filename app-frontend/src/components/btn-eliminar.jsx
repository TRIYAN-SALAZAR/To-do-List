import { useEffect, useState } from "react";
import axios from "axios";

import "../css/btnEliminar.css";
export default function BtnEliminar({ idToEliminate, taskOrCollection }) {
  const [confirm, setConfirm] = useState(false)

  useEffect(() => {
    const confirmToEliminate = async () => {
      console.log(taskOrCollection, idToEliminate);
      await axios
        .delete(`http://127.0.0.1:3000/${taskOrCollection}/`, {
          data: {
            id: idToEliminate,
          },
        })
        .then((response) => {
          console.log('eliminado correctamente: ' +  response.data);
          setConfirm(false)
        })
        .catch((err) => console.log(err));
  
    };

    if(confirm) confirmToEliminate();

  }, [confirm, idToEliminate, taskOrCollection])

  return (
    <>
      <section className="btn-eliminar" onClick={() => setConfirm(true)}>
        <p>x</p>
      </section>
    </>
  );
}

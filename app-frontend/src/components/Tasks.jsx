import BtnEliminar from './btn-eliminar';
import MessegeWarning from './MessageWarning';

import '../css/Tasks.css';

export default function Tasks({title = "default"}) {
    return (
        <section className="Task">
            <h5>{title}</h5>
            <BtnEliminar />
        </section>
    )
}
import BtnEliminar from './btn-eliminar'

import '../css/Collections.css'

export default function Collection() {
    return(
        <section className="Collection">
            <div className='relleno'></div>
            <div className='relleno'></div>
            <div className='relleno'></div>
            <div className='relleno'></div>
            <h5>Title</h5>
            <BtnEliminar />
        </section>
    )
}
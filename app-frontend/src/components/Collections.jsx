import BtnEliminar from './btn-eliminar'

import '../css/Collections.css'

export default function Collection({title}) {
    return(
        <section className="Collection">
            <div className='relleno'></div>
            <div className='relleno'></div>
            <div className='relleno'></div>
            <div className='relleno'></div>
            <h5>{title ? title : 'default name' }</h5>
            <BtnEliminar />
        </section>
    )
}
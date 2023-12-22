import '../css/MessageWarning.css'

export default function MessegeWarning({typeMessage, Messege, action} ) {
    return (
        <section className={typeMessage}>
            <h3>Seguro que desea eliminar</h3>
            <section className="buttoms">
                <input type="button" value="sure" />
                <input type="button" value="lies" />
            </section>
        </section>
    );
}
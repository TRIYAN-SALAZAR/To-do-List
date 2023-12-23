import '../css/MessageWarning.css'

export default function MessegeWarning({typeMessage, Messege, action} ) {
    return (
        <section className="defaulMessageWarning">
            <h3>¿ Seguro que desea eliminar ?</h3>
            <section className="buttoms-message-warning">
                <input type="button" value="sure" />
                <input type="button" value="lies" />
            </section>
        </section>
    );
}
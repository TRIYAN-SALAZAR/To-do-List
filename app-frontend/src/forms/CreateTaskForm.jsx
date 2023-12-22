import "../css/CreateTaskForm.css";

export default function CreateTask() {
    return (
        <section className="CreateTaskForm">
            <form>
                <label htmlFor="Title">Title</label>
                <input type="text" name="Title"/>

                <label htmlFor="Description Task">Description</label>
                <textarea name="Description Task" id="Description Task" cols="30" rows="10"></textarea>

                <input type="submit" />
            </form>
            <input type="button" value='x' className="cancelCreateTask"/>
        </section>
    );
}
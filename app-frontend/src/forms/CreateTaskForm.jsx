import "../css/CreateTaskForm.css";

export default function CreateTask() {
    return (
        <section className="CreateTaskForm">
            <form>
                <label htmlFor="Title">Title</label>
                <input type="text" name="Title"/>

                <label htmlFor="Description Task">Description</label>
                <input type="text" name="Description Task" id="Description Task" />

                <input type="submit" />
            </form>
        </section>
    );
}
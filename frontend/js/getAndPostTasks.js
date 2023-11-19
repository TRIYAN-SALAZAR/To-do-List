const url = new URL('http://localhost:3000/');

async function generateListTasks() {

    const data = fetch(url);

    const response = await data;
    const tasks = await response.json();

    tasks.forEach( t => {
        createTask(t);
    });
}

document.addEventListener('DOMContentLoaded', generateListTasks);

async function createTaskToBackend() {
    console.log('Entro a la funcion para crear la tarea');

    const formData = document.forms['form-task'];

    const title = formData['title'].value;
    const description = formData['description'].value;


    const taskCreate = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title,
            description
        })
    });

    const response = await taskCreate.json();
    const {id, completed } = response;

    createTask(
        {
            title: title,
            description: description,
            id: id,
            completed: completed
        });
}



document.getElementById('envForm').addEventListener('click', createTaskToBackend);
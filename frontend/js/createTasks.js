// document.getElementById('envForm').addEventListener('click', createTask);
function createTask({title, description, id, completed}) {

    // const getForm = document.forms['form-task'];

    // no se front, no me juzguen (;´༎ຶД༎ຶ`)

    const containerSectionTask = document.createElement('section');
    const artTaskTop = document.createElement('article');
    const titleTask = document.createElement('h3');
    const descriptionElement = document.createElement('p');
    const artTaskBottom = document.createElement('article');
    const buttonDelete = document.createElement('button');
    const buttonEdit = document.createElement('button');
    const status = document.createElement('p')

    containerSectionTask.id = id;

    containerSectionTask.classList.add('task', 'bg-dark-subtle');
    artTaskTop.classList.add('art-task-top');
    descriptionElement.classList.add('description', 'bg-light-subtle');
    artTaskBottom.classList.add('art-task-bottom');

    buttonDelete.classList.add('btn', 'btn-danger');
    buttonDelete.value = id;
    buttonDelete.addEventListener('click', deleteTask);
    buttonEdit.classList.add('btn', 'btn-warning');
    buttonEdit.addEventListener('click', editTask);
    buttonEdit.value = id;

    
    titleTask.textContent = title;
    descriptionElement.textContent = description;
    buttonDelete.textContent = 'Delete';
    buttonEdit.textContent = 'Edit'; 
    status.textContent = completed === true ? 'Completed!!!' : 'Pending...';
    

    artTaskTop.appendChild(titleTask);
    artTaskTop.appendChild(descriptionElement);

    artTaskBottom.appendChild(status);
    artTaskBottom.appendChild(buttonDelete);
    artTaskBottom.appendChild(buttonEdit);

    containerSectionTask.appendChild(artTaskTop);
    containerSectionTask.appendChild(artTaskBottom);

    document.getElementById('list-tasks').appendChild(containerSectionTask);
}
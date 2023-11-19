function deleteTask(data) {
    console.info('Se elimina la tarea: ', data.target.value);

    const confirmDelete = document.getElementById('c-delete-task');
    const btnYes = document.getElementById('btn-yes');
    const btnNo = document.getElementById('btn-no');

    confirmDelete.style.display = 'block';

    btnNo.addEventListener('click', () => confirmDelete.style.display = 'none');
    btnYes.addEventListener('click', async () => {
        try {
            await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: data.target.value
                })
            });
        }
        catch (error) {
            console.log(error);
        }
        finally {
            confirmDelete.style.display = 'none';
        }

    });

}

const envFormButtoms = document.getElementById('envFormPut');
const formPutTask = document.forms['form-put-task'];

async function editTask(data) {

    envFormButtoms.removeEventListener('click', updateTask);
    document.getElementById('exit-put').removeEventListener('click', clearForm);


    const idTaskValue = data.target.value;

    console.log('---------------------------------------------------');
    console.info('Se edita la tarea: ', idTaskValue);

    try {
        const response = await fetch(url + idTaskValue, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const dataTask = await response.json();

        if (!response.ok) {
            throw new Error(dataTask.message);
        } else {
            document.getElementById('confirm-put-task').style.visibility = 'visible';

            formPutTask['title-put'].value = dataTask.title;
            formPutTask['description-put'].value = dataTask.description;
            formPutTask['id'].value = dataTask.id;


            envFormButtoms.addEventListener('click', updateTask)

            document.getElementById('exit-put').addEventListener('click', clearForm);
        }

    }
    catch (error) {
        console.log(error);
    }

}

async function updateTask() {
    try{
        const valeCompleted = formPutTask['completed-put'].value === 'true' ? true : false;
        const responseUpdate = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: formPutTask['id'].value,
                title: formPutTask['title-put'].value,
                description: formPutTask['description-put'].value,
                completed: valeCompleted
            })
    
        })
    
        if (!responseUpdate.ok) {
            throw new Error(`Error al actualizar: `, dataTask.message);
        }
    }
    catch(error){
        console.log(error);
    }
    finally{
        clearForm();
    }

}

function clearForm() {
    document.getElementById('confirm-put-task').style.visibility = 'hidden';
    formPutTask['title-put'].value = '';
    formPutTask['description-put'].value = '';

    return;
}
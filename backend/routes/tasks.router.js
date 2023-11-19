const { Router } = require('express');
const router = Router();
const { createTask, deletedTask, getTasks, updateTask, getOneTask } = require('../controllers/tasks.conrtrollers');

router.route('/')
    .get(getTasks)
    .post(createTask)
    .put(updateTask)
    .delete(deletedTask)

router.route('/:id')
    .get(getOneTask)

module.exports = router;

//comentario de prueba para poder realizar un commit para despues subirlo a mi repositorio remoto
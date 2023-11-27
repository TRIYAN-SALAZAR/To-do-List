const { Router } = require('express');
const router = Router();
const { createTask, deletedTask, getTasks, updateTask, getOneTask } = require('../controllers/tasks.controller');

router.route('/')
    .get(getTasks)
    .post(createTask)
    .put(updateTask)
    .delete(deletedTask)

router.route('/:id')
    .get(getOneTask)

module.exports = router;
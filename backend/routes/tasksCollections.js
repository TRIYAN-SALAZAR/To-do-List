const {Router} = require('express');
const router = Router();

const { createCollectionForTasks, addTaskToCollection } = require('../controllers/tasksCollections.controller');

router.route('/')
    .post(createCollectionForTasks)

module.exports = router
const {Router} = require('express');
const router = Router();

const { createCollectionTasks, getCollectionsTasks } = require('../controllers/tasksCollections.controller');

router.route('/')
    .get(getCollectionsTasks)
    .post(createCollectionTasks)

module.exports = router
const {Router} = require('express');
const router = Router();

const { 
    getCollections,
    createCollection,
    deleteCollection,
    updateCollection,
    addTaskToCollection 
} = require('../controllers/tasksCollections.controller');

router.route('/')
    .get(getCollections)
    .post(createCollection)
    .put(updateCollection)
    .delete(deleteCollection)

router.route('/:idCollection')
    .put(addTaskToCollection)

module.exports = router
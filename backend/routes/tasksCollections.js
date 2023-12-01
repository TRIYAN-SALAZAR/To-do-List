const {Router} = require('express');
const router = Router();

const { 
    getCollections,
    createCollection,
    deleteCollection,
    updateCollection,
    addTaskToCollection,
    deleteTaskToCollection
} = require('../controllers/tasksCollections.controller');

router.route('/')
    .get(getCollections)
    .post(createCollection)
    .put(updateCollection)
    .delete(deleteCollection)

router.route('/collectionShow/:idCollection')
    .put(addTaskToCollection)
    .delete(deleteTaskToCollection)

module.exports = router
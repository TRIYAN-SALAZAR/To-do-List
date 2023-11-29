const { Router } = require('express');
const router = Router();
const {
    showAll,
    showTaskToCollection
} = require('../controllers/displayAllContentByDefault');

router.route('/')
    .get(showAll)

router.route('/tasksToCollections/:idCollection')
    .get(showTaskToCollection)

module.exports = router;
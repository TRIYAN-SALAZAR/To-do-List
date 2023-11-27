const { Schema, model } = require('mongoose');

const collectionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    tasks: {
        type: Array,
        default: []
    }
});

module.exports = model('collectionsOfTasks', collectionSchema);
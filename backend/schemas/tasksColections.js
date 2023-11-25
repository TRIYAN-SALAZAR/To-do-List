const { Schema } = require('mongoose');

const colectionSchema = new Schema({
    id: {
        type: String,
        required: true
    },
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

module.exports = model('collectionsTasks', colectionSchema);
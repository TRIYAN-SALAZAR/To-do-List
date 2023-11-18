const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
    id: String,
    title: String,
    description: String,
    completed: Boolean
});

module.exports = model('tasks', taskSchema);
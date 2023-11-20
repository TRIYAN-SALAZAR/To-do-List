const control = {};
const idGenerate = require('../services/idGenerate');
const taskSchema = require('../schemas/taskSchema');
const colors = require('colors');

control.getTasks = async (req, res) => {

    try {
        const tasks = await taskSchema.find();
        res.json(tasks)
    }
    catch (error) {
        res.json({
            message: error
        });
        console.log(colors.red(error), '-----------------------------------');
    }
}

control.getOneTask = async (req, res) => {
    try {
        const task = await taskSchema.findOne({ id: req.params.id });
        res.json(task)
    }
    catch (error) {
        res.json({
            message: error
        });
        console.log(colors.red(error), '-----------------------------------');
    }
}

control.createTask = async (req, res) => {

    const titleTask = req.body.title;
    const descriptionTask = req.body.description;

    if(!titleTask || !descriptionTask) {
        return res.status(400).json({
            message: 'title and description are required'
        });
    }

    try {
        const newTask = new taskSchema({
            id: idGenerate(),
            title: titleTask,
            description: descriptionTask,
            completed: false
        });

        const task = await newTask.save();

        if (!task) {
            throw new Error('task not created');
        } else {
            res.status(200).json({
                message: 'task created',
                id: newTask.id,
                completed: newTask.completed
            })
        }
    }
    catch (error) {
        console.log(colors.red(error));
        res.status(500).json({
            message: 'Internal Server Error at generate task'
        });
    }
}

control.updateTask = async (req, res) => {
    const {
        id,
        title,
        description,
        completed
    } = req.body;

    try {
        const update = await taskSchema.updateOne({ id: id }, { title: title, description: description, completed: completed });

        console.log(update);

        res.json({
            message: 'task updated'
        })
    }
    catch (error) {
        res.json({
            message: error
        });
        console.log(colors.red(error));
    }

}

control.deletedTask = async (req, res) => {
    try {
        await taskSchema.deleteOne({ id: req.body.id });
    }
    catch (error) {
        res.json({
            message: error
        });
        console.log(colors.red(error));
    }
    res.json({
        message: 'task deleted'
    })
}

module.exports = control;
const control = {};
const idGenerate = require('../services/idGenerate');
const taskSchema = require('../schemas/taskSchema');
const colors = require('colors');

control.getTasks = async (req, res) => {

    const tasks = await taskSchema.find();

    if(tasks.length === 0) {
        return res.status(400).json({
            message: 'tasks not found'
        });
    }

    res.status(200).json(tasks);
}
control.getOneTask = async (req, res) => {

    const idTask = req.params.id;

    try {
        const task = await taskSchema.findOne({ id: idTask});

        if(task === null) {
            throw new Error('task not found');
        }

        res.status(200).json({task})
    }
    catch (error) {

        if(error.message === 'task not found') {
            return res.status(404).json({
                message: 'task not found'
            });
        }

        res.status(500).json({
            message: 'Server Internal Error'
        });
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

        if (update.matchedCount === 0) {
            throw new Error(`Task don't exist`);
        }

        if (!update) {
            throw new Error('task not updated');            
        }

        res.status(200).json({
            message: 'task updated'
        })
    }
    catch (error) {

        if(error.message === `Task don't exist`) {
            return res.status(404).json({
                message: 'task not updated by not found task'
            });
        }

        res.status(500).json({
            message: 'Server Internal Error task not update'
        })
        console.log(colors.red(error));
    }

}

control.deletedTask = async (req, res) => {

    const id = req.body.id
    try {
        const deleteTask = await taskSchema.deleteOne({ id: id });

        if (deleteTask.deletedCount === 0) {
            throw new Error(`Task don't exist`);
        }

        if (!deleteTask) {
            throw new Error('task not deleted');
        }

        res.status(200).json({
            message: 'task deleted'
        })
    }
    catch (error) {
        if(error.message === `Task don't exist`) {
            return res.status(404).json({
                message: 'task not deleted by not found task'
            });
        }

        res.status(500).json({
            message: 'Server Internal Error task not deleted'
        })
        console.log(colors.red(error));
    }
}

module.exports = control;
const idGenerate = require('../services/idGenerate');
const taskSchema = require('../schemas/task');
const colors = require('colors');
const control = {};

const sendErrorResponse = (res, { message = null, error = null }, status) => {
    if (error) console.log(colors.red(error));

    return res.status(status).json({
        error: message
    })
}


control.getTasks = async (req, res) => {
    try {
        const tasks = await taskSchema.find();

        res.status(200).json(tasks);
    } catch (error) {
        return sendErrorResponse(res, { message: 'Server Internal Error', error: error }, 500);
    }
}
control.getOneTask = async (req, res) => {
    try {
        const idTask = req.params.id;
        const task = await taskSchema.findOne({ id: idTask });

        if (task === null) return sendErrorResponse(res, { message: 'task not found' }, 404);

        res.status(200).json({ task })
    }
    catch (error) {
        return sendErrorResponse(res, { message: 'task not found', error: error }, 500);
    }
}

control.createTask = async (req, res) => {

    const titleTask = req.body.title;
    const descriptionTask = req.body.description;

    if (!titleTask && !descriptionTask) {
        return sendErrorResponse(res, { message: 'title and description are required' }, 400);
    } else if (!titleTask) {
        return sendErrorResponse(res, { message: 'title is required' }, 400);
    } else if (!descriptionTask) {
        return sendErrorResponse(res, { message: 'description is required' }, 400);
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
        return sendErrorResponse(res, { error: error, message: 'task not created By Server Internal Error' }, 500);
    }
}

control.updateTask = async (req, res) => {
    try {
        const {
            id,
            title,
            description,
            completed
        } = req.body;
        const update = await taskSchema.updateOne({ id: id }, { title: title, description: description, completed: completed });

        if (update.matchedCount === 0) return sendErrorResponse(res, { message: `task not updated by not found task` }, 404);

        if (!update) throw new Error('task not updated');

        res.status(200).json({
            message: 'task updated'
        })
    }
    catch (error) {
        return sendErrorResponse(res, { message: 'Server Internal Error task not update', error: error }, 500);
    }
}

control.deletedTask = async (req, res) => {
    try {
        const id = req.body.id
        const deleteTask = await taskSchema.deleteOne({ id: id });

        if (deleteTask.deletedCount === 0) return sendErrorResponse(res, { message: `task not deleted by not found task` }, 404);

        if (!deleteTask) throw new Error('task not deleted');

        res.status(200).json({
            message: 'task deleted'
        })
    }
    catch (error) {
        return sendErrorResponse(res, { message: 'Server Internal Error task not deleted', error: error }, 500);
    }
}

module.exports = control;
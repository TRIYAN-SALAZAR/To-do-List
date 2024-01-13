const collectionSchema = require('../schemas/tasksCollections');
const taskSchema = require('../schemas/task')
const { Types } = require('mongoose');

const control = {};
control.getCollections = async (req, res) => {
    try {
        const collections = await collectionSchema.find();
        return res.status(200).json(collections);
    }
    catch (error) {
        return res.status(500).json({ error: 'Server Internal Error' });
    }
}

control.createCollection = async (req, res) => {
    const title = req.body.title;
    const tasksForAdd = req.body.tasks;

    try {
        if (!title) return res.status(400).json({ message: 'title is required' });

        const newCollection = new collectionSchema({ title: title });
        const collection = await newCollection.save();

        if (!collection) throw new Error('collection not created');

        if (tasksForAdd.length > 0) {
            const tasksAdd = tasksForAdd.map(async (task) => await collectionSchema.updateOne({ _id: newCollection.id }, { $push: { tasks: new Types.ObjectId(task) } }));

            if (!tasksAdd) throw new Error('tasks not add in collection');

            return res.status(200).json({
                message: 'collection created',
                id: newCollection.id
            });
        } else {

            return res.status(200).json({
                message: 'collection created',
                id: newCollection.id
            });
        }
    }
    catch (error) {
        return res.status(500).json({
            error: 'Server Internal Error',
            descriptionError: error.message
        });
    }
}

control.deleteCollection = async (req, res) => {
    const id = req.body.id;

    try {
        if (!id) return res.status(400).json({ message: 'id is required to delete the collection' });
        const deleteCollection = await collectionSchema.deleteOne({ _id: id });

        if (!deleteCollection) throw new Error('The collection could not be deleted');

        return res.status(200).json({ message: 'The collection was successfully deleted' });
    }
    catch (error) {
        return res.status(500).json({
            message: 'Task not deleted',
            descriptionError: error.message
        })
    }
}

control.updateCollection = async (req, res) => {
    const id = req.body.id;
    const title = req.body.title;

    try {
        if (!id && !title) return res.status(400).json({ message: 'title and id is required' })
        if (!title) return res.status(400).json({ message: 'title is required' });
        if (!id) return res.status(400).json({ message: 'id is required' });

        const updateTitle = await collectionSchema.updateOne({ _id: id }, { title: title });

        if (!updateTitle) throw new Error('collection not updated');

        return res.status(200).json({ message: 'collection updated' })
    }
    catch (error) {
        return res.status(500).json({
            error: 'Server Internal Error',
            descriptionError: 'The collection could not be updated due to a server error'
        });
    }
}

control.addTaskToCollection = async (req, res) => {
    const taskID = (req.body.taskID);
    const collectionID = req.params.idCollection;


    try {
        if (!taskID) return res.status(400).json({ message: 'taskID is required' });

        const { tasks } = await collectionSchema.findOne({ _id: collectionID });

        const taskExistInToCollection = tasks.find(t => (t) == taskID);

        if (taskExistInToCollection == taskID) {
            return res.status(200).json({
                message: 'no se puede agregar este recurso porque ya existe en la coleccion'
            })
        } else {
            const addTaskToCollection = await collectionSchema.updateOne({ _id: collectionID }, { $push: { tasks: new Types.ObjectId(taskID) } });
            const updateDefaultCollection = await taskSchema.updateOne({ _id: taskID }, { $set: { defaultCollection: false } });

            if (!addTaskToCollection || !updateDefaultCollection) throw new Error('task not added to collection or propety error update');

            return res.status(200).json({ message: 'task added to collection' });
        }
    }
    catch (error) {
        return res.status(500).json({
            error: 'Server Internal Error',
            descriptionError: error.message
        });
    }
}

control.deleteTaskToCollection = async (req, res) => {
    const taskID = req.body.taskID;
    const collection = req.params.idCollection

    try {
        if (!taskID) return res.status(400).json({ message: 'taskID is required' });

        const deleteTaskToCollection = await collectionSchema.updateOne({ _id: collection }, { $pull: { tasks: taskID } });
        const updateDefaultCollection = await taskSchema.updateOne({ _id: taskID }, { $set: { defaultCollection: true } });

        if (!deleteTaskToCollection || !updateDefaultCollection) throw new Error('task not deleted or propety of task dont update');

        return res.status(200).json({ message: 'task deleted' });
    }
    catch (error) {
        return res.status(500).json({
            error: 'Server Internal Error',
            descriptionError: error.message
        });
    }
}

module.exports = control;
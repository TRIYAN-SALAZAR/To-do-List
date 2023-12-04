//fecha limite de implementacion sabado 02 de diciembre del 2023 a las 22:00
//Las implentaciones se realizaron con exito, ya el pedo es si se generan bugs o no, O nada sjdasfjkas

const taskSchema = require('../schemas/task');
const collectionSchema = require('../schemas/tasksCollections');

const control = {};

control.showAll = async (req, res) => {
    try {
        const tasks = await taskSchema.find();
        const collections = await collectionSchema.find()

        return res.status(200).json({
            tasks: tasks,
            collections: collections
        })
    }
    catch (error) {
        return res.status(500).json({ error: 'Server Internal Error' });
    }
}

control.showTaskToCollection = async (req, res) => {
    const collectionID = req.params.idCollection;

    try {
        const collection = await collectionSchema.findOne({_id: collectionID});
        const TASKS = [];

        for(let task of collection.tasks) {
           let aux = await taskSchema.findOne({ _id: task });
           TASKS.push(aux);
        }

        return res.status(200).json({tasks: TASKS})
    }
    catch(error) {
        return res.status(500).json({ error: 'Server Internal Error' });
    }
}

module.exports = control;
//fecha limite de implementacion sabado 02 de diciembre del 2023 a las 22:00

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

}

module.exports = control;
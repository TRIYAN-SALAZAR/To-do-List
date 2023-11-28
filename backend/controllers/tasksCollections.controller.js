const collectionSchema = require('../schemas/tasksCollections');

const control = {};
console.log('Entro al controller');
control.getCollectionsTasks = async (req, res) => {
    console.log('Control para obetner todas la colleciones');
    try {
        const collections = await collectionSchema.find();

        return res.status(200).json(collections);
    }
    catch (error) {
        return res.status(500).json({ error: 'Server Internal Error' });
    }
}

control.createCollectionTasks = async (req, res) => {

    const title = req.body.title;

    try {
        if(!title) return res.status(400).json({message: 'title is required'});

        const newCollection = new collectionSchema({title: title});

        const collection = await newCollection.save();
        if(!collection) throw new Error('collection not created');

        return res.status(200).json({
            message: 'collection created',
            id: newCollection.id
        });
    }
    catch (error) {
        return res.status(500).json({ 
            error: 'Server Internal Error',
            descriptionError: error.message
        });
    }
}

control.addTaskToCollection = async (req, res) => {
    const taskID = req.body.taskID;
    const collectionID = req.body.collectionID;

    try {
        if(!taskID || !collectionID) return res.status(400).json({message: 'taskID and collectionID are required'});

        const addTaskToCollection = await collectionSchema.updateOne({ _id: ObjectId(collectionID) }, { $push: { tasks: ObjectId(taskID) } });

        if (!addTaskToCollection) {
            throw new Error('task not added to collection');
        }

        return res.status(200).json({ message: 'task added to collection' });
    }
    catch (error) {
        return res.status(500).json({ 
            error: 'Server Internal Error',
            descriptionError: error.message
        });
    }
}


control.deleteCollectionTasks = async (req, res) => {

    const id = req.body.id;

    try {
        const deleteCollection = await collectionSchema.deleteOne({ _id: ObjectId(id) });

    }
    catch (error) {
        
    }
}


module.exports = control;
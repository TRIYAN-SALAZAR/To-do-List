const collectionSchema = require('../schemas/tasksCollections');

const control = {};
console.log('Entro al controller');
control.getCollectionsTasks = async (req, res) => {
    console.log('Control para obetner todas la colleciones');
    try {
        const collections = await collectionSchema.find();

        // if (collections.length === 0) {
        //     res.status(404).json({ error: 'collections not found' });
        // }
        console.log(JSON.stringify(collections));
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

control.updateCollectionTasks = async (req, res) => {
    
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
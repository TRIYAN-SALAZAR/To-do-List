const colors = require('colors');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const connectDB = async () => {
    try {
        console.log(colors.yellow('Estableciendo conexion a la base de datos'));
        const connect = await mongoose.connect('mongodb://localhost:27017/to-do-list')

        if (!connect) {
            throw new Error('No se pudo conectar a la base de datos');
        }
        
        console.log(colors.cyan('MongoDB connected'))
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;
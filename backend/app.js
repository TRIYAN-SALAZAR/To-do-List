const colors = require('colors');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const connectDB = require('./database');
connectDB();

app.use(cors());

app.use(express.json());
app.use(morgan('dev'));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/', require('./routes/showTasksAndCollections'))
app.use('/tasks', require('./routes/tasks.router'));
app.use('/collections', require('./routes/tasksCollections'));

app.listen(3000, () => {
    console.log('Server running on port 3000'.cyan);
});

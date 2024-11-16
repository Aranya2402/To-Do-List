
const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes'); 
require('dotenv').config();

const app = express();

// Middleware
app.use(cors()); 
app.use(express.json()); 


app.use('/api/tasks', taskRoutes); 

module.exports = app;

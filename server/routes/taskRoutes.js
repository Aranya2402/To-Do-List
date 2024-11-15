// routes/taskRoutes.js
const express = require('express');
const { addTask, getTasks, deleteTask, updateTask, editTask } = require('../controllers/taskController');

const router = express.Router();

router.post('/', addTask);
router.get('/', getTasks);
router.delete('/:id', deleteTask);
router.patch('/:id', updateTask);
router.put('/:id',editTask);

module.exports = router;

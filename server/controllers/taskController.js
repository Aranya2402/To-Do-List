
const Task = require('../models/Task');

//  add a new task
exports.addTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const task = new Task({ title, description });
    await task.save();
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add task' });
  }
};

//  get all tasks
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve tasks' });
  }
};

//  delete a task
exports.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
};

//  update a task
exports.updateTask = async (req, res) => {
  try {
    const { completed } = req.body;
    const task = await Task.findByIdAndUpdate(req.params.id, { completed }, { new: true });
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update task' });
  }
};


// edit a task
exports.editTask = async (req, res) => {
    try {
      const { title, description } = req.body;
      const task = await Task.findByIdAndUpdate(
        req.params.id,
        { title, description },
        { new: true }
      );
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.json(task);
    } catch (error) {
      res.status(500).json({ error: 'Failed to edit task' });
    }
  };
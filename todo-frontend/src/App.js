import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import { Container, Typography, Box, Button, TextField } from '@mui/material';

function App() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const addTask = async (newTask) => {
    try {
      const response = await axios.post('http://localhost:5000/api/tasks', newTask);
      setTasks((prevTasks) => [...prevTasks, response.data]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const toggleCompleted = async (id, currentStatus) => {
    try {
      const response = await axios.patch(`http://localhost:5000/api/tasks/${id}`, { completed: !currentStatus });
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === id ? { ...task, completed: response.data.completed } : task
        )
      );
    } catch (error) {
      console.error('Error toggling task completion:', error);
    }
  };

  const editTask = async (id, updatedTask) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/tasks/${id}`, updatedTask);
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task._id === id ? response.data : task))
      );
    } catch (error) {
      console.error('Error editing task:', error);
    }
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        You don’t have to be great to start, but you have to start to be great.
      </Typography>

      <Box display="flex" justifyContent="center" alignItems="center" gap={2} mt={2}>
        <TextField
          variant="outlined"
          placeholder="Search tasks"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Add New Task
        </Button>
      </Box>

      {/* Pass additional props for toggling and editing tasks */}
      <TaskList
        tasks={tasks.filter((task) => task.title.toLowerCase().includes(search.toLowerCase()))}
        onDelete={deleteTask}
        onToggleCompleted={toggleCompleted}
        onEdit={editTask}
      />

      <AddTaskForm open={open} handleClose={handleClose} onAddTask={addTask} />
    </Container>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import { Container, Typography, Box, Button, TextField, AppBar, Toolbar } from '@mui/material';

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
    <Container maxWidth="md" style={{ backgroundColor: '#243642', minHeight: '100vh', maxWidth: '100vw', paddingBottom: '20px' }}>
      <AppBar position="static" style={{ marginBottom: '20px', backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          <Box display="flex" alignItems="center" gap={1}>
            <img
              src="/images/checklist.gif"
              alt="Checklist Icon"
              style={{ height: '50px', width: '50px' }}
            />
            <Typography
              variant="h3"
              style={{
                fontWeight: 'bold',
                background: 'linear-gradient(90deg, #387478, #629584)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: 'Crimson Pro, serif',
                fontSize: '3rem',
              }}
            >
              <b>FocusFlow</b>
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      <Typography
        variant="h3"
        align="center"
        gutterBottom
        style={{
          background: 'linear-gradient(90deg, #629584, #E2F1E7)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '30px',
        }}
      >
        You don’t have to be great to start,<br />
        but you have to start to be great.
      </Typography>

      <Box display="flex" justifyContent="center" alignItems="center" gap={2} mb={3}>
        <TextField
          variant="outlined"
          placeholder="Search tasks"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            height: '50px',
            backgroundColor: '#387478',
            color: 'white',
            borderRadius: '5px',
            border:'none'
          }}
          InputProps={{
            style: {
              color: 'white',
            },
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpen}
          style={{
            height: '50px',
            padding: '10px 20px',
            backgroundColor: '#629584',
          }}
        >
          Add New Task
        </Button>
      </Box>

      
      <TaskList
        tasks={tasks.filter((task) =>
          task.title.toLowerCase().includes(search.toLowerCase())
        )}
        onDelete={deleteTask}
        onToggleCompleted={toggleCompleted}
        onEdit={editTask}
      />

      <AddTaskForm open={open} handleClose={handleClose} onAddTask={addTask} />
    </Container>
  );
}

export default App;

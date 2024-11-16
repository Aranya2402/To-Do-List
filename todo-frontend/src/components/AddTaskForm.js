import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';

const AddTaskForm = ({ open, handleClose, onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAdd = () => {
    onAddTask({ title, description });
    setTitle('');
    setDescription('');
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add New Task</DialogTitle>
      <DialogContent>
        <TextField
          label="Task Title"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: '100%',
            marginBottom: '15px',
            padding: '10px', 
          }}
          InputProps={{
            style: {
              color: 'white', 
            },
          }}
          InputLabelProps={{
            style: {
              color: 'white', 
              transform: 'translate(14px, 12px) scale(1)', 
            },
          }}
        />

        <TextField
          label="Task Description"
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{
            width: '100%',
            marginBottom: '15px',
            padding: '10px', 
          }}
          InputProps={{
            style: {
              color: 'white', 
            },
          }}
          InputLabelProps={{
            style: {
              color: 'white', 
              transform: 'translate(14px, 12px) scale(1)', 
            },
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleAdd} variant="contained" color="primary">
          Add Task
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddTaskForm;

// src/components/TaskCard.js
import React from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function TaskCard({ task, onDelete }) {
  const handleDelete = () => {
    onDelete(task._id); // Call onDelete with task ID
  };

  return (
    <Card style={{ margin: '10px', width: '250px' }}>
      <CardContent>
        <Typography variant="h6">{task.title}</Typography>
        <Typography variant="body2" color="textSecondary">{task.description}</Typography>
      </CardContent>
      <IconButton onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
    </Card>
  );
}

export default TaskCard;

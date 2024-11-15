import React, { useState } from 'react';
import { Card, CardContent, Typography, IconButton, Button, TextField, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';

function TaskCard({ task, onDelete, onToggleCompleted, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({
    title: task.title,
    description: task.description,
  });

  // Toggle editing mode
  const handleEditToggle = () => setIsEditing(!isEditing);

  // Submit edited task
  const handleEditSubmit = () => {
    onEdit(task._id, editedTask); // Call onEdit callback
    setIsEditing(false); // Exit edit mode
  };

  return (
    <Card style={{ margin: '10px', width: '250px' }}>
      <CardContent>
        {!isEditing ? (
          <>
            <Typography
              variant="h6"
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            >
              {task.title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {task.description}
            </Typography>
          </>
        ) : (
          <Box display="flex" flexDirection="column" gap={1}>
            <TextField
              label="Title"
              value={editedTask.title}
              onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
            />
            <TextField
              label="Description"
              value={editedTask.description}
              onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
            />
            <Button variant="contained" color="primary" onClick={handleEditSubmit}>
              Save
            </Button>
          </Box>
        )}
      </CardContent>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <IconButton onClick={() => onDelete(task._id)}>
          <DeleteIcon />
        </IconButton>
        {!isEditing && (
          <>
            <IconButton onClick={handleEditToggle}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => onToggleCompleted(task._id, task.completed)}>
              <DoneIcon color={task.completed ? "success" : "inherit"} />
            </IconButton>
          </>
        )}
      </Box>
    </Card>
  );
}

export default TaskCard;

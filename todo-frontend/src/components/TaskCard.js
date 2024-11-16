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

  
  const handleEditToggle = () => setIsEditing(!isEditing);

  
  const handleEditSubmit = () => {
    onEdit(task._id, editedTask); 
    setIsEditing(false); 
  };

  return (
    <Card
  style={{
    margin: '10px',
    width: '250px',
    backgroundColor: '#E2F1E7',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)', 
    border: '8px solid #629584', 
    borderRadius: '8px', 
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out', 
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'scale(1.05) translateY(-5px)'; 
    e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.3)'; 
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'scale(1) translateY(0)'; 
    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)'; 
  }}
>

      <CardContent>
        {!isEditing ? (
          <>
            <Typography
              variant="h6"
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
                fontWeight: 'bold',
                color: task.completed ? '#8b8b8b' : '#243642', 
              }}
            >
              {task.title}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              style={{
                marginTop: '8px',
                color: task.completed ? '#8b8b8b' : '#243642',
              }}
            >
              {task.description}
            </Typography>
          </>
        ) : (
          <Box display="flex" flexDirection="column" gap={2}>
            <TextField
              label="Title"
              value={editedTask.title}
              onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
              fullWidth
              variant="outlined"
              InputProps={{
                style: { color: '#243642' },
              }}
              InputLabelProps={{
                style: { color: '#243642' },
              }}
            />
            <TextField
              label="Description"
              value={editedTask.description}
              onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
              fullWidth
              variant="outlined"
              InputProps={{
                style: { color: '#243642' },
              }}
              InputLabelProps={{
                style: { color: '#243642' },
              }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleEditSubmit}
              style={{ marginTop: '10px' }}
            >
              Save
            </Button>
          </Box>
        )}
      </CardContent>

      <Box display="flex" justifyContent="space-between" alignItems="center" padding="0 16px 8px">
        <IconButton onClick={() => onDelete(task._id)}>
          <DeleteIcon color="error" />
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

import React, { useState } from 'react';
import TaskCard from './TaskCard';
import { Typography } from '@mui/material';

function TaskList({ tasks, onDelete, onToggleCompleted, onEdit }) {
  const [showAll, setShowAll] = useState(false);

  
  const toggleShowAll = () => setShowAll(!showAll);

  return (
    <div style={{ position: 'relative', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {tasks.slice(0, showAll ? tasks.length : 5).map((task) => (
        <TaskCard
          key={task._id}
          task={task}
          onDelete={onDelete} 
          onToggleCompleted={onToggleCompleted} 
          onEdit={onEdit} 
        />
      ))}

      
      {tasks.length > 5 && (
        <Typography
          variant="body2"
          onClick={toggleShowAll}
          style={{
            position: 'absolute',
            top: '-50px', 
            right: '10px', 
            cursor: 'pointer',
            color: '#629584',
            fontWeight: 'bold',
          }}
        >
          {showAll ? 'Show Less' : 'Show More Tasks'}
        </Typography>
      )}
    </div>
  );
}

export default TaskList;

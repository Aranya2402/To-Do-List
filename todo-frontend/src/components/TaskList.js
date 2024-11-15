// src/components/TaskList.js
import React from 'react';
import TaskCard from './TaskCard';

function TaskList({ tasks, onDelete }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {tasks.map(task => (
        <TaskCard key={task._id} task={task} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default TaskList;

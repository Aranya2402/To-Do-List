import React from 'react';
import TaskCard from './TaskCard';

function TaskList({ tasks, onDelete, onToggleCompleted, onEdit }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
          onDelete={onDelete} // Pass the delete function
          onToggleCompleted={onToggleCompleted} // Pass the toggle completed function
          onEdit={onEdit} // Pass the edit function
        />
      ))}
    </div>
  );
}

export default TaskList;

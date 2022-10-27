import React from 'react'
import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((cocktail, index) => (
        <Task key={index} cocktail={cocktail} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  )
}

export default Tasks;

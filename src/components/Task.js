import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = ({ cocktail, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${cocktail.reminder && 'reminder'}`}
      onDoubleClick={() => onToggle(cocktail.id)}
    >
      <h3>
        {cocktail.cocktailname}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(cocktail.id)}
        />
      </h3>
      <p>{cocktail.ingredients}</p>
    </div>
  )
}

export default Task

import React from 'react'
import { FaMinus } from 'react-icons/fa'

const Cocktail = ({ cocktail, onDelete, onToggle }) => {
  return (
    <div
      className={`cocktail ${cocktail.favorite && 'favorite'}`}
      onDoubleClick={() => onToggle(cocktail.id)}
    >
      <h3>
        {cocktail.cocktailname}{' '}
        <FaMinus
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(cocktail.id)}
        />
      </h3>
      <p>{cocktail.ingredients}</p>
    </div>
  )
}

export default Cocktail

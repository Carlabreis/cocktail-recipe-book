import React from 'react'
import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [cocktailname, setCocktailName] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [favorite, setFavorite] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!cocktailname) {
      alert('Please add a cocktail')
      return
    }

    onAdd({ cocktailname, ingredients, favorite })

    setCocktailName('')
    setIngredients('')
    setFavorite(false)
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Cocktail</label>
        <input
          type='text'
          placeholder='Add cocktail name'
          value={cocktailname}
          onChange={(e) => setCocktailName(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Ingredients</label>
        <input
          type='text'
          placeholder='Add Ingredients'
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Favorite</label>
        <input
          type='checkbox'
          checked={favorite}
          value={favorite}
          onChange={(e) => setFavorite(e.currentTarget.checked)}
        />
      </div>

      <input type='submit' value='Save Cocktail' className='btn btn-block' />
    </form>
  )
}

export default AddTask

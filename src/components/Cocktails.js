import React from 'react'
import Cocktail from './Cocktail'

const Cocktails = ({ cocktails, onDelete, onToggle }) => {
  return (
    <>
      {cocktails.map((cocktail, index) => (
        <Cocktail key={index} cocktail={cocktail} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  )
}

export default Cocktails;

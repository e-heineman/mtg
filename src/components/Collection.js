import React from 'react'
import Cards from "./Cards";


const Collection = ({ cards }) => {
  return (
    <>
    My collection of cards.
    <Cards cards={cards}/>
    </>
  )
}

export default Collection
import React from 'react'
import Cards from "./Cards";


const Collection = ({ cards }) => {
  return (
    <>
    <h1>My Collection</h1>
    <Cards cards={cards}/>
    </>
  )
}

export default Collection
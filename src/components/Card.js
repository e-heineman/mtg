import React from 'react'

const Card = ({ card }) => {
  return (
    <>
      <p>Card Name: {card.name}</p>
      <img src={card.image_uris.border_crop} alt={card.name}/>
    </>
  )
}

export default Card
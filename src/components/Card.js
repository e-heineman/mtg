import React from 'react'

const Card = ({ card }) => {
  return (
    <>
      <p>Card Name: {card.name}</p>
      <p>Card Artist: {card.artist}</p>
      <p>Card Set: {card.set_name}</p>
      <img src={card.image_uris.border_crop} alt={card.name} className='cardArt'/>
    </>
  )
}

export default Card
import React from 'react'

const Card = ({ card }) => {
  return (
    <>
    <div>This is a Card</div>
    <div>{card.artist}</div>
    <img src={card.image_uris.border_crop} alt="Righteous Valkyrie card art"/>
    </>
  )
}

export default Card
import React from 'react'

const Card = ({ card }) => {
  return (
    <>
    <img src={card.image_uris.border_crop} alt="Righteous Valkyrie card art"/>
    </>
  )
}

export default Card
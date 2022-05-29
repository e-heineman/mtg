import React from 'react'
import { useState } from 'react';
import Card from './Card';

const FindCard = () => {
  // const [loading, setLoading] = useState(false)
  const [submit, setSubmit] = useState(false);
  const [card, setCard] = useState({});

  const fetchCard = async (e) => {
    e.preventDefault();
    const url = `https://api.scryfall.com/cards/named?exact=${e.target.s.value}`;
    const res = await fetch(url);
    const data = await res.json();
    setCard(data);
    setSubmit(true);
  }

  return (
    <>
      <form action='/find' className='search' onSubmit={(e) => fetchCard(e)}>
        <label htmlFor="s" className='visuallyHidden'>Find a card</label>
        <input type="search" id="s" name="s" placeholder="Find a card..."/>
        <input type="submit" value="Search"/>
      </form>
      {!submit ? (
      <p>Search for a card.</p> ) : (
      <Card key={card.id} card={card}/>
      )}
    </>
  )
}

export default FindCard
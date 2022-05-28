import React from 'react'
import { useState, useEffect } from 'react';
// import Card from './Card';

const FindCard = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      const cardFromServer = await fetchCard()
      setResult(cardFromServer)
    }

    getCards()
  }, [])

  const fetchCard = async (e) => {
    e.preventDefault();
    console.log(e.target.s.value);
    const url = `https://api.scryfall.com/cards/named?exact=${e.target.s.value}`;
    const res = await fetch(url);
    const data = await res.json();
    const array = [];
    array.push(data);
    console.log(array);
    // setResult(array);
    // console.log(result);
    return array;
  }

  return (
    <>
    <form action='/find' className='search' onSubmit={(e) => fetchCard(e)}>
      <label htmlFor="s" className='visuallyHidden'>Find a card</label>
      <input type="search" id="s" name="s" placeholder="Find a card..."/>
      <input type="submit" value="Search"/>
    </form>
    {/* <Card key={result.id} card={result}/> */}
    </>
  )
}

export default FindCard
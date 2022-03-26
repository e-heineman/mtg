import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className='links'>
            <Link className='link' to="/">MTG Tracker</Link>
            <Link className='link' to="/collection">My Collection</Link>
            <Link className='link' to="/add">Add Cards</Link>
            <Link className='link' to="/find">Find Cards</Link>
        </div>
        <div className='info'>
            Profile
        </div>
    </header>
  )
}

export default Header
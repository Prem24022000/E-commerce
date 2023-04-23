import React from 'react'
import { Link } from 'react-router-dom'
import NavLists from './NavLists'
import './Header.scss'

const Header = () => {
  return (
    <div className='nav container'>
        
    <Link to="/">
      <h1>Premazon</h1>
    </Link>
    <NavLists />
    </div>
  )
}

export default Header
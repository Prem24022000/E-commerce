import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavLists.scss'
import { useAddToCartContext } from '../context/addCartContext'
import { FaShoppingCart } from 'react-icons/fa'

const NavLists = () => {

  const {totalItem} = useAddToCartContext()


  return (
    <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/cart"><span className='circle'>{totalItem}</span><FaShoppingCart className='kart' /></NavLink></li>
    </ul>
  )
}

export default NavLists
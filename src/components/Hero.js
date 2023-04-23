import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const Hero = () => {
  return (
    <div className='home container'>
      <div className="home__left">
      <span>WELCOME TO</span>
      <h1>Premazon</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit consequuntur illum eius maxime soluta voluptatum voluptas doloribus nemo, reiciendis cupiditate earum, aliquam quos minima distinctio cumque quisquam iusto aperiam dolor suscipit quia tenetur obcaecati similique autem veritatis! Eveniet, ipsum. Minima.</p>
      <Link to="/products"><Button>SHOP NOW</Button></Link>
      </div>
      <div className="home__right">
        <img src="images/hero.jpg" alt="" />
      </div>
    </div>
  )
}

export default Hero
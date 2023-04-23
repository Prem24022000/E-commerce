import React, { useState } from 'react'
import './AddToCart.scss'
import { NavLink } from 'react-router-dom';
import { useAddToCartContext } from '../context/addCartContext';
import CartAmountToggle from './CartAmountToggle';

const AddToCart = ({stock, product}) => {
  const {AddToCart} = useAddToCartContext()

  const [amount, setAmount] = useState(1);

    

  const increment = () => {
      amount < stock ? setAmount(amount+1) : setAmount(stock)
  }

  const decrement = () => {
      amount > 1 ? setAmount(amount-1) : setAmount(1)
  }


  return (
    <>
        <CartAmountToggle increment={increment} decrement={decrement} amount={amount} />
        <NavLink to="/cart"><button className="btn" onClick={()=>AddToCart(amount, product)}>Add To Cart</button></NavLink>
    </>
  )
}

export default AddToCart
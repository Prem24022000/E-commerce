import React, { useState } from 'react';
import { useAddToCartContext } from '../context/addCartContext';
import './Cart.scss';
import CartAmountToggle from '../components/CartAmountToggle';
import Currency from '../components/Currency';
import { MdDelete } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const Cart = () => {
  const {
    cart,
    removeItem,
    ClearCart,
    setIncrement,
    setDecrement,
    totalAmount,
    shippingFee,
  } = useAddToCartContext();

  const shipping = totalAmount + shippingFee;

  return (
    <div className='cart container'>
      <div className='cart__description'>
        <p>ITEM</p>
        <p>PRICE</p>
        <p>QUANTITY</p>
        <p>SUBTOTAL</p>
        <p>REMOVE</p>
      </div>
      <hr />

      <div className='cart__lists'>
        {cart.map((data, index) => {
          return (
            <div className='cart__list' key={index}>
              <div className='item'>
                <img src={data.image} alt='' />
                <p>{data.name}</p>
              </div>

              <p className='price'>
                <Currency price={data.price} />
              </p>

              <CartAmountToggle
                increment={() => setIncrement(data.id)}
                decrement={() => setDecrement(data.id)}
                amount={data.amount}
              />

              <p>
                <Currency price={data.amount * data.price} />
              </p>

              <div>
                <MdDelete onClick={() => removeItem(data.id)} />
              </div>
            </div>
          );
        })}
      </div>

      <div className='cart__btns'>
        <NavLink to='/products'>
          <button className='btn'>Continue Shopping</button>
        </NavLink>

        <div className='btn' onClick={ClearCart}>
          Clear
        </div>
      </div>

      {totalAmount > 0 && (
        <div className='cart__price'>
          <div>
            Subtotal: <Currency price={totalAmount} />
          </div>
          <div>
            Shipping fee: <Currency price={shippingFee} />
          </div>

          <hr />

          <div>
            Order Total: <Currency price={shipping} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

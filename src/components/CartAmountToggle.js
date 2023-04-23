import React from 'react'

const CartAmountToggle = ({increment, decrement, amount}) => {

    

  return (
    <div className='singleProduct-btn'>
        <button onClick={() => decrement()}>-</button>
        <div className='amount'>{amount}</div>
        <button onClick={() => increment()}>+</button>
        
    </div>
  )
}

export default CartAmountToggle
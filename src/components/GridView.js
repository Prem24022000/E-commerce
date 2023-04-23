import React from 'react'
import Products from './Products'
import './Products.scss'

const GridView = ({products}) => {

  return (
    <div className='cards'>
        {products.map(data => {
            return <Products key={data.id} data={data} />
        })}
    </div>
  )
}

export default GridView
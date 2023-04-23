import React from 'react'
import { useProductProvider } from '../context/ProductContext';
import Products from './Products';
import './Products.scss'


const FeatureProducts = () => {

    const {isLoading,featureProducts} = useProductProvider();



    if(isLoading === true){
        return(
            <div><p>Loading....</p></div>
        )
    }

  return (
    <div style={{marginTop: "120px"}} className='feature-products container'>
        <span>CHECK NOW!</span>

        <h2>Our Feature Services</h2>

        <div className="cards">
        {featureProducts.map(data => {
            return <Products key={data.id} data={data} />
        })}
        </div>
    </div>
  )
}



export default FeatureProducts
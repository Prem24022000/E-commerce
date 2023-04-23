import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProductProvider } from '../context/ProductContext';
import Images from '../components/Images';
import Currency from '../components/Currency';
import './SingleProduct.scss';
import HomeLink from '../components/HomeLink';
import AddToCart from '../components/AddToCart';

const SingleProduct = () => {
  const { id } = useParams();

  const { getSingleProduct, singleProduct, isSingleLoading } =
    useProductProvider();

  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;

  const API = 'https://api.pujakaitem.com/api/products';

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading === true) {
    return (
      <div>
        <p>Loading....</p>
      </div>
    );
  }

  return (
    <>
      
      <div className='singleProduct container'>
      <div className='heading'>
        <HomeLink />/{name}
      </div>
        <div className='product'>
          <Images imgs={image} />

          <div className='right'>
            <h2>{name}</h2>

            <p>{stars}</p>

            <p>{reviews} (Costumers reviews)</p>

            <del>
              MRP: <Currency price={price + 25000} />
            </del>

            <div>
              Deal of the day: <Currency price={price} />
            </div>

            <p className='description'>{description}</p>

            <hr />

            <p>Availble: {stock > 0 ? 'In stock' : 'Out of stock'}</p>
            

            <p>ID: {alias}</p>

            <p>Brand: {company}</p>

            <hr />

            {stock > 0 && <AddToCart stock={stock} product={singleProduct} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;

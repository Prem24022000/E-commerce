import React from 'react';
import { useFilterProducts } from '../context/filterContext';
import GridView from '../components/GridView';
import './Products.scss';
import Filter from '../components/Filter';

const Products = () => {
  const { filterProducts, sorting } = useFilterProducts();



  return (
    <div className='products container'>
      <div>
        <Filter />
      </div>
      <div className='right'>
        <div className='products__header'>
          <p>{filterProducts.length} total products</p>

          <div className='sort-selection'>
            <form action='#'>
              <label htmlFor='sort'></label>
              <select
                name='sort'
                id='sort'
                className='sort-selection--style'
                onChange={sorting}
              >
                <option value='lowest'>Price(lowest)</option>
                <option value='#' disabled></option>
                <option value='highest'>Price(highest)</option>
                <option value='#' disabled></option>
                <option value='a-z'>Price(a-z)</option>
                <option value='#' disabled></option>
                <option value='z-a'>Price(z-a)</option>
              </select>
            </form>
          </div>
        </div>
        <GridView products={filterProducts} />
      </div>
    </div>
  );
};

export default Products;

import React from 'react'
import { useFilterProducts } from '../context/filterContext'
import './Filter.scss'

const Filter = () => {

    const {filters:{text, category}, updateFilterValue, allProducts} = useFilterProducts()

    const getUniqueData = (datas, property) => {
        let newVal = datas.map(data => {
            return data[property]
        })

        return newVal = ["All", ...new Set(newVal)]
    }

    const categoryData = getUniqueData(allProducts, "category");
    const companyData = getUniqueData(allProducts, "company");

  return (
    <div>
        <div className="filter-search">
            <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" name='text' value={text} onChange={updateFilterValue} placeholder='Search' />
            </form>
        </div>

        <div className="filter-category">
            <h3>Category</h3>

            <div>
            {categoryData.map((data, index) => {
                return <button className={data === category ? 'filter-button active' : "filter-button"} key={index} type='button' name='category' value={data} onClick={updateFilterValue}>{data}</button>
            })}
            </div>
        </div>

        <div className="filter-company">
        <h3>Company</h3>

        <form action="#">
          <select
            name="company"
            id="company"
            className="filter-company--select"
            onChange={updateFilterValue}>
            {companyData.map((curElem, index) => {
              return (
                <option key={index} value={curElem} name="company">
                  {curElem}
                </option>
              );
            })}
          </select>
        </form>
      </div>
    </div>
  )
}

export default Filter
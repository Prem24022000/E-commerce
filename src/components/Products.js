import { NavLink } from "react-router-dom"
import Currency from "./Currency"



const Products = ({data}) => {

  return (
    
      <div className="card">
      <NavLink to={`/singleProduct/${data.id}`}>
      <span className="category">{data.category}</span>
      <img src={data.image} alt="" />
      <div className="card__showcase">
        <div className="name">{data.name}</div>
        <Currency price={data.price}/>
      </div>
      </NavLink>
    </div>
    
  )
}

export default Products
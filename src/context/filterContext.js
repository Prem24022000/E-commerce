import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductProvider } from "./ProductContext";
import reducer from "../reducer/FilterReducer";




const FilterContext = createContext()


const initialState = {
    allProducts: [],
    filterProducts: [],
    sorting_value: 'lowest',
    filters: {
        text: '',
        category: 'All',
        company: 'All'
    }
}

const FilterContextProvider = ({children}) => {

    const {products} = useProductProvider()

    const [state, dispatch] = useReducer(reducer, initialState)


    const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
    };

    const updateFilterValue = (e) => {

        const name = e.target.name

        const value = e.target.value

        dispatch({type: 'UPDATE_FILTER_VALUE', payload:{name, value}})
    }

    useEffect(() => {
        dispatch({type: 'FILTER_PRODUCTS'})
        dispatch({type: 'SORTING_PRODUCTS'})
    }, [products,state.sorting_value,state.filters])


    useEffect(() => {
        dispatch({type: 'GET_PRODUCTS', payload: products})
    }, [products])



    return (
        <FilterContext.Provider value={{...state, sorting, updateFilterValue}}>{children}</FilterContext.Provider>
    )

}

const useFilterProducts = () => {
    return useContext(FilterContext)
}


export {FilterContext, FilterContextProvider, useFilterProducts}
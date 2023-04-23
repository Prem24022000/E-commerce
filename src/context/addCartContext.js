import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/AddCartReducer";

const AddToCartContext = createContext()

const initialState={
    cart: [],
    totalItem: '',
    totalAmount: "",
    shippingFee: 20000
}

const AddToCartProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)


    const AddToCart = (amount, product) => {
        dispatch({type: 'ADD_TO_CART', payload: {amount, product}})
    }

    const setIncrement = (id) => {
        dispatch({type: 'INCREMENT', payload: id})
    }

    const setDecrement = (id) => {
        dispatch({type: 'DECREMENT', payload: id})
    }

    const removeItem = (id) => {
        dispatch({type: 'REMOVE_ITEM', payload: id})
    }

    const ClearCart = () => {
        dispatch({type: 'CLEAR_CART'})
    }


    useEffect(() => {
        dispatch({type: 'CART_TOTAL_ITEM'})
        dispatch({type: 'CART_TOTAL_PRICE'})
    }, [state.cart])

    return (<AddToCartContext.Provider value={{...state, AddToCart, removeItem, ClearCart, setIncrement, setDecrement}}>{children}</AddToCartContext.Provider>)
}


const useAddToCartContext = () => {
    return(
        useContext(AddToCartContext)
    )
}

export {AddToCartContext, AddToCartProvider, useAddToCartContext}
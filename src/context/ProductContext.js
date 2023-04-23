import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react"
import reducer from "../reducer/ProductReducer";


const API = "https://api.pujakaitem.com/api/products";

const AppContext = createContext()

const initialstate = {
    isLoading: false,
    isError: false,
    isSingleLoading: false,
    singleProduct: {},
    products: [],
    featureProducts: []
}

const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialstate);

    const getProductData = async(API) => {

        dispatch({type: 'API_LOADING'})

        try {
            const response = await axios(API);

            const responseData = await response.data

            dispatch({type: 'GET_API', payload: responseData})
        } catch (error) {
            dispatch({type: 'API_ERROR'})
        }

        
    }

    const getSingleProduct = async(API) => {
        dispatch({type: 'SINGLE_API_LOADING'})

        try {
            const response = await axios(API);

            const responseData = await response.data

            dispatch({type: 'GET_SINGLE_API', payload: responseData})
        } catch (error) {
            dispatch({type: 'SINGLE_API_ERROR'})
        }
    }

    useEffect(() => {
        getProductData(API)
    }, [])


    

    return (
        <AppContext.Provider value={{...state, getSingleProduct }}>
            {children}
        </AppContext.Provider>
    )
}

const useProductProvider = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider, useProductProvider}
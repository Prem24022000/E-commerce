const ProductReducer = (state, action) => {
    switch (action.type) {
        case "API_LOADING":
            return {
                ...state,
                isLoading: true
            }

        case "GET_API":

            const filterData = action.payload.filter((data) => {
                return data.featured === true
            })

            return{
                ...state,
                isLoading: false,
                products: action.payload,
                featureProducts: filterData
            }

        case "API_ERROR": 
            return{
                ...state,
                isLoading: false,
                isError: true
            }
        
        case "SINGLE_API_LOADING":
        return {
            ...state,
            isSingleLoading: true
        }

        case "GET_SINGLE_API":
        return {
            ...state,
            isSingleLoading: false,
            singleProduct: action.payload
        }


        case "SINGLE_API_ERROR":
        return {
            ...state,
            isSingleLoading: false,
            isError: true
        }

        default:
            return state
    }
}

export default ProductReducer
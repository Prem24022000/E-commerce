const FilterReducer = (state, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return{
                ...state,
                allProducts: [...action.payload],
                filterProducts: [...action.payload]
            }

        case "GET_SORT_VALUE":
            
            return {
                ...state,
                sorting_value: action.payload,
            };

        case "SORTING_PRODUCTS":
            let newSortData;
            const { filterProducts } = state;
            let temSortProduct = [...filterProducts]

            if(state.sorting_value === 'lowest'){
                const sortingProducts = (a,b) => {
                    return a.price - b.price
                }

                newSortData = temSortProduct.sort(sortingProducts)
            }

            if(state.sorting_value === 'highest'){
                const sortingProducts = (a,b) => {
                    return b.price - a.price
                }

                newSortData = temSortProduct.sort(sortingProducts)
            }

            if(state.sorting_value === 'a-z'){
                newSortData = temSortProduct.sort((a,b) => {
                    return a.name.localeCompare(b.name)
                })
            }

            if(state.sorting_value === 'z-a'){
                newSortData = temSortProduct.sort((a,b) => {
                    return b.name.localeCompare(a.name)
                })
            }

            return {
                ...state,
                filterProducts: newSortData
            }

        case "UPDATE_FILTER_VALUE":
            const {name, value} = action.payload



            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value
                }
            }

        case "FILTER_PRODUCTS":

            

            let {allProducts} = state

            let tempFilterProduct = [...allProducts];


            let {text, category, company} = state.filters


            if(text){
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.name.toLowerCase().includes(text.toLowerCase());
                });

            }


            if (category !== "All") {
                tempFilterProduct = tempFilterProduct.filter(
                  (curElem) => curElem.category === category
                );
            }
        
            if (company !== "All") {
                tempFilterProduct = tempFilterProduct.filter(
                    (curElem) => curElem.company.toLowerCase() === company.toLowerCase()
                );
            }


            return{
                ...state,
                filterProducts: tempFilterProduct
            }


        default:
            return state;
    }
}

export default FilterReducer
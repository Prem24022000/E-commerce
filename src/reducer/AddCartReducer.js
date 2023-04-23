const AddCartReducer = (state, action) => {
  if (action.type === 'ADD_TO_CART') {
    let { amount, product } = action.payload;

    let existingProduct = state.cart.find(curItem => curItem.id === product.id)



    if(existingProduct){
        let updateProduct = state.cart.map(currItem => {
            if(currItem.id === product.id){
                let newAmount = currItem.amount+amount

                if(newAmount >= currItem.max){
                    newAmount = currItem.max
                }

                return {
                    ...currItem,
                    amount: newAmount
                }
            }else{
                return currItem
            }
        })

        return {
            ...state,
            cart: updateProduct
        }
    }else{
        let cartProduct = {
            id: product.id,
            name: product.name,
            amount,
            image: product.image[0].url,
            price: product.price,
            max: product.stock,
        };

    
        return {
            ...state,
            cart: [...state.cart, cartProduct],
        };
    }
    
    
  }

  if (action.type === 'REMOVE_ITEM') {
    let updatedCart = state.cart.filter((data) => {
      return data.id !== action.payload;
    });

    return {
      ...state,
      cart: updatedCart,
    };
  }
  
  if(action.type === 'CLEAR_CART'){
    return{
        ...state,
        cart: []
    }
  }

  if(action.type === 'INCREMENT'){
    let updateProduct = state.cart.map(data => {
        if(data.id === action.payload){
            let inAmount = data.amount + 1;

            if(inAmount >= data.max){
                inAmount = data.max
            }

            return {
                ...data,
                amount: inAmount
            }
        }else{
            return {...data}
        }
    }) 

    return {
        ...state, cart: updateProduct
    }
  }

  if(action.type === 'DECREMENT'){
    let updateProduct = state.cart.map(data => {
        if(data.id === action.payload){
            let inAmount = data.amount - 1;

            if(inAmount < 1){
                inAmount = 1
            }

            return {
                ...data,
                amount: inAmount
            }
        }else{
            return {...data}
        }
    }) 

    return {
        ...state, cart: updateProduct
    }
  }

  if(action.type === 'CART_TOTAL_ITEM'){
    let updatedItem = state.cart.reduce((initial, curr) => {
        let {amount} = curr

        initial = initial + amount

        return initial
    }, 0)

    return {
        ...state,
        totalItem: updatedItem
    }

  }

  if(action.type === 'CART_TOTAL_PRICE'){
    let totalPrice = state.cart.reduce((initial, cur)=> {
        let {price, amount} = cur
        initial = initial + (price * amount)

        return initial
    },0)

    return{
        ...state,
        totalAmount: totalPrice
    }
  }
};

export default AddCartReducer;

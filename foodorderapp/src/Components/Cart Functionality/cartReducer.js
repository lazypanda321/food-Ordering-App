import { addToCart } from "./addToCart";
import { ADD_TO_CART } from "./addToCart";

const initialState = {
    cartItems : []
}

const cartReducer = (state= initialState,action) => {
    switch (action.type) {
        case ADD_TO_CART :
            return {
               cartItems: [...state.cartItems,action.payload]
            }
        default : return state
    }
}

export default cartReducer